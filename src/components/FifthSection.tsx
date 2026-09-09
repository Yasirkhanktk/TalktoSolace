import { useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useHoldAnimationScroll } from "../hooks/useHoldAnimationScroll";
import imgPlaceholder from "../imports/MeetSolace/1fabb6006b2b2026a2aa6f647b1aff16b1c50164.png";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

const MODULES = [
  {
    step: "Step 01",
    title: "Talk It Out",
    desc: "Speak freely without judgment. Solace listens with deep empathy, providing instant reassurance whenever thoughts feel overwhelming.",
    features: [
      { num: "100%", text: "Secure, encrypted\ndata protection" },
      { num: "2 Minutes", text: "Set up to connect\nand begin instantly" },
    ],
    img: imgPlaceholder,
  },
  {
    step: "Step 02",
    title: "Journal Thoughts",
    desc: "Reflect on your day, track your moods, and build a healthy habit of self-awareness with gentle AI-guided prompts.",
    features: [
      { num: "Daily", text: "Guided prompts\nand reflections" },
      { num: "Private", text: "Your thoughts are\nfor your eyes only" },
    ],
    img: imgPlaceholder,
  },
  {
    step: "Step 03",
    title: "Wellness Toolkit",
    desc: "Access guided box breathing, mindful sensory grounding, and personalized calming exercises anywhere, anytime.",
    features: [
      { num: "24/7", text: "Access to calming\nresources" },
      { num: "Guided", text: "Routines designed\nfor your needs" },
    ],
    img: imgPlaceholder,
  },
];

/* ── Sub-components ── */

