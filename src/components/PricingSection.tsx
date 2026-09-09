import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

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

/* ── Plans ── */
type Plan = {
  name: string;
  price: number;
  minutes: number;
  description: string;
  includesLabel: string;
  features: string[];
  bestFor: string;
  recommended: boolean;
  icon: string;
};

const PLANS: Plan[] = [
  {
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
  },
  {
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
  },
];

/* ── Check icon ── */
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#4caf50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Bullet dot ── */
function BulletDot() {
  return (
    <span
      className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full"
      style={{ background: GRAD }}
    />
  );
}

/* ── Check circle for trial includes ── */
function CheckCircle() {
  return (
    <div
      className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: "rgba(76, 175, 80, 0.5)" }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.2 7.4L8 3"
          stroke="#4caf50"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Plan Card ── */
function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col rounded-[20px] border border-white/[0.08] p-6 md:p-7"
      style={{
        background:
          "linear-gradient(165deg, rgba(30, 20, 50, 0.95) 0%, rgba(12, 12, 24, 0.98) 100%)",
        boxShadow: plan.recommended
          ? "0 0 40px rgba(233, 30, 99, 0.12), 0 20px 60px rgba(0,0,0,0.4)"
          : "0 20px 60px rgba(0,0,0,0.3)",
      }}
      initial={reduce ? undefined : { opacity: 0, y: 50 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : reduce
            ? undefined
            : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Recommended Badge */}
      {plan.recommended && (
        <div className="absolute -top-3 right-6">
          <span
            className="rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
            style={{ background: GRAD }}
          >
            Recommended
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[10px] text-lg"
          style={{
            background: plan.recommended
              ? GRAD
              : "linear-gradient(135deg, #7c4dff 8%, #536dfe 92%)",
          }}
        >
          {plan.icon}
        </div>
        <div>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">\${plan.price}</span>
            <span className="text-sm text-white/50">/ Month</span>
          </div>
        </div>
      </div>

      {/* Minutes + Description */}
      <p
        className="mt-4 text-[13px] font-semibold text-white/90"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {plan.minutes} Minutes Per Month
      </p>
      <p
        className="mt-2 text-[12.5px] leading-[1.6] text-white/55"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {plan.description}
      </p>

      {/* Features */}
      <p
        className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {plan.includesLabel}
      </p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <CheckIcon />
            <span
              className="text-[13px] text-white/75"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Best For */}
      <div className="mt-5 rounded-[12px] border border-white/[0.06] bg-white/[0.03] p-4">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Best For
        </p>
        <p
          className="mt-1.5 text-[12.5px] leading-[1.5] text-white/60"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {plan.bestFor}
        </p>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-semibold transition-all duration-300 ${
          plan.recommended
            ? "text-white shadow-[0_8px_24px_rgba(233,30,99,0.3)] hover:shadow-[0_12px_32px_rgba(233,30,99,0.45)] hover:scale-[1.02]"
            : "border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.04]"
        }`}
        style={
          plan.recommended
            ? { background: GRAD, fontFamily: "'Montserrat', sans-serif" }
            : { fontFamily: "'Montserrat', sans-serif" }
        }
      >
        Choose {plan.name}
        <span className="text-[16px]">→</span>
      </button>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════ */
export default function PricingSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trialRef = useRef<HTMLDivElement>(null);
  const trialInView = useInView(trialRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0b14] px-6 py-20 md:py-28"
    >
      {/* Background Emblem */}
      <div className="pointer-events-none absolute right-[5%] top-[8%] z-0 hidden opacity-20 xl:block">
        <SolaceEmblem size={120} tilt={12} />
      </div>

      {/* ── Section Header ── */}
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <span
          className="rounded-[12px] border border-[#e91e63]/30 px-4 py-[5px] text-[11px] font-semibold uppercase"
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
            Pricing & Trial
          </span>
        </span>

        <h2
          className="mt-4 text-center text-[clamp(28px,3.6vw,46px)] leading-[1.1] tracking-[-1px] text-white"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Start With{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: GRAD }}
          >
            30 Free Minutes
          </span>
        </h2>
        <p
          className="mx-auto mt-3 max-w-[420px] text-[15px] text-white/45"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A simple place to begin.
        </p>
        <div
          className="mx-auto mt-3 h-[4px] w-[52px] rounded-full"
          style={{ background: GRAD }}
        />
      </div>

      {/* ── Free Trial Card ── */}
      <motion.div
        ref={trialRef}
        className="relative z-10 mx-auto mt-10 max-w-[680px] rounded-[20px] border border-white/[0.08] px-6 py-8 md:px-10 md:py-10"
        style={{
          background:
            "linear-gradient(170deg, rgba(30, 20, 50, 0.9) 0%, rgba(12, 12, 24, 0.95) 100%)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
        initial={reduce ? undefined : { opacity: 0, y: 30 }}
        animate={
          trialInView
            ? { opacity: 1, y: 0 }
            : reduce
              ? undefined
              : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-center text-[13px] text-white/50"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Every new Solace account includes:
        </p>
        <h3
          className="mt-2 text-center text-[clamp(26px,3vw,36px)] font-bold text-white"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          30 Free Minutes
        </h3>
        <p
          className="mt-2 text-center text-[14px] text-white/60"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Use them however you'd like.
        </p>

        {/* Bullet list */}
        <ul className="mx-auto mt-5 flex max-w-[400px] flex-col gap-2.5">
          {TRIAL_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <BulletDot />
              <span
                className="text-[13.5px] text-white/65"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Included features grid */}
        <p
          className="mt-7 text-center text-[13px] font-bold text-white/80"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Included During Your Trial
        </p>
        <div className="mx-auto mt-4 grid max-w-[480px] grid-cols-1 gap-2.5 sm:grid-cols-2">
          {TRIAL_INCLUDES.map((inc) => (
            <div key={inc} className="flex items-center gap-2.5">
              <CheckCircle />
              <span
                className="text-[13px] font-medium text-white/75"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {inc}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(233,30,99,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(233,30,99,0.45)]"
            style={{
              background: GRAD,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Start With 30 Free Minutes →
          </button>
        </div>
      </motion.div>

      {/* ── Pricing Cards ── */}
      <div className="relative z-10 mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PLANS.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      {/* Bottom decorative gradient line */}
      <div className="relative z-10 mx-auto mt-16 flex justify-center">
        <div
          className="h-[2px] w-[120px] rounded-full opacity-30"
          style={{ background: GRAD }}
        />
      </div>
    </section>
  );
}
