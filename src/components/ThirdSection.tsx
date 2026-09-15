import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
  { xPercent: 24, yPercent: 32, angle: 135, rotAngle: 225 },
  { xPercent: 50, yPercent: 16, angle: 90, rotAngle: 270 },
  { xPercent: 76, yPercent: 32, angle: 45, rotAngle: 315 },
  { xPercent: 92, yPercent: 78, angle: 0, rotAngle: 360 },
];

function BubbleCard({
  item,
  side,
  index,
  tilt = 0,
}: {
  item: TabItem;
  side: "left" | "right";
  index: number;
  tilt?: number;
}) {
  const reduce = useReducedMotion();

  // Organic wobbly shapes per card
  const borderShape =
    index % 3 === 0
      ? "46% 54% 50% 50% / 53% 47% 53% 47%"
      : index % 3 === 1
      ? "53% 47% 52% 48% / 47% 53% 47% 53%"
      : "50% 50% 47% 53% / 52% 48% 52% 48%";

  return (
    <motion.div
      className="group relative select-none"
      style={{ rotate: tilt }}
      animate={
        reduce
          ? undefined
          : {
              y: [0, index % 2 === 0 ? -8 : 7, 0],
              x: [0, index % 2 === 0 ? 5 : -5, 0],
              rotate: [tilt, tilt + (index % 2 === 0 ? 1.5 : -1.5), tilt],
            }
      }
      transition={{
        duration: 3.4 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        transition: { type: "spring", stiffness: 380, damping: 15 },
      }}
    >
      {/* ── Ambient Floating Micro-Bubbles Around Main Bubble ── */}
      {/* Micro Bubble 1 (Top Corner) */}
      <motion.div
        className="pointer-events-none absolute -top-2.5 right-3 z-0 h-4 w-4 rounded-full border border-[#e91e63]/20 bg-gradient-to-br from-white/90 via-pink-100/40 to-purple-100/30 shadow-[0_2px_8px_rgba(233,30,99,0.12)] backdrop-blur-md"
        animate={reduce ? undefined : { y: [0, -6, 0], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 2.6 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-white/90" />
      </motion.div>

      {/* Micro Bubble 2 (Bottom Corner) */}
      <motion.div
        className="pointer-events-none absolute -bottom-3 left-4 z-0 h-3.5 w-3.5 rounded-full border border-purple-300/30 bg-gradient-to-br from-white/95 via-pink-50/50 to-purple-100/40 shadow-[0_2px_6px_rgba(156,39,176,0.12)] backdrop-blur-md"
        animate={reduce ? undefined : { y: [0, 5, 0], x: [0, -3, 0] }}
        transition={{ duration: 3.1 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-0.5 left-0.5 h-1 w-1 rounded-full bg-white/95" />
      </motion.div>

      {/* Micro Bubble 3 (Side Tiny Pearl) */}
      <motion.div
        className="pointer-events-none absolute top-1/2 -top-1 -left-3 z-0 h-2.5 w-2.5 rounded-full border border-[#e91e63]/25 bg-white/90 shadow-[0_1px_4px_rgba(233,30,99,0.15)]"
        animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Main Circular Glass Bubble Body ── */}
      <div
        className="relative z-10 flex min-h-[118px] w-[182px] flex-col items-center justify-center gap-1.5 p-3 px-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-[#e91e63]/30 hover:shadow-[0_14px_40px_rgba(233,30,99,0.22)]"
        style={{
          borderRadius: borderShape,
          background:
            "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.98) 0%, rgba(253,235,242,0.6) 55%, rgba(255,255,255,0.92) 100%)",
          border: "1.5px solid rgba(233,30,99,0.16)",
          boxShadow:
            "0 8px 24px rgba(233,30,99,0.08), inset 0 3px 6px rgba(255,255,255,0.95), inset 0 -2px 4px rgba(233,30,99,0.05)",
        }}
      >
        {/* Specular Bubble Gloss Highlight */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "45%",
            height: "30%",
            top: "10%",
            left: "15%",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 75%)",
          }}
        />

        {/* Secondary Bottom Reflection */}
        <div
          className="pointer-events-none absolute rounded-full opacity-40"
          style={{
            width: "35%",
            height: "15%",
            bottom: "10%",
            right: "20%",
            background:
              "radial-gradient(ellipse at center, rgba(233,30,99,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Eyebrow Tag Pill */}
        <span
          className="relative z-10 inline-block rounded-full border border-[#e91e63]/20 px-2.5 py-[1px] text-[9px] font-bold uppercase tracking-wider text-[#d81b60] shadow-[0_2px_4px_rgba(233,30,99,0.06)]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(252,228,236,0.8) 100%)",
          }}
        >
          {item.tag}
        </span>

        {/* Beautiful Centered Text */}
        <span
          className="relative z-10 max-w-[150px] text-[12px] font-semibold leading-[1.3] text-slate-800 transition-colors group-hover:text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item.text}
        </span>
      </div>

      {/* ── Bubble Tail / Connector Spheres pointing to screen ── */}
      <div
        className={`absolute ${
          side === "left" ? "-right-3.5 top-1/2" : "-left-3.5 top-1/2"
        } z-20 flex -translate-y-1/2 items-center gap-[4px] ${
          side === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className="h-[11px] w-[11px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.98), rgba(252,228,236,0.7))",
            border: "1px solid rgba(233,30,99,0.18)",
            boxShadow: "0 2px 6px rgba(233,30,99,0.08)",
          }}
        />
        <div
          className="h-[7px] w-[7px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(252,228,236,0.6))",
            border: "1px solid rgba(233,30,99,0.14)",
          }}
        />
        <div
          className="h-[4px] w-[4px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(252,228,236,0.5))",
            border: "1px solid rgba(233,30,99,0.1)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ThirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const [activeIdx, setActiveIdx] = useState(0);
  const currentStepRef = useRef(0);
  const isLockedRef = useRef(false);
  const quietTimerRef = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const TOTAL_STEPS = 5; // 5 models: 0-4
  const LOCK_DURATION = 400; // ms — snappy transition without freezing scroll

  /* ── Compute the exact scroll Y for a given step ── */
  const getTargetScrollY = useCallback((step: number) => {
    const el = sectionRef.current;
    if (!el) return window.scrollY;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollable = el.offsetHeight - window.innerHeight;
    return sectionTop + (step / (TOTAL_STEPS - 1)) * totalScrollable;
  }, []);

  /* ── Check if viewport is pinned inside Section 3 sticky area ── */
  const getIsPinned = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
  }, []);

  /* ── Lock helper: sets lock and starts a FIXED timer (never reset) ── */
  const lockStep = useCallback((step: number) => {
    currentStepRef.current = step;
    setActiveIdx(step);
    isLockedRef.current = true;
    const targetY = getTargetScrollY(step);
    window.scrollTo({ top: targetY, behavior: "smooth" });

    // Fixed timer — NOT reset by inertia so user is never stuck
    if (quietTimerRef.current) clearTimeout(quietTimerRef.current);
    quietTimerRef.current = window.setTimeout(() => {
      isLockedRef.current = false;
    }, LOCK_DURATION);
  }, [getTargetScrollY]);

  /* ── Advance to a specific step (used by arc buttons) ── */
  const handleSelectStep = useCallback(
    (idx: number) => {
      lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, idx)));
    },
    [lockStep]
  );

  useEffect(() => {
    /* ── WHEEL HANDLER ── */
    const handleWheel = (e: WheelEvent) => {
      if (!getIsPinned()) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 4) return;

      const dir = delta > 0 ? 1 : -1;
      const current = currentStepRef.current;

      // At boundaries, release to let native scroll continue
      if (dir === 1 && current >= TOTAL_STEPS - 1) return;
      if (dir === -1 && current <= 0) return;

      // Block native scroll
      e.preventDefault();

      // If locked, just absorb — do NOT reset timer
      if (isLockedRef.current) return;

      // Advance exactly ONE step
      lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, current + dir)));
    };

    /* ── TOUCH HANDLERS ── */
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      if (!getIsPinned()) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (Math.abs(deltaY) < 25) return;

      const dir = deltaY > 0 ? 1 : -1;
      const current = currentStepRef.current;

      if (dir === 1 && current >= TOTAL_STEPS - 1) return;
      if (dir === -1 && current <= 0) return;

      e.preventDefault();

      if (isLockedRef.current) return;

      touchStartY.current = currentY;
      lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, current + dir)));
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    /* ── KEYBOARD HANDLER ── */
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!getIsPinned()) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentStepRef.current < TOTAL_STEPS - 1) {
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
  }, [getIsPinned, lockStep, handleSelectStep]);

  return (
    <section ref={sectionRef} className="relative h-[650vh] bg-white">
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

        {/* ───── D-Shaped 180-Degree Arc Controller with 5 Milestone Points ───── */}
        <div className="relative mt-12 mb-3 h-[130px] w-[min(620px,94vw)]">
          {/* Central Glowing Sphere & Pointer Ring */}
          <div className="absolute left-1/2 bottom-[-20px] -translate-x-1/2">
            {/* Halo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
              style={{ background: "radial-gradient(circle, rgba(233,30,99,0.35), rgba(156,39,176,0) 70%)" }}
              animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating Pointer Arrow Indicator */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: reduce ? 0 : ARC_POINTS[activeIdx].rotAngle }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 65, damping: 14 }}
            >
              <svg className="absolute right-0 top-1/2 h-[34px] w-[17px] -translate-y-1/2" viewBox="0 0 22 45" fill="none">
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
              className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(233,30,99,0.25)]"
              style={{
                background:
                  "radial-gradient(circle at 36% 28%, #ffffff 0%, #fce4ec 30%, #f48fb1 60%, #ad1457 100%)",
                boxShadow:
                  "inset -6px -8px 14px rgba(74,20,140,0.35), inset 5px 6px 12px rgba(255,255,255,0.85), 0 10px 24px rgba(233,30,99,0.28)",
              }}
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[13px] font-extrabold text-slate-900 tracking-wider">
                {FEATURES[activeIdx].num}
              </span>
            </motion.div>
          </div>

          {/* 5 Milestone Points along the 180° Arc (Top points have label ABOVE to prevent overlap) */}
          {FEATURES.map((feat, i) => {
            const pt = ARC_POINTS[i];
            const isActive = activeIdx === i;
            const isTopArc = i >= 1 && i <= 3; // Points 02, 03, 04

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
                  className={`flex items-center transition-transform duration-300 ${
                    isTopArc ? "flex-col-reverse" : "flex-col"
                  } ${
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
                    className={`whitespace-nowrap text-[12px] font-semibold transition-all ${
                      isTopArc ? "mb-1" : "mt-1"
                    } ${
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

        {/* ───── Stage: Unaligned Creative Bubbles & Central Screen ───── */}
        <div className="relative mt-1 flex w-full max-w-[1380px] h-[390px] items-center justify-between px-2">
          {/* Left Column: Organic Unaligned Bubbles */}
          <div className="relative z-20 w-[280px] h-[380px] shrink-0 mt-[-52px]">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              return (
                <div
                  key={`${feat.key}-left-col`}
                  className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none"
                >
                  {/* Left-Up Bubbles */}
                  <div className="flex flex-col gap-4">
                    {feat.leftUp.map((item, i) => {
                      const posX = i === 0 ? -22 : 14;
                      const posY = i === 0 ? -8 : 6;
                      const tilt = i === 0 ? -4.5 : 3.5;
                      return (
                        <motion.div
                          key={`${feat.key}-lu-${i}`}
                          initial={{ opacity: 0, scale: 0, x: posX - 30, y: posY }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0,
                            x: isActive ? posX : posX - 30,
                            y: posY,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 14,
                            delay: isActive ? i * 0.1 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <BubbleCard item={item} side="left" index={i} tilt={tilt} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Left-Down Bubbles */}
                  <div className="flex flex-col gap-4">
                    {feat.leftDown.map((item, i) => {
                      const posX = i === 0 ? -16 : 18;
                      const posY = i === 0 ? -4 : 10;
                      const tilt = i === 0 ? 2.5 : -3.5;
                      return (
                        <motion.div
                          key={`${feat.key}-ld-${i}`}
                          initial={{ opacity: 0, scale: 0, x: posX - 30, y: posY }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0,
                            x: isActive ? posX : posX - 30,
                            y: posY,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 14,
                            delay: isActive ? (i + 2) * 0.1 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <BubbleCard item={item} side="left" index={i + 2} tilt={tilt} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Screen Frame */}
          <div className="relative z-10 mx-auto w-full max-w-[600px] mt-10 rounded-[22px] bg-[#0b0b14] p-2 shadow-[0px_32px_80px_rgba(20,10,40,0.32)]">
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

          {/* Right Column: Organic Unaligned Bubbles */}
          <div className="relative z-20 w-[280px] h-[380px] shrink-0 mt-[-52px]">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              return (
                <div
                  key={`${feat.key}-right-col`}
                  className="absolute inset-0 flex flex-col items-end justify-between py-2 pointer-events-none"
                >
                  {/* Right-Up Bubbles */}
                  <div className="flex flex-col items-end gap-4">
                    {feat.rightUp.map((item, i) => {
                      const posX = i === 0 ? 22 : -12;
                      const posY = i === 0 ? -10 : 4;
                      const tilt = i === 0 ? 4.5 : -3;
                      return (
                        <motion.div
                          key={`${feat.key}-ru-${i}`}
                          initial={{ opacity: 0, scale: 0, x: posX + 30, y: posY }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0,
                            x: isActive ? posX : posX + 30,
                            y: posY,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 14,
                            delay: isActive ? i * 0.1 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <BubbleCard item={item} side="right" index={i} tilt={tilt} />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Right-Down Bubbles */}
                  <div className="flex flex-col items-end gap-4">
                    {feat.rightDown.map((item, i) => {
                      const posX = i === 0 ? 16 : -14;
                      const posY = i === 0 ? -4 : 8;
                      const tilt = i === 0 ? -2.5 : 4.5;
                      return (
                        <motion.div
                          key={`${feat.key}-rd-${i}`}
                          initial={{ opacity: 0, scale: 0, x: posX + 30, y: posY }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0,
                            x: isActive ? posX : posX + 30,
                            y: posY,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 14,
                            delay: isActive ? (i + 2) * 0.1 : 0,
                          }}
                          style={{ pointerEvents: isActive ? "auto" : "none" }}
                        >
                          <BubbleCard item={item} side="right" index={i + 2} tilt={tilt} />
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

