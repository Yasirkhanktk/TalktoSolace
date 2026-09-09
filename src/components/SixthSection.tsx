import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import imgUseCase1 from "../imports/MeetSolace-1/141fdb7bf66120704255629fbd3acc8cdb3d4bc6.png";
import imgUseCase2 from "../imports/MeetSolace-1/357e6fa693eebbf6f9fb3555348fd2b13af72fb4.png";
import imgAvatar from "../imports/MeetSolace-1/2ccd8c672594e6da94186349c234e9c6c4b23f45.png";
import imgContent3 from "../imports/MeetSolace-1/efecd8b2ced1ea351533f05753cd6733910d8c0f.png";
import SolaceEmblem from "./SolaceEmblem";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

const CARDS = [
  { img: imgUseCase1, innerImg: imgContent3, hasBgGradient: true },
  { img: imgUseCase1, innerImg: null, hasBgGradient: false },
  { img: imgUseCase1, innerImg: imgUseCase2, hasBgGradient: true },
  { img: imgUseCase1, innerImg: null, hasBgGradient: true },
  { img: imgUseCase1, innerImg: null, hasBgGradient: false },
  { img: imgUseCase1, innerImg: null, hasBgGradient: false },
  { img: imgUseCase1, innerImg: null, hasBgGradient: false },
];

export default function SixthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // We want to slide the horizontal container leftwards as we scroll down.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} id="testimonials-section" className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Floating emblem in top-left empty space */}
        <div className="pointer-events-none absolute left-[4%] top-[10%] z-0 hidden xl:block opacity-40">
          <SolaceEmblem size={120} tilt={-15} />
        </div>

        {/* Header Area */}
        <div className="flex w-full max-w-[1260px] flex-col items-center px-6 text-center">
          <span
            className="rounded-[12px] border border-[#e91e63] px-4 py-[6px] text-[11px] font-semibold uppercase backdrop-blur-[4px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundImage: "linear-gradient(131deg, rgba(233,30,99,0.12), rgba(156,39,176,0.12))",
            }}
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
              Testimonials
            </span>
          </span>
          <h2
            className="mt-4 text-[clamp(40px,4.4vw,56px)] leading-[1] tracking-[-1.7px] text-black"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            Platform{" "}
            <span className="bg-clip-text font-semibold text-transparent" style={{ backgroundImage: GRAD }}>
              Built for.....
            </span>
          </h2>
          <div className="mt-4 h-[5px] w-[57px] rounded-full" style={{ background: GRAD }} />
        </div>

        {/* Horizontal Scroll Track */}
        <div className="relative mt-16 flex w-full items-center">
          <motion.div
            className="flex gap-4 px-[5vw]"
            style={{ x: reduce ? 0 : x }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="relative flex h-[397px] w-[359px] shrink-0 items-center justify-center rounded-[28px] p-2.5"
              >
                {/* Background Gradient */}
                {card.hasBgGradient && (
                  <div
                    className="absolute inset-0 rounded-[28px]"
                    style={{ backgroundImage: GRAD }}
                  />
                )}
                
                {/* Image Container */}
                <div className={`relative flex h-full w-full overflow-hidden rounded-[20px] ${!card.hasBgGradient ? "bg-[#b9b9b9]" : "bg-white"}`}>
                  <img
                    src={card.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  {card.innerImg && (
                    <div className="absolute inset-0 flex items-center justify-center p-6 backdrop-blur-[10px]">
                      <img
                        src={card.innerImg}
                        alt=""
                        className="h-full w-full rounded-[14px] object-cover"
                      />
                    </div>
                  )}
                  {/* Subtle Inner Border */}
                  <div className="absolute inset-0 rounded-[20px] border border-white/30" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Static Content */}
        <div className="mt-12 flex w-full flex-col items-center gap-6 px-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {["10,000+ Users", "4.9 Rating", "Real-time insights", "Secure & compliant"].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-[#edf1f4] px-3.5 py-1 text-[12.5px] font-medium text-[#4d585f]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pill}
              </span>
            ))}
          </div>
          
          <div className="flex max-w-[473px] flex-col items-center text-center">
            <p
              className="text-[15.8px] font-medium leading-[1.4] text-[#1d1d1d]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img src={imgAvatar} alt="Alex James" className="h-7 w-7 rounded-[14px] object-cover" />
              <span className="text-[13px] font-medium text-[#4d585f]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Alex James
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
