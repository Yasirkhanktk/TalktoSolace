import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

/* ── Real Person Testimonials Data ── */
const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Product Designer",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "Solace gives me a safe, non-judgmental space to talk through tough work stress at 11 PM. Having an instant AI companion who listens without advice-dumping has been life-changing.",
    tag: "Voice Companion",
  },
  {
    name: "Marcus Vance",
    role: "Founder & Builder",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "I used to bottle up my decisions until they became anxiety. Now I talk it out with Solace every morning. It helps me process complex thoughts in under 5 minutes.",
    tag: "Daily Reflection",
  },
  {
    name: "Elena Rostova",
    role: "Architect & Writer",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "The mood trends and reflection prompts showed me emotional patterns I never noticed before. It feels like a warm, supportive soundboard for my mind.",
    tag: "Mindful Habit",
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "I was skeptical about voice AI for mental wellness, but Solace feels incredibly natural and empathetic. It's become a crucial part of my evening unwind routine.",
    tag: "Stress Relief",
  },
  {
    name: "Priya Sharma",
    role: "Graduate Researcher",
    location: "Boston, MA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "Whenever I'm overwhelmed by exams or research pressures, Solace is right there. No scheduling, no waiting—just genuine, calming conversation.",
    tag: "Instant Access",
  },
  {
    name: "Alex Rivera",
    role: "Creative Director",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "The privacy and zero-judgment atmosphere mean I can actually say what's on my mind. Solace has made daily reflection something I genuinely look forward to.",
    tag: "100% Private",
  },
];

/* ── Star Rating Component ── */
function StarRating() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SixthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal track scroll animation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-gradient-to-b from-white via-[#fcfbfe] to-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Floating emblem background watermark */}
        <div className="pointer-events-none absolute left-[3%] top-[8%] z-0 hidden xl:block opacity-25">
          <SolaceEmblem size={130} tilt={-15} />
        </div>

        {/* Section Header */}
        <div className="flex w-full max-w-[1260px] flex-col items-center px-6 text-center">
          <span
            className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase backdrop-blur-[4px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
            }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Real User Stories
            </span>
          </span>
          <h2
            className="mt-4 text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-1.5px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Loved by People{" "}
            <span className="bg-clip-text font-semibold italic text-transparent" style={{ backgroundImage: GRAD }}>
              Growing Every Day
            </span>
          </h2>
          <p
            className="mt-3 max-w-[480px] text-[15px] font-medium leading-[1.55] text-slate-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See how Solace helps thousands process mental noise and find daily calm.
          </p>
          <div className="mt-3.5 h-[4px] w-[56px] rounded-full" style={{ background: GRAD }} />
        </div>

        {/* Horizontal Testimonials Track */}
        <div className="relative mt-12 flex w-full items-center">
          <motion.div
            className="flex gap-6 px-[5vw]"
            style={{ x: reduce ? 0 : x }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="group relative flex h-[360px] w-[360px] shrink-0 flex-col justify-between rounded-[28px] border border-pink-100/80 bg-white/95 p-7 shadow-[0_12px_40px_rgba(233,30,99,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#e91e63]/30 hover:shadow-[0_20px_50px_rgba(233,30,99,0.14)] hover:scale-[1.02]"
              >
                {/* Top Section: Tag + Star Rating */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d81b60]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.tag}
                    </span>
                    <StarRating />
                  </div>

                  {/* Quote */}
                  <p
                    className="mt-5 text-[14px] font-medium leading-[1.65] text-slate-700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Section: Real Person Avatar + Details */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-pink-200/80 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span
                      className="text-[15px] font-bold text-slate-900"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="text-[12px] font-medium text-slate-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.role} • {t.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Metrics Pill Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 px-6">
          {["10,000+ Active Members", "4.9 ★ Rating", "100% Encrypted & Private", "Zero Judgment"].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-[12.5px] font-semibold text-slate-600 shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
