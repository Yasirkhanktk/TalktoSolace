import { memo, useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import imgHome from "../imports/Hero/c5350ce48a92f7054918aeb788bf135d4754965c.png"
import imgTalkItOut from "../imports/3NdSection/30e513f7515e0de820633689d8febfe6dea7e482.png"
import imgWellness from "../imports/MeetSolace-1/efecd8b2ced1ea351533f05753cd6733910d8c0f.png"
import imgNature from "../imports/3NdSection/452655ecec9eeba9e3ade8328b7d7d1b0083fa45.png"
import imgRest from "../imports/Hero/1fabb6006b2b2026a2aa6f647b1aff16b1c50164.png"
import SolaceEmblem from "./SolaceEmblem"

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)"
const EASE = [0.22, 1, 0.36, 1] as const

type TabItem = {
  text: string
  tag: string
}

type Feature = {
  key: string
  num: string
  label: string
  shortLabel: string
  screen: string
  leftUp: TabItem[]
  leftDown: TabItem[]
  rightUp: TabItem[]
  rightDown: TabItem[]
}

const FEATURES: Feature[] = [
  {
    key: "journal",
    num: "01",
    label: "Journal & Mood",
    shortLabel: "Journal",
    screen: imgHome,
    leftUp: [
      { text: "Capture every thought, voice or text", tag: "AI Notes" },
      { text: "Track daily moods over time", tag: "Mood Log" },
    ],
    leftDown: [
      { text: "Spot emotional patterns early", tag: "Insights" },
      { text: "Private & end-to-end encrypted", tag: "Safe" },
    ],
    rightUp: [
      { text: "Guided prompts to go deeper", tag: "Reflect" },
      { text: "Weekly highlights & streaks", tag: "Progress" },
    ],
    rightDown: [
      { text: "Voice-to-text in seconds", tag: "Instant" },
      { text: "Celebrate your milestones", tag: "Growth" },
    ],
  },
  {
    key: "talk",
    num: "02",
    label: "Talk It Out",
    shortLabel: "Talk",
    screen: imgTalkItOut,
    leftUp: [
      { text: "Talk freely, any time of day", tag: "24 / 7" },
      { text: "Zero judgment, full presence", tag: "Safe Space" },
    ],
    leftDown: [
      { text: "AI that reads your emotional tone", tag: "Empathy" },
      { text: "Real-time voice, no lag", tag: "Instant" },
    ],
    rightUp: [
      { text: "Switch voice or video anytime", tag: "Flexible" },
      { text: "Deep, thoughtful responses", tag: "Mindful" },
    ],
    rightDown: [
      { text: "Goes at your pace, always", tag: "Your Speed" },
      { text: "Warm reassurance when you need it", tag: "Support" },
    ],
  },
  {
    key: "wellness",
    num: "03",
    label: "Wellness Tools",
    shortLabel: "Wellness",
    screen: imgWellness,
    leftUp: [
      { text: "Box breathing & 4-7-8 technique", tag: "Breathe" },
      { text: "30-second mood check-ins", tag: "Quick Reset" },
    ],
    leftDown: [
      { text: "5-4-3-2-1 grounding drill", tag: "Grounding" },
      { text: "Micro-break mindful pauses", tag: "Pause" },
    ],
    rightUp: [
      { text: "Rain, ocean & calm soundscapes", tag: "Sounds" },
      { text: "Build tiny daily habits", tag: "Streak" },
    ],
    rightDown: [
      { text: "Full body tension release scan", tag: "Body Scan" },
      { text: "Quick energy reset anytime", tag: "Recharge" },
    ],
  },
  {
    key: "insights",
    num: "04",
    label: "Insights & Growth",
    shortLabel: "Insights",
    screen: imgNature,
    leftUp: [
      { text: "AI finds patterns in your emotions", tag: "Discovery" },
      { text: "Clear weekly digest of your week", tag: "Summary" },
    ],
    leftDown: [
      { text: "Know your triggers before they hit", tag: "Early Alert" },
      { text: "Watch your growth month by month", tag: "Progress" },
    ],
    rightUp: [
      { text: "Mood linked to sleep & focus data", tag: "Correlation" },
      { text: "Suggestions tailored just for you", tag: "Adaptive" },
    ],
    rightDown: [
      { text: "Set goals, track tiny steps daily", tag: "Goals" },
      { text: "Long-term mindset shifts", tag: "Lasting" },
    ],
  },
  {
    key: "rest",
    num: "05",
    label: "Rest & Habits",
    shortLabel: "Rest",
    screen: imgRest,
    leftUp: [
      { text: "Late-night companion for winding down", tag: "Bedtime" },
      { text: "Gentle reflections before sleep", tag: "Wind Down" },
    ],
    leftDown: [
      { text: "Sleep soundscapes for deep rest", tag: "Deep Rest" },
      { text: "Quiet the mental noise", tag: "Calm Mind" },
    ],
    rightUp: [
      { text: "Start mornings with affirmations", tag: "Good Morning" },
      { text: "Gratitude shifts your perspective", tag: "Grateful" },
    ],
    rightDown: [
      { text: "Evening journal to release thoughts", tag: "Let Go" },
      { text: "Build a restful nightly routine", tag: "Ritual" },
    ],
  },
]

