import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import svgPaths from "../imports/Section3-1/svg-jmap5htj3m";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

function JourneyCurvedArrow({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 192.752 28.0938"
      fill="none"
      className={`h-[26px] w-[110px] ${className}`}
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d={svgPaths.p3bf54f80} fill="url(#journey_arrow_fill)" />
      <path d={svgPaths.p2b5e9b00} stroke="url(#journey_arrow_stroke)" strokeLinecap="round" strokeWidth="2.92366" />
      <defs>
        <linearGradient id="journey_arrow_fill" gradientUnits="userSpaceOnUse" x1="1.14138" x2="19.5851" y1="8.52298" y2="69.0184">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="journey_arrow_stroke" gradientUnits="userSpaceOnUse" x1="1.87185" x2="12.6787" y1="17.1867" y2="20.093">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

const STEPS = [
  {
    num: "01",
    label: "Talk It Out",
    subtitle: "Express freely without filters",
    bubble: "How are you feeling tonight?",
    response: "I'm listening whenever you're ready — no rush, no judgment.",
    tags: ["Voice or Text", "24/7 Companion", "100% Private"],
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[28px] w-[28px]">
        <path
          d="M14 3C7.925 3 3 7.177 3 12.4c0 2.95 1.575 5.6 4.05 7.35-.15 1.575-.75 3-1.8 4.2a.75.75 0 00.525 1.275c2.7 0 4.8-1.05 6.15-2.1.675.075 1.35.15 2.075.15C20.075 23.275 25 19.1 25 13.875 25 7.177 20.075 3 14 3z"
          fill={active ? "url(#iconGrad1)" : "#d4d4d4"}
        />
        <defs>
          <linearGradient id="iconGrad1" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e91e63" />
            <stop offset="1" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Reflect",
    subtitle: "Gain clarity on your thoughts",
    quote: "Understanding where your emotions come from turns overwhelming thoughts into clear steps.",
    metric: { val: "88%", desc: "Feel calmer after checking in" },
    tags: ["Mood Tracking", "Guided Prompts", "Daily Insights"],
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[28px] w-[28px]">
        <circle cx="14" cy="14" r="10" stroke={active ? "url(#iconGrad2)" : "#d4d4d4"} strokeWidth="2" fill="none" />
        <path d="M14 8v6l4 2" stroke={active ? "url(#iconGrad2)" : "#d4d4d4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="4" x2="19" y2="4" stroke={active ? "url(#iconGrad2)" : "#d4d4d4"} strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="iconGrad2" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e91e63" />
            <stop offset="1" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Grow",
    subtitle: "Build gentle, lasting habits",
    habit: "Daily self-awareness check-in",
    streak: "Consistent emotional resilience",
    tags: ["Gentle Pacing", "Mindful Tools", "Lasting Calm"],
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[28px] w-[28px]">
        <path d="M14 24V12" stroke={active ? "url(#iconGrad3)" : "#d4d4d4"} strokeWidth="2" strokeLinecap="round" />
        <path d="M14 12C14 12 10 8 7 8c-3 0-4 3-3 5s4 4 10 4" fill={active ? "url(#iconGrad3)" : "#d4d4d4"} opacity={0.6} />
        <path d="M14 12C14 12 18 8 21 8c3 0 4 3 3 5s-4 4-10 4" fill={active ? "url(#iconGrad3)" : "#d4d4d4"} opacity={0.8} />
        <path d="M14 16c-2 2-5 5-5 8h10c0-3-3-6-5-8z" fill={active ? "url(#iconGrad3)" : "#d4d4d4"} opacity={0.3} />
        <defs>
          <linearGradient id="iconGrad3" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e91e63" />
            <stop offset="1" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.72) setActiveStep(2);
      else if (latest > 0.38) setActiveStep(1);
      else setActiveStep(0);
    });
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6">
        {/* Floating emblem in top-right empty space */}
        <div className="pointer-events-none absolute top-[6%] right-[3%] z-0 hidden xl:block opacity-40">
          <SolaceEmblem size={115} tilt={18} />
        </div>
        <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ───── Left Column ───── */}
          <div className="flex flex-col items-start justify-center">
            {/* Badge */}
            <span
              className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundImage:
                  "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
              }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: GRAD }}
              >
                Your Journey
              </span>
            </span>

            {/* Heading */}
            <h2
              className="mt-6 text-[clamp(34px,4.2vw,52px)] leading-[1.08] tracking-[-1.5px] text-black"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              Small conversations.
              <br />
              <span
                className="bg-clip-text font-semibold italic text-transparent"
                style={{ backgroundImage: GRAD }}
              >
                meaningful
              </span>{" "}
              change.
            </h2>

            {/* Description */}
            <p
              className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-[#444]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Every conversation becomes another step toward understanding
              yourself, building healthier habits, and growing over time.
            </p>

            {/* Quote */}
            <div className="mt-8 max-w-[420px]">
              <span
                className="bg-clip-text text-[28px] font-bold leading-none text-transparent"
                style={{ backgroundImage: GRAD }}
              >
                &ldquo;
              </span>
              <p
                className="mt-1 text-[clamp(17px,1.8vw,21px)] leading-[1.4] text-[#222]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                Growth doesn&apos;t happen all at once.
                <br />
                It happens one conversation at a time.
              </p>
              <span
                className="mt-1 inline-block bg-clip-text text-[28px] font-bold leading-none text-transparent"
                style={{ backgroundImage: GRAD }}
              >
                &rdquo;
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-[14px] bg-gradient-to-br from-[#e91e63] to-[#9c27b0] px-8 py-[14px] text-[14px] tracking-[0.28px] text-white shadow-[0px_8px_16px_rgba(233,30,99,0.34)] transition-transform hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                Become a Founding Member
              </motion.a>
              <div className="translate-y-[-3px]">
                <JourneyCurvedArrow />
              </div>
            </div>
          </div>

          {/* ───── Right Column: Creative Staggered Step Cards ───── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[430px] w-[min(430px,90vw)]">
              {STEPS.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;

                // Each card has a unique resting tilt and offset when inactive
                const restRotate = [5, -4, 6][i] ?? 0;
                const restX = [16, -12, 20][i] ?? 0;
                const restY = [6, 16, -4][i] ?? 0;

                return (
                  <motion.div
                    key={step.num}
                    className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] p-7 backdrop-blur-[12px]"
                    animate={{
                      rotate: isCurrent ? 0 : restRotate,
                      x: isCurrent ? 0 : restX,
                      y: isCurrent ? 0 : restY,
                      scale: isCurrent ? 1 : isActive ? 0.92 : 0.85,
                      opacity: isCurrent ? 1 : isActive ? 0.6 : 0.35,
                      zIndex: isCurrent ? 10 : isActive ? 5 : 0,
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                    style={{
                      background: isCurrent
                        ? "linear-gradient(150deg, rgba(255,255,255,0.98) 0%, rgba(254,242,250,0.96) 100%)"
                        : "rgba(248,248,250,0.9)",
                      boxShadow: isCurrent
                        ? "0 24px 70px rgba(233,30,99,0.16), 0 4px 20px rgba(0,0,0,0.06)"
                        : "0 6px 20px rgba(0,0,0,0.04)",
                      border: isCurrent
                        ? "1.5px solid rgba(233,30,99,0.35)"
                        : "1.5px solid rgba(220,220,230,0.7)",
                    }}
                  >
                    {/* Header: Icon, Label & Glowing Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[16px] shadow-sm"
                          style={{
                            background: isCurrent
                              ? "linear-gradient(135deg, rgba(233,30,99,0.15), rgba(156,39,176,0.1))"
                              : "rgba(240,240,244,0.8)",
                            border: isCurrent ? "1px solid rgba(233,30,99,0.25)" : "1px solid #eee",
                          }}
                        >
                          {step.icon(isCurrent)}
                        </div>
                        <div className="flex flex-col">
                          <span
                            className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              color: isCurrent ? "#e91e63" : "#bbb",
                            }}
                          >
                            Step {step.num}
                          </span>
                          <span
                            className="text-[20px] font-bold leading-tight tracking-[-0.4px]"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              color: isCurrent ? "#1d1d1d" : "#999",
                            }}
                          >
                            {step.label}
                          </span>
                        </div>
                      </div>

                      {/* Glowing Step Number */}
                      <div className="relative select-none pr-1">
                        {isCurrent && (
                          <motion.span
                            className="pointer-events-none absolute inset-0 blur-lg"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              backgroundImage: GRAD,
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }}
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {step.num}
                          </motion.span>
                        )}
                        <span
                          className="relative text-[48px] font-black leading-none tracking-tight"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            backgroundImage: isCurrent ? GRAD : undefined,
                            WebkitBackgroundClip: isCurrent ? "text" : undefined,
                            WebkitTextFillColor: isCurrent ? "transparent" : "#ddd",
                            color: isCurrent ? "transparent" : "#ddd",
                            filter: isCurrent ? "drop-shadow(0 0 10px rgba(233,30,99,0.4))" : undefined,
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Rich Animated Interior Content */}
                    <div className="my-3 flex flex-col justify-center gap-3">
                      {i === 0 && (
                        <div className="flex flex-col gap-2.5">
                          <div className="rounded-[16px] border border-[#e91e63]/20 bg-gradient-to-r from-[#e91e63]/5 to-[#9c27b0]/5 p-3.5 shadow-sm">
                            <p className="text-[13px] font-medium text-[#444]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              💬 <span className="font-semibold text-[#1d1d1d]">&quot;{step.bubble}&quot;</span>
                            </p>
                            <p className="mt-1.5 text-[12px] leading-[1.45] text-[#666]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              {step.response}
                            </p>
                          </div>
                        </div>
                      )}

                      {i === 1 && (
                        <div className="flex flex-col gap-2.5">
                          <div className="rounded-[16px] border border-[#e91e63]/20 bg-gradient-to-r from-[#e91e63]/5 to-[#9c27b0]/5 p-3.5 shadow-sm">
                            <p className="text-[12.5px] italic leading-[1.5] text-[#333]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              &ldquo;{step.quote}&rdquo;
                            </p>
                            <div className="mt-2.5 flex items-center gap-2">
                              <span className="text-[16px] font-bold text-[#e91e63]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                {step.metric?.val}
                              </span>
                              <span className="text-[11.5px] font-medium text-[#666]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                {step.metric?.desc}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {i === 2 && (
                        <div className="flex flex-col gap-2.5">
                          <div className="rounded-[16px] border border-[#e91e63]/20 bg-gradient-to-r from-[#e91e63]/5 to-[#9c27b0]/5 p-3.5 shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-semibold text-[#1d1d1d]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                🌱 {step.habit}
                              </span>
                              <span className="rounded-full bg-[#e91e63]/10 px-2 py-0.5 text-[10.5px] font-bold text-[#e91e63]">
                                Active
                              </span>
                            </div>
                            <p className="mt-1.5 text-[12px] text-[#666]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              {step.streak}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Feature Tags / Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#e91e63]/20 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-[#555] shadow-xs"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Accent Progress Line */}
                    {isCurrent ? (
                      <motion.div
                        className="h-[3.5px] w-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #e91e63, #9c27b0, transparent)" }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                      />
                    ) : (
                      <div className="h-[2px] w-full rounded-full bg-[#eee]" />
                    )}
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

