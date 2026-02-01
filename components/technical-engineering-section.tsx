"use client";

import Image from "next/image";
import Link from "next/link";

export function TechnicalEngineeringSection() {
  return (
    <section id="technical-engineering" className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-hidden">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        {/* Title - Responsive */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
          Platform Capabilities
          </span>
          <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display">
            <span className="text-[#F5F5F5]"> Platform Capability for</span>
            <span className="text-[#C9A24D] italic">Global Charter Missions</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-libre-baskerville font-light text-white/70 mt-2">
          Proven Performance and Operational confidence.
          </p>
          <div className="gold-accent-line w-32 mx-auto mt-8"></div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-12">
          {/* First Item - Performance, Range & Engineering */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-lg font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                RANGE, PERFORMANCE <br />& OPERATIONAL DEPTH
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                Airbus Corporate Jets are selected for charter missions requiring extended nonstop range, large-scale cabin environments, and consistent operational performance. Capability varies by aircraft model, configuration, and mission profile.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Key capability areas include:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Range Capability</strong> — Indicative nonstop range by ACJ model and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Powerplant Options</strong> — Engine platforms supporting long-range efficiency and reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Performance Parameters</strong> — Weight limits, cruise profiles, and fuel considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Mission Suitability</strong> — Typical charter missions, airport compatibility, and operating envelopes</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                Explore ACJ Specifications →
              </Link>
            </div>
            <div className="shadow-xl">
              <Image
                src="/iMAGES/bbj-engine-side.jpg"
                alt="Airbus Corporate Jet Performance"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
          </div>
          
          {/* Second Item - Interiors & Cabin Layouts */}
          <div className="space-y-6">
            <div className="shadow-xl">
              <Image
                src="/iMAGES/AERIA-777-Concept-Interior-1.jpg"
                alt="ACJ Interior Cabin"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-lg font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                MULTI-ZONE LAYOUTS FOR <br />LONG-DURATION CHARTER
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                ACJ interiors are defined by cabin scale rather than standard layouts. Compared to traditional business jets, ACJs allow multi-zone configurations designed around long-duration charter missions and onboard functionality.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Interior planning commonly supports:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Private suites and dedicated rest areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>En-suite facilities and personal spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Lounge and guest seating zones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Conference and meeting environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Dining, service, and galley areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Crew rest and operational support spaces</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                View ACJ Interior Concepts →
              </Link>
            </div>
          </div>

          {/* Third Item - Operating Costs & Ownership */}
          <div className="space-y-6">
            <div className="shadow-xl">
              <Image
                src="/iMAGES/27-BBJ_777X_Executive_Book_GE9X_engine-smaller.jpg"
                alt="ACJ Operating Costs"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-12 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-lg font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                MISSION-DRIVEN  <br />COST STRUCTURE
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                Operating economics for Airbus Corporate Jets vary significantly based on aircraft size, configuration, mission length, and utilization. ACJ charter costs are typically assessed per mission rather than standardized hourly benchmarks.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Key cost considerations include:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Mission-based operating cost ranges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Maintenance programs and reserves</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Fuel consumption and engine programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Crew, training, insurance, and support requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Regional operating and handling considerations</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                Learn About ACJ Operating Costs →
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop Layout - Overlapping Images */}
        <div className="hidden lg:block relative min-h-[600px]">
          {/* Left column - Text top */}
          <div className="absolute left-0 top-0 w-[45%] z-10">
            <div className="space-y-4 max-w-md">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-14 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                  Range, Performance<br />& Operational Depth
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                Airbus Corporate Jets are selected for charter missions requiring extended nonstop range, large-scale cabin environments, and consistent operational performance. Capability varies by aircraft model, configuration, and mission profile.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Key capability areas include:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Range Capability</strong> — Indicative nonstop range by ACJ model and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Powerplant Options</strong> — Engine platforms supporting long-range efficiency and reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Performance Parameters</strong> — Weight limits, cruise profiles, and fuel considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A24D] mt-1">•</span>
                  <span><strong>Mission Suitability</strong> — Typical charter missions, airport compatibility, and operating envelopes</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                Explore ACJ Specifications →
              </Link>
            </div>
          </div>

          {/* Right column - Image top */}
          <div className="ml-auto w-[55%] relative z-20">
            <div className="shadow-xl">
              <Image
                src="/iMAGES/bbj-engine-side.jpg"
                alt="Airbus Corporate Jet Performance"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
          </div>
          {/* Left column - Image bottom (overlapping) */}
          <div className="absolute left-0 top-[45%] w-[55%] z-30">
            <div className="shadow-xl">
              <Image
                src="/iMAGES/AERIA-777-Concept-Interior-1.jpg"
                alt="ACJ Interior Cabin"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
          </div>
          {/* Right column - Text bottom */}
          <div className="ml-auto w-[45%] pt-16 relative z-10">
            <div className="space-y-4 max-w-md ml-auto pt-48">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-14 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                  Multi-Zone Layouts for<br />Long-Duration Charter
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                ACJ interiors are defined by cabin scale rather than standard layouts. Compared to traditional business jets, ACJs allow multi-zone configurations designed around long-duration charter missions and onboard functionality.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Interior planning commonly supports:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Private suites and dedicated rest areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>En-suite facilities and personal spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Lounge and guest seating zones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Conference and meeting environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Dining, service, and galley areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Crew rest and operational support spaces</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                View ACJ Interior Concepts →
              </Link>
            </div>
          </div>
        </div>

        {/* Third Section - Operating Costs (Desktop) */}
        <div className="hidden lg:flex mt-24 gap-12 items-start">
         
          <div className="w-1/2">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <span className="w-1 h-14 bg-gradient-to-b from-[#C9A24D] to-[#9C8240] rounded-full"></span>
                <span className="text-xl font-bold text-[#F5F5F5] uppercase tracking-wider leading-tight">
                  Mission-Driven<br />Cost Structure
                </span>
              </h3>
              <p className="text-sm text-white/70 font-libre-baskerville leading-relaxed">
                Operating economics for Airbus Corporate Jets vary significantly based on aircraft size, configuration, mission length, and utilization. ACJ charter costs are typically assessed per mission rather than standardized hourly benchmarks.
              </p>
              <p className="text-xs text-white/60 font-libre-baskerville leading-relaxed mb-3">
                Key cost considerations include:
              </p>
              <ul className="text-sm text-white/70 font-libre-baskerville space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Mission-based operating cost ranges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Maintenance programs and reserves</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Fuel consumption and engine programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Crew, training, insurance, and support requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A24D]">•</span>
                  <span>Regional operating and handling considerations</span>
                </li>
              </ul>
              <Link 
                href="#" 
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#C9A24D] transition-colors border-b border-[#C9A24D] pb-1"
              >
                Learn About ACJ Operating Costs →
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="shadow-xl">
              <Image
                src="/iMAGES/27-BBJ_777X_Executive_Book_GE9X_engine-smaller.jpg"
                alt="ACJ Operating Costs"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