// Coordinates of the 5 points along the 180° semi-circular / D-shaped dome arc:
// Angles: 180°, 135°, 90°, 45°, 0°
const ARC_POINTS = [
  { xPercent: 8, yPercent: 78, angle: 180, rotAngle: 180 },
  { xPercent: 24, yPercent: 32, angle: 135, rotAngle: 225 },
  { xPercent: 50, yPercent: 16, angle: 90, rotAngle: 270 },
  { xPercent: 76, yPercent: 32, angle: 45, rotAngle: 315 },
  { xPercent: 92, yPercent: 78, angle: 0, rotAngle: 360 },
]

/* ── Bubble gradient — light pastel gradient matching the website's signature #e91e63 to #9c27b0 palette ── */
const BUBBLE_GRAD =
  "linear-gradient(135deg, #ffffff 0%, #fde7f1 38%, #f5e8fa 75%, #ece3f9 100%)"

/* Sizes: bigger proportional bubble sizes with ample clearance */
const BUBBLE_SIZES = [164, 138, 152, 132]

/* Float offsets per index — gentle unique y rhythm, no x/rotate to avoid erratic motion */
const FLOAT_Y = [-10, 8, -7, 10]
const FLOAT_DUR = [4.2, 5.0, 4.6, 5.4]

/* ── Static slot coordinate data — at module scope so they are never re-created per render ── */
type SlotCoord = { top: number; pos: number; index: number; isUp: boolean; gi: number }

const LEFT_SLOT_COORDS: SlotCoord[][] = [
  // Step 0 — Journal
  [
    { top: 10, pos: 10, index: 0, isUp: true, gi: 0 },
    { top: 40, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 250, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 330, pos: 16, index: 3, isUp: false, gi: 1 },
  ],
  // Step 1 — Talk
  [
    { top: 42, pos: 12, index: 0, isUp: true, gi: 0 },
    { top: 10, pos: 240, index: 1, isUp: true, gi: 1 },
    { top: 260, pos: 15, index: 2, isUp: false, gi: 0 },
    { top: 315, pos: 250, index: 3, isUp: false, gi: 1 },
  ],
  // Step 2 — Wellness
  [
    { top: 10, pos: 20, index: 0, isUp: true, gi: 0 },
    { top: 65, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 255, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 335, pos: 10, index: 3, isUp: false, gi: 1 },
  ],
  // Step 3 — Insights
  [
    { top: 60, pos: 240, index: 0, isUp: true, gi: 0 },
    { top: 10, pos: 12, index: 1, isUp: true, gi: 1 },
    { top: 250, pos: 10, index: 2, isUp: false, gi: 0 },
    { top: 325, pos: 240, index: 3, isUp: false, gi: 1 },
  ],
  // Step 4 — Rest
  [
    { top: 18, pos: 12, index: 0, isUp: true, gi: 0 },
    { top: 50, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 255, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 330, pos: 20, index: 3, isUp: false, gi: 1 },
  ],
]

