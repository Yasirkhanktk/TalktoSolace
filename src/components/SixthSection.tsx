import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

type GradientCard = { id: string; type: "gradient"; gradient: string; quote: string; name: string; tag: string };
type ImageCard = { id: string; type: "image"; image: string; quote: string; name: string; tag: string };
type MomentCardType = GradientCard | ImageCard;

/* Alternating: gradient → image → gradient → image → gradient → image ... */
const MOMENTS: MomentCardType[] = [
  {
    id: "a", type: "gradient",
    gradient: "linear-gradient(145deg, #e91e63 0%, #c2185b 40%, #9c27b0 100%)",
    quote: "Some conversations help you process. Others help you celebrate, reflect, dream, and grow.",
    name: "Sarah J.", tag: "Voice Companion",
  },
  {
    id: "b", type: "image",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
    quote: "I talk to Solace every morning. It helps me process complex emotions in under five minutes.",
    name: "Marcus V.", tag: "Daily Reflection",
  },
  {
    id: "c", type: "gradient",
    gradient: "linear-gradient(145deg, #d81b60 0%, #e91e63 45%, #8e24aa 100%)",
    quote: "The mood trends showed me patterns I never noticed. It feels like a warm soundboard.",
    name: "Elena R.", tag: "Mindful Habit",
  },
  {
    id: "d", type: "image",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    quote: "Solace feels incredibly natural and empathetic — a crucial part of my evening unwind.",
    name: "David C.", tag: "Stress Relief",
  },
  {
    id: "e", type: "gradient",
    gradient: "linear-gradient(145deg, #ad1457 0%, #e91e63 50%, #7b1fa2 100%)",
    quote: "No scheduling, no waiting — just genuine, calming conversation whenever I need it.",
    name: "Priya S.", tag: "Instant Access",
  },
  {
    id: "f", type: "image",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    quote: "The privacy means I can say what is really on my mind. I genuinely look forward to it.",
    name: "Alex R.", tag: "100% Private",
  },
  {
    id: "g", type: "gradient",
    gradient: "linear-gradient(145deg, #c2185b 0%, #e91e63 45%, #7b1fa2 100%)",
    quote: "Checking in with Solace before sleep has completely replaced late-night doom-scrolling.",
    name: "Liam T.", tag: "Night Routine",
  },
  {
    id: "h", type: "image",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    quote: "The gentle voice tone and thoughtful questions help me slow down when my mind is racing.",
    name: "Chloe M.", tag: "Calm Mind",
  },
  {
    id: "i", type: "gradient",
    gradient: "linear-gradient(145deg, #e91e63 0%, #d81b60 50%, #8e24aa 100%)",
    quote: "I feel truly understood. It is like having a patient listener in my pocket at all times.",
    name: "Julian K.", tag: "Emotional Clarity",
  },
  {
    id: "j", type: "image",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    quote: "A quiet sanctuary to untangle overwhelming thoughts without having to explain myself.",
    name: "Maya S.", tag: "Safe Sanctuary",
  },
];

const STATS = ["10,000+ Users", "4.9 Rating", "Real-time Insights", "Secure & compliant"];

