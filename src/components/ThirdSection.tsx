import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import imgTalkItOut from "../imports/3NdSection/30e513f7515e0de820633689d8febfe6dea7e482.png";
import imgHome from "../imports/Hero/c5350ce48a92f7054918aeb788bf135d4754965c.png";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

type Feature = {
  key: string;
  label: string;
  screen: string;
  tabs: { side: "left" | "right"; text: string }[];
};

const FEATURES: Feature[] = [
  {
    key: "journel",
    label: "Journel",
    screen: imgHome,
    tabs: [
      { side: "left", text: "Capture your thoughts" },
      { side: "right", text: "Guided prompts daily" },
      { side: "left", text: "Track your moods" },
      { side: "right", text: "Private & secure" },
    ],
  },
  {
    key: "talk",
    label: "Talk it out",
    screen: imgTalkItOut,
    tabs: [
      { side: "left", text: "Talk freely, anytime" },
      { side: "right", text: "Voice or video" },
      { side: "left", text: "Judgement-free space" },
      { side: "right", text: "Deep reflection" },
    ],
  },
  {
    key: "wellness",
    label: "Wellness tool",
    screen: imgHome,
    tabs: [
      { side: "left", text: "Breathing exercises" },
      { side: "right", text: "Sleep & calm" },
      { side: "left", text: "Daily check-ins" },
      { side: "right", text: "Build gentle habits" },
    ],
  },
];

const SLOTS = [
  { key: "journel", pos: "left", rotate: 180 },
  { key: "talk", pos: "top", rotate: 270 },
  { key: "wellness", pos: "right", rotate: 360 },
] as const;

function TabCard({ side, text }: { side: "left" | "right"; text: string }) {
  const ring = (
    <span className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-[#e91e63] shadow-[0px_0px_22px_-6px_rgba(168,85,247,0.7)]">
      <span className="h-[22px] w-[22px] rounded-full border border-[#e91e63]/50" />
    </span>
  );
  const pill = (
    <span
      className="flex items-center rounded-full border-2 border-white bg-white/80 px-6 py-3.5 shadow-md backdrop-blur-[8px]"
      style={{ backgroundImage: "linear-gradient(147deg, rgba(233,30,99,0.01) 8%, rgba(156,39,176,0.04) 92%)" }}
    >
      <span
        className="whitespace-nowrap bg-clip-text text-[14px] font-semibold text-transparent"
        style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: GRAD }}
      >
        {text}
      </span>
    </span>
  );
  return (
    <div className="flex items-center gap-4">
      {side === "left" ? (
        <>
          {pill}
          {ring}
        </>
      ) : (
        <>
          {ring}
          {pill}
        </>
      )}
    </div>
  );
}