const RIGHT_SLOT_COORDS: SlotCoord[][] = [
  // Step 0 — Journal
  [
    { top: 10, pos: 10, index: 0, isUp: true, gi: 0 },
    { top: 40, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 250, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 330, pos: 16, index: 3, isUp: false, gi: 1 },
  ],
  // Step 1 — Talk
  [
    { top: 42, pos: 12, index: 0, isUp: true, gi: 0 },
    { top: 10, pos: 240, index: 1, isUp: true, gi: 1 },
    { top: 260, pos: 15, index: 2, isUp: false, gi: 0 },
    { top: 315, pos: 250, index: 3, isUp: false, gi: 1 },
  ],
  // Step 2 — Wellness
  [
    { top: 10, pos: 20, index: 0, isUp: true, gi: 0 },
    { top: 65, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 255, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 335, pos: 10, index: 3, isUp: false, gi: 1 },
  ],
  // Step 3 — Insights
  [
    { top: 60, pos: 240, index: 0, isUp: true, gi: 0 },
    { top: 10, pos: 12, index: 1, isUp: true, gi: 1 },
    { top: 250, pos: 10, index: 2, isUp: false, gi: 0 },
    { top: 325, pos: 240, index: 3, isUp: false, gi: 1 },
  ],
  // Step 4 — Rest
  [
    { top: 18, pos: 12, index: 0, isUp: true, gi: 0 },
    { top: 50, pos: 245, index: 1, isUp: true, gi: 1 },
    { top: 255, pos: 235, index: 2, isUp: false, gi: 0 },
    { top: 330, pos: 20, index: 3, isUp: false, gi: 1 },
  ],
]

