import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

/* ── Trial Feature Bullets ── */
const TRIAL_BULLETS = [
  { icon: "💬", text: "Talk about something important" },
  { icon: "🌿", text: "Talk through a difficult decision" },
  { icon: "🔮", text: "Process something weighing on your mind" },
  { icon: "✨", text: "Or simply see what the experience feels like" },
];

/* ── Plans Data ── */
const PLANS = [
  {
    id: "trial",
    name: "Free Trial",
    price: 0,
    period: "30 Free Mins",
    badge: null,
    tagline: "Zero commitment, instant access",
    desc: "A welcoming place to begin with zero risk. No card needed.",
    features: [
      "30 Free Minutes Included",
      "Full Voice & Text Experience",
      "No Credit Card Required",
      "100% Private & Encrypted",
    ],
    recommended: false,
    cta: "Start Free",
    accent: "#e91e63",
  },
  {
    id: "grow",
    name: "Grow",
    price: 25,
    period: "/ month",
    badge: "Popular",
    tagline: "For ongoing daily reflection",
    desc: "Return whenever something is weighing on your mind.",
    features: [
      "200 Conversation Mins / Month",
      "Mood History & Emotional Trends",
      "Journaling & Reflection Prompts",
      "Pay-As-You-Go Top Ups",
    ],
    recommended: false,
    cta: "Choose Grow",
    accent: "#7c3aed",
  },
  {
    id: "thrive",
    name: "Thrive",
    price: 49,
    period: "/ month",
    badge: "Recommended",
    tagline: "Full continuity & expanded tools",
    desc: "Built for consistent reflection and deeper wellness continuity.",
    features: [
      "400 Conversation Mins / Month",
      "Extended Mood History & Insights",
      "Journal Export & Wellness Library",
      "Priority AI Companion Handling",
    ],
    recommended: true,
    cta: "Choose Thrive",
    accent: "#e91e63",
  },
];

