import { useCallback, useEffect, useRef, useState } from "react";

interface StrictStepHoldOptions {
  throttleMs?: number; // Minimum cooldown after triggering a step (default 650ms)
  onStepChange?: (step: number) => void;
}

/**
 * useStrictStepHold
 *
 * Designed specifically for tall sticky-scrolling sections (e.g. h-[650vh], h-[400vh]).
 *
 * 1. Firmly holds the user pinned in the sticky section.
 * 2. Intercepts fast, big, or long scroll gestures (trackpad flicks, mouse wheel bursts, touch swipes)
 *    and strictly advances by only ONE step per distinct gesture.
 * 3. Absorbs all trackpad inertia/momentum so 2-3 animations can never pass away in a single flick.
 * 4. Automatically synchronizes window.scrollTo to the exact step position.
 * 5. Smoothly releases the user to scroll to the next section after the final step has been reached,
 *    and to the previous section when scrolling up from step 0.
 */
export function useStrictStepHold(
  totalSteps: number,
  containerRef: React.RefObject<HTMLElement | null>,
  options: StrictStepHoldOptions = {}
) {
  const { throttleMs = 650, onStepChange } = options;
  const [activeStep, setActiveStep] = useState(0);

  const stepRef = useRef(0);
  const totalRef = useRef(totalSteps);
  totalRef.current = totalSteps;

  const isLockedRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Compute the target window.scrollY for each step within the tall section
  const getStepScrollY = useCallback(
    (stepIndex: number) => {
      const el = containerRef.current;
      if (!el) return window.scrollY;

      const rect = el.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const sectionTop = currentScrollY + rect.top;
      const totalScrollable = el.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return sectionTop;

      // Distribute steps evenly inside the sticky range
      // For 5 steps: step 0 -> 0%, step 1 -> 22%, step 2 -> 44%, step 3 -> 66%, step 4 -> 88%
      const fraction = stepIndex / (totalRef.current - 0.5);
      const clampedFraction = Math.min(0.92, Math.max(0, fraction));
      return sectionTop + totalScrollable * clampedFraction;
    },
    [containerRef]
  );

  // Section is actively pinned when its top is at/above top of viewport and bottom is still below viewport
  const isSectionPinned = useCallback(() => {
    const el = containerRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    // Pinned when top has scrolled to viewport top and bottom has not yet scrolled out
    return rect.top <= 10 && rect.bottom >= window.innerHeight - 10;
  }, [containerRef]);

  const advanceStep = useCallback(
    (dir: 1 | -1): boolean => {
      const current = stepRef.current;
      const total = totalRef.current;

      // If currently locked, absorb momentum from the same gesture
      if (isLockedRef.current) {
        return true;
      }

      // At the boundary, release hold to let user scroll naturally to adjacent sections
      if (dir === 1 && current >= total - 1) {
        return false; // Release downward scroll
      }

      if (dir === -1 && current <= 0) {
        return false; // Release upward scroll
      }

      // Valid step advance
      const next = Math.max(0, Math.min(total - 1, current + dir));
      stepRef.current = next;
      setActiveStep(next);
      onStepChange?.(next);

      // Lock momentum
      isLockedRef.current = true;

      // Smoothly sync the window scroll position to the step checkpoint
      const targetY = getStepScrollY(next);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }

      unlockTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, throttleMs);

      return true; // consumed
    },
    [getStepScrollY, throttleMs, onStepChange]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionPinned()) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      // If locked, absorb momentum completely
      if (isLockedRef.current) {
        e.preventDefault();
        // Require at least 220ms of quiet after the last inertia tick before unlocking
        if (unlockTimerRef.current) {
          window.clearTimeout(unlockTimerRef.current);
        }
        unlockTimerRef.current = window.setTimeout(() => {
          isLockedRef.current = false;
        }, 220);
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
      const deltaY = touchStartY.current - currentY; // positive = swipe up = scroll down

      if (Math.abs(deltaY) < 25) return;

      if (isLockedRef.current) {
        e.preventDefault();
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
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, [advanceStep, isSectionPinned]);

  // Direct step setter (for clicking tabs / dots)
  const setStep = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(totalRef.current - 1, idx));
      stepRef.current = clamped;
      setActiveStep(clamped);
      onStepChange?.(clamped);

      isLockedRef.current = true;
      const targetY = getStepScrollY(clamped);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
      unlockTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, throttleMs);
    },
    [getStepScrollY, throttleMs, onStepChange]
  );

  return { activeStep, setStep };
}
