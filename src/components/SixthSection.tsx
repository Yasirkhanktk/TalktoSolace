import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

type GradientCard = { id: string; type: "gradient"; gradient: string; quote: string; name: string; tag: string };
type ImageCard = { id: string; type: "image"; image: string; quote: string; name: string; tag: string };
type MomentCard = GradientCard | ImageCard;

/* Alternating: gradient → image → gradient → image → gradient → image */
const MOMENTS: MomentCard[] = [
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
];

const STATS = ["10,000+ Users", "4.9 Rating", "Real-time Insights", "Secure & compliant"];

export default function SixthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-54%"]);

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

        {/* Scrolling Cards */}
        <div className="relative mt-10 w-full overflow-visible">
          <motion.div className="flex gap-5 px-[6vw]" style={{ x: reduce ? 0 : x }}>
            {MOMENTS.map((m, idx) => {
              const w = idx === 2 ? 320 : 270;
              const h = idx === 2 ? 380 : 340;

              const cardContent = (
                <motion.div
                  key={m.id}
                  className="group relative shrink-0 overflow-hidden rounded-[21px] cursor-pointer"
                  style={{ width: w, height: h }}
                  whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                >
                  {/* Background */}
                  {m.type === "image" ? (
                    <>
                      <img
                        src={m.image}
                        alt={m.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(180deg, rgba(160,20,90,0.18) 0%, rgba(120,15,140,0.48) 45%, rgba(80,8,120,0.86) 100%)" }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0" style={{ background: m.gradient }} />
                  )}

                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="rounded-full bg-white/20 px-3 py-[3px] text-[9.5px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                      style={{ fontFamily: "'Inter', sans-serif", border: "1px solid rgba(255,255,255,0.25)" }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                    <p className="text-[12.5px] font-medium leading-[1.55] text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {m.quote}
                    </p>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/55" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      — {m.name}
                    </p>
                  </div>
                </motion.div>
              );

              /* Image cards get a 2px gradient stroke border wrapper */
              if (m.type === "image") {
                return (
                  <div
                    key={m.id}
                    className="shrink-0 rounded-[26px] p-[4px]"
                    style={{
                      background: GRAD,
                      width: w + 8,
                      height: h + 8,
                    }}
                  >
                    {cardContent}
                  </div>
                );
              }

              return <div key={m.id} className="shrink-0">{cardContent}</div>;
            })}
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