export default function ThirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      let nextIdx = 0;
      if (latest > 0.68) nextIdx = 2;
      else if (latest > 0.33) nextIdx = 1;
      else nextIdx = 0;

      setActiveIdx(nextIdx);
    });
  }, [smoothProgress]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-10">
        {/* Floating Solace Emblem on upper corner */}
        <div className="absolute left-[3%] top-[12%] pointer-events-none z-0 hidden xl:block opacity-60">
          <SolaceEmblem size={130} tilt={-14} />
        </div>

        {/* Header */}
        <span
          className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
          }}
        >
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
            Features
          </span>
        </span>
        <h2
          className="mt-3 text-center text-[clamp(28px,3.6vw,46px)] leading-[1.05] tracking-[-1px] text-black"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Highlighted
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
            Features
          </span>
        </h2>
        <div className="mt-2 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />

        {/* Controller */}
        <div className="relative mt-4 h-[190px] w-[min(660px,94vw)]">
          {(() => {
            const labelBase = "absolute text-[15px] whitespace-nowrap";
            return SLOTS.map((slot, i) => {
              const isActive = activeIdx === i;
              const posClass =
                slot.pos === "left"
                  ? "left-0 top-[112px] -translate-y-1/2"
                  : slot.pos === "right"
                    ? "right-0 top-[112px] -translate-y-1/2"
                    : "left-1/2 top-2 -translate-x-1/2";
              return (
                <motion.span
                  key={slot.key}
                  className={`${labelBase} ${posClass}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  animate={{ opacity: isActive ? 1 : 0.55 }}
                  transition={{ duration: 0.3 }}
                >
                  {isActive ? (
                    <span className="bg-clip-text font-semibold text-transparent" style={{ backgroundImage: GRAD }}>
                      {FEATURES[i].label}
                    </span>
                  ) : (
                    <span className="font-medium text-[#9aa0a6]">{FEATURES[i].label}</span>
                  )}
                </motion.span>
              );
            });
          })()}

          {/* orb cluster, centered */}
          <div className="absolute left-1/2 top-[112px] -translate-x-1/2 -translate-y-1/2">
            {/* glow halo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(124,138,240,0.55), rgba(124,138,240,0) 70%)" }}
              animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 0.95, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* rotating arrow ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: reduce ? 0 : SLOTS[activeIdx].rotate }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 55, damping: 15 }}
            >
              <svg className="absolute right-[2px] top-1/2 h-[70px] w-[30px] -translate-y-1/2" viewBox="0 0 30 70" fill="none">
                <path d="M4 8 Q26 35 4 62" stroke="url(#brk)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M26 35 L14 27 M26 35 L14 43" stroke="url(#brk)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="brk" x1="4" y1="8" x2="26" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5bc3cc" />
                    <stop offset="0.5" stopColor="#7eaae0" />
                    <stop offset="1" stopColor="#9896f1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* the sphere */}
            <motion.div
              className="relative h-[108px] w-[108px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 36% 28%, #d8ecff 0%, #93b8f0 20%, #7b86e6 46%, #6a5fd0 72%, #4a3fa8 100%)",
                boxShadow:
                  "inset -10px -14px 26px rgba(30,20,80,0.55), inset 8px 10px 20px rgba(255,255,255,0.5), 0 20px 40px rgba(90,70,190,0.35)",
              }}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="absolute left-[30%] top-[22%] h-[16%] w-[22%] rounded-full bg-white/85 blur-[2px]" />
              <span className="absolute left-[46%] top-[36%] h-[8%] w-[10%] rounded-full bg-[#7fe6e0]/70 blur-[3px]" />
            </motion.div>
          </div>
        </div>

        {/* Stage */}
        <div className="relative mt-8 flex w-full max-w-[1340px] h-[480px] items-center justify-center">
          {/* Left tabs container */}
          <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 w-[320px] h-[380px]">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              const featLeftTabs = feat.tabs.filter((t) => t.side === "left");
              return (
                <div
                  key={`${feat.key}-left-group`}
                  className="absolute inset-0 flex flex-col justify-center gap-6 pointer-events-none"
                >
                  {featLeftTabs.map((t, i) => (
                    <motion.div
                      key={`${feat.key}-l-${i}`}
                      initial={{ opacity: 0, scale: 0.8, x: -50 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                        x: isActive ? 0 : -50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        delay: isActive ? i * 0.08 : 0,
                      }}
                      style={{
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <TabCard side="left" text={t.text} />
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Right tabs container */}
          <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-[320px] h-[380px]">
            {FEATURES.map((feat, fIdx) => {
              const isActive = activeIdx === fIdx;
              const featRightTabs = feat.tabs.filter((t) => t.side === "right");
              return (
                <div
                  key={`${feat.key}-right-group`}
                  className="absolute inset-y-0 right-0 w-full flex flex-col items-end justify-center gap-6 pointer-events-none"
                >
                  {featRightTabs.map((t, i) => (
                    <motion.div
                      key={`${feat.key}-r-${i}`}
                      initial={{ opacity: 0, scale: 0.8, x: 50 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                        x: isActive ? 0 : 50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        delay: isActive ? i * 0.08 : 0,
                      }}
                      style={{
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <TabCard side="right" text={t.text} />
                    </motion.div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Central screen */}
          <div className="relative z-10 w-full max-w-[740px] rounded-[24px] bg-[#0b0b14] p-2.5 shadow-[0px_44px_100px_rgba(20,10,40,0.38)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px]">
              {FEATURES.map((feat, i) => {
                const isActive = activeIdx === i;
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