const BubbleCard = memo(function BubbleCard({
  item,
  side,
  index,
  isActive = false,
}: {
  item: TabItem
  side: "left" | "right"
  index: number
  isActive?: boolean
}) {
  const reduce = useReducedMotion()
  const shouldAnimate = isActive && !reduce
  const size = BUBBLE_SIZES[index] ?? 136
  const floatY = FLOAT_Y[index] ?? -8
  const floatDur = FLOAT_DUR[index] ?? 4.8

  return (
    <motion.div
      className="relative select-none"
      /* GPU layer only when actively animating — avoids 160 concurrent composite layers */
      style={isActive ? { willChange: "transform" } : undefined}
      animate={shouldAnimate ? { y: [0, floatY, 0] } : { y: 0 }}
      transition={
        shouldAnimate
          ? {
              duration: floatDur,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }
          : { duration: 0.3, ease: "easeOut" }
      }
      whileHover={
        isActive
          ? {
              scale: 1.07,
              transition: { type: "spring", stiffness: 260, damping: 18 },
            }
          : undefined
      }
    >
      {/* ── Main Gradient Sphere — glow via box-shadow only; no separate blur-2xl composite layer ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center p-2"
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: BUBBLE_GRAD,
          boxShadow:
            "0 14px 36px rgba(233,30,99,0.14), 0 6px 16px rgba(156,39,176,0.10), inset 0 2px 5px rgba(255,255,255,0.95), inset 0 -4px 10px rgba(233,30,99,0.06)",
          border: "1.5px solid rgba(233,30,99,0.22)",
        }}
      >
        {/* Gloss sheen — top-left ellipse */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "55%",
            height: "42%",
            top: "7%",
            left: "10%",
            background:
              "radial-gradient(ellipse at 38% 28%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 68%)",
          }}
        />

        {/* Tag pill — solid background, no backdrop-filter composite layer */}
        <span
          className="relative z-10 mb-1.5 inline-block rounded-full px-2.5 py-[3px] text-[9px] font-bold uppercase tracking-widest text-[#e91e63]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "rgba(255,255,255,0.94)",
            border: "1px solid rgba(233,30,99,0.2)",
            boxShadow: "0 1px 4px rgba(233,30,99,0.08)",
          }}
        >
          {item.tag}
        </span>

        {/* Feature text */}
        <span
          className="relative z-10 px-3 text-[12.5px] font-semibold leading-[1.35] text-slate-800"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item.text}
        </span>
      </div>

      {/* ── Satellite bubbles — only rendered when card is the active one ── */}
      {isActive && (
        <>
          {/* Sat 1: top corner, larger */}
          <motion.div
            className="pointer-events-none absolute rounded-full"
            style={{
              width: Math.round(size * 0.2),
              height: Math.round(size * 0.2),
              top: -Math.round(size * 0.04),
              [side === "left" ? "right" : "left"]: -Math.round(size * 0.02),
              background: BUBBLE_GRAD,
              border: "1px solid rgba(233,30,99,0.2)",
              boxShadow:
                "0 4px 12px rgba(233,30,99,0.12), inset 0 1px 2px rgba(255,255,255,0.9)",
            }}
            animate={shouldAnimate ? { y: [0, -5, 0] } : { y: 0 }}
            transition={
              shouldAnimate
                ? {
                    duration: floatDur * 0.78,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }
                : { duration: 0 }
            }
          >
            <div
              className="absolute rounded-full"
              style={{
                width: "52%",
                height: "38%",
                top: "10%",
                left: "14%",
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Sat 2: bottom dot */}
          <motion.div
            className="pointer-events-none absolute rounded-full"
            style={{
              width: Math.round(size * 0.13),
              height: Math.round(size * 0.13),
              bottom: -Math.round(size * 0.02),
              [side === "left" ? "left" : "right"]: Math.round(size * 0.1),
              background: BUBBLE_GRAD,
              border: "1px solid rgba(156,39,176,0.18)",
              boxShadow:
                "0 2px 8px rgba(156,39,176,0.10), inset 0 1px 2px rgba(255,255,255,0.9)",
              opacity: 0.9,
            }}
            animate={shouldAnimate ? { y: [0, 4, 0] } : { y: 0 }}
            transition={
              shouldAnimate
                ? {
                    duration: floatDur * 0.92,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }
                : { duration: 0 }
            }
          />

          {/* Sat 3: side pearl */}
          <motion.div
            className="pointer-events-none absolute rounded-full"
            style={{
              width: Math.round(size * 0.09),
              height: Math.round(size * 0.09),
              top: "44%",
              [side === "left" ? "left" : "right"]: -Math.round(size * 0.03),
              background: BUBBLE_GRAD,
              border: "1px solid rgba(233,30,99,0.18)",
              boxShadow: "0 2px 6px rgba(233,30,99,0.08)",
              opacity: 0.8,
            }}
            animate={shouldAnimate ? { y: [0, -3, 0] } : { y: 0 }}
            transition={
              shouldAnimate
                ? {
                    duration: floatDur * 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }
                : { duration: 0 }
            }
          />
        </>
      )}
    </motion.div>
  )
})

