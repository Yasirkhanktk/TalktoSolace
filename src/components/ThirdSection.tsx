import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "motion/react";
import imgTalkItOut from "../imports/3NdSection/30e513f7515e0de820633689d8febfe6dea7e482.png";
import imgHome from "../imports/Hero/c5350ce48a92f7054918aeb788bf135d4754965c.png";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

type Feature = {
  key: string;
  label: string;
  screen: string;
  tabs: { side: "left" | "right"; text: string }[];
};

// NOTE: only the "Talk it out" screen was provided in the import. Journel and
// Wellness reuse an available screenshot as a placeholder — swap in real ones.
const FEATURES: Feature[] = [
  {
    key: "journel",
    label: "Journel",
    screen: imgHome,
    tabs: [
      { side: "left", text: "Capture your thoughts" },
      { side: "right", text: "Guided prompts daily" },
      { side: "left", text: "Track your moods" },
      { side: "right", text: "Private & secure" },
    ],
  },
  {
    key: "talk",
    label: "Talk it out",
    screen: imgTalkItOut,
    tabs: [
      { side: "left", text: "Talk freely, anytime" },
      { side: "right", text: "Voice or video" },
      { side: "left", text: "Judgement-free space" },
      { side: "right", text: "Deep reflection" },
    ],
  },
  {
    key: "wellness",
    label: "Wellness tool",
    screen: imgHome,
    tabs: [
      { side: "left", text: "Breathing exercises" },
      { side: "right", text: "Sleep & calm" },
      { side: "left", text: "Daily check-ins" },
      { side: "right", text: "Build gentle habits" },
    ],
  },
];

// step 0: land on state 1 (no tabs)
// step 1: state 1 with all 4 tabs
// step 2: state 2 with all 4 tabs
// step 3: state 3 with all 4 tabs
const MAX_STEP = FEATURES.length; // 3
const decode = (step: number) => {
  if (step <= 0) return { feature: 0, tabs: 0 };
  if (step === 1) return { feature: 0, tabs: 4 };
  return { feature: Math.min(FEATURES.length - 1, step - 1), tabs: 4 };
};

// Fixed slot for each feature's label + the arrow direction that points at it.
// Rotation increases monotonically (180 → 270 → 360) so the arrow always
// sweeps the short way: left → up → right.
const SLOTS = [
  { key: "journel", pos: "left", rotate: 180 },
  { key: "talk", pos: "top", rotate: 270 },
  { key: "wellness", pos: "right", rotate: 360 },
] as const;

function TabCard({ side, text, index }: { side: "left" | "right"; text: string; index: number }) {
  const reduce = useReducedMotion();
  const ring = (
    <span className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-2 border-[#e91e63] shadow-[0px_0px_22px_-6px_rgba(168,85,247,0.7)]">
      <span className="h-[20px] w-[20px] rounded-full border border-[#e91e63]/50" />
    </span>
  );
  const pill = (
    <span
      className="flex items-center rounded-full border-2 border-white bg-white/70 px-5 py-[14px] backdrop-blur-[5px]"
      style={{ backgroundImage: "linear-gradient(147deg, rgba(233,30,99,0) 8%, rgba(156,39,176,0.05) 92%)" }}
    >
      <span
        className="whitespace-nowrap bg-clip-text text-[13.5px] font-semibold text-transparent"
        style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: GRAD }}
      >
        {text}
      </span>
    </span>
  );
  return (
    <motion.div
      className="flex items-center gap-3 will-change-transform"
      initial={reduce ? false : { opacity: 0, x: side === "left" ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? undefined : { opacity: 0, x: side === "left" ? -24 : 24, transition: { duration: 0.25 } }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.45 + index * 0.22 }}
    >
      {side === "left" ? (
        <>
          {pill}
          {ring}
        </>
      ) : (
        <>
          {ring}
          {pill}
        </>
      )}
    </motion.div>
  );
}

