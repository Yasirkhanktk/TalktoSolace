import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react"
import SolaceEmblem from "./SolaceEmblem"

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)"

type MessageGroup = {
  id: number
  userText: string
  solaceText: string
  // Positions relative to center
  userPos: { top?: string left?: string right?: string bottom?: string }
  solacePos: { top?: string left?: string right?: string bottom?: string }
  // Scroll ranges
  userRange: [number, number]
  solaceRange: [number, number]
}

const MESSAGE_GROUPS: MessageGroup[] = [
  {
    id: 1,
    userText: "I'm feeling so down lately...",
    solaceText:
      "I'm right here with you. It's okay to feel down. Let's take it one gentle step at a time.",
    userPos: { top: "12%", left: "10%" },
    solacePos: { top: "20%", left: "14%" },
    userRange: [0.08, 0.18],
    solaceRange: [0.18, 0.28],
  },
  {
    id: 2,
    userText: "Everything feels so overwhelming today.",
    solaceText:
      "Take a deep breath. You don't have to figure it all out right now. I'm here to listen.",
    userPos: { top: "25%", right: "10%" },
    solacePos: { top: "34%", right: "12%" },
    userRange: [0.3, 0.4],
    solaceRange: [0.4, 0.5],
  },
  {
    id: 3,
    userText: "I just need someone to listen, without judging.",
    solaceText:
      "I am always here for you. Share whatever is on your mind—no pressure, no judgment.",
    userPos: { bottom: "26%", left: "8%" },
    solacePos: { bottom: "16%", left: "10%" },
    userRange: [0.52, 0.62],
    solaceRange: [0.62, 0.72],
  },
  {
    id: 4,
    userText: "I feel like I'm falling behind everyone else.",
    solaceText:
      "Your journey is uniquely yours. Be gentle with yourself. You are doing the best you can.",
    userPos: { bottom: "14%", right: "8%" },
    solacePos: { bottom: "6%", right: "10%" },
    userRange: [0.74, 0.84],
    solaceRange: [0.84, 0.94],
  },
]

function MessageBubble({
  text,
  sender,
  pos,
  range,
  smoothProgress,
}: {
  text: string
  sender: "user" | "solace"
  pos: React.CSSProperties
  range: [number, number]
  smoothProgress: any
}) {
  const reduce = useReducedMotion()

  // Map progress to opacity and scale
  const opacity = useTransform(
    smoothProgress,
    [range[0], range[0] + 0.05, 0.98, 1],
    [0, 1, 1, 0],
  )
  const scale = useTransform(
    smoothProgress,
    [range[0], range[0] + 0.05, 0.98, 1],
    [0.8, 1, 1, 0.8],
  )
  const y = useTransform(smoothProgress, [range[0], range[0] + 0.05], [15, 0])

  const isUser = sender === "user"

  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-3.5 max-w-[340px] px-5 py-4 rounded-[22px] shadow-lg border will-change-transform ${
        isUser
          ? "text-white border-transparent"
          : "bg-white/95 border-[#e91e63]/20 text-slate-800 shadow-[0_10px_25px_-5px_rgba(233,30,99,0.1)]"
      }`}
      style={{
        ...pos,
        opacity,
        scale,
        y: reduce ? 0 : y,
        background: isUser ? GRAD : undefined,
      }}
    >
      {/* Avatar */}
      <div
        className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-bold text-[13px] border ${
          isUser
            ? "bg-white/20 border-white/30 text-white"
            : "bg-gradient-to-br from-[#e91e63] to-[#9c27b0] border-transparent text-white"
        }`}
      >
        {isUser ? "A" : "S"}
      </div>

      {/* Message content */}
      <div className="flex flex-col">
        <span
          className={`text-[11px] font-bold tracking-wider uppercase mb-0.5 ${
            isUser ? "text-white/70" : "text-[#e91e63]"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {isUser ? "Alex" : "Solace"}
        </span>
        <p
          className="text-[13.5px] font-medium leading-[1.4]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default function SupportSection() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 22,
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6">
        {/* Floating background blobs for visual depth */}
        <div className="absolute left-[10%] top-[20%] w-[320px] h-[320px] rounded-full blur-3xl bg-pink-300/10 -z-10" />
        <div className="absolute right-[10%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-3xl bg-purple-300/10 -z-10" />

        {/* Floating Solace Emblem Accent */}
        <div className="absolute right-[4%] top-[14%] pointer-events-none z-0 hidden lg:block opacity-60">
          <SolaceEmblem size={130} tilt={14} />
        </div>

        {/* Central Display Column */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[640px] pointer-events-none">
          {/* Eyebrow Badge */}
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
              Moments
            </span>
          </span>

          {/* Heading */}
          <h2
            className="mt-6 text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-1.5px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            We understand
            <br />
            how you{" "}
            <span
              className="bg-clip-text font-semibold italic text-transparent relative"
              style={{ backgroundImage: GRAD }}
            >
              Feel
              <span className="absolute bottom-1 left-0 right-0 h-[4px] bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full" />
            </span>
          </h2>
        </div>

        {/* Render Chat Bubbles */}
        {MESSAGE_GROUPS.map((group) => (
          <div key={group.id}>
            {/* User message */}
            <MessageBubble
              text={group.userText}
              sender="user"
              pos={group.userPos}
              range={group.userRange}
              smoothProgress={smoothProgress}
            />

            {/* Solace response */}
            <MessageBubble
              text={group.solaceText}
              sender="solace"
              pos={group.solacePos}
              range={group.solaceRange}
              smoothProgress={smoothProgress}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