export default function ThirdSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const [activeIdx, setActiveIdx] = useState(0)
  const currentStepRef = useRef(0)
  const isLockedRef = useRef(false)
  const quietTimerRef = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  /* ── rAF gate: coalesces burst wheel events into one step per frame ── */
  const wheelRafRef = useRef<number | null>(null)
  const pendingWheelDir = useRef<number | null>(null)

  const TOTAL_STEPS = 5 // 5 models: 0-4
  /* Longer lock so trackpad inertia fully settles before the next step can fire */
  const LOCK_DURATION = 900 // ms

  /* ── Compute the exact scroll Y for a given step ── */
  const getTargetScrollY = useCallback((step: number) => {
    const el = sectionRef.current
    if (!el) return window.scrollY
    const rect = el.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const totalScrollable = el.offsetHeight - window.innerHeight
    return sectionTop + (step / (TOTAL_STEPS - 1)) * totalScrollable
  }, [])

  /* ── Check if viewport is pinned inside Section 3 sticky area ── */
  const getIsPinned = useCallback(() => {
    const el = sectionRef.current
    if (!el) return false
    const rect = el.getBoundingClientRect()
    return rect.top <= 2 && rect.bottom >= window.innerHeight - 2
  }, [])

  /* ── Lock helper: sets lock and starts a FIXED timer (never reset) ── */
  const lockStep = useCallback(
    (step: number) => {
      currentStepRef.current = step
      setActiveIdx(step)
      isLockedRef.current = true
      const targetY = getTargetScrollY(step)
      window.scrollTo({ top: targetY, behavior: "smooth" })

      // Fixed timer — NOT reset by inertia so user is never stuck
      if (quietTimerRef.current) clearTimeout(quietTimerRef.current)
      quietTimerRef.current = window.setTimeout(() => {
        isLockedRef.current = false
      }, LOCK_DURATION)
    },
    [getTargetScrollY],
  )

  /* ── Advance to a specific step (used by arc buttons) ── */
  const handleSelectStep = useCallback(
    (idx: number) => {
      lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, idx)))
    },
    [lockStep],
  )

  useEffect(() => {
    /* ── WHEEL HANDLER — rAF-gated so burst events collapse to one step per frame ── */
    const handleWheel = (e: WheelEvent) => {
      if (!getIsPinned()) return

      const delta = e.deltaY
      /* Require a deliberate scroll — ignores tiny inertia trickle events */
      if (Math.abs(delta) < 14) return

      const dir = delta > 0 ? 1 : -1
      const current = currentStepRef.current

      // At boundaries, release to let native scroll continue
      if (dir === 1 && current >= TOTAL_STEPS - 1) return
      if (dir === -1 && current <= 0) return

      // Block native scroll
      e.preventDefault()

      // If locked, absorb — do NOT reset timer
      if (isLockedRef.current) return

      // Latch the direction; only the first unprocessed direction per rAF wins
      pendingWheelDir.current = pendingWheelDir.current ?? dir

      // Schedule exactly one step advance per animation frame
      if (wheelRafRef.current !== null) return
      wheelRafRef.current = requestAnimationFrame(() => {
        wheelRafRef.current = null
        const d = pendingWheelDir.current
        pendingWheelDir.current = null
        if (d === null || isLockedRef.current) return
        lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, currentStepRef.current + d)))
      })
    }

    /* ── TOUCH HANDLERS ── */
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return
      if (!getIsPinned()) return

      const currentY = e.touches[0].clientY
      const deltaY = touchStartY.current - currentY

      if (Math.abs(deltaY) < 25) return

      const dir = deltaY > 0 ? 1 : -1
      const current = currentStepRef.current

      if (dir === 1 && current >= TOTAL_STEPS - 1) return
      if (dir === -1 && current <= 0) return

      e.preventDefault()

      if (isLockedRef.current) return

      touchStartY.current = currentY
      lockStep(Math.max(0, Math.min(TOTAL_STEPS - 1, current + dir)))
    }

    const handleTouchEnd = () => {
      touchStartY.current = null
    }

    /* ── KEYBOARD HANDLER ── */
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!getIsPinned()) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentStepRef.current < TOTAL_STEPS - 1) {
          e.preventDefault()
          handleSelectStep(currentStepRef.current + 1)
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentStepRef.current > 0) {
          e.preventDefault()
          handleSelectStep(currentStepRef.current - 1)
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("keydown", handleKeyDown)
      if (quietTimerRef.current) clearTimeout(quietTimerRef.current)
      if (wheelRafRef.current !== null) cancelAnimationFrame(wheelRafRef.current)
    }
  }, [getIsPinned, lockStep, handleSelectStep])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative h-[650vh] bg-white"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-6">
        {/* Background Solace Emblem */}
        <div className="pointer-events-none absolute left-[3%] top-[10%] z-0 hidden opacity-60 xl:block">
          <SolaceEmblem size={130} tilt={-14} />
        </div>

        {/* Section Header */}
        <span
          className="rounded-[12px] border border-[#e91e63] px-4 py-[5px] text-[11px] font-semibold uppercase"
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
            Features
          </span>
        </span>
        <h2
          className="mt-2 text-center text-[clamp(26px,3.2vw,42px)] leading-[1.05] tracking-[-1px] text-black"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Highlighted
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: GRAD }}
          >
            Features
          </span>
        </h2>
        <div
          className="mt-1.5 h-[4px] w-[52px] rounded-full"
          style={{ background: GRAD }}
        />

        {/* ───── D-Shaped 180-Degree Arc Controller with 5 Milestone Points ───── */}
        <div className="relative mt-12 mb-3 h-[130px] w-[min(620px,94vw)]">
          {/* Central Glowing Sphere & Pointer Ring */}
          <div className="absolute left-1/2 bottom-[-20px] -translate-x-1/2">
            {/* Halo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(233,30,99,0.35), rgba(156,39,176,0) 70%)",
              }}
              animate={
                reduce
                  ? undefined
                  : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating Pointer Arrow Indicator */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: reduce ? 0 : ARC_POINTS[activeIdx].rotAngle }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 65, damping: 14 }
              }
            >
              <svg
                className="absolute right-0 top-1/2 h-[34px] w-[17px] -translate-y-1/2"
                viewBox="0 0 22 45"
                fill="none"
              >
                <path
                  d="M3 5 Q18 22.5 3 40"
                  stroke="url(#arcStrokeGrad2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M18 22.5 L9 16 M18 22.5 L9 29"
                  stroke="url(#arcStrokeGrad2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="arcStrokeGrad2"
                    x1="0"
                    y1="0"
                    x2="22"
                    y2="45"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#e91e63" />
                    <stop offset="1" stopColor="#9c27b0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Glass Orb Core */}
            <motion.div
              className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(233,30,99,0.25)]"
              style={{
                background:
                  "radial-gradient(circle at 36% 28%, #ffffff 0%, #fce4ec 30%, #f48fb1 60%, #ad1457 100%)",
                boxShadow:
                  "inset -6px -8px 14px rgba(74,20,140,0.35), inset 5px 6px 12px rgba(255,255,255,0.85), 0 10px 24px rgba(233,30,99,0.28)",
              }}
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[13px] font-extrabold text-slate-900 tracking-wider">
                {FEATURES[activeIdx].num}
              </span>
            </motion.div>
          </div>

          {/* 5 Milestone Points along the 180° Arc (Top points have label ABOVE to prevent overlap) */}
          {FEATURES.map((feat, i) => {
            const pt = ARC_POINTS[i]
            const isActive = activeIdx === i
            const isTopArc = i >= 1 && i <= 3 // Points 02, 03, 04

            return (
              <button
                key={feat.key}
                type="button"
                onClick={() => handleSelectStep(i)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 focus:outline-none"
                style={{
                  left: `${pt.xPercent}%`,
                  top: `${pt.yPercent}%`,
                }}
              >
                <div
                  className={`flex items-center transition-transform duration-300 ${
                    isTopArc ? "flex-col-reverse" : "flex-col"
                  } ${
                    isActive
                      ? "scale-110"
                      : "scale-95 opacity-70 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                >
                  {/* Pin Orb */}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                      isActive
                        ? "border-[#e91e63] bg-white shadow-[0_0_16px_rgba(233,30,99,0.5)]"
                        : "border-slate-300 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold ${
                        isActive
                          ? "bg-clip-text text-transparent"
                          : "text-[#666]"
                      }`}
                      style={isActive ? { backgroundImage: GRAD } : undefined}
                    >
                      {feat.num}
                    </span>
                  </div>

                  {/* Label */}
                  <span
                    className={`whitespace-nowrap text-[12px] font-semibold transition-all ${
                      isTopArc ? "mb-1" : "mt-1"
                    } ${
                      isActive
                        ? "bg-clip-text text-transparent"
                        : "text-[#777] group-hover:text-black"
                    }`}
                    style={
                      isActive
                        ? {
                            fontFamily: "'Montserrat', sans-serif",
                            backgroundImage: GRAD,
                          }
                        : { fontFamily: "'Montserrat', sans-serif" }
                    }
                  >
                    {feat.shortLabel}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* ───── Stage: Freely-scattered Bubble Clusters & Central Screen ───── */}
        <div className="relative mt-1 flex w-full max-w-[1520px] h-[500px] items-center justify-between px-2 sm:px-4">
          {/* ── LEFT cluster — uses static LEFT_SLOT_COORDS (no per-render object creation) ── */}
          <div className="relative z-20 w-[400px] lg:w-[440px] h-[490px] shrink-0">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx
              const ease = [0.22, 1, 0.36, 1] as const
              const slots = LEFT_SLOT_COORDS[fIdx] ?? LEFT_SLOT_COORDS[0]

              return (
                <div
                  key={`${feat.key}-left-col`}
                  className="absolute inset-0 pointer-events-none"
                >
                  {slots.map(({ top, pos, index, isUp, gi }, si) => {
                    const group = isUp ? feat.leftUp : feat.leftDown
                    return (
                      <motion.div
                        key={`${feat.key}-l-${si}`}
                        className="absolute"
                        style={{
                          top,
                          left: pos,
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.5,
                        }}
                        transition={{
                          duration: 0.55,
                          ease,
                          delay: isActive ? si * 0.07 : 0,
                        }}
                      >
                        <BubbleCard
                          item={group[gi]}
                          side="left"
                          index={index}
                          isActive={isActive}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* Central Screen Frame */}
          <div className="relative z-10 mx-auto w-full max-w-[560px] lg:max-w-[610px] mt-8 rounded-[22px] bg-[#0b0b14] p-2 shadow-[0px_32px_80px_rgba(20,10,40,0.32)] shrink">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px]">
              {FEATURES.map((feat, i) => {
                const isActive = activeIdx === i
                return (
                  <motion.img
                    key={feat.key}
                    src={feat.screen}
                    alt={feat.label}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.97,
                      zIndex: isActive ? 2 : 1,
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                  />
                )
              })}
            </div>
          </div>

          {/* ── RIGHT cluster — uses static RIGHT_SLOT_COORDS (no per-render object creation) ── */}
          <div className="relative z-20 w-[400px] lg:w-[440px] h-[490px] shrink-0">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx
              const ease = [0.22, 1, 0.36, 1] as const
              const slots = RIGHT_SLOT_COORDS[fIdx] ?? RIGHT_SLOT_COORDS[0]

              return (
                <div
                  key={`${feat.key}-right-col`}
                  className="absolute inset-0 pointer-events-none"
                >
                  {slots.map(({ top, pos, index, isUp, gi }, si) => {
                    const group = isUp ? feat.rightUp : feat.rightDown
                    return (
                      <motion.div
                        key={`${feat.key}-r-${si}`}
                        className="absolute"
                        style={{
                          top,
                          right: pos,
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.5,
                        }}
                        transition={{
                          duration: 0.55,
                          ease,
                          delay: isActive ? si * 0.07 : 0,
                        }}
                      >
                        <BubbleCard
                          item={group[gi]}
                          side="right"
                          index={index}
                          isActive={isActive}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
