import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    num: "01",
    label: "Talk It Out",
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[32px] w-[32px]">
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
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[32px] w-[32px]">
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
    icon: (active: boolean) => (
      <svg viewBox="0 0 28 28" fill="none" className="h-[32px] w-[32px]">
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
            <motion.a
              href="#"
              className="mt-8 inline-flex items-center whitespace-nowrap rounded-[14px] bg-gradient-to-br from-[#e91e63] to-[#9c27b0] px-8 py-[14px] text-[14px] tracking-[0.28px] text-white shadow-[0px_8px_16px_rgba(233,30,99,0.34)]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              Become a Founding Member
            </motion.a>
          </div>

          {/* ───── Right Column: Vertical Stepper ───── */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative flex flex-col items-start">
              {STEPS.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;

                return (
                  <div key={step.num} className="relative flex flex-col items-start">
                    {/* Step Row */}
                    <div className="flex items-center gap-6">
                      {/* Step Number */}
                      <motion.span
                        className="w-[32px] text-right text-[17px] font-bold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        animate={{
                          color: isActive ? "#e91e63" : "#c4c4c4",
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        {step.num}
                      </motion.span>

                      {/* Circle Icon */}
                      <motion.div
                        className="relative z-10 flex items-center justify-center rounded-full"
                        animate={{
                          width: isCurrent ? 88 : 68,
                          height: isCurrent ? 88 : 68,
                          borderWidth: isCurrent ? 3 : 2,
                          borderColor: isActive ? "#e91e63" : "#e8e8e8",
                          boxShadow: isCurrent
                            ? "0 0 28px rgba(233,30,99,0.25), 0 0 56px rgba(156,39,176,0.12)"
                            : "0 0 0px rgba(233,30,99,0)",
                        }}
                        transition={{ duration: 0.5, ease: EASE }}
                        style={{
                          borderStyle: "solid",
                          borderRadius: "50%",
                          backgroundColor: "white",
                        }}
                      >
                        {/* Inner ring */}
                        <motion.div
                          className="flex items-center justify-center rounded-full"
                          animate={{
                            width: isCurrent ? 64 : 48,
                            height: isCurrent ? 64 : 48,
                            borderWidth: isCurrent ? 2 : 1,
                            borderColor: isActive ? "rgba(233,30,99,0.35)" : "#efefef",
                          }}
                          transition={{ duration: 0.5, ease: EASE }}
                          style={{
                            borderStyle: "solid",
                            borderRadius: "50%",
                          }}
                        >
                          {step.icon(isActive)}
                        </motion.div>
                      </motion.div>

                      {/* Label Pill */}
                      <motion.div
                        className="relative overflow-hidden rounded-full border-2"
                        animate={{
                          borderColor: isActive ? "#e91e63" : "#e8e8e8",
                          backgroundColor: isActive
                            ? "rgba(233,30,99,0.02)"
                            : "rgba(240,240,240,0.5)",
                          width: isCurrent ? 300 : 260,
                          height: isCurrent ? 68 : 56,
                        }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        {/* Gradient fill behind text */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, rgba(233,30,99,0.06) 0%, rgba(156,39,176,0.03) 100%)",
                          }}
                          animate={{ opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="relative flex h-full items-center px-8">
                          {/* Small dot before text when not active */}
                          {!isActive && (
                            <motion.span
                              className="mr-3 h-[6px] w-[6px] rounded-full bg-[#ddd]"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          <motion.span
                            className="font-semibold"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            animate={{
                              color: isActive ? "#e91e63" : "#c4c4c4",
                              fontSize: isCurrent ? "20px" : "17px",
                            }}
                            transition={{ duration: 0.4, ease: EASE }}
                          >
                            {step.label}
                          </motion.span>
                        </div>

                        {/* Corner accent for active pills */}
                        {isActive && (
                          <motion.div
                            className="absolute right-0 top-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                              <path
                                d="M44 0 L44 44 L22 44 Q44 44 44 22 Z"
                                fill="rgba(233,30,99,0.06)"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Connector line between steps */}
                    {i < STEPS.length - 1 && (
                      <div
                        className="relative ml-[32px] flex justify-center"
                        style={{ width: 88, height: 56, paddingLeft: 3 }}
                      >
                        {/* Vertical dashed line */}
                        <motion.div
                          className="h-full w-[2px]"
                          animate={{
                            background: i < activeStep
                              ? "linear-gradient(180deg, #e91e63, #9c27b0)"
                              : "#e8e8e8",
                          }}
                          transition={{ duration: 0.5, ease: EASE }}
                          style={{
                            maskImage:
                              "repeating-linear-gradient(180deg, black 0px, black 6px, transparent 6px, transparent 12px)",
                            WebkitMaskImage:
                              "repeating-linear-gradient(180deg, black 0px, black 6px, transparent 6px, transparent 12px)",
                          }}
                        />
                        {/* Animated dot traveling down */}
                        {i < activeStep && !reduce && (
                          <motion.div
                            className="absolute left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full"
                            style={{ background: GRAD }}
                            initial={{ top: 0, opacity: 0 }}
                            animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.3,
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
