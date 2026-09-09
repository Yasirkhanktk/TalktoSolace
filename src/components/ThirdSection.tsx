<<<<<<< HEAD
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
=======
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useHoldAnimationScroll } from "../hooks/useHoldAnimationScroll";
>>>>>>> 08a34b21d12c8af0467ea29194a5b1e16dbe70d2
import imgHome from "../imports/Hero/c5350ce48a92f7054918aeb788bf135d4754965c.png";
import imgTalkItOut from "../imports/3NdSection/30e513f7515e0de820633689d8febfe6dea7e482.png";
import imgWellness from "../imports/MeetSolace-1/efecd8b2ced1ea351533f05753cd6733910d8c0f.png";
import imgNature from "../imports/3NdSection/452655ecec9eeba9e3ade8328b7d7d1b0083fa45.png";
import imgRest from "../imports/Hero/1fabb6006b2b2026a2aa6f647b1aff16b1c50164.png";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

type TabItem = {
  text: string;
  tag: string;
};

type Feature = {
  key: string;
  num: string;
  label: string;
  shortLabel: string;
  screen: string;
  leftUp: TabItem[];
  leftDown: TabItem[];
  rightUp: TabItem[];
  rightDown: TabItem[];
};

const FEATURES: Feature[] = [
  {
    key: "journal",
    num: "01",
    label: "Journal & Mood",
    shortLabel: "Journal",
    screen: imgHome,
    leftUp: [
      { text: "Capture your thoughts", tag: "AI Transcribe" },
      { text: "Track your moods", tag: "Daily Trend" },
    ],
    leftDown: [
      { text: "Voice-to-text notes", tag: "Instant Sync" },
      { text: "Emotional patterns", tag: "Deep Clarity" },
    ],
    rightUp: [
      { text: "Guided daily prompts", tag: "Reflective" },
      { text: "Private & encrypted", tag: "100% Safe" },
    ],
    rightDown: [
      { text: "Weekly reflections", tag: "Highlights" },
      { text: "Milestone badges", tag: "Celebration" },
    ],
  },
  {
    key: "talk",
    num: "02",
    label: "Talk It Out",
    shortLabel: "Talk",
    screen: imgTalkItOut,
    leftUp: [
      { text: "Talk freely, anytime", tag: "24/7 Live" },
      { text: "Judgement-free space", tag: "Gentle Tone" },
    ],
    leftDown: [
      { text: "Adaptive AI empathy", tag: "Context-Aware" },
      { text: "Real-time voice sync", tag: "Zero Delay" },
    ],
    rightUp: [
      { text: "Voice or video mode", tag: "Flexible" },
      { text: "Deep reflection", tag: "Insightful" },
    ],
    rightDown: [
      { text: "Personalized pacing", tag: "Your Speed" },
      { text: "Instant reassurance", tag: "Warm Support" },
    ],
  },
  {
    key: "wellness",
    num: "03",
    label: "Wellness Tools",
    shortLabel: "Wellness",
    screen: imgWellness,
    leftUp: [
      { text: "Breathing exercises", tag: "Box & 4-7-8" },
      { text: "Daily check-ins", tag: "Quick Mood" },
    ],
    leftDown: [
      { text: "Grounding drills", tag: "5-4-3-2-1" },
      { text: "Mindful pauses", tag: "Micro Break" },
    ],
    rightUp: [
      { text: "Calm soundscapes", tag: "Rain & Waves" },
      { text: "Build gentle habits", tag: "Daily Streak" },
    ],
    rightDown: [
      { text: "Stress relief drills", tag: "Tension Drop" },
      { text: "Energy reset", tag: "Body Scan" },
    ],
  },
  {
    key: "insights",
    num: "04",
    label: "Insights & Growth",
    shortLabel: "Insights",
    screen: imgNature,
    leftUp: [
      { text: "Pattern discovery", tag: "AI Summary" },
      { text: "Weekly summaries", tag: "Digest" },
    ],
    leftDown: [
      { text: "Trigger awareness", tag: "Early Warning" },
      { text: "Progress milestones", tag: "Growth Path" },
    ],
    rightUp: [
      { text: "Mood correlation", tag: "Sleep & Focus" },
      { text: "Adaptive suggestions", tag: "Tailored" },
    ],
    rightDown: [
      { text: "Goal tracking", tag: "Small Steps" },
      { text: "Mindset shifts", tag: "Long-term" },
    ],
  },
  {
    key: "rest",
    num: "05",
    label: "Rest & Habits",
    shortLabel: "Rest",
    screen: imgRest,
    leftUp: [
      { text: "Late-night check-in", tag: "Bedtime Companion" },
      { text: "Gentle reflections", tag: "Wind Down" },
    ],
    leftDown: [
      { text: "Sleep soundscapes", tag: "Deep Rest" },
      { text: "Decompression drills", tag: "Quiet Mind" },
    ],
    rightUp: [
      { text: "Morning affirmations", tag: "Fresh Start" },
      { text: "Gratitude prompts", tag: "Perspective" },
    ],
    rightDown: [
      { text: "Evening journaling", tag: "Release Thoughts" },
      { text: "Consistent routine", tag: "Restful Night" },
    ],
  },
];

