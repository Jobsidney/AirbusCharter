import styles from "../page.module.css";
import Navbar from "../../components/navbar/Navbar";
import AboutUs from "../../components/about-us/AboutUs";
import Values from "../../components/values/Values";
import CTA from "../../components/cta/CTA";
import Footer from "../../components/footer/Footer";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

