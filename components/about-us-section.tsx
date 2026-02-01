"use client";

import { Users, Plane, Building2, Wrench, UserCheck } from "lucide-react";

export function AboutUsSection() {
  const audiences = [
    { icon: Users, text: "Aviation professionals" },
    { icon: Plane, text: "Charter clients" },
    { icon: Building2, text: "Operators & management companies" },
    { icon: Wrench, text: "Technical teams" },
    { icon: UserCheck, text: "Aircraft owners & advisors" },
  ];

  return (
    <div id="about-us" className="relative px-4 sm:px-6 md:px-8 lg:px-16 pb-24 md:pb-32 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-hidden">
      {/* Section Separator - Top Gold Line */}
     
    </div>
  );
}

