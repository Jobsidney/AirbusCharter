import { HeroSection } from "@/components/hero-section";
import { TechnicalEngineeringSection } from "@/components/technical-engineering-section";
import { BookingSection } from "@/components/booking-section";
import { SpecificationsSection } from "@/components/specifications-section";
import { DestinationsSection } from "@/components/destinations-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { InsightsSection } from "@/components/insights-section";
import { FAQSection } from "@/components/faq-section";
import {
  ScrollReveal,
  ScrollRevealClip,
  ScrollRevealScale,
  ScrollRevealFromBottom,
  ScrollRevealSlideLeft,
  ScrollRevealSlideRight,
  ScrollRevealRotateX,
  ScrollRevealBlur,
} from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E1116] overflow-x-hidden ">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollRevealClip>
        <TechnicalEngineeringSection />
      </ScrollRevealClip>
      <ScrollRevealScale>
        <BookingSection />
      </ScrollRevealScale>
      <ScrollRevealFromBottom>
        <SpecificationsSection />
      </ScrollRevealFromBottom>
      <ScrollRevealSlideLeft>
        <DestinationsSection />
      </ScrollRevealSlideLeft>
      <ScrollRevealBlur>
        <WhyChooseSection />
      </ScrollRevealBlur>
      <ScrollRevealRotateX>
        <InsightsSection />
      </ScrollRevealRotateX>
      <ScrollRevealSlideRight>
        <FAQSection />
      </ScrollRevealSlideRight>
    </div>
  );
}