export default function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [selectedPlan, setSelectedPlan] = useState<string>("thrive");

  /* ── Scroll-driven transforms — full bidirectional range ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Cards panel shrinks and slides left from 40%→65% of scroll progress */
  const pricingWidth = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["100%", "100%", "48%", "48%"]
  );
  const pricingX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0%", "0%", "-2%", "-2%"]
  );

  /* Trial panel slides in from right starting at 25% scroll */
  const demoOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.9, 1],
    [0, 1, 1, 1]
  );
  const demoX = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.9, 1],
    ["80px", "0px", "0px", "0px"]
  );
  const demoScale = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.9, 1],
    [0.9, 1, 1, 1]
  );

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-gradient-to-b from-white via-[#fdfbfe] to-white">
      {/* ── Sticky Viewport ── */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center items-center overflow-hidden px-6 py-6">

        {/* Background Watermark */}
        <div className="pointer-events-none absolute right-[2%] top-[8%] z-0 hidden xl:block opacity-[0.12]">
          <SolaceEmblem size={140} tilt={14} />
        </div>

        {/* Soft radial glow backdrop */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(233,30,99,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 50%, rgba(156,39,176,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center">

          {/* ── Section Header ── */}
          <div className="text-center">
            <span
              className="rounded-[12px] border border-[#e91e63] px-3.5 py-[5px] text-[11px] font-semibold uppercase tracking-wider"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.10), rgba(156,39,176,0.10))",
              }}
            >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
                Pricing & Free Trial
              </span>
            </span>
            <h2
              className="mt-2.5 text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-[-1px] text-slate-900"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              Simple Plans.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
                Start Free.
              </span>
            </h2>
            <p
              className="mt-1.5 text-[13px] text-slate-500 max-w-[440px] mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll to reveal your 30 free trial minutes — no card, no commitment.
            </p>
          </div>

          {/* ── Animated Grid ── */}
          <div className="relative mt-6 flex w-full max-w-[1200px] items-stretch justify-between gap-6 lg:gap-8">

            {/* ── LEFT: Pricing Cards ── */}
            <motion.div
              className="z-10 flex h-full flex-col items-center"
              style={{
                width: reduce ? "100%" : pricingWidth,
                x: reduce ? 0 : pricingX,
              }}
            >
              <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {PLANS.map((plan) => {
                  const isSelected = selectedPlan === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`group relative flex cursor-pointer flex-col justify-between rounded-[22px] p-5 transition-all duration-300 ${
                        plan.recommended
                          ? "border-2 border-[#e91e63]/50 bg-gradient-to-b from-pink-50/60 via-white to-white shadow-[0_16px_48px_rgba(233,30,99,0.16)] hover:shadow-[0_22px_56px_rgba(233,30,99,0.24)] hover:scale-[1.02]"
                          : isSelected
                          ? "border-2 border-purple-300/60 bg-white shadow-[0_10px_30px_rgba(124,58,237,0.1)] scale-[1.01]"
                          : "border border-slate-200/80 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] hover:scale-[1.01]"
                      }`}
                    >
                      {/* Recommended glow bg */}
                      {plan.recommended && (
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-30"
                          style={{
                            background:
                              "radial-gradient(ellipse at top, rgba(233,30,99,0.12) 0%, transparent 65%)",
                          }}
                        />
                      )}

                      {/* Badge */}
                      {plan.badge && (
                        <div className="absolute -top-3.5 right-4 z-10">
                          <span
                            className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
                            style={{
                              background:
                                plan.recommended ? GRAD : "linear-gradient(135deg, #7c3aed, #5b21b6)",
                              fontFamily: "'Montserrat', sans-serif",
                            }}
                          >
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* Plan name */}
                        <div className="flex items-center gap-2">
                          <h3
                            className="text-[16px] font-bold text-slate-900"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {plan.name}
                          </h3>
                        </div>
                        <p
                          className="mt-0.5 text-[11px] font-medium text-pink-600/80"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {plan.tagline}
                        </p>

                        {/* Price */}
                        <div className="mt-3 flex items-baseline gap-1">
                          <span
                            className="text-[28px] font-extrabold text-slate-900"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {plan.price === 0 ? "Free" : `$${plan.price}`}
                          </span>
                          <span className="text-[11.5px] font-medium text-slate-400">
                            {plan.period}
                          </span>
                        </div>

                        {/* Desc */}
                        <p
                          className="mt-2 text-[11.5px] leading-relaxed text-slate-500"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {plan.desc}
                        </p>

                        <div className="my-3.5 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                        {/* Features */}
                        <ul className="flex flex-col gap-1.5">
                          {plan.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-start gap-2 text-[11.5px] font-medium text-slate-700"
                            >
                              <span
                                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white shadow-sm"
                                style={{ background: GRAD }}
                              >
                                ✓
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <button
                        type="button"
                        className={`mt-5 flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[12px] font-semibold transition-all ${
                          plan.recommended
                            ? "text-white shadow-[0_6px_20px_rgba(233,30,99,0.32)] hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(233,30,99,0.42)]"
                            : "border border-slate-300 text-slate-700 hover:border-pink-300 hover:bg-pink-50/30 hover:text-slate-900"
                        }`}
                        style={
                          plan.recommended
                            ? { background: GRAD, fontFamily: "'Montserrat', sans-serif" }
                            : { fontFamily: "'Montserrat', sans-serif" }
                        }
                      >
                        {plan.cta}
                        <span className="text-[13px]">→</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── RIGHT: 30-Minute Trial Panel (Revealed on Scroll) ── */}
            <motion.div
              className="z-20 hidden w-[48%] shrink-0 lg:block"
              style={{
                opacity: reduce ? 1 : demoOpacity,
                x: reduce ? 0 : demoX,
                scale: reduce ? 1 : demoScale,
              }}
            >
              {/* Light-themed Trial Card — matches pricing cards */}
              <div
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border-2 border-[#e91e63]/40 bg-gradient-to-b from-pink-50/60 via-white to-white p-5 shadow-[0_16px_48px_rgba(233,30,99,0.14)]"
              >
                {/* Subtle top-right glow */}
                <div
                  className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-2xl opacity-20"
                  style={{ background: "radial-gradient(circle, #e91e63, transparent)" }}
                />

                {/* Top: Badge + Headline */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-[3px] text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ background: GRAD }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                    Free Trial
                  </div>

                  {/* Headline */}
                  <h3
                    className="mt-2.5 text-[28px] font-extrabold tracking-[-1px] text-slate-900 leading-[1.1]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    30{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: GRAD }}
                    >
                      Free
                    </span>{" "}
                    Minutes
                  </h3>
                  <p
                    className="mt-1 text-[11.5px] font-medium text-pink-600/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Every new Solace account includes this — use them however you&apos;d like.
                  </p>

                  <div className="my-3.5 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2">
                    {TRIAL_BULLETS.map((b) => (
                      <li key={b.text} className="flex items-center gap-2.5 text-[12px] font-medium text-slate-700">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px]"
                          style={{
                            background: "linear-gradient(135deg, rgba(233,30,99,0.10), rgba(156,39,176,0.08))",
                            border: "1px solid rgba(233,30,99,0.18)",
                          }}
                        >
                          {b.icon}
                        </span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: CTA + trust line */}
                <div className="relative z-10 mt-5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-bold text-white shadow-[0_6px_20px_rgba(233,30,99,0.32)] transition-all hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(233,30,99,0.42)]"
                    style={{ background: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Start With 30 Free Minutes
                    <span className="text-[14px]">→</span>
                  </button>
                  <div className="mt-3 flex items-center justify-center gap-4 text-[10.5px] text-slate-400">
                    <span>⚡ Instant Activation</span>
                    <span className="h-3 w-[1px] bg-slate-200" />
                    <span>🔒 100% Private</span>
                    <span className="h-3 w-[1px] bg-slate-200" />
                    <span>✦ No Card Needed</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
