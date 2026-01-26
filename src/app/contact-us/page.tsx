import Navbar from "../../components/navbar/Navbar";
import ContactHero from "../_components/contact-hero/ContactHero";
import ContactContent from "../_components/contact-content/ContactContent";
import FAQ from "../_components/faq/FAQ";
import BookingForm from "../../components/booking-form/BookingForm";
import CTA from "../../components/cta/CTA";
import Footer from "../../components/footer/Footer";

export default function ContactUsPage() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactContent />
      <BookingForm />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

