"use client";

import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="bg-[#0E1116] overflow-x-hidden h-screen  md:pt-0 lg:pt-0 xl:pt-0">
        <section className="relative flex flex-col justify-between min-h-[calc(100vh)] overflow-x-hidden hero-section-bg">
          {/* Background overlay - darker charcoal for luxury */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1116]/80 via-[#0E1116]/70 to-[#0E1116]/90 z-0" />

          <div className="relative z-10 pt-32 lg:pt-32  pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="relative w-full bg-transparent overflow-x-hidden">
                {/* Large BOEING Title with Luxury Font */}
                <h1 className="luxury-heading text-[36px] sm:text-[45px] md:text-[54px] lg:text-[72px] xl:text-[81px] leading-[1.1] tracking-tight text-center mb-6 font-playfair-display">
                  <span
                    className="bg-clip-text text-transparent drop-shadow-2xl animate-gradient-sweep"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #F5F5F5 0%, #F5F5F5 15%, #C9A24D 40%, #D4B05E 50%, #C9A24D 60%, #F5F5F5 85%, #F5F5F5 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    Boeing Business Jets
                  </span>
                </h1>
                
                {/* Luxury Tagline */}
                <p className="text-[#C9A24D] text-lg md:text-xl lg:text-2xl tracking-[0.3em] uppercase text-center mb-8 font-light">
                  Charter Without Compromise
                </p>
                
                {/* Luxury Description with Gold Accent */}
                <div className="flex flex-col items-center text-center gap-6 mt-8">
                  <div className="max-w-3xl">
                    <div className="gold-accent-line w-24 mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg md:text-xl text-[#F5F5F5]/90 leading-relaxed font-light tracking-wide">
                      For clients who require nonstop intercontinental capability, cabin scale, and discretion, Boeing Business Jets remain the preferred platform for ultra-long-range charter missions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-24 overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4 group bg-white/5 backdrop-blur-md p-4 border border-[#C9A24D]/20 hover:border-[#C9A24D]/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#9C8240] flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="4" width="8" height="8" rx="1" />
                      <rect x="12" y="12" width="8" height="8" rx="1" />
                      <text x="12" y="18" fontSize="7" fill="currentColor" textAnchor="middle" fontWeight="600">%</text>
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-[#F5F5F5]/80 max-w-[380px] leading-relaxed font-light">
                    Your independent resource for the complete Boeing Business Jet family — from the BBJ 737 series to the ultra-long-range BBJ 777 and BBJ 787 Dreamliner VIP variants.
                  </p>
                </div>

            
              </div>
            </div>
            <div className="flex justify-center pt-12 pb-8 relative z-10">
            <button
              onClick={scrollToAbout}
              className="w-16 h-16 bg-[#0E1116]/40 backdrop-blur-md border-2 border-[#C9A24D]/30 rounded-full flex items-center justify-center hover:border-[#C9A24D] hover:bg-[#C9A24D]/10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-8 h-8 text-[#C9A24D]" strokeWidth={2.5} />
            </button>
          </div>
          </div>

         
        </section> 
      </main>
    </>
  );
}
