import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Trial features ── */
const TRIAL_BULLETS = [
  "Talk about something important.",
  "Talk about something ordinary.",
  "Talk through a difficult decision.",
  "Process something that's been sitting on your mind.",
  "Or simply see what the experience feels like.",
];

const TRIAL_INCLUDES = [
  "Full Talk It Out Experience",
  "AI Companion Conversations",
  "No Credit Card Required",
  "Safety Features",
  "Guided Reflection Experience",
];

/* ── Plans Data ── */
type Plan = {
  id: string;
  name: string;
  price: number;
  minutes: number;
  description: string;
  includesLabel: string;
  features: string[];
  bestFor: string;
  recommended: boolean;
  icon: string;
  iconBg: string;
};

const PLANS: Plan[] = [
  {
    id: "grow",
    name: "Grow",
    price: 25,
    minutes: 200,
    description:
      "For people who want a place they can return to whenever something is weighing on their mind. Whether it's a difficult week, a challenging decision, or everyday mental noise, Grow provides ongoing access to the conversations that help people process what they're carrying.",
    includesLabel: "INCLUDES",
    features: [
      "200 Monthly Conversation Minutes",
      "Mood History & Trends",
      "Journaling",
      "Curated Wellness Tools",
      "Usage History",
      "Pay-As-You-Go Top Ups",
    ],
    bestFor:
      "People who want regular access to Solace as part of their personal reflection routine.",
    recommended: false,
    icon: "⚡",
    iconBg: "linear-gradient(135deg, #7c4dff 0%, #536dfe 100%)",
  },
  {
    id: "thrive",
    name: "Thrive",
    price: 49,
    minutes: 400,
    description:
      "For people who want Solace to be a consistent part of their ongoing reflection and wellness routine. Designed for users who value deeper continuity, more frequent conversations, and expanded access to the full Solace experience.",
    includesLabel: "INCLUDES EVERYTHING IN GROW PLUS",
    features: [
      "400 Monthly Conversation Minutes",
      "Extended Mood History",
      "Journal Export",
      "Full Wellness Library",
      "Detailed Usage Insights",
      "Priority Handling",
      "Pay-As-You-Go Top Ups",
    ],
    bestFor:
      "People who expect to use Solace regularly and want greater flexibility and continuity throughout the month.",
    recommended: true,
    icon: "👑",
    iconBg: GRAD,
  },
];

