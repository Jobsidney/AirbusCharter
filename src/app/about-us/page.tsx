import Navbar from "../../components/navbar/Navbar";
import AboutUs from "../../components/about-us/AboutUs";
import Values from "../../components/values/Values";
import CTA from "../../components/cta/CTA";
import Footer from "../../components/footer/Footer";
import Features from "../_components/features/Features";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Features/>
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

