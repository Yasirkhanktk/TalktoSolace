import { useCallback, useEffect, useRef, useState } from "react";

interface StepScrollOptions {
  throttleMs?: number; // Minimum transition duration (default 650ms)
  onStepChange?: (step: number) => void;
}

/**
 * useDiscreteStepScroll
 *
 * Restricts multi-step pinned sections to advance strictly ONE step per discrete
 * scroll gesture (trackpad swipe, mouse wheel tick, touch swipe, or arrow keys).
 * Absorbs the momentum/inertia burst of fast flick scrolls so 2-3 animations
 * can never be skipped accidentally.
 *
 * Releases to the next section when scrolling down past the final step,
 * and releases to the previous section when scrolling up past step 0.
 */
export function useDiscreteStepScroll(
  totalSteps: number,
  sectionRef: React.RefObject<HTMLElement | null>,
  options: StepScrollOptions = {}
) {
  const { throttleMs = 650, onStepChange } = options;
  const [activeStep, setActiveStep] = useState(0);

  const stepRef = useRef(0);
  const totalRef = useRef(totalSteps);
  totalRef.current = totalSteps;

  // Lock to absorb trackpad momentum / inertia bursts
  const isLockedRef = useRef(false);
  const inertiaTimerRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Helper to check if section currently commands the viewport
  const isSectionActive = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // Active if the section is occupying the screen view
    return rect.top <= 80 && rect.bottom >= vh - 80;
  }, [sectionRef]);

  const advanceStep = useCallback(
    (dir: 1 | -1): boolean => {
      const current = stepRef.current;
      const total = totalRef.current;

      // If already locked from a recent gesture, absorb all subsequent events
      if (isLockedRef.current) {
        return true; // consumed
      }

      // Check boundary release conditions:
      if (dir === 1 && current >= total - 1) {
        // At the last step, scrolling down releases to the next section
        const el = sectionRef.current;
        if (el && el.nextElementSibling) {
          (el.nextElementSibling as HTMLElement).scrollIntoView({ behavior: "smooth" });
        }
        return false; // let native / smooth scroll take over
      }

      if (dir === -1 && current <= 0) {
        // At step 0, scrolling up releases to the previous section
        const el = sectionRef.current;
        if (el && el.previousElementSibling) {
          (el.previousElementSibling as HTMLElement).scrollIntoView({ behavior: "smooth" });
        }
        return false;
      }

      // Valid step advance!
      const next = current + dir;
      stepRef.current = next;
      setActiveStep(next);
      onStepChange?.(next);

      // Lock to absorb any trackpad momentum tail
      isLockedRef.current = true;

      // Clear any existing inertia timer
      if (inertiaTimerRef.current) {
        window.clearTimeout(inertiaTimerRef.current);
      }

      // Keep lock active for at least throttleMs
      inertiaTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, throttleMs);

      return true; // consumed
    },
    [sectionRef, throttleMs, onStepChange]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionActive()) return;

      // Ignore horizontal or micro jitters
      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      // If locked, absorb momentum event completely
      if (isLockedRef.current) {
        e.preventDefault();
        // Extend debounce slightly while trackpad inertia is still actively firing
        if (inertiaTimerRef.current) {
          window.clearTimeout(inertiaTimerRef.current);
        }
        inertiaTimerRef.current = window.setTimeout(() => {
          isLockedRef.current = false;
        }, 220); // 220ms of silence required after last inertia tick
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
      if (!isSectionActive() || touchStartY.current === null) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY; // positive = swipe up = scroll down

      if (Math.abs(deltaY) < 25) return; // gesture threshold

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
      if (!isSectionActive()) return;

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
      if (inertiaTimerRef.current) {
        window.clearTimeout(inertiaTimerRef.current);
      }
    };
  }, [advanceStep, isSectionActive]);

  const setStep = useCallback(
    (step: number) => {
      const clamped = Math.max(0, Math.min(totalRef.current - 1, step));
      stepRef.current = clamped;
      setActiveStep(clamped);
      onStepChange?.(clamped);
    },
    [onStepChange]
  );

  return { activeStep, setStep };
}