/* ── Individual Moment Card with Dynamic Scroll Focus Scaling ── */
function MomentCardItem({
  m,
  index,
  total,
  scrollYProgress,
  reduce,
}: {
  m: MomentCardType;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const step = 1 / (total - 1);
  const peak = index * step;
  const delta = step * 0.95;

  let input: number[];
  let scaleVals: number[];
  let opacityVals: number[];
  let yVals: number[];

  if (index === 0) {
    input = [0, delta, delta * 2];
    scaleVals = [1.14, 1.0, 0.94];
    opacityVals = [1, 0.9, 0.82];
    yVals = [-10, 0, 8];
  } else if (index === total - 1) {
    input = [1 - delta * 2, 1 - delta, 1];
    scaleVals = [0.94, 1.0, 1.14];
    opacityVals = [0.82, 0.9, 1];
    yVals = [8, 0, -10];
  } else {
    input = [
      Math.max(0, peak - delta),
      peak,
      Math.min(1, peak + delta),
    ];
    scaleVals = [0.94, 1.14, 0.94];
    opacityVals = [0.82, 1, 0.82];
    yVals = [8, -10, 8];
  }

  const scale = useTransform(scrollYProgress, input, scaleVals);
  const opacity = useTransform(scrollYProgress, input, opacityVals);
  const y = useTransform(scrollYProgress, input, yVals);
  const zIndex = useTransform(scale, (s) => (s > 1.03 ? 20 : index + 1));

  const baseW = 275;
  const baseH = 355;

  const cardContent = (
    <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[22px] cursor-pointer">
      {/* Background */}
      {m.type === "image" ? (
        <>
          <img
            src={m.image}
            alt={m.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(160,20,90,0.14) 0%, rgba(120,15,140,0.46) 45%, rgba(80,8,120,0.88) 100%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0" style={{ background: m.gradient }} />
      )}

      {/* Tag */}
      <div className="relative z-10 p-5">
        <span
          className="rounded-full bg-white/20 px-3 py-[3px] text-[9.5px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
          style={{ fontFamily: "'Inter', sans-serif", border: "1px solid rgba(255,255,255,0.25)" }}
        >
          {m.tag}
        </span>
      </div>

      {/* Quote */}
      <div className="relative z-10 p-5">
        <p
          className="text-[12.5px] font-medium leading-[1.58] text-white/95 drop-shadow-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          &ldquo;{m.quote}&rdquo;
        </p>
        <p
          className="mt-2.5 text-[11px] font-bold uppercase tracking-wider text-white/60"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          — {m.name}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      className="relative shrink-0 select-none"
      style={{
        width: baseW,
        height: baseH,
        scale: reduce ? 1 : scale,
        opacity: reduce ? 1 : opacity,
        y: reduce ? 0 : y,
        zIndex,
        transformOrigin: "center center",
      }}
      whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 320, damping: 20 } }}
    >
      {/* 4px Gradient Border for image cards */}
      {m.type === "image" ? (
        <div
          className="h-full w-full rounded-[26px] p-[4px] shadow-[0_16px_40px_rgba(233,30,99,0.18)]"
          style={{ background: GRAD }}
        >
          {cardContent}
        </div>
      ) : (
        <div className="h-full w-full rounded-[22px] shadow-[0_16px_40px_rgba(156,39,176,0.18)]">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}

export default function SixthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-64%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">

        {/* Header */}
        <div className="flex w-full flex-col items-center px-6 text-center">
          <span
            className="rounded-[10px] border border-[#e91e63]/50 px-4 py-[5px] text-[11px] font-semibold uppercase tracking-wider"
            style={{ fontFamily: "'Montserrat', sans-serif", background: "linear-gradient(131deg, rgba(233,30,99,0.08), rgba(156,39,176,0.08))", color: "#e91e63" }}
          >
            Moments
          </span>

          <h2
            className="mt-4 text-[clamp(30px,4vw,52px)] font-semibold leading-[1.15] tracking-[-1.5px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Platform{" "}
            <span className="bg-clip-text text-transparent font-bold" style={{ backgroundImage: GRAD }}>Built</span>
            <br />
            <span className="bg-clip-text text-transparent font-bold" style={{ backgroundImage: GRAD }}>for</span>
            <span className="font-bold text-black">{"....."}</span>
          </h2>

          <div className="mt-3 h-[4px] w-[48px] rounded-full" style={{ background: GRAD }} />
        </div>

        {/* Scrolling Cards with Dynamic Focal Zoom */}
        <div className="relative mt-8 w-full overflow-visible py-4">
          <motion.div className="flex items-center gap-6 px-[10vw]" style={{ x: reduce ? 0 : x }}>
            {MOMENTS.map((m, idx) => (
              <MomentCardItem
                key={m.id}
                m={m}
                index={idx}
                total={MOMENTS.length}
                scrollYProgress={scrollYProgress}
                reduce={reduce}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats bar — improved pill design */}
        <div className="mt-10 flex items-center gap-2 px-6">
          {[
            { label: "10,000+ Users",      icon: "👥" },
            { label: "4.9 Rating",         icon: "⭐" },
            { label: "Real-time Insights", icon: "⚡" },
            { label: "Secure & compliant", icon: "🔒" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 rounded-full px-4 py-[7px]"
                style={{
                  background: "linear-gradient(135deg, rgba(233,30,99,0.06) 0%, rgba(156,39,176,0.06) 100%)",
                  border: "1px solid rgba(233,30,99,0.18)",
                  boxShadow: "0 2px 8px rgba(233,30,99,0.06)",
                }}
              >
                <span className="text-[12px]">{s.icon}</span>
                <span
                  className="text-[12px] font-semibold text-slate-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </span>
              </div>
              {i < 3 && (
                <div
                  className="h-[3px] w-[3px] rounded-full"
                  style={{ background: "linear-gradient(135deg,#e91e63,#9c27b0)" }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
