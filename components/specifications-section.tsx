"use client";

import Image from "next/image";

export function SpecificationsSection() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-x-hidden">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
            Excellence Redefined
          </span>
          <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
            <span className="text-[#F5F5F5]">The Future of </span>
            <span className="text-[#C9A24D] italic">Aviation</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-libre-baskerville font-light text-white/70 mt-2">
            Performance Beyond Imagination
          </p>
          <div className="gold-accent-line w-32 mx-auto mt-8"></div>
        </div>

        <div className="relative mt-20 mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/4 space-y-20">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240]"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                    AIRFRAME & SYSTEMS ENGINEERING
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed pl-4">
                  BBJ aircraft are derived from Boeing's commercial platforms and modified for private, governmental, and VIP operations. Structural reinforcements and auxiliary fuel systems enable extended missions while maintaining airline-grade reliability.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240]"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                    AVIONICS, SAFETY & CERTIFICATION
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed pl-4">
                  BBJs feature modern flight decks with advanced avionics and redundant safety architectures. These aircraft operate under the same global certification frameworks used by major airlines, ensuring proven safety and reliability.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex mx-auto justify-center order-first lg:order-none">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/iMAGES/fd6a00e62fbc30480726c9757894d7ae-removebg-preview.png"
                  alt="Boeing Aircraft Top View"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  quality={100}
                />
              </div>
            </div>

            <div className="lg:w-1/4 space-y-20 text-right lg:text-left">
              <div className="group">
                <div className="flex items-center gap-3 mb-4 lg:justify-end justify-start">
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                    CABIN SPACE & CONFIGURATION POTENTIAL
                  </h3>
                  <div className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240]"></div>
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed lg:pl-4 pr-4 lg:pr-0">
                  BBJs offer significantly larger cabin volumes than purpose-built business jets, enabling flexible multi-zone layouts with private suites, conference areas, lounges, and dedicated crew spaces tailored to mission requirements.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4 lg:justify-end justify-start">
                  <h3 className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                    RANGE, ROUTING & MISSION PROFILES
                  </h3>
                  <div className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240]"></div>
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed lg:pl-4 pr-4 lg:pr-0">
                  BBJs are designed for long-range and ultra-long-range operations, supporting nonstop intercontinental routing. Ideal for corporate travel, government transport, charter operations, and special-mission profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