/* ── Check icon ── */
function GreenCheckIcon() {
  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/70">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8.5L6.5 12L13 4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Bullet dot ── */
function GradientBulletDot() {
  return (
    <span
      className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full shadow-[0_0_8px_rgba(233,30,99,0.4)]"
      style={{ background: GRAD }}
    />
  );
}

/* ══════════════════════════════════════════════
   MAIN LIGHT-THEME PRICING & DEMO SECTION
   ══════════════════════════════════════════════ */
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"trial" | "plans">("trial");
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdfbfe] to-white px-6 py-20 md:py-28"
    >
      {/* Background Solace Emblem Watermarks */}
      <div className="pointer-events-none absolute -right-[4%] top-[12%] z-0 hidden opacity-25 xl:block">
        <SolaceEmblem size={240} tilt={14} />
      </div>
      <div className="pointer-events-none absolute -left-[5%] bottom-[10%] z-0 hidden opacity-20 xl:block">
        <SolaceEmblem size={220} tilt={-18} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <motion.span
            className="rounded-[12px] border border-[#e91e63] px-4 py-[5px] text-[11px] font-semibold uppercase tracking-wider"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage:
                "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRAD }}
            >
              Pricing & Trial
            </span>
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="mt-4 text-center text-[clamp(28px,3.8vw,44px)] leading-[1.15] tracking-[-1px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Simple, Transparent Access to{" "}
            <br className="hidden sm:inline" />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRAD }}
            >
              Your AI Companion
            </span>
          </motion.h2>

          <motion.p
            className="mt-3 max-w-[540px] text-[15px] text-[#666]"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            Begin with 30 free minutes. Choose an ongoing plan whenever you feel ready.
          </motion.p>

          <motion.div
            className="mt-3 h-[4px] w-[56px] rounded-full"
            style={{ background: GRAD }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          />

          {/* ── Creative Liquid Glass Dock Switcher ── */}
          <motion.div
            className="mt-9 flex items-center gap-2 rounded-full border border-pink-200/70 bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(233,30,99,0.08)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("trial")}
              className={`relative cursor-pointer rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                activeTab === "trial"
                  ? "text-white shadow-[0_4px_16px_rgba(233,30,99,0.35)]"
                  : "text-[#555] hover:text-black"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {activeTab === "trial" && (
                <motion.div
                  layoutId="pricingTabPill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: GRAD }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>🎁</span> Start 30 Free Minutes
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("plans")}
              className={`relative cursor-pointer rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                activeTab === "plans"
                  ? "text-white shadow-[0_4px_16px_rgba(233,30,99,0.35)]"
                  : "text-[#555] hover:text-black"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {activeTab === "plans" && (
                <motion.div
                  layoutId="pricingTabPill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: GRAD }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>💎</span> Monthly Plans (Grow & Thrive)
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── Content Area with Animated Switcher ── */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            {activeTab === "trial" ? (
              /* ── FREE TRIAL VIEW ── */
              <motion.div
                key="trial-view"
                initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="mx-auto max-w-[820px]"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-pink-200/80 bg-white/95 p-8 md:p-12 shadow-[0_20px_60px_rgba(233,30,99,0.08)] backdrop-blur-2xl">
                  {/* Top Ambient Glow */}
                  <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-[200px] w-[360px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                    style={{ background: GRAD }}
                  />

                  {/* Header */}
                  <div className="text-center relative z-10">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d81b60]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      ✨ Zero Risk Trial
                    </span>
                    <h3
                      className="mt-3 text-[clamp(28px,3.2vw,38px)] font-bold tracking-tight text-slate-900"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Start With 30 Free Minutes
                    </h3>
                    <p
                      className="mt-1.5 text-[15px] font-medium text-slate-500"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      A simple, welcoming place to begin.
                    </p>
                  </div>

                  {/* Callout Info Box */}
                  <div className="relative z-10 mt-8 rounded-[20px] border border-pink-100 bg-gradient-to-r from-pink-50/40 via-purple-50/20 to-pink-50/40 p-6 text-center">
                    <p
                      className="text-[13px] font-semibold uppercase tracking-wider text-slate-500"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Every new Solace account includes:
                    </p>
                    <p
                      className="mt-1.5 text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                    >
                      30 Free Minutes
                    </p>
                    <p
                      className="mt-1 text-[13.5px] text-slate-600"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Use them however you&apos;d like — whenever you need a moment.
                    </p>
                  </div>

                  {/* 2-Column Grid: What You Can Do + Included Features */}
                  <div className="relative z-10 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    {/* Left: Ways to use your minutes */}
                    <div className="rounded-[20px] border border-slate-100 bg-[#fafafa]/80 p-6">
                      <h4
                        className="text-[13px] font-bold uppercase tracking-wider text-slate-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Explore in Your Own Time
                      </h4>
                      <ul className="mt-4 flex flex-col gap-3">
                        {TRIAL_BULLETS.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <GradientBulletDot />
                            <span
                              className="text-[13.5px] leading-relaxed text-slate-600"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Included features */}
                    <div className="rounded-[20px] border border-emerald-100/80 bg-emerald-50/20 p-6">
                      <h4
                        className="text-[13px] font-bold uppercase tracking-wider text-emerald-800"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Included During Your Trial
                      </h4>
                      <ul className="mt-4 flex flex-col gap-3">
                        {TRIAL_INCLUDES.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <GreenCheckIcon />
                            <span
                              className="text-[13.5px] font-medium text-slate-700"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="relative z-10 mt-10 flex flex-col items-center">
                    <button
                      type="button"
                      className="group flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(233,30,99,0.32)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_38px_rgba(233,30,99,0.45)]"
                      style={{ background: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Start With 30 Free Minutes
                      <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                    <p
                      className="mt-3 text-[12px] text-slate-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      No credit card required • Instant access in browser & app
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── MEMBERSHIP PLANS VIEW (Grow & Thrive) ── */
              <motion.div
                key="plans-view"
                initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 max-w-[1020px] mx-auto"
              >
                {PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-[26px] p-7 md:p-9 transition-all duration-300 ${
                      plan.recommended
                        ? "border-2 border-[#e91e63]/40 bg-gradient-to-b from-white via-[#fff8fa] to-white shadow-[0_20px_50px_rgba(233,30,99,0.12)] hover:shadow-[0_24px_60px_rgba(233,30,99,0.18)]"
                        : "border border-slate-200/80 bg-white/95 shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.08)] hover:border-slate-300"
                    }`}
                  >
                    {/* Recommended Floating Badge */}
                    {plan.recommended && (
                      <div className="absolute -top-3.5 right-7">
                        <span
                          className="rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(233,30,99,0.35)]"
                          style={{ background: GRAD, fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Recommended
                        </span>
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-xl shadow-sm"
                        style={{ background: plan.iconBg, color: "white" }}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold text-slate-900"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {plan.name}
                        </h3>
                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span
                            className="text-3xl font-extrabold text-slate-900"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            ${plan.price}
                          </span>
                          <span className="text-sm font-medium text-slate-400">/ Month</span>
                        </div>
                      </div>
                    </div>

                    {/* Minutes Highlight Pill */}
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-xl border border-pink-200/60 bg-pink-50/40 px-3.5 py-1.5">
                      <span className="text-sm font-bold text-[#d81b60]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {plan.minutes} Minutes Per Month
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-3 text-[13px] leading-relaxed text-slate-600"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {plan.description}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-[1px] w-full bg-slate-100" />

                    {/* Feature list */}
                    <p
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-400"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {plan.includesLabel}
                    </p>
                    <ul className="mt-3.5 flex flex-col gap-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <GreenCheckIcon />
                          <span
                            className="text-[13.5px] font-medium text-slate-700"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Best For Box */}
                    <div className="mt-6 rounded-[16px] border border-slate-100 bg-[#fafafa] p-4">
                      <p
                        className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Best For
                      </p>
                      <p
                        className="mt-1 text-[12.5px] leading-relaxed text-slate-600"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {plan.bestFor}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-7">
                      <button
                        type="button"
                        className={`group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-semibold transition-all duration-300 ${
                          plan.recommended
                            ? "text-white shadow-[0_8px_24px_rgba(233,30,99,0.3)] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(233,30,99,0.42)]"
                            : "border border-slate-300 bg-white text-slate-800 hover:border-[#e91e63]/50 hover:bg-pink-50/20 hover:text-black"
                        }`}
                        style={
                          plan.recommended
                            ? { background: GRAD, fontFamily: "'Montserrat', sans-serif" }
                            : { fontFamily: "'Montserrat', sans-serif" }
                        }
                      >
                        Choose {plan.name}
                        <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Guarantee Banner */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-center text-[13px] text-slate-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> Cancel anytime in one click
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> 100% Private & encrypted
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> Top-up minutes never expire
          </div>
        </motion.div>
      </div>
    </section>
  );
}
