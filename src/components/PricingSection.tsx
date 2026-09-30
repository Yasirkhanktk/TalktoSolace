import { useRef } from "react"
import { motion, useReducedMotion } from "motion/react"

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)"

/* ── Plan data ── */
const PLANS = [
  {
    id: "trial",
    name: "Free Trial",
    icon: "🌱",
    price: "Free",
    period: "",
    minuteCount: "30",
    tagline: "Begin with zero risk",
    badge: null as string | null,
    features: [
      { icon: "⏱", label: "30 Free Minutes Included" },
      { icon: "🎙", label: "Full Voice & Text Experience" },
      { icon: "🔒", label: "No Credit Card Required" },
      { icon: "🛡", label: "100% Private & Encrypted" },
    ],
    cta: "Start Free",
    recommended: false,
  },
  {
    id: "thrive",
    name: "Thrive",
    icon: "✨",
    price: "$49",
    period: "/mo",
    minuteCount: "400",
    tagline: "Your complete wellness companion",
    badge: "Most Popular" as string | null,
    features: [
      { icon: "💬", label: "400 Conversation Mins / Month" },
      { icon: "📈", label: "Extended Mood History & Insights" },
      { icon: "📔", label: "Journal Export & Wellness Library" },
      { icon: "⚡", label: "Priority AI Companion Handling" },
    ],
    cta: "Start Thriving",
    recommended: true,
  },
  {
    id: "grow",
    name: "Grow",
    icon: "🌿",
    price: "$25",
    period: "/mo",
    minuteCount: "200",
    tagline: "For daily ongoing reflection",
    badge: "Popular" as string | null,
    features: [
      { icon: "💬", label: "200 Conversation Mins / Month" },
      { icon: "📊", label: "Mood History & Emotional Trends" },
      { icon: "✍", label: "Journaling & Reflection Prompts" },
      { icon: "💳", label: "Pay-As-You-Go Top Ups" },
    ],
    cta: "Choose Grow",
    recommended: false,
  },
]

/* ── Minute Arc SVG ring ── */
function MinuteArc({
  count,
  max = 400,
  color,
  dark = false,
}: {
  count: number
  max?: number
  color: string
  dark?: boolean
}) {
  const r = 38
  const circ = 2 * Math.PI * r
  const dash = Math.min(count / max, 1) * circ
  return (
    <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
      <svg width="96" height="96" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
        <circle
          cx="48" cy="48" r={r} fill="none"
          stroke={dark ? "rgba(255,255,255,0.18)" : "rgba(233,30,99,0.10)"}
          strokeWidth="5"
        />
        <circle
          cx="48" cy="48" r={r} fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center leading-tight">
        <span
          className="text-[17px] font-extrabold"
          style={{ fontFamily: "'Montserrat', sans-serif", color: dark ? "#fff" : "#1d1d1d" }}
        >
          {count}
        </span>
        <span
          className="text-[8px] font-semibold uppercase tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif", color: dark ? "rgba(255,255,255,0.6)" : "rgba(29,29,29,0.42)" }}
        >
          mins
        </span>
      </div>
    </div>
  )
}

/* ── Side Card (Free Trial / Grow) ── */
function SideCard({ plan, delay }: { plan: typeof PLANS[number]; delay: number }) {
  const reduce = useReducedMotion()
  const isPurple = plan.id === "grow"
  const accent = isPurple ? "#7c3aed" : "#e91e63"
  const gradArc = isPurple
    ? "linear-gradient(135deg,#7c3aed,#4f46e5)"
    : GRAD

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
      className="relative flex flex-col rounded-[28px] bg-white p-7 border border-slate-100/80 overflow-hidden w-full"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)" }}
    >
      {/* Soft gradient tint strip at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[100px] rounded-t-[28px] opacity-[0.06]"
        style={{ background: gradArc }}
      />

      {/* Badge */}
      {plan.badge && (
        <span
          className="absolute top-5 right-5 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white"
          style={{ background: gradArc, fontFamily: "'Montserrat', sans-serif" }}
        >
          {plan.badge}
        </span>
      )}

      {/* Icon pill + name */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[22px]"
          style={{
            background: isPurple
              ? "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(79,70,229,0.07))"
              : "linear-gradient(135deg,rgba(233,30,99,0.10),rgba(156,39,176,0.07))",
            border: `1.5px solid ${accent}25`,
          }}
        >
          {plan.icon}
        </div>
        <div>
          <h3
            className="text-[18px] font-bold text-slate-900 leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {plan.name}
          </h3>
          <p
            className="text-[11px] font-medium mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif", color: accent }}
          >
            {plan.tagline}
          </p>
        </div>
      </div>

      {/* Arc + Price */}
      <div className="flex items-center justify-between mb-5">
        <MinuteArc count={parseInt(plan.minuteCount)} color={accent} dark={false} />
        <div className="flex flex-col items-end">
          <span
            className="text-[40px] font-extrabold leading-none bg-clip-text text-transparent"
            style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: gradArc }}
          >
            {plan.price}
          </span>
          <span
            className="text-[11px] font-medium text-slate-400 mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {plan.period || "forever free"}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px mb-5 rounded-full"
        style={{
          background: `linear-gradient(90deg,transparent,${accent}25,transparent)`,
        }}
      />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-7">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className="flex items-center gap-2.5 text-[12px] font-medium text-slate-700"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]"
              style={{
                background: isPurple
                  ? "rgba(124,58,237,0.10)"
                  : "rgba(233,30,99,0.08)",
                border: `1px solid ${accent}28`,
              }}
            >
              {f.icon}
            </span>
            {f.label}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border py-3 text-[13px] font-bold transition-all hover:scale-[1.02]"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          borderColor: `${accent}38`,
          color: accent,
        }}
      >
        {plan.cta}
        <span>→</span>
      </button>
    </motion.div>
  )
}

