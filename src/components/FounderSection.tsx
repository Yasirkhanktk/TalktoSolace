import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import secondSvgPaths from "../imports/2ndSection/svg-49ujxxcd0l";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";
const EASE = [0.22, 1, 0.36, 1] as const;

function CurvedArrow({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 192.752 28.0938" fill="none" className="h-[28px] w-[193px]">
      <motion.path
        d={secondSvgPaths.p2b5e9b00}
        stroke="url(#arrow_line)"
        strokeLinecap="round"
        strokeWidth="2.92366"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
      />
      <motion.path
        d={secondSvgPaths.p3bf54f80}
        fill="url(#arrow_head)"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.35, delay: 1.1, ease: EASE }}
        style={{ transformOrigin: "10px 14px" }}
      />
      <defs>
        <linearGradient id="arrow_head" gradientUnits="userSpaceOnUse" x1="1.14138" x2="19.5851" y1="8.52298" y2="69.0184">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="arrow_line" gradientUnits="userSpaceOnUse" x1="1.87185" x2="12.6787" y1="17.1867" y2="20.093">
          <stop stopColor="#E91E63" />
          <stop offset="1" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const [isPlaying, setIsPlaying] = useState(false);

  // Entrance animations config
  const textState = inView ? "show" : "hidden";

  return (
    <section ref={sectionRef} id="founder-section" className="relative bg-white py-20 md:py-24 overflow-hidden flex items-center justify-center">
      {/* Tilted, Animated Solace Logo Emblem on the left */}
      <div className="absolute left-[-20px] md:left-[2%] lg:left-[4%] top-[18%] pointer-events-none z-0 hidden sm:block">
        <SolaceEmblem size={150} tilt={-16} />
      </div>

      <div className="relative z-10 w-full max-w-[1260px] px-6 flex flex-col items-center">
        
        {/* Header Block */}
        <motion.div
          className="flex flex-col items-center text-center max-w-[820px]"
          initial={{ opacity: 0, y: 30 }}
          animate={textState === "show" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Eyebrow Badge */}
          <span
            className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
            }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Meet Our Founder
            </span>
          </span>

          {/* Heading */}
          <h2
            className="mt-6 text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-1.5px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Because life isn't just about{" "}
            <span
              className="bg-clip-text font-semibold italic text-transparent"
              style={{ backgroundImage: GRAD }}
            >
              getting
            </span>{" "}
            through hard days.
          </h2>

          {/* Subtitle */}
          <p
            className="mt-5 text-[16px] leading-[1.55] text-[#555] max-w-[620px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            Meet your AI companion and discover how a simple conversation can help you reflect, understand yourself, and move forward.
          </p>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          className="relative mt-12 w-full max-w-[940px] aspect-[2.1/1] rounded-[28px] shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={textState === "show" ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          {/* Decorative Offset Outline Corners */}
          <div className="absolute -top-4 -left-4 w-[160px] h-[160px] border-t-2 border-l-2 border-pink-500/30 rounded-tl-[24px] pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-[160px] h-[160px] border-b-2 border-r-2 border-pink-500/30 rounded-br-[24px] pointer-events-none" />

          {/* The Player Box */}
          <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-black flex items-center justify-center group border border-neutral-100">
            {isPlaying ? (
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-clouds-moving-fast-over-mountain-summit-40742-large.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                onPause={() => setIsPlaying(false)}
              />
            ) : (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                {/* Mountain poster placeholder image */}
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Mountain Summit Video Poster"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                
                {/* Backdrop blur overlay */}
                <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-500" />

                {/* Pulsing Play/Camera Icon */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:bg-[#e91e63] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#e91e63] group-hover:text-white translate-x-[2px] transition-colors duration-300">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-[17px] font-bold text-white tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Video coming soon
                    </p>
                    <p className="text-[12px] text-white/80 mt-1 font-medium max-w-[280px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      The introduction video is in production and will appear here.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          className="mt-14 max-w-[720px] text-center relative px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={textState === "show" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        >
          <span
            className="absolute left-0 top-0 -translate-y-5 bg-clip-text text-[44px] font-bold leading-none text-transparent select-none"
            style={{ backgroundImage: GRAD }}
          >
            &ldquo;
          </span>
          <p
            className="text-[clamp(18px,2vw,22px)] leading-[1.5] text-[#222]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            One conversation can become the beginning
            <br />
            of a healthier relationship with yourself...
          </p>
          <span
            className="absolute right-0 bottom-0 translate-y-3 bg-clip-text text-[44px] font-bold leading-none text-transparent select-none"
            style={{ backgroundImage: GRAD }}
          >
            &rdquo;
          </span>
        </motion.div>

        {/* CTA Button Block */}
        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={textState === "show" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-[14px] bg-gradient-to-br from-[#e91e63] to-[#9c27b0] px-8 py-[14px] text-[14px] tracking-[0.28px] text-white shadow-[0px_8px_16px_rgba(233,30,99,0.34)] font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
            whileHover={{ y: -2 }}
          >
            Become a Founding Member
          </motion.a>
          <div className="hidden translate-y-[-6px] sm:block">
            <CurvedArrow animate={textState === "show"} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
