import { useCallback, useEffect, useRef, useState } from "react";

interface HoldAnimationOptions {
  throttleMs?: number; // Minimum transition duration (default: 650ms)
  quietMs?: number;    // Quiet period of silence required after wheel inertia ends (default: 180ms)
  onStepChange?: (step: number) => void;
  nextSectionId?: string; // ID of next section to scroll to upon completing the final step
  prevSectionId?: string; // ID of previous section to scroll to upon scrolling up from step 0
}

/**
 * useHoldAnimationScroll
 *
 * Dedicated hook for sections where we hold the user for a multi-step scroll animation.
 * Enforces that ONE scroll gesture (wheel, trackpad flick, touch swipe, or arrow key)
 * advances strictly ONE animation step at a time, absorbing trackpad momentum bursts
 * so fast or long scrolls cannot skip 2-3 animations.
 */
export function useHoldAnimationScroll(
  totalSteps: number,
  containerRef: React.RefObject<HTMLElement | null>,
  options: HoldAnimationOptions = {}
) {
  const {
    throttleMs = 650,
    quietMs = 180,
    onStepChange,
    nextSectionId,
    prevSectionId,
  } = options;

  const [activeStep, setActiveStep] = useState(0);

  const stepRef = useRef(0);
  const totalRef = useRef(totalSteps);
  totalRef.current = totalSteps;

  const isLockedRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);
  const quietTimerRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isTransitioningRef = useRef(false);

  // Compute the target window.scrollY position for each step within the tall section
  const getStepScrollY = useCallback(
    (stepIdx: number) => {
      const el = containerRef.current;
      if (!el) return window.scrollY;

      const rect = el.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const sectionTop = currentScrollY + rect.top;
      const totalScrollable = el.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return sectionTop;

      // Distribute steps evenly inside the sticky hold range
      const fraction = stepIdx / (totalRef.current - 0.5);
      const clampedFraction = Math.min(0.90, Math.max(0, fraction));
      return sectionTop + totalScrollable * clampedFraction;
    },
    [containerRef]
  );

  // Check if section is currently pinned / holding the viewport
  const isSectionPinned = useCallback(() => {
    const el = containerRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    // Pinned when section top is at/above top of viewport and section bottom is still below bottom of viewport
    return rect.top <= 10 && rect.bottom >= window.innerHeight - 10;
  }, [containerRef]);

  // Lock manager: absorbs inertia momentum until quietMs of silence
  const extendLock = useCallback(() => {
    isLockedRef.current = true;

    if (quietTimerRef.current) {
      window.clearTimeout(quietTimerRef.current);
    }
    quietTimerRef.current = window.setTimeout(() => {
      if (!isTransitioningRef.current) {
        isLockedRef.current = false;
      }
    }, quietMs);
  }, [quietMs]);

  const advanceStep = useCallback(
    (dir: 1 | -1): boolean => {
      const current = stepRef.current;
      const total = totalRef.current;

      // If already locked during a gesture, absorb all momentum from this flick
      if (isLockedRef.current) {
        extendLock();
        return true; // consumed
      }

      // Check boundary exit conditions:
      if (dir === 1 && current >= total - 1) {
        // User has seen all steps and is scrolling down again
        if (nextSectionId) {
          const nextEl = document.getElementById(nextSectionId);
          if (nextEl) {
            nextEl.scrollIntoView({ behavior: "smooth" });
            return true;
          }
        }
        return false; // let native scroll continue down
      }

      if (dir === -1 && current <= 0) {
        // User is at step 0 and scrolling up
        if (prevSectionId) {
          const prevEl = document.getElementById(prevSectionId);
          if (prevEl) {
            prevEl.scrollIntoView({ behavior: "smooth" });
            return true;
          }
        }
        return false; // let native scroll continue up
      }

      // Valid single step advance
      const next = Math.max(0, Math.min(total - 1, current + dir));
      stepRef.current = next;
      setActiveStep(next);
      onStepChange?.(next);

      // Lock gesture & transition
      isLockedRef.current = true;
      isTransitioningRef.current = true;

      // Sync window.scrollTo smoothly to the step target
      const targetY = getStepScrollY(next);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      // Minimum animation time lock
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
      unlockTimerRef.current = window.setTimeout(() => {
        isTransitioningRef.current = false;
        extendLock();
      }, throttleMs);

      extendLock();
      return true; // consumed
    },
    [getStepScrollY, throttleMs, extendLock, nextSectionId, prevSectionId, onStepChange]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionPinned()) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      // If locked, absorb momentum completely
      if (isLockedRef.current) {
        e.preventDefault();
        extendLock();
        return;
      }

      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      const consumed = advanceStep(dir);
      if (consumed) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSectionPinned() || touchStartY.current === null) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY; // positive = scroll down

      if (Math.abs(deltaY) < 25) return;

      if (isLockedRef.current) {
        e.preventDefault();
        extendLock();
        return;
      }

      const dir: 1 | -1 = deltaY > 0 ? 1 : -1;
      const consumed = advanceStep(dir);
      if (consumed) {
        e.preventDefault();
      }
      touchStartY.current = currentY;
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSectionPinned()) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        const consumed = advanceStep(1);
        if (consumed) e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        const consumed = advanceStep(-1);
        if (consumed) e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
      if (quietTimerRef.current) window.clearTimeout(quietTimerRef.current);
    };
  }, [advanceStep, isSectionPinned, extendLock]);

  const setStep = useCallback(
    (step: number) => {
      const clamped = Math.max(0, Math.min(totalRef.current - 1, step));
      stepRef.current = clamped;
      setActiveStep(clamped);
      onStepChange?.(clamped);

      isLockedRef.current = true;
      isTransitioningRef.current = true;

      const targetY = getStepScrollY(clamped);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = window.setTimeout(() => {
        isTransitioningRef.current = false;
        isLockedRef.current = false;
      }, throttleMs);
    },
    [getStepScrollY, throttleMs, onStepChange]
  );

  return { activeStep, setStep };
}
