import { HeroSection } from "@/components/hero-section";
import { TechnicalEngineeringSection } from "@/components/technical-engineering-section";
import { BookingSection } from "@/components/booking-section";
import { SpecificationsSection } from "@/components/specifications-section";
import { DestinationsSection } from "@/components/destinations-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { InsightsSection } from "@/components/insights-section";
import { AboutUsSection } from "@/components/about-us-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E1116] overflow-x-hidden ">
      <HeroSection />
      <TechnicalEngineeringSection />
      <BookingSection />
      <SpecificationsSection />
      <DestinationsSection />
      <WhyChooseSection />
      <InsightsSection />
      <FAQSection />
    </div>
  );
}
