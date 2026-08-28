import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import JourneySection from "./components/JourneySection";
import FounderSection from "./components/FounderSection";
import SupportSection from "./components/SupportSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-full w-full bg-white">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <JourneySection />
      <FounderSection />
      <SupportSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
