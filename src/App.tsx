import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SecondSection from "./components/SecondSection"

// Below-fold sections — code-split so they don't block initial JS parse
const ThirdSection = lazy(() => import("./components/ThirdSection"))
const FourthSection = lazy(() => import("./components/FourthSection"))
const FifthSection = lazy(() => import("./components/FifthSection"))
const SixthSection = lazy(() => import("./components/SixthSection"))
const JourneySection = lazy(() => import("./components/JourneySection"))
const FounderSection = lazy(() => import("./components/FounderSection"))
const SupportSection = lazy(() => import("./components/SupportSection"))
const PricingSection = lazy(() => import("./components/PricingSection"))
const FaqSection = lazy(() => import("./components/FaqSection"))
const Footer = lazy(() => import("./components/Footer"))

export default function App() {
  return (
    <div className="relative min-h-full w-full bg-white">
      <Navbar />
      <Hero />
      <SecondSection />
      <Suspense fallback={null}>
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <JourneySection />
        <FounderSection />
        <SupportSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </Suspense>
    </div>
  )
}
