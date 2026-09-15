import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

/* ── Bullet Points from Image ── */
const TRIAL_BULLETS = [
  "Talk about something important.",
  "Talk about something ordinary.",
  "Talk through a difficult decision.",
  "Process something that's been sitting on your mind.",
  "Or simply see what the experience feels like.",
];

/* ── Checklist Items from Image ── */
const TRIAL_CHECKLIST = [
  "Full Talk It Out Experience",
  "AI Companion Conversations",
  "No Credit Card Required",
  "Safety Features",
  "Guided Reflection Experience",
];

/* ── Plans Data ── */
const PLANS = [
  {
    id: "trial",
    name: "Free Trial",
    price: 0,
    period: "30 Free Mins",
    badge: "Start Here",
    tagline: "Zero commitment, instant access",
    desc: "A simple, welcoming place to begin with zero risk.",
    features: [
      "30 Free Minutes Included",
      "Full Voice & Text Experience",
      "No Credit Card Required",
      "100% Private & Encrypted",
    ],
    recommended: false,
    cta: "Start 30 Free Mins",
  },
  {
    id: "grow",
    name: "Grow",
    price: 25,
    period: "/ Month",
    badge: "Popular",
    tagline: "Ongoing daily reflection routine",
    desc: "For people returning whenever something is weighing on their mind.",
    features: [
      "200 Conversation Mins / Month",
      "Mood History & Emotional Trends",
      "Journaling & Reflection Prompts",
      "Pay-As-You-Go Top Ups",
    ],
    recommended: false,
    cta: "Choose Grow",
  },
  {
    id: "thrive",
    name: "Thrive",
    price: 49,
    period: "/ Month",
    badge: "Recommended",
    tagline: "Full continuity & expanded tools",
    desc: "Designed for consistent reflection and deeper wellness habit continuity.",
    features: [
      "400 Conversation Mins / Month",
      "Extended Mood History & Insights",
      "Journal Export & Wellness Library",
      "Priority AI Companion Handling",
    ],
    recommended: true,
    cta: "Choose Thrive",
  },
];

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [selectedPlan, setSelectedPlan] = useState<string>("thrive");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Viewport Pinned Scroll Transforms ── */
  const pricingWidth = useTransform(scrollYProgress, [0, 0.35, 0.65], ["100%", "100%", "48%"]);
  const pricingX = useTransform(scrollYProgress, [0, 0.35, 0.65], ["0%", "0%", "-2%"]);

  const demoOpacity = useTransform(scrollYProgress, [0.3, 0.55, 0.9], [0, 1, 1]);
  const demoX = useTransform(scrollYProgress, [0.3, 0.55, 0.9], ["60px", "0px", "0px"]);
  const demoScale = useTransform(scrollYProgress, [0.3, 0.55, 0.9], [0.92, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-gradient-to-b from-white via-[#fcfbfe] to-white">
      {/* MacBook Viewport Pinned Frame */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center items-center overflow-hidden px-6 py-6">
        
        {/* Background Solace Emblem watermark */}
        <div className="pointer-events-none absolute right-[2%] top-[8%] z-0 hidden xl:block opacity-20">
          <SolaceEmblem size={130} tilt={14} />
        </div>

        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center z-10">
            <span
              className="rounded-[12px] border border-[#e91e63] px-3.5 py-[5px] text-[11px] font-semibold uppercase tracking-wider"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
              }}
            >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
                Pricing & Free Trial
              </span>
            </span>
            <h2
              className="mt-2.5 text-[clamp(26px,3.2vw,40px)] leading-[1.1] tracking-[-1px] text-slate-900"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              Simple Plans.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
                Or Start With 30 Free Minutes.
              </span>
            </h2>
            <p
              className="mt-1.5 text-[13.5px] text-slate-500 max-w-[480px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore our monthly plans or scroll down to unlock your 30 free trial minutes.
            </p>
          </div>

          {/* Main Animated Viewport Grid */}
          <div className="relative mt-7 flex w-full max-w-[1200px] items-center justify-between gap-6 lg:gap-8">
            
            {/* ── LEFT: Luxury Pricing Cards ── */}
            <motion.div
              className="z-10 flex flex-col items-center"
              style={{
                width: reduce ? "100%" : pricingWidth,
                x: reduce ? 0 : pricingX,
              }}
            >
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {PLANS.map((plan) => {
                  const isSelected = selectedPlan === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`group relative flex cursor-pointer flex-col justify-between rounded-[24px] p-5 transition-all duration-300 ${
                        plan.recommended
                          ? "border-2 border-[#e91e63]/40 bg-gradient-to-b from-white via-pink-50/30 to-white shadow-[0_14px_40px_rgba(233,30,99,0.14)] hover:shadow-[0_20px_50px_rgba(233,30,99,0.22)] hover:scale-[1.02]"
                          : isSelected
                          ? "border-2 border-pink-300 bg-white shadow-[0_10px_30px_rgba(233,30,99,0.08)]"
                          : "border border-slate-200/80 bg-white/95 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-[1.01]"
                      }`}
                    >
                      {/* Floating Badge */}
                      {plan.recommended && (
                        <div className="absolute -top-3.5 right-4">
                          <span
                            className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
                            style={{ background: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* Title & Tagline */}
                        <h3
                          className="text-[17px] font-bold text-slate-900"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {plan.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] font-medium text-pink-600/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {plan.tagline}
                        </p>

                        {/* Price */}
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {plan.price === 0 ? "Free" : `$${plan.price}`}
                          </span>
                          <span className="text-[12px] font-medium text-slate-400">{plan.period}</span>
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-[12px] leading-relaxed text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {plan.desc}
                        </p>

                        <div className="my-3.5 h-[1px] w-full bg-slate-100" />

                        {/* Feature List */}
                        <ul className="flex flex-col gap-2">
                          {plan.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 border border-emerald-200">
                                ✓
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <button
                        type="button"
                        className={`mt-5 flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[12.5px] font-semibold transition-all ${
                          plan.recommended
                            ? "text-white shadow-[0_6px_20px_rgba(233,30,99,0.32)] hover:scale-[1.02]"
                            : "border border-slate-300 text-slate-700 hover:border-pink-300 hover:bg-pink-50/30 hover:text-slate-900"
                        }`}
                        style={
                          plan.recommended
                            ? { background: GRAD, fontFamily: "'Montserrat', sans-serif" }
                            : { fontFamily: "'Montserrat', sans-serif" }
                        }
                      >
                        {plan.cta}
                        <span className="text-[14px]">→</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── RIGHT: 30 Free Minutes Trial Model (Revealed on Scroll - Content from Reference Image) ── */}
            <motion.div
              className="z-20 hidden w-[48%] shrink-0 lg:block"
              style={{
                opacity: reduce ? 1 : demoOpacity,
                x: reduce ? 0 : demoX,
                scale: reduce ? 1 : demoScale,
              }}
            >
              <div className="relative overflow-hidden rounded-[26px] border border-pink-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(233,30,99,0.15)] backdrop-blur-2xl">
                
                {/* Header Subtitle & Title */}
                <div className="text-center">
                  <span className="text-[12px] font-semibold text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Every new Solace account includes:
                  </span>
                  <h3
                    className="mt-1 text-[28px] font-extrabold text-slate-900 tracking-[-0.5px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    30 Free Minutes
                  </h3>
                  <p className="mt-0.5 text-[12.5px] font-medium text-pink-600/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Use them however you&apos;d like.
                  </p>
                </div>

                {/* Bullet List from Image */}
                <ul className="mt-4 flex flex-col gap-2 rounded-2xl bg-pink-50/40 p-4 border border-pink-100/60">
                  {TRIAL_BULLETS.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[12px] font-medium text-slate-700">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: GRAD }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Subheading */}
                <div className="mt-4 text-center">
                  <span
                    className="text-[12.5px] font-bold text-slate-900 uppercase tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Included During Your Trial
                  </span>
                </div>

                {/* 2-Column Checklist from Image */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11.5px] font-semibold text-slate-700">
                  {TRIAL_CHECKLIST.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 border border-emerald-200">
                        ✓
                      </div>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[13.5px] font-bold text-white shadow-[0_8px_26px_rgba(233,30,99,0.34)] transition-all hover:scale-[1.02]"
                  style={{ background: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                >
                  Start With 30 Free Minutes →
                </button>

                {/* Footer note */}
                <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3 text-[10.5px] text-slate-400">
                  <span>⚡ Instant Activation</span>
                  <span>🔒 100% Private & Encrypted</span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