/* ── Hero Card (Thrive) ── */
function HeroCard({ plan }: { plan: typeof PLANS[number] }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -10 }}
      className="relative flex flex-col rounded-[32px] p-8 overflow-hidden w-full"
      style={{
        background: GRAD,
        minHeight: 560,
        boxShadow: "0 32px 80px rgba(233,30,99,0.38), 0 8px 24px rgba(156,39,176,0.22)",
      }}
    >
      {/* Outer pulse rings */}
      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute -inset-[6px] rounded-[38px]"
            style={{ border: "2px solid rgba(233,30,99,0.45)" }}
            animate={{ scale: [1, 1.035, 1], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -inset-[14px] rounded-[44px]"
            style={{ border: "1.5px solid rgba(156,39,176,0.28)" }}
            animate={{ scale: [1, 1.042, 1], opacity: [0.28, 0.5, 0.28] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
        </>
      )}

      {/* Glass gloss orb */}
      <div
        className="pointer-events-none absolute -top-20 -right-14 w-[260px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)",
        }}
      />

      {/* Badge row */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-[9.5px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-white"
            animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          />
          {plan.badge}
        </span>
        <span className="text-[28px]">{plan.icon}</span>
      </div>

      {/* Name */}
      <h3
        className="text-[30px] font-extrabold text-white leading-tight tracking-[-0.5px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {plan.name}
      </h3>
      <p
        className="mt-1.5 text-[13px] font-medium text-white/65"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {plan.tagline}
      </p>

      {/* Arc + Price */}
      <div className="flex items-center justify-between mt-6">
        <MinuteArc count={parseInt(plan.minuteCount)} color="rgba(255,255,255,0.88)" dark />
        <div className="flex flex-col items-end">
          <span
            className="text-[54px] font-extrabold leading-none text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {plan.price}
          </span>
          <span
            className="text-[11.5px] font-medium text-white/55 mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {plan.period}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px w-full rounded-full bg-white/20" />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className="flex items-center gap-3 text-[12.5px] font-medium text-white/90"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-[12px]">
              {f.icon}
            </span>
            {f.label}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[14px] font-bold transition-all hover:scale-[1.025]"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "#e91e63",
          boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
        }}
      >
        {plan.cta}
        <span className="text-[16px]">→</span>
      </button>
    </motion.div>
  )
}

/* ── Main Section ── */
export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdf8ff] to-white py-24 px-6"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[-12%] top-[10%] w-[520px] h-[520px] rounded-full blur-[130px] opacity-35"
          style={{ background: "radial-gradient(circle,#fce4ec,transparent)" }}
        />
        <div
          className="absolute right-[-10%] bottom-[8%] w-[420px] h-[420px] rounded-full blur-[110px] opacity-28"
          style={{ background: "radial-gradient(circle,#ede7f6,transparent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block rounded-[12px] border border-[#e91e63] px-4 py-[5px] text-[11px] font-semibold uppercase tracking-wider"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage: "linear-gradient(131deg,rgba(233,30,99,0.10),rgba(156,39,176,0.10))",
            }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Pricing
            </span>
          </span>
          <h2
            className="mt-3 text-[clamp(28px,3.6vw,48px)] leading-[1.08] tracking-[-1.2px] text-slate-900"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
          >
            Choose Your{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Journey
            </span>
          </h2>
          <p
            className="mt-3 text-[14px] leading-relaxed text-slate-500 max-w-[400px] mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start free, grow at your own pace. No pressure, no hidden fees.
          </p>
          <div className="mx-auto mt-4 h-[4px] w-[52px] rounded-full" style={{ background: GRAD }} />
        </motion.div>

        {/* Cards — Thrive hero center, sides lower */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-end">
          <div className="sm:mb-10">
            <SideCard plan={PLANS[0]} delay={0.1} />
          </div>
          <div className="sm:-mt-10 order-first sm:order-none">
            <HeroCard plan={PLANS[1]} />
          </div>
          <div className="sm:mb-10">
            <SideCard plan={PLANS[2]} delay={0.2} />
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11.5px] font-medium text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {[
            { icon: "🔒", text: "No Credit Card Needed" },
            { icon: "⚡", text: "Instant Activation" },
            { icon: "🛡", text: "100% Private & Encrypted" },
            { icon: "✦", text: "Cancel Anytime" },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
