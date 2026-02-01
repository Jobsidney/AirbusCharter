"use client";

export function DestinationsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] py-32 px-4 sm:px-6 md:px-10">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/world-map-5.svg')"
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center my-10 space-y-8">
        <div className="space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
            Global Capability
          </span>
          <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display">
            <span className="text-[#F5F5F5]">OUR CHARTER  </span>
            <span className="text-[#C9A24D] italic">PHILOSOPHY</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
          Precision. Privacy. Personalization.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-libre-baskerville">
          Every charter is curated individually. From aircraft selection and routing to cabin configuration and onboard services, each detail is aligned with your mission — whether it’s a transcontinental executive movement or a multi‑week private family journey.</p>
        </div>

        <button className="inline-flex items-center justify-center px-8 py-3.5 border border-[#C9A24D] bg-transparent text-[#C9A24D] text-sm font-semibold tracking-wider uppercase hover:bg-[#C9A24D] hover:text-[#0E1116] transition-all duration-300">
          Request Quote
        </button>
      </div>
    </section>
  );
}


