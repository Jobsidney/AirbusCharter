import styles from "./page.module.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "./_components/hero/Hero";
import Features from "./_components/features/Features";
import Fleet from "./_components/fleet/Fleet";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
        <Features />
        <Fleet />
        <CTA />


      <Footer />
    </div>
  );
}
