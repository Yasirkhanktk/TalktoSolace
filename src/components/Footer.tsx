import { motion } from "motion/react";

const GRAD = "linear-gradient(135deg, #e91e63 8%, #9c27b0 92%)";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-12 pb-8 px-6 overflow-hidden">
      <div className="mx-auto max-w-[1260px] flex flex-col">
        {/* Main Row: Logo on Left, Contact Pills on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-12">
          {/* Left Brand Element: Orb and Text are vertically stacked and centered together */}
          <div className="flex flex-col items-center gap-3 w-fit">
            {/* Big Circular Logo Orb */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-[114px] h-[114px] flex items-center justify-center">
                {/* Accent orbital curves */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 114 114"
                  fill="none"
                >
                  <path
                    d="M 14 30 A 54 54 0 0 1 100 24"
                    stroke="#030303"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 102 88 A 54 54 0 0 1 20 94"
                    stroke="#030303"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Inner Gradient Circle */}
                <div
                  className="w-[98px] h-[98px] rounded-full border-[5px] border-[#030303] shadow-[0px_10px_24px_rgba(233,30,99,0.28)]"
                  style={{ background: GRAD }}
                />
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex items-center justify-center">
              <span
                className="text-[46px] md:text-[52px] font-medium leading-none text-[#030303] tracking-tight text-center"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
              >
                Solace.
              </span>
            </div>
          </div>

          {/* Right Contact Capsule Pills */}
          <div className="flex flex-col gap-4 w-full max-w-[340px]">
            {/* Email Capsule */}
            <motion.a
              href="mailto:contact@talktosolace.ai"
              className="group flex items-center gap-3.5 rounded-full border-[2px] border-white/80 bg-white/70 px-2 py-2 shadow-md backdrop-blur-[6px] transition-all hover:border-[#e91e63]/40 hover:shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(147deg, rgba(233,30,99,0.02) 8%, rgba(156,39,176,0.04) 92%)",
              }}
              whileHover={{ y: -2 }}
            >
              {/* Outer icon ring */}
              <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#e91e63] shadow-[0px_0px_18px_-4px_rgba(168,85,247,0.5)]">
                {/* Chat icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#footer_chat_grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  <defs>
                    <linearGradient id="footer_chat_grad" x1="3" y1="3" x2="21" y2="21">
                      <stop stopColor="#E91E63" />
                      <stop offset="1" stopColor="#9C27B0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Text */}
              <span
                className="flex-1 text-center pr-4 bg-clip-text text-[15px] font-semibold text-transparent"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundImage: GRAD,
                }}
              >
                Email Address
              </span>
            </motion.a>

            {/* Phone Capsule */}
            <motion.a
              href="tel:#"
              className="group flex items-center gap-3.5 rounded-full border-[2px] border-white/80 bg-white/70 px-2 py-2 shadow-md backdrop-blur-[6px] transition-all hover:border-[#e91e63]/40 hover:shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(147deg, rgba(233,30,99,0.02) 8%, rgba(156,39,176,0.04) 92%)",
              }}
              whileHover={{ y: -2 }}
            >
              {/* Outer icon ring */}
              <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#e91e63] shadow-[0px_0px_18px_-4px_rgba(168,85,247,0.5)]">
                {/* Compass / Phone icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#footer_phone_grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  <defs>
                    <linearGradient id="footer_phone_grad" x1="2" y1="2" x2="22" y2="22">
                      <stop stopColor="#E91E63" />
                      <stop offset="1" stopColor="#9C27B0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Text */}
              <span
                className="flex-1 text-center pr-4 bg-clip-text text-[15px] font-semibold text-transparent"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundImage: GRAD,
                }}
              >
                Phone
              </span>
            </motion.a>
          </div>
        </div>

        {/* Gradient Horizontal Separator Line */}
        <div
          className="w-full h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, #E91E63 0%, #9C27B0 100%)",
          }}
        />

        {/* Bottom Copyright Text */}
        <div className="pt-6 pb-2 text-center">
          <p
            className="text-[14px] text-black/80 font-medium tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            talktosolace.ai@2026
          </p>
        </div>
      </div>
    </footer>
  );
}