export default function ThirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Use framer-motion's useScroll to track progress through this tall section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [step, setStep] = useState(0);

  // Map the continuous scroll progress to our discrete steps
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // 4 steps total: 0, 1, 2, 3
      // We can divide the 0-1 progress into chunks
      let nextStep = 0;
      if (latest > 0.8) nextStep = 3;
      else if (latest > 0.5) nextStep = 2;
      else if (latest > 0.2) nextStep = 1;
      else nextStep = 0;
      
      setStep(nextStep);
    });
  }, [scrollYProgress]);

  const { feature: activeIdx, tabs: visibleTabs } = decode(step);
  const feature = FEATURES[activeIdx];
  const leftTabs = feature.tabs.filter((t) => t.side === "left");
  const rightTabs = feature.tabs.filter((t) => t.side === "right");
  const isVisible = (t: (typeof feature.tabs)[number]) => feature.tabs.indexOf(t) < visibleTabs;

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-10">
        {/* Header */}
      <span
        className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase"
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
        className="mt-3 text-center text-[clamp(28px,3.6vw,46px)] leading-[1.05] tracking-[-1px] text-black"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        Highlighted
        <br />
        <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
          Features
        </span>
      </h2>
      <div className="mt-2 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />

      {/* Controller: glowing orb with a rotating arrow pointing at the active feature */}
      <div className="relative mt-4 h-[190px] w-[min(660px,94vw)]">
        {(() => {
          const labelBase = "absolute text-[15px] whitespace-nowrap";
          return SLOTS.map((slot, i) => {
            const isActive = activeIdx === i;
            const posClass =
              slot.pos === "left"
                ? "left-0 top-[112px] -translate-y-1/2"
                : slot.pos === "right"
                  ? "right-0 top-[112px] -translate-y-1/2"
                  : "left-1/2 top-2 -translate-x-1/2";
            return (
              <motion.span
                key={slot.key}
                className={`${labelBase} ${posClass}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                animate={{ opacity: isActive ? 1 : 0.55 }}
                transition={{ duration: 0.3 }}
              >
                {isActive ? (
                  <span className="bg-clip-text font-semibold text-transparent" style={{ backgroundImage: GRAD }}>
                    {FEATURES[i].label}
                  </span>
                ) : (
                  <span className="font-medium text-[#9aa0a6]">{FEATURES[i].label}</span>
                )}
              </motion.span>
            );
          });
        })()}

        {/* orb cluster, centered */}
        <div className="absolute left-1/2 top-[112px] -translate-x-1/2 -translate-y-1/2">
          {/* glow halo */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(124,138,240,0.55), rgba(124,138,240,0) 70%)" }}
            animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 0.95, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* rotating arrow ring — points at the active slot */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: reduce ? 0 : SLOTS[activeIdx].rotate }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 55, damping: 15, delay: 0.35 }}
          >
            {/* arrow sits at the right edge, pointing outward (right = 0deg) */}
            <svg className="absolute right-[2px] top-1/2 h-[70px] w-[30px] -translate-y-1/2" viewBox="0 0 30 70" fill="none">
              <path d="M4 8 Q26 35 4 62" stroke="url(#brk)" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M26 35 L14 27 M26 35 L14 43" stroke="url(#brk)" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="brk" x1="4" y1="8" x2="26" y2="62" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5bc3cc" />
                  <stop offset="0.5" stopColor="#7eaae0" />
                  <stop offset="1" stopColor="#9896f1" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* the sphere */}
          <motion.div
            className="relative h-[108px] w-[108px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 36% 28%, #d8ecff 0%, #93b8f0 20%, #7b86e6 46%, #6a5fd0 72%, #4a3fa8 100%)",
              boxShadow:
                "inset -10px -14px 26px rgba(30,20,80,0.55), inset 8px 10px 20px rgba(255,255,255,0.5), 0 20px 40px rgba(90,70,190,0.35)",
            }}
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute left-[30%] top-[22%] h-[16%] w-[22%] rounded-full bg-white/85 blur-[2px]" />
            <span className="absolute left-[46%] top-[36%] h-[8%] w-[10%] rounded-full bg-[#7fe6e0]/70 blur-[3px]" />
          </motion.div>
        </div>
      </div>

      {/* Stage: screen + floating tabs */}
      <div className="relative mt-8 flex w-full max-w-[1280px] items-center justify-center">
        {/* Left tabs — pinned to the far left, clear of the screen */}
        <div className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {leftTabs.map((t, i) =>
              isVisible(t) ? (
                <TabCard key={`${feature.key}-l-${i}`} side="left" text={t.text} index={feature.tabs.indexOf(t)} />
              ) : null,
            )}
          </AnimatePresence>
        </div>

        {/* Right tabs */}
        <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-end gap-8">
          <AnimatePresence mode="popLayout">
            {rightTabs.map((t, i) =>
              isVisible(t) ? (
                <TabCard key={`${feature.key}-r-${i}`} side="right" text={t.text} index={feature.tabs.indexOf(t)} />
              ) : null,
            )}
          </AnimatePresence>
        </div>

        {/* Central screen */}
        <div className="relative z-10 w-full max-w-[600px] rounded-[20px] bg-[#0b0b14] p-2 shadow-[0px_40px_90px_rgba(20,10,40,0.35)]">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[14px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={feature.key}
                src={feature.screen}
                alt={feature.label}
                className="absolute inset-0 h-full w-full object-cover object-top"
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
