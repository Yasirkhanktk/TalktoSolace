import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import svgPaths from "../imports/Section3-1/svg-jmap5htj3m";
import imgManBg from "../imports/Section3-1/45f1bcbe2a295e2466d94f9e694653e00545f002.png";
import imgManFg from "../imports/Section3-1/285cb81d1803e135c1f00b00eedd9ab25e601b19.png";
import imgBlueBg from "../imports/Section3-1/60435868beca1bf5fcd288752e2ce2dc031c0d44.png";
import imgBlueFg from "../imports/Section3-1/141fdb7bf66120704255629fbd3acc8cdb3d4bc6.png";
import imgChairBg from "../imports/Section3-1/90f354a9a06e95c6f4115c3e72de97f16fc882d7.png";
import imgChairFg from "../imports/Section3-1/357e6fa693eebbf6f9fb3555348fd2b13af72fb4.png";
import imgAthBg from "../imports/Section3-1/c5a297d0252bc641d8d543cdb0db6fe7d2290e57.png";
import imgAthFg from "../imports/Section3-1/bc07016c8c4e3f240776b464f9521d286372372f.png";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

type Card = {
  n: string;
  title: string;
  sub: string;
  bg: string;
  fg: string;
  sparkle?: "tl" | "tr";
};

const CARDS: Card[] = [
  {
    n: "(01)",
    title: "When the day is finally quiet...",
    sub: "Some nights, your thoughts are louder than the silence.",
    bg: imgManBg,
    fg: imgManFg,
    sparkle: "tr",
  },
  {
    n: "(02)",
    title: "After a small win...",
    sub: "Growth deserves to be noticed.",
    bg: imgBlueBg,
    fg: imgBlueFg,
  },
  {
    n: "(03)",
    title: "During everyday life...",
    sub: "Not every conversation starts with something difficult.",
    bg: imgChairBg,
    fg: imgChairFg,
    sparkle: "tl",
  },
  {
    n: "(04)",
    title: "Before a big decision...",
    sub: "Sometimes clarity begins with a conversation.",
    bg: imgAthBg,
    fg: imgAthFg,
  },
];

// Each later card slides up over the one before it during its own window.
const ENTER: ([number, number] | null)[] = [
  null,
  [0.06, 0.31],
  [0.34, 0.59],
  [0.62, 0.87],
];

