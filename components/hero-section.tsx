"use client";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0E1116] overflow-x-hidden min-h-screen flex flex-col">
      <section className="relative flex flex-col flex-1 min-h-[100vh] overflow-x-hidden hero-section-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1116]/85 via-[#0E1116]/75 to-[#0E1116]/95 z-0" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-24 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="luxury-heading text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[90px] leading-[1.05] tracking-tight text-center mb-5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F5F5F5 0%, #F5F5F5 12%, #C9A24D 38%, #D4B05E 50%, #C9A24D 62%, #F5F5F5 88%, #F5F5F5 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundSize: "200% 100%",
                color: "transparent",
              }}
            >
              Airbus Charter Jets
            </h1>

            <p className="text-[#C9A24D] text-base md:text-md lg:text-lg tracking-[0.35em] uppercase text-center mb-12 font-light">
              Charter Without Compromise
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-10" />
            <p className="text-[#F5F5F5]/90 text-base sm:text-md md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              For clients who require nonstop intercontinental capability, cabin scale, and discretion, Airbus Charter Jets remain the preferred platform for ultra-long-range charter missions.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex justify-center pb-10">
          <button
            onClick={scrollToAbout}
            className="w-10 h-14 rounded-full border-2 border-white bg-transparent backdrop-blur-sm flex items-center justify-center hover:bg-white/5 transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <span className="hero-scroll-dot w-1.5 h-1.5 rounded-full bg-white block" />
          </button>
        </div>
      </section>
    </main>
  );
}
