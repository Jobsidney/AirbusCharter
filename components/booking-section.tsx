"use client";

import Image from "next/image";

export function BookingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
      <div className="flex flex-col lg:flex-row min-h-[420px]">
        {/* Left content */}
        <div className="w-full lg:w-1/2 bg-black text-white px-6 sm:px-10 lg:px-16 py-14 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Experience Boeing
              <br />
            Excellence, Fly Now!
            </h2>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 h-[320px] lg:h-auto relative">
          <Image
            src="/iMAGES/AWD-B787-Fwd-Lounge-01.jpg"
            alt="Private flight"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
