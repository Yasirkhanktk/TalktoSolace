import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { scrollToSection } from "../utils/scroll"

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-[1px] select-none cursor-pointer focus:outline-none transition-transform duration-200 hover:scale-[1.03]"
      aria-label="Solace Home"
    >
      <span
        className="text-[24px] sm:text-[27px] leading-none text-black"
        style={{
          fontFamily: "'Montserrat Alternates', sans-serif",
          fontWeight: 500,
        }}
      >
        S
      </span>
      <span className="relative -mx-[1px] inline-flex h-[14px] sm:h-[15px] w-[14px] sm:w-[15px] items-center justify-center">
        <span className="block h-[13px] sm:h-[14px] w-[13px] sm:w-[14px] rounded-full border border-black bg-gradient-to-br from-[#e91e63] to-[#9c27b0] transition-transform duration-300 group-hover:scale-110 shadow-[0_0_8px_rgba(233,30,99,0.4)]" />
      </span>
      <span
        className="text-[24px] sm:text-[27px] leading-none text-black"
        style={{
          fontFamily: "'Montserrat Alternates', sans-serif",
          fontWeight: 500,
        }}
      >
        lace.
      </span>
    </button>
  )
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 8.3"
      fill="none"
      className={className}
      style={{ animation: "arrowBounce 1.2s ease-in-out infinite" }}
    >
      <path
        d="M7.7 0.3 11.7 4c0.2 0.2 0.2 0.5 0 0.7L7.7 8c-0.2 0.2-0.6 0.1-0.6-0.2V5.2H0.5c-0.3 0-0.5-0.2-0.5-0.5V3.6c0-0.3 0.2-0.5 0.5-0.5H7.1V0.5C7.1 0.2 7.5 0.1 7.7 0.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface NavItem {
  label: string
  targetId: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Features", targetId: "features" },
  { label: "How It Works", targetId: "how-it-works" },
  { label: "Journey", targetId: "journey" },
  { label: "Founder", targetId: "about" },
  { label: "Pricing", targetId: "pricing" },
  { label: "FAQ", targetId: "faq" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero")
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const computeActive = () => {
      if (window.scrollY < 240) {
        setActiveSection("hero")
        return
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.35

      // Check section bounding boxes in reverse so bottom-most in-view section wins
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i]
        const el = document.getElementById(item.targetId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.targetId)
            return
          }
        }
      }
    }

    const handleScroll = () => {
      // Throttle to one DOM read per animation frame
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        computeActive()
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    computeActive()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault()
    setActiveSection(targetId)
    scrollToSection(targetId)
  }

  return (
    <nav
      className="fixed left-1/2 top-3 sm:top-5 z-50 w-[min(900px,96vw)] -translate-x-1/2 transition-all duration-300"
      aria-label="Main Navigation"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center rounded-full bg-white/92 px-3 sm:px-4 py-[7px] sm:py-[9px] shadow-[0px_12px_36px_rgba(29,29,29,0.1),0px_2px_8px_rgba(233,30,99,0.06)] backdrop-blur-md border border-white/80">
        {/* Left: Logo */}
        <div className="pl-1 sm:pl-2 shrink-0">
          <Logo
            onClick={() => {
              setActiveSection("hero")
              scrollToSection("hero")
            }}
          />
        </div>

        {/* Center: Navigation Links with Animated Pill Indicator */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 px-1 sm:px-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.targetId
            return (
              <a
                key={item.label}
                href={`#${item.targetId}`}
                onClick={(e) => handleLinkClick(e, item.targetId)}
                className="relative rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[12px] sm:text-[14px] md:text-[14.5px] transition-all duration-200 cursor-pointer select-none shrink-0"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Luminous Animated Pill Background when Active */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e91e63]/12 via-[#e91e63]/16 to-[#9c27b0]/16 border border-[#e91e63]/30 shadow-[0_2px_14px_rgba(233,30,99,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {/* Micro Glowing Accent Dot/Bar Underneath */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicatorBar"
                    className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[2.5px] w-4 rounded-full bg-gradient-to-r from-[#e91e63] to-[#9c27b0] shadow-[0_0_8px_rgba(233,30,99,0.85)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {/* Button Text */}
                <span
                  className={`relative z-10 block transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#e91e63] to-[#9c27b0] bg-clip-text text-transparent font-semibold tracking-[-0.01em]"
                      : "text-slate-700 hover:text-black font-medium hover:bg-black/[0.03] rounded-full"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Right: CTA Early Access */}
        <div className="flex justify-end shrink-0">
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, "pricing")}
            className="group relative flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#e91e63] to-[#9c27b0] py-[6px] sm:py-[7px] pl-3 sm:pl-4 pr-[6px] sm:pr-[7px] text-[11.5px] sm:text-[13px] font-semibold text-white shadow-[0px_8px_18px_rgba(233,30,99,0.36)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0px_10px_24px_rgba(233,30,99,0.48)] active:scale-[0.98] cursor-pointer"
          >
            <span className="tracking-wide">Early Access</span>
            <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 group-hover:translate-x-[2px]">
              <ArrowIcon className="h-[7px] sm:h-[8px] w-[10px] sm:w-[11px] text-[#1d1d1d]" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
