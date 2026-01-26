import Navbar from "../../components/navbar/Navbar";
import FleetHero from "../_components/fleet-hero/FleetHero";
import FleetList from "../_components/fleet/FleetList";
import Features from "../_components/features/Features";
import BookingForm from "../../components/booking-form/BookingForm";
import CTA from "../../components/cta/CTA";
import Footer from "../../components/footer/Footer";

export default function FleetPage() {
  return (
    <div>
      <Navbar />
      <FleetHero />
      <FleetList />
      <Features />
      <BookingForm />
      <CTA />
      <Footer />
    </div>
  );
}

