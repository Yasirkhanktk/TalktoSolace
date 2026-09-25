import { motion } from "motion/react"
import solaceLogoImg from "../assets/solace-logo-dark.png"

export default function SolaceEmblem({
  className = "",
  size = 180,
  tilt = -14,
}: {
  className?: string
  size?: number
  tilt?: number
}) {
  return (
    <motion.div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: size }}
      animate={{
        y: [0, -12, 0],
        rotate: [tilt - 2, tilt + 3, tilt - 2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={solaceLogoImg}
        alt="Solace Logo"
        className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(233,30,99,0.25)] rounded-[24px]"
      />
    </motion.div>
  )
}