// Coordinates of the 5 points along the 180° semi-circular / D-shaped dome arc:
// Angles: 180°, 135°, 90°, 45°, 0°
const ARC_POINTS = [
  { xPercent: 8, yPercent: 78, angle: 180, rotAngle: 180 },
  { xPercent: 24, yPercent: 28, angle: 135, rotAngle: 225 },
  { xPercent: 50, yPercent: 8, angle: 90, rotAngle: 270 },
  { xPercent: 76, yPercent: 28, angle: 45, rotAngle: 315 },
  { xPercent: 92, yPercent: 78, angle: 0, rotAngle: 360 },
];

function TiltedTabCard({
  item,
  tilt,
  side,
  index,
}: {
  item: TabItem;
  tilt: number;
  side: "left" | "right";
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative select-none"
      animate={
        reduce
          ? undefined
          : {
              y: [0, index % 2 === 0 ? -4 : 4, 0],
            }
      }
      transition={{
        duration: 3.2 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
      whileHover={{
        rotate: 0,
        scale: 1.04,
        transition: { type: "spring", stiffness: 350, damping: 18 },
      }}
    >
      <div className="relative flex w-[265px] flex-col gap-1.5 overflow-hidden rounded-[20px] border border-white/90 bg-white/90 p-3.5 px-4 shadow-[0_6px_22px_rgba(0,0,0,0.06)] backdrop-blur-[14px] transition-all duration-300 hover:border-[#e91e63]/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(233,30,99,0.18)]">
        {/* Glow Accent Bar */}
        <div
          className={`absolute ${
            side === "left" ? "left-0" : "right-0"
          } top-0 h-full w-[3.5px] opacity-80 transition-opacity group-hover:opacity-100`}
          style={{ background: GRAD }}
        />

        {/* Top Tag & Indicator */}
        <div className="flex items-center justify-between">
          <span
            className="rounded-full bg-gradient-to-r from-[#e91e63]/10 to-[#9c27b0]/10 px-2.5 py-[2px] text-[10px] font-bold uppercase tracking-wider text-[#d81b60]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.tag}
          </span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e91e63]/25 bg-gradient-to-br from-[#e91e63]/10 to-[#9c27b0]/10 shadow-[0_0_8px_rgba(233,30,99,0.2)]">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: GRAD }} />
          </div>
        </div>

        {/* Title */}
        <span
          className="text-[13.5px] font-semibold text-[#1e1e1e] transition-colors group-hover:text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item.text}
        </span>
      </div>
    </motion.div>
  );
}

export default function ThirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

<<<<<<< HEAD
  const [activeIdx, setActiveIdx] = useState(0);
  const currentStepRef = useRef(0);
  const isLockedRef = useRef(false);
  const quietTimerRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const getTargetScrollY = useCallback((step: number) => {
    const el = sectionRef.current;
    if (!el) return window.scrollY;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollable = el.offsetHeight - window.innerHeight;
    return sectionTop + (step / 4) * totalScrollable;
  }, []);

  const handleSelectStep = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(4, idx));
      currentStepRef.current = clamped;
      setActiveIdx(clamped);
      isLockedRef.current = true;
      const targetY = getTargetScrollY(clamped);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
      quietTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, 650);
    },
    [getTargetScrollY]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Keep activeIdx in sync if user manually drags browser scrollbar
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (isLockedRef.current) return;
      let nextIdx = 0;
      if (latest >= 0.82) nextIdx = 4;
      else if (latest >= 0.62) nextIdx = 3;
      else if (latest >= 0.42) nextIdx = 2;
      else if (latest >= 0.20) nextIdx = 1;
      else nextIdx = 0;

      if (currentStepRef.current !== nextIdx) {
        currentStepRef.current = nextIdx;
        setActiveIdx(nextIdx);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const isPinned = rect.top <= 2 && rect.bottom >= window.innerHeight - 2;

      // Only intercept while viewport is pinned within Section 3
      if (!isPinned) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      const dir = delta > 0 ? 1 : -1;
      const current = currentStepRef.current;

      // When at Model 5 (Rest) and scrolling down, release hold to scroll naturally to Section 4
      if (dir === 1 && current >= 4) {
        return;
      }

      // When at Model 1 (Journal) and scrolling up, release hold to scroll naturally to Section 2
      if (dir === -1 && current <= 0) {
        return;
      }

      // Inside the hold: intercept event so native scroll momentum cannot skip models
      e.preventDefault();

      // If currently locked, absorb all momentum from this flick
      if (isLockedRef.current) {
        if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
        quietTimerRef.current = window.setTimeout(() => {
          isLockedRef.current = false;
        }, 180);
        return;
      }

      // Advance strictly ONE model
      const next = Math.max(0, Math.min(4, current + dir));
      currentStepRef.current = next;
      setActiveIdx(next);
      isLockedRef.current = true;

      const targetY = getTargetScrollY(next);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
      quietTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, 650);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const el = sectionRef.current;
      if (!el || touchStartY.current === null) return;

      const rect = el.getBoundingClientRect();
      const isPinned = rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
      if (!isPinned) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (Math.abs(deltaY) < 25) return;

      const dir = deltaY > 0 ? 1 : -1;
      const current = currentStepRef.current;

      if (dir === 1 && current >= 4) return;
      if (dir === -1 && current <= 0) return;

      e.preventDefault();

      if (isLockedRef.current) return;

      const next = Math.max(0, Math.min(4, current + dir));
      currentStepRef.current = next;
      setActiveIdx(next);
      isLockedRef.current = true;

      const targetY = getTargetScrollY(next);
      window.scrollTo({ top: targetY, behavior: "smooth" });

      touchStartY.current = currentY;
      if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
      quietTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false;
      }, 650);
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const isPinned = rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
      if (!isPinned) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentStepRef.current < 4) {
          e.preventDefault();
          handleSelectStep(currentStepRef.current + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentStepRef.current > 0) {
          e.preventDefault();
          handleSelectStep(currentStepRef.current - 1);
        }
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
      if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
    };
  }, [getTargetScrollY, handleSelectStep]);