function Sparkle({ pos }: { pos: "tl" | "tr" }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 h-[30px] w-[30px] rotate-[46deg] ${
        pos === "tr" ? "-right-2 -top-3" : "-left-2 -top-3"
      }`}
    >
      <svg viewBox="0 0 35.3771 36.6704" fill="none" className="h-full w-full">
        <path d={svgPaths.peb644f0} fill="url(#moment_sparkle)" stroke="white" strokeWidth="0.795427" />
        <defs>
          <linearGradient id="moment_sparkle" gradientUnits="userSpaceOnUse" x1="0" x2="35.6662" y1="11.6617" y2="24.1853">
            <stop stopColor="#E91E63" />
            <stop offset="1" stopColor="#9C27B0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function StackCard({
  card,
  index,
  progress,
  enter,
}: {
  card: Card;
  index: number;
  progress: MotionValue<number>;
  enter: [number, number] | null;
}) {
  // First card is centered from the start; the rest rise in from fully below
  // the viewport (vh units guarantee they are off-screen initially).
  const y = useTransform(progress, enter ?? [0, 1], enter ? ["115vh", "0vh"] : ["0vh", "0vh"]);

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: index + 1 }}>
      <motion.div
        className="w-[min(560px,86vw)] will-change-transform bg-white"
        style={{ y: !enter ? 0 : y }}
      >
        {card.sparkle ? <Sparkle pos={card.sparkle} /> : null}

        {/* Framed image: blurred fill behind a crisp centered plate */}
        <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-[10px] bg-black">
          <img
            src={card.bg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-95 blur-[4px]"
          />
          <img
            src={card.fg}
            alt={card.title}
            className="absolute left-1/2 top-1/2 h-[74%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[5px] object-cover"
          />
        </div>

        {/* Caption — opaque white so a stacked card fully hides the one beneath */}
        {/* Set z-index below the image so the image's shadow falls over this background instead of being cropped */}
        <div className="relative -z-10 flex items-start gap-3 bg-white pt-4 pb-2">
          <span
            className="mt-[2px] bg-clip-text text-[14px] text-transparent"
            style={{ fontFamily: "'Inter', sans-serif", backgroundImage: GRAD }}
          >
            {card.n}
          </span>
          <div>
            <p
              className="text-[21px] leading-[1.1] tracking-[-0.6px] text-black"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              {card.title}
            </p>
            <p
              className="mt-2 text-[14px] tracking-[-0.6px] text-[#434343]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              {card.sub}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CurvedArrow({ down = true }: { down?: boolean }) {
  return (
    <svg
      viewBox="0 0 192.752 28.0938"
      fill="none"
      className={`h-[26px] w-[110px] ${down ? "rotate-[74deg]" : ""}`}
    >
      <path d={svgPaths.p3bf54f80} fill="url(#moment_ah)" />
      <path d={svgPaths.p2b5e9b00} stroke="url(#moment_al)" strokeLinecap="round" strokeWidth="2.92366" />
      <defs>
        <linearGradient id="moment_ah" gradientUnits="userSpaceOnUse" x1="1.14138" x2="19.5851" y1="8.52298" y2="69.0184">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="moment_al" gradientUnits="userSpaceOnUse" x1="1.87185" x2="12.6787" y1="17.1867" y2="20.093">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FourthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map the full 0 -> 1 scroll range explicitly to guarantee it never bounces back or extrapolates.
  const headY = useTransform(scrollYProgress, [0, 0.15, 1], [0, -150, -150]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0, 0]);
  
  // The CTA fades in right as the final card (card 4) comes into place.
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.75, 0.87, 1], [0, 0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0, 0.75, 0.87, 1], [24, 24, 0, 0]);

  return (
    <section ref={sectionRef} className="relative h-[440vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
          {/* Left column */}
          <div className="relative hidden h-[560px] lg:block">
            {/* Top: eyebrow + heading — drifts upward on scroll */}
            <motion.div
              className="absolute left-0 top-0"
              style={{ y: headY, opacity: headOpacity, pointerEvents: "none" }}
            >
              <span
                className="inline-flex rounded-[12px] border border-[#e91e63] px-3 py-[6px] text-[11.1px] font-semibold uppercase backdrop-blur-[4px]"
                style={{ backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))" }}
              >
                <span className="bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: GRAD }}>
                  Moments
                </span>
              </span>
              <h2
                className="mt-5 text-[clamp(40px,4.4vw,56px)] leading-[1] tracking-[-1.7px] text-black"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                Everyday
                <br />
                <span className="bg-clip-text text-transparent" style={{ fontWeight: 600, backgroundImage: GRAD }}>
                  Moments.....
                </span>
              </h2>
              <div className="mt-4 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />
            </motion.div>

            {/* Bottom: closing CTA (fades in on the last card) */}
            {/* Positioned vertically near the middle to align parallel with the last stacked card */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2"
              style={{ opacity: ctaOpacity, y: ctaY }}
            >
              <h3
                className="text-[clamp(38px,4.2vw,56px)] leading-[1] tracking-[-1.7px] text-black"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                Whatever is on your{" "}
                <span className="bg-clip-text text-transparent" style={{ fontWeight: 600, backgroundImage: GRAD }}>
                  mind,
                </span>
              </h3>
              <div
                className="mt-3 h-px w-[418px] max-w-full"
                style={{ background: "linear-gradient(90deg, #57c6ca, #7aaddf 52%, #9e92f4)" }}
              />
              <p
                className="mt-6 max-w-[384px] text-[19.85px] leading-[26.25px] text-black"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center whitespace-nowrap rounded-[14px] px-8 py-[14px] text-[14px] tracking-[0.28px] text-white shadow-[0px_8px_16px_rgba(233,30,99,0.34)]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, backgroundImage: GRAD }}
                >
                  Become a Founding Member
                </a>
                <div className="translate-y-[-4px]">
                  <CurvedArrow down={false} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: stacking cards */}
          <div className="relative h-[520px] w-full">
            {CARDS.map((card, i) => (
              <StackCard
                key={card.n}
                card={card}
                index={i}
                progress={scrollYProgress}
                enter={ENTER[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
