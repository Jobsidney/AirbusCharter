"use client";

import Image from "next/image";
import { Layout, BedDouble, Globe, Wind } from "lucide-react";

export function WhyChooseSection() {
  const audiences = [
    { icon: Layout, text: "Full‑height cabins with wide‑body proportions" },
    { icon: BedDouble, text: "Dedicated private suites, bedrooms, lounges, and dining areas" },
    { icon: Globe, text: "Intercontinental and ultra‑long‑range capability" },
    { icon: Wind, text: "Quiet, smooth flight experience" },
  ];
  return (
    <>
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-x-hidden">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
            Independent Resource
          </span>
          <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display">
            <span className="text-[#F5F5F5]">WHY AIRBUS </span>
            <span className="text-[#C9A24D] italic">CORPORATE JETS</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl  font-libre-baskerville font-light text-white/70 mt-2">
          Designed Without Compromise
          </p>
          <div className="gold-accent-line w-32 mx-auto mt-8"></div>
        </div>

        
      </div>
      <div className="absolute top-0 left-0  right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-4xl mx-auto">
        {/* Content */}
        <div className="space-y-12">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed text-center font-light font-libre-baskerville">
          Unlike traditional business jets, ACJs are derived from Airbus’ most advanced commercial aircraft platforms. The result is unmatched cabin volume, ultra‑long‑range performance, and superior stability at altitude.

          </p>

          {/* Audience List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {audiences.map((item, index) => (
              <div 
                key={index}
                className="luxury-card-hover flex items-center gap-3 p-5 bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 rounded"
              >
                <item.icon className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                <span className="text-white/80 text-sm font-light font-libre-baskerville">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Gold Divider */}
          <div className="gold-accent-line w-32 mx-auto my-12"></div>

          {/* Disclaimer Box - Subtle */}
          <div className="my-16 pt-8 border-t border-[#C9A24D]/10">
            <p className="text-center text-xs text-white/50 leading-relaxed max-w-2xl mx-auto font-light font-libre-baskerville">
              <strong className="font-normal">Disclaimer:</strong> AirbusCharterJet.com is an independent informational resource and is not affiliated with, 
              endorsed by, or sponsored by the Airbus Corporate Jets. For official information, visit{" "}
              <a 
                href="https://airbus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C9A24D] hover:underline"
              >
                airbus.com
              </a>
              . All trademarks remain the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
}
