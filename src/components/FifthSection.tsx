import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";
import imgPlaceholder from "../imports/MeetSolace/1fabb6006b2b2026a2aa6f647b1aff16b1c50164.png";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

const MODULES = [
  {
    step: "Step 01",
    title: "Talk It Out",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.",
    features: [
      { num: "100%", text: "Secure, encrypted\ndata protection" },
      { num: "2 Minutes", text: "Set up to connect\nand begin instantly" },
    ],
    img: imgPlaceholder,
  },
  {
    step: "Step 02",
    title: "Journal Thoughts",
    desc: "Reflect on your day, track your moods, and build a healthy habit of self-awareness.",
    features: [
      { num: "Daily", text: "Guided prompts\nand reflections" },
      { num: "Private", text: "Your thoughts are\nfor your eyes only" },
    ],
    img: imgPlaceholder,
  },
  {
    step: "Step 03",
    title: "Wellness Toolkit",
    desc: "Access guided meditations, breathing exercises, and mindful practices anywhere.",
    features: [
      { num: "24/7", text: "Access to calming\nresources" },
      { num: "Guided", text: "Routines designed\nfor your needs" },
    ],
    img: imgPlaceholder,
  },
];

/* ── Extracted sub-components so hook counts stay stable ── */

function TextSlide({
  mod,
  index,
  smoothProgress,
}: {
  mod: (typeof MODULES)[number];
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const start = index === 0 ? 0 : (index - 0.1) / MODULES.length;
  const peakIn = (index + 0.1) / MODULES.length;
  const peakOut = (index + 0.8) / MODULES.length;
  const end = (index + 1) / MODULES.length;

  const opacity = useTransform(smoothProgress, [start, peakIn, peakOut, end], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [start, peakIn, peakOut, end], [30, 0, 0, -30]);
  const blurVal = useTransform(smoothProgress, [start, peakIn, peakOut, end], [6, 0, 0, 6]);
  const filterStr = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-start"
      style={{ opacity, y, filter: filterStr, pointerEvents: "none" }}
    >
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
    </motion.div>
  );
}

function CapsuleTab({
  mod,
  index,
  scrollYProgress,
}: {
  mod: (typeof MODULES)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / MODULES.length;
  const end = (index + 1) / MODULES.length;

  const fillProgress = useTransform(scrollYProgress, [start, end], [0, 100], { clamp: true });
  const fillWidth = useTransform(fillProgress, (v) => `${v}%`);

  const oStart = index === 0 ? 0 : start - 0.05;
  const pStart = index === 0 ? 0.001 : start;
  const fillOpacity = useTransform(
    scrollYProgress,
    [oStart, pStart, 1],
    [index === 0 ? 1 : 0, 1, 1],
    { clamp: true }
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 0.6, 0.6, 0],
    { clamp: true }
  );

  const capsuleScale = useTransform(
    scrollYProgress,
    [start, start + 0.04, start + 0.12],
    [1, 1.08, 1],
    { clamp: true }
  );

  return (
    <motion.div
      className="relative overflow-hidden rounded-full"
      style={{ scale: capsuleScale, backgroundColor: "#1d1d1f" }}
    >
      {/* Glow behind active capsule */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md"
        style={{ background: GRAD, opacity: glowOpacity, transform: "scale(1.15)" }}
      />
      <div className="relative px-6 py-2.5">
        <span
          className="relative z-10 text-[13.7px] font-semibold text-white"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {mod.step}
        </span>
      </div>
      <motion.div
        className="absolute inset-y-0 left-0 z-0 rounded-full"
        style={{ background: GRAD, width: fillWidth, opacity: fillOpacity }}
      />
    </motion.div>
  );
}

function StepCard({
  mod,
  index,
  smoothProgress,
}: {
  mod: (typeof MODULES)[number];
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const isLast = index === MODULES.length - 1;
  const start = index === 0 ? 0 : (index - 0.15) / MODULES.length;
  const peakIn = (index + 0.12) / MODULES.length;
  const peakOut = (index + 0.85) / MODULES.length;
  const end = (index + 1) / MODULES.length;

  const y = useTransform(smoothProgress, [start, peakIn, peakOut, end], [80, 0, 0, isLast ? 0 : -50]);
  const scale = useTransform(smoothProgress, [start, peakIn, peakOut, end], [0.82, 1, 1, isLast ? 1 : 0.92]);
  const opacity = useTransform(smoothProgress, [start, peakIn, peakOut, end], [0, 1, 1, isLast ? 1 : 0.3]);
  const rotateX = useTransform(smoothProgress, [start, peakIn, peakOut, end], [8, 0, 0, isLast ? 0 : -4]);
  const glowVal = useTransform(smoothProgress, [start, peakIn, peakOut, end], [0, 0.25, 0.25, 0]);
  const borderColor = useTransform(glowVal, (v) => `rgba(233, 30, 99, ${v})`);

  return (
    <motion.div
      className="absolute inset-x-0 top-10 flex flex-col items-center overflow-hidden rounded-[30px] p-[2px] shadow-2xl"
      style={{
        scale,
        y,
        opacity,
        rotateX,
        zIndex: index + 1,
        transformOrigin: "bottom center",
        background: borderColor,
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">

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

            <div className="relative mt-8 min-h-[200px] w-full">
              {MODULES.map((mod, i) => (
                <TextSlide key={`text-${i}`} mod={mod} index={i} smoothProgress={smoothProgress} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full max-w-[620px]">
            {/* Capsule Tabs */}
            <div className="relative z-20 flex w-full justify-center gap-3">
              {MODULES.map((mod, i) => (
                <CapsuleTab key={`tab-${i}`} mod={mod} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>

            {/* Stacking Cards */}
            <div className="relative mt-[-20px] h-[520px] w-full pt-10">
              {MODULES.map((mod, i) => (
                <StepCard key={`card-${i}`} mod={mod} index={i} smoothProgress={smoothProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