function TextSlide({ mod }: { mod: (typeof MODULES)[number] }) {
  return (
    <div className="flex flex-col items-start">
      <h3
        className="text-[38px] leading-[1.15] tracking-[-1px] lg:text-[46px]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
      >
        <span
          className="bg-clip-text font-semibold italic text-transparent"
          style={{ backgroundImage: GRAD }}
        >
          {mod.title.split(" ")[0]}
        </span>{" "}
        <span className="text-[#1d1d1d]">{mod.title.split(" ").slice(1).join(" ")}</span>
      </h3>
      <p
        className="mt-4 max-w-[474px] text-[16px] font-medium leading-[1.55] text-[#555] lg:text-[16.7px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {mod.desc}
      </p>

      <div className="mt-10 flex w-full flex-col gap-6 sm:flex-row sm:gap-14">
        {mod.features.map((feat, fi) => (
          <div key={fi} className="flex flex-col gap-1.5">
            <span
              className="bg-clip-text text-[28px] font-bold text-transparent lg:text-[32px]"
              style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: GRAD }}
            >
              {feat.num}
            </span>
            <span
              className="whitespace-pre-line text-[14px] font-medium leading-[1.5] text-[#666] lg:text-[14.8px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {feat.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Unique Liquid Glass Dock Stepper ── */
function UniqueDockStepper({
  activeStep,
  onSelectStep,
}: {
  activeStep: number;
  onSelectStep: (idx: number) => void;
}) {
  const steps = [
    {
      num: "01",
      label: "Talk",
      tag: "Voice",
    },
    {
      num: "02",
      label: "Journal",
      tag: "Reflect",
    },
    {
      num: "03",
      label: "Tools",
      tag: "Habits",
    },
  ];

  return (
    <div className="relative z-20 flex w-full justify-center">
      {/* Liquid Glass Capsule Chassis */}
      <div className="relative flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/80 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
        {/* Background gradient track */}
        <div className="pointer-events-none absolute inset-x-8 top-1/2 h-[1.5px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#e91e63]/20 to-transparent" />

        {steps.map((s, i) => {
          const isActive = activeStep === i;
          return (
            <button
              key={s.num}
              type="button"
              onClick={() => onSelectStep(i)}
              className={`group relative flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 transition-all duration-300 focus:outline-none ${
                isActive ? "text-[#1d1d1d]" : "text-[#777] hover:text-black"
              }`}
            >
              {/* Magnetic Floating Spotlight Pill */}
              {isActive && (
                <motion.div
                  layoutId="stepperActivePill"
                  className="absolute inset-0 rounded-full border border-white/90 bg-white shadow-[0_6px_22px_rgba(233,30,99,0.18),0_2px_6px_rgba(0,0,0,0.04)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                >
                  {/* Glowing laser accent */}
                  <div
                    className="absolute bottom-0 left-1/2 h-[2.5px] w-3/4 -translate-x-1/2 rounded-full"
                    style={{ background: GRAD }}
                  />
                </motion.div>
              )}

              {/* Number Orb Badge */}
              <div className="relative z-10 flex items-center">
                <motion.div
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "shadow-[0_2px_12px_rgba(233,30,99,0.4)]"
                      : "bg-[#f1f1f4] group-hover:bg-[#e8e8ed]"
                  }`}
                  style={isActive ? { background: GRAD } : undefined}
                  animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span
                    className={`text-[11px] font-bold tracking-tight ${
                      isActive ? "text-white" : "text-[#777]"
                    }`}
                  >
                    {s.num}
                  </span>
                </motion.div>
              </div>

              {/* Title & Micro-tag */}
              <div className="relative z-10 flex flex-col items-start text-left">
                <span
                  className={`text-[13.5px] font-bold transition-colors ${
                    isActive ? "text-black" : "text-[#555] group-hover:text-black"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {s.label}
                </span>
                <span
                  className="text-[9.5px] font-semibold tracking-wider uppercase text-[#999]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.tag}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({
  mod,
  index,
  activeStep,
}: {
  mod: (typeof MODULES)[number];
  index: number;
  activeStep: number;
}) {
  const isCurrent = activeStep === index;
  const isPast = index < activeStep;

  return (
    <motion.div
      className="absolute inset-x-0 top-6 flex flex-col items-center overflow-hidden rounded-[30px] p-[2px] shadow-2xl"
      animate={{
        scale: isCurrent ? 1 : isPast ? 0.92 : 0.95,
        y: isCurrent ? 0 : isPast ? -45 : 70,
        opacity: isCurrent ? 1 : isPast ? 0.25 : 0,
        rotateX: isCurrent ? 0 : isPast ? -4 : 6,
        zIndex: isCurrent ? 10 : isPast ? index : 0,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        transformOrigin: "bottom center",
        background: isCurrent
          ? "linear-gradient(135deg, rgba(233,30,99,0.35), rgba(156,39,176,0.35))"
          : "rgba(220,220,230,0.5)",
        pointerEvents: isCurrent ? "auto" : "none",
      }}
    >
      <div className="flex w-full flex-col items-center overflow-hidden rounded-[28px] bg-white">
        {/* Gradient top accent bar */}
        <div className="h-[3px] w-full" style={{ background: GRAD }} />
        <div className="flex w-full flex-col items-center p-8 pt-6">
          <div className="relative h-[240px] w-full max-w-[460px] overflow-hidden rounded-[16px] sm:h-[320px]">
            <img src={mod.img} alt={mod.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-white/40 to-transparent" />
          </div>
          <div className="mt-6 flex flex-col items-center text-center">
            <h4
              className="text-[22px] tracking-[-0.5px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              <span
                className="bg-clip-text font-semibold italic text-transparent"
                style={{ backgroundImage: GRAD }}
              >
                {mod.title.split(" ")[0]}
              </span>{" "}
              <span className="text-[#1d1d1d]">{mod.title.split(" ").slice(1).join(" ")}</span>
            </h4>
            <p
              className="mt-2 max-w-[380px] text-[15px] font-medium leading-[1.5] text-[#666]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {mod.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */

export default function FifthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { activeStep, setStep } = useHoldAnimationScroll(
    3,
    containerRef,
    {
      throttleMs: 650,
      quietMs: 180,
      nextSectionId: "testimonials-section",
      prevSectionId: "moments-section",
    }
  );

  return (
    <section ref={containerRef} id="meet-solace-section" className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Floating emblem in lower-right empty space */}
        <div className="pointer-events-none absolute bottom-[6%] right-[3%] z-0 hidden xl:block opacity-35">
          <SolaceEmblem size={120} tilt={12} />
        </div>

        {/* Header */}
        <div className="flex w-full max-w-[1260px] flex-col items-center px-6 text-center">
          <span
            className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase backdrop-blur-[4px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
            }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Meet Solace
            </span>
          </span>
          <h2
            className="mt-4 text-[clamp(40px,4.4vw,56px)] leading-[1] tracking-[-1.7px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Meet{" "}
            <span
              className="bg-clip-text font-semibold italic text-transparent"
              style={{ backgroundImage: GRAD }}
            >
              Solace
            </span>
          </h2>
          <p
            className="mt-3 max-w-[440px] text-[15px] leading-[1.6] text-[#666]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            Your companion for every step of the journey
          </p>
          <div className="mt-4 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />
        </div>

        {/* Main Content */}
        <div className="relative mt-8 flex w-full max-w-[1260px] flex-col gap-16 px-6 lg:mt-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-1 flex-col items-start pt-6 lg:pt-12">
            <div
              className="inline-flex rounded-full border border-[#e91e63]/30 px-5 py-2.5"
              style={{
                backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.08), rgba(156,39,176,0.08))",
              }}
            >
              <span
                className="bg-clip-text text-[13.3px] font-semibold text-transparent"
                style={{ fontFamily: "'Inter', sans-serif", backgroundImage: GRAD }}
              >
                How it works
              </span>
            </div>

            <div className="relative mt-8 min-h-[220px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={MODULES[activeStep].step}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <TextSlide mod={MODULES[activeStep]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full max-w-[620px]">
            {/* Unique Liquid Glass Dock Stepper */}
            <UniqueDockStepper
              activeStep={activeStep}
              onSelectStep={(idx) => setStep(idx)}
            />

            {/* Stacking Cards */}
            <div className="relative mt-[-10px] h-[520px] w-full pt-6">
              {MODULES.map((mod, i) => (
                <StepCard
                  key={`card-${i}`}
                  mod={mod}
                  index={i}
                  activeStep={activeStep}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
