import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
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

export default function FifthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // We have 3 modules. We'll make the section 400vh tall to have plenty of scroll room.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the progress for snappy but fluid transitions
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Header / Eyebrow Area */}
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
            <span className="bg-clip-text font-semibold text-transparent" style={{ backgroundImage: GRAD }}>
              Solace
            </span>
          </h2>
          <div className="mt-4 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />
        </div>

        {/* Main Content Area */}
        <div className="relative mt-8 flex w-full max-w-[1260px] flex-col gap-16 px-6 lg:mt-16 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Left Column (Text & Features) */}
          <div className="flex flex-1 flex-col items-start pt-6 lg:pt-16">
            <div className="inline-flex rounded-full border border-[#dde5ed] bg-[#edf1f4] px-5 py-2.5">
              <span className="text-[13.3px] font-medium text-[#1d1d1d]" style={{ fontFamily: "'Inter', sans-serif" }}>
                How it works
              </span>
            </div>

            <div className="relative mt-8 min-h-[160px] w-full">
              {MODULES.map((mod, i) => {
                // Calculate opacity and slide for the text content
                const start = i === 0 ? 0 : (i - 0.1) / MODULES.length;
                const peakIn = (i + 0.1) / MODULES.length;
                const peakOut = (i + 0.8) / MODULES.length;
                const end = (i + 1) / MODULES.length;

                const opacity = useTransform(
                  smoothProgress,
                  [start, peakIn, peakOut, end],
                  [0, 1, 1, 0]
                );
                const y = useTransform(
                  smoothProgress,
                  [start, peakIn, peakOut, end],
                  [20, 0, 0, -20]
                );

                return (
                  <motion.div
                    key={`text-${i}`}
                    className="absolute inset-0 flex flex-col items-start"
                    style={{ opacity, y, pointerEvents: "none" }}
                  >
                    <h3
                      className="text-[40px] font-semibold leading-[1.2] tracking-[-1px] text-[#1d1d1d] lg:text-[48px]"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {mod.title}
                    </h3>
                    <p
                      className="mt-4 max-w-[474px] text-[16px] font-medium leading-[1.4] text-[#4d585f] lg:text-[16.7px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {mod.desc}
                    </p>
                    
                    <div className="mt-12 flex w-full flex-col gap-8 sm:flex-row sm:gap-16">
                      {mod.features.map((feat, fi) => (
                        <div key={fi} className="flex flex-col gap-2">
                          <span
                            className="text-[28px] font-semibold text-[#1d1d1d] lg:text-[32px]"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                          >
                            {feat.num}
                          </span>
                          <span
                            className="whitespace-pre-line text-[14px] font-medium leading-[1.4] text-[#4d585f] lg:text-[14.8px]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Cards & Capsules) */}
          <div className="relative w-full max-w-[620px]">
            {/* The Capsule Tabs */}
            <div className="relative z-20 flex w-full justify-center gap-3">
              {MODULES.map((mod, i) => {
                // Each module takes up a fraction of the scroll progress (e.g., 0 to 0.33, 0.33 to 0.66, etc.)
                const start = i / MODULES.length;
                const end = (i + 1) / MODULES.length;
                
                // The loading fill percentage (0 to 100) inside the active capsule
                const fillProgress = useTransform(scrollYProgress, [start, end], [0, 100], { clamp: true });
                
                // Opacity of the background fill - only fully visible when active or completed
                // We keep it visible (opacity 1) for all scroll positions AFTER it has started
                const oStart = i === 0 ? 0 : start - 0.05;
                const pStart = i === 0 ? 0.001 : start;
                
                const fillOpacity = useTransform(
                  scrollYProgress, 
                  [oStart, pStart, 1], 
                  [i === 0 ? 1 : 0, 1, 1],
                  { clamp: true }
                );

                return (
                  <div
                    key={`tab-${i}`}
                    className="relative overflow-hidden rounded-full bg-[#edf1f4] px-6 py-2.5"
                  >
                    <span className="relative z-10 text-[13.7px] font-medium mix-blend-difference text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {mod.step}
                    </span>
                    <motion.div
                      className="absolute inset-0 z-0 bg-gradient-to-r from-[#57c6ca] via-[#7aaddf] to-[#9e92f4]"
                      style={{ 
                        width: useTransform(fillProgress, v => `${v}%`),
                        opacity: fillOpacity 
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* The Stacking Cards */}
            <div className="relative mt-[-20px] h-[520px] w-full pt-10">
              {MODULES.map((mod, i) => {
                const start = i === 0 ? 0 : (i - 0.1) / MODULES.length;
                const peakIn = (i + 0.1) / MODULES.length;

                // Cards slide in from the back (scaled down, lower y) and scale up to the front
                const scale = useTransform(smoothProgress, [start, peakIn], [0.85, 1]);
                const y = useTransform(smoothProgress, [start, peakIn], [60, 0]);
                const opacity = useTransform(smoothProgress, [start, peakIn], [0, 1]);
                const zIndex = i + 1;

                return (
                  <motion.div
                    key={`card-${i}`}
                    className="absolute inset-x-0 top-10 flex flex-col items-center overflow-hidden rounded-[30px] border border-[#dde5ed] bg-[#edf1f4] p-2 shadow-2xl"
                    style={{ scale, y, opacity, zIndex, transformOrigin: "bottom center" }}
                  >
                    <div className="flex w-full flex-col items-center rounded-[24px] bg-white p-10 shadow-sm">
                      <div className="relative h-[240px] w-full max-w-[460px] overflow-hidden rounded-lg sm:h-[336px]">
                        <img src={mod.img} alt={mod.title} className="absolute inset-0 h-full w-full object-cover" />
                      </div>
                      <div className="mt-8 flex flex-col items-center text-center">
                        <h4
                          className="text-[24px] font-semibold text-[#1d1d1d]"
                          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                          {mod.title}
                        </h4>
                        <p
                          className="mt-2 text-[16.7px] font-medium leading-[1.4] text-[#4d585f]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {mod.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