=======
  const { activeStep: activeIdx, setStep: setActiveIdx } = useHoldAnimationScroll(
    5,
    sectionRef,
    {
      throttleMs: 650,
      quietMs: 180,
      nextSectionId: "moments-section",
      prevSectionId: "second-section",
    }
  );
>>>>>>> 08a34b21d12c8af0467ea29194a5b1e16dbe70d2

  return (
    <section ref={sectionRef} id="features-section" className="relative h-[650vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-6">
        {/* Background Solace Emblem */}
        <div className="pointer-events-none absolute left-[3%] top-[10%] z-0 hidden opacity-60 xl:block">
          <SolaceEmblem size={130} tilt={-14} />
        </div>

        {/* Section Header */}
        <span
          className="rounded-[12px] border border-[#e91e63] px-4 py-[5px] text-[11px] font-semibold uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
          }}
        >
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
            Features
          </span>
        </span>
        <h2
          className="mt-2 text-center text-[clamp(26px,3.2vw,42px)] leading-[1.05] tracking-[-1px] text-black"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Highlighted
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
            Features
          </span>
        </h2>
        <div className="mt-1.5 h-[4px] w-[52px] rounded-full" style={{ background: GRAD }} />

        {/* ───── D-Shaped 180-Degree Arc Controller with 5 Milestone Points (increased space) ───── */}
        <div className="relative mt-12 h-[145px] w-[min(680px,96vw)]">
          {/* Central Glowing Sphere & Pointer Ring */}
          <div className="absolute left-1/2 bottom-2 -translate-x-1/2">
            {/* Halo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
              style={{ background: "radial-gradient(circle, rgba(233,30,99,0.35), rgba(156,39,176,0) 70%)" }}
              animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating Pointer Arrow Indicator */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: reduce ? 0 : ARC_POINTS[activeIdx].rotAngle }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 65, damping: 14 }}
            >
              <svg className="absolute right-0 top-1/2 h-[45px] w-[22px] -translate-y-1/2" viewBox="0 0 22 45" fill="none">
                <path d="M3 5 Q18 22.5 3 40" stroke="url(#arcStrokeGrad2)" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 22.5 L9 16 M18 22.5 L9 29" stroke="url(#arcStrokeGrad2)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="arcStrokeGrad2" x1="0" y1="0" x2="22" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e91e63" />
                    <stop offset="1" stopColor="#9c27b0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Glass Orb Core */}
            <motion.div
              className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(233,30,99,0.25)]"
              style={{
                background:
                  "radial-gradient(circle at 36% 28%, #ffffff 0%, #fce4ec 25%, #f48fb1 55%, #ad1457 100%)",
                boxShadow:
                  "inset -6px -8px 14px rgba(74,20,140,0.4), inset 5px 6px 12px rgba(255,255,255,0.7), 0 12px 28px rgba(233,30,99,0.3)",
              }}
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[11px] font-bold text-white tracking-wider">
                {FEATURES[activeIdx].num}
              </span>
            </motion.div>
          </div>

          {/* 5 Milestone Points along the 180° Arc */}
          {FEATURES.map((feat, i) => {
            const pt = ARC_POINTS[i];
            const isActive = activeIdx === i;
            return (
              <button
                key={feat.key}
                type="button"
                onClick={() => handleSelectStep(i)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 focus:outline-none"
                style={{
                  left: `${pt.xPercent}%`,
                  top: `${pt.yPercent}%`,
                }}
              >
                <div
                  className={`flex flex-col items-center transition-transform duration-300 ${
                    isActive ? "scale-110" : "scale-95 opacity-70 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                >
                  {/* Pin Orb */}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                      isActive
                        ? "border-[#e91e63] bg-white shadow-[0_0_16px_rgba(233,30,99,0.5)]"
                        : "border-slate-300 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold ${
                        isActive ? "bg-clip-text text-transparent" : "text-[#666]"
                      }`}
                      style={isActive ? { backgroundImage: GRAD } : undefined}
                    >
                      {feat.num}
                    </span>
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-1 whitespace-nowrap text-[12px] font-semibold transition-all ${
                      isActive
                        ? "bg-clip-text text-transparent"
                        : "text-[#777] group-hover:text-black"
                    }`}
                    style={
                      isActive
                        ? { fontFamily: "'Montserrat', sans-serif", backgroundImage: GRAD }
                        : { fontFamily: "'Montserrat', sans-serif" }
                    }
                  >
                    {feat.shortLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ───── Stage: Paired Tilted Tabs & Central Screen ───── */}
        <div className="relative mt-2 flex w-full max-w-[1380px] h-[480px] items-center justify-between px-2">
          {/* Left Column: 2 Pairs (2 Left-Up, 2 Left-Down) */}
          <div className="relative z-20 w-[300px] h-[440px] shrink-0">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              return (
                <div
                  key={`${feat.key}-left-col`}
                  className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none"
                >
                  {/* Pair 1 (Left Up: 2 Tabs) */}
                  <div className="flex flex-col gap-3.5">
                    {feat.leftUp.map((item, i) => {
                      const tilt = i === 0 ? -3.5 : 2;
                      return (
                        <motion.div
                          key={`${feat.key}-lu-${i}`}
                          initial={{ opacity: 0, x: -50, rotate: tilt * 2 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -50,
                            rotate: isActive ? tilt : tilt * 2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 95,
                            damping: 17,
                            delay: isActive ? i * 0.08 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <TiltedTabCard item={item} tilt={tilt} side="left" index={i} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Pair 2 (Left Down: 2 Tabs) */}
                  <div className="flex flex-col gap-3.5">
                    {feat.leftDown.map((item, i) => {
                      const tilt = i === 0 ? 3.5 : -2.5;
                      return (
                        <motion.div
                          key={`${feat.key}-ld-${i}`}
                          initial={{ opacity: 0, x: -50, rotate: tilt * 2 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -50,
                            rotate: isActive ? tilt : tilt * 2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 95,
                            damping: 17,
                            delay: isActive ? (i + 2) * 0.08 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <TiltedTabCard item={item} tilt={tilt} side="left" index={i + 2} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Screen Frame */}
          <div className="relative z-10 mx-auto w-full max-w-[680px] rounded-[24px] bg-[#0b0b14] p-2.5 shadow-[0px_44px_100px_rgba(20,10,40,0.38)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px]">
              {FEATURES.map((feat, i) => {
                const isActive = activeIdx === i;
                return (
                  <motion.img
                    key={feat.key}
                    src={feat.screen}
                    alt={feat.label}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.97,
                      zIndex: isActive ? 2 : 1,
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column: 2 Pairs (2 Right-Up, 2 Right-Down) */}
          <div className="relative z-20 w-[300px] h-[440px] shrink-0">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              return (
                <div
                  key={`${feat.key}-right-col`}
                  className="absolute inset-0 flex flex-col items-end justify-between py-2 pointer-events-none"
                >
                  {/* Pair 1 (Right Up: 2 Tabs) */}
                  <div className="flex flex-col items-end gap-3.5">
                    {feat.rightUp.map((item, i) => {
                      const tilt = i === 0 ? 3.5 : -2;
                      return (
                        <motion.div
                          key={`${feat.key}-ru-${i}`}
                          initial={{ opacity: 0, x: 50, rotate: tilt * 2 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : 50,
                            rotate: isActive ? tilt : tilt * 2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 95,
                            damping: 17,
                            delay: isActive ? i * 0.08 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <TiltedTabCard item={item} tilt={tilt} side="right" index={i} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Pair 2 (Right Down: 2 Tabs) */}
                  <div className="flex flex-col items-end gap-3.5">
                    {feat.rightDown.map((item, i) => {
                      const tilt = i === 0 ? -3 : 2.5;
                      return (
                        <motion.div
                          key={`${feat.key}-rd-${i}`}
                          initial={{ opacity: 0, x: 50, rotate: tilt * 2 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : 50,
                            rotate: isActive ? tilt : tilt * 2,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 95,
                            damping: 17,
                            delay: isActive ? (i + 2) * 0.08 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <TiltedTabCard item={item} tilt={tilt} side="right" index={i + 2} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

