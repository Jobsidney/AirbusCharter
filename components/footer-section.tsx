"use client";

import { Plane } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Subtle Gold gradient accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-[#C9A24D]/30 via-[#C9A24D]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-[#C9A24D]/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Top Section - Logo, Tagline, CTA */}
        <div className="text-center py-16 border-b border-[#C9A24D]/10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A24D] to-[#9C8240] rounded-lg flex items-center justify-center shadow-lg shadow-[#C9A24D]/20">
              <Plane className="w-8 h-8 text-[#0E1116]" />
            </div>
          </div>
          
          {/* Tagline */}
          <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display text-[#F5F5F5]">
            Global Reach. Mission-Driven Capability.
          </h2>
          
          {/* Description */}
          <p className="text-[#F5F5F5]/60 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            For clients who require nonstop intercontinental capability, cabin scale, and discretion, Airbus Corporate Jets remain the preferred platform for ultra-long-range charter missions.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/aircraft/acj-twenty-twenty"
            className="inline-flex items-center gap-2 px-8 py-3 text-[#C9A24D] text-sm font-semibold border border-[#C9A24D] bg-[#0E1116] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A24D] hover:text-[#0E1116] hover:shadow-lg hover:shadow-[#C9A24D]/30"
          >
            View Available ACJ Aircraft
            <Plane className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#C9A24D]/10">
          {/* About Column */}
          <div>
            <h3 className="text-[#C9A24D] text-xs uppercase tracking-wider mb-4 font-semibold">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">About This Website</Link></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Mission & Purpose</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          {/* ACJ Models Column */}
          <div>
            <h3 className="text-[#C9A24D] text-xs uppercase tracking-wider mb-4 font-semibold">ACJ Models</h3>
            <ul className="space-y-3">
              <li><Link href="/aircraft/acj-twenty-twenty" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">ACJ TwoTwenty</Link></li>
              <li><Link href="/aircraft/acj-neo" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">ACJ neo</Link></li>
              <li><Link href="/aircraft/acj330-neo" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">ACJ330 neo</Link></li>
              <li><Link href="/aircraft/acj350" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">ACJ350</Link></li>
            </ul>
          </div>
          
          {/* Technical Resources Column */}
          <div>
            <h3 className="text-[#C9A24D] text-xs uppercase tracking-wider mb-4 font-semibold">Technical Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Specifications</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Interiors</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Operating Costs</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Range Maps</a></li>
            </ul>
          </div>
          
          {/* Charter Services Column */}
          <div>
            <h3 className="text-[#C9A24D] text-xs uppercase tracking-wider mb-4 font-semibold">Charter Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Charter Guide</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">How to Charter a ACJ</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 text-sm hover:text-[#C9A24D] transition-colors font-light">Worldwide Routes</a></li>
              <li>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-[#C9A24D] text-xs font-semibold border border-[#C9A24D] bg-[#0E1116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A24D] hover:text-[#0E1116]"
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  Access Jet Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 text-center space-y-2">
          <p className="text-[#F5F5F5]/50 text-sm font-light">
            © 2025 AirbusCharterJet.com — Independent Informational Resource
          </p>
          <p className="text-[#F5F5F5]/30 text-xs font-light">
            Not affiliated with The Boeing Company or Airbus Corporate Jets.
          </p>
        </div>
      </div>
    </footer>
  );
}
