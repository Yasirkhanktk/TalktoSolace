import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import imgBackground from "../imports/image.png";
import imgDashboard from "../imports/Hero/c5350ce48a92f7054918aeb788bf135d4754965c.png";
import imgCloud from "../imports/Hero/82bc2a9510c2d24cdb07929392d44c0c9e988f64.png";

function Logo() {
  return (
    <div className="flex items-center gap-[1px] select-none">
      <span
        className="text-[28px] leading-none text-black"
        style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontWeight: 500 }}
      >
        S
      </span>
      <span className="relative -mx-[1px] inline-flex h-[16px] w-[16px] items-center justify-center">
        <span className="block h-[15px] w-[15px] rounded-full border border-black bg-gradient-to-br from-[#e91e63] to-[#9c27b0]" />
      </span>
      <span
        className="text-[28px] leading-none text-black"
        style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontWeight: 500 }}
      >
        lace.
      </span>
    </div>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8.3" fill="none" className={className}>
      <path
        d="M7.7 0.3 11.7 4c0.2 0.2 0.2 0.5 0 0.7L7.7 8c-0.2 0.2-0.6 0.1-0.6-0.2V5.2H0.5c-0.3 0-0.5-0.2-0.5-0.5V3.6c0-0.3 0.2-0.5 0.5-0.5H7.1V0.5C7.1 0.2 7.5 0.1 7.7 0.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Navbar() {
  const links = ["Companions", "Journey", "About", "Contact"];
  return (
    <nav className="absolute left-1/2 top-6 z-30 w-[min(760px,92vw)] -translate-x-1/2">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full bg-white px-4 py-[10px] shadow-[0px_10px_30px_rgba(29,29,29,0.08)]">
        <div className="pl-2">
          <Logo />
        </div>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="rounded-full px-4 py-2 text-[15.5px] text-black transition-colors hover:bg-black/5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e91e63] to-[#9c27b0] py-[7px] pl-4 pr-[7px] text-[13.3px] font-semibold text-white shadow-[0px_8px_16px_rgba(233,30,99,0.34)]"
          >
            Early Access
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-[2px]">
              <ArrowIcon className="h-[8px] w-[11px] text-[#1d1d1d]" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Cloud({ className, delay = 0 }: { className: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={imgCloud}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      animate={reduce ? undefined : { x: [0, 24, 0] }}
      transition={{ duration: 18, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Text rises upward as the user scrolls
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.35]);

  // Dashboard starts a little lower, then lifts and enlarges on scroll
  const screenScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.08]);
  const screenY = useTransform(scrollYProgress, [0, 1], [90, -30]);

  // Background pans down toward grass level as the user scrolls
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background — pans down to grass level on scroll */}
        <motion.img
          src={imgBackground}
          alt=""
          aria-hidden
          style={reduce ? undefined : { y: bgY }}
          className="pointer-events-none absolute inset-x-0 top-0 h-[135%] w-full select-none object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

        {/* Clouds */}
        <Cloud className="left-[3%] top-[16%] w-[220px] opacity-80" delay={0} />
        <Cloud className="right-[2%] top-[10%] w-[300px] opacity-90" delay={4} />

        <Navbar />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1100px] flex-col items-center px-6 pt-[210px] text-center">
          <motion.div
            style={reduce ? undefined : { y: textY, opacity: textOpacity }}
            className="flex flex-col items-center"
          >
          <h1
            className="text-[clamp(48px,8.5vw,100px)] leading-[1] tracking-[-0.014em] text-[#1d1d1d]"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600 }}
          >
            Talk to Solace
          </h1>
          <p
            className="mt-5 max-w-[600px] text-[18.6px] leading-[26px] text-[#4d585f]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group flex items-center rounded-full border border-white/70 bg-white/10 p-[6px] backdrop-blur-[2.5px]"
            >
              <span className="relative flex items-center overflow-hidden rounded-full border border-[#e91e63] bg-gradient-to-br from-[#e91e63] to-[#9c27b0] py-3 pl-[30px] pr-[54px] shadow-[0px_8px_16px_rgba(233,30,99,0.34),inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.3)]">
                <span className="text-[17px] font-semibold text-white">Get started now</span>
                <span className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-[2px]">
                  <ArrowIcon className="h-[8px] w-[12px] text-[#1d1d1d]" />
                </span>
              </span>
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-8 py-[18px] text-[17.2px] font-semibold text-[#1d1d1d] shadow-[0px_8px_16px_rgba(29,29,29,0.08)] transition-transform hover:-translate-y-[1px]"
            >
              View demo
            </a>
          </div>
          </motion.div>

          {/* Dashboard screen — sits lower, lifts and enlarges on scroll */}
          <motion.div
            style={reduce ? undefined : { scale: screenScale, y: screenY, transformOrigin: "center top" }}
            className="mt-16 w-full max-w-[880px] rounded-[22px] p-[3px]"
          >
            <div className="rounded-[22px] bg-gradient-to-br from-[#e91e63]/60 to-[#9c27b0]/60 p-[2px] shadow-[0px_40px_90px_rgba(76,20,90,0.35)]">
              <img
                src={imgDashboard}
                alt="Solace companion dashboard"
                className="block w-full rounded-[20px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
