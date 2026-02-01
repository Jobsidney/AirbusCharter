"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Check } from "lucide-react";
import { Briefcase } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  benefits?: string[];
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is an Airbus Corporate Jet (ACJ)?",
      answer: "An Airbus Corporate Jet is a private aircraft based on Airbus commercial platforms, converted for VIP and private use. ACJs offer significantly more cabin space, range, and customization than traditional business jets, making them suitable for long-haul, high-privacy missions."
    },
    {
      question: "Is AirbusCorporateJet.com affiliated with Airbus?",
      answer: "No. AirbusCorporateJet.com is an independent charter platform. We are not affiliated with, endorsed by, or connected to Airbus S.A.S. or the official Airbus Corporate Jets brand."
    },
    {
      question: "Who operates the aircraft listed on this website?",
      answer: "All flights are operated by licensed third-party operators holding valid Air Operator Certificates (AOCs), in full compliance with international aviation regulations."
    },
    {
      question: "How long can an ACJ stay airborne?",
      answer: "",
      benefits: [
        "ACJ TwoTwenty: long-range intercontinental capability",
        "ACJ neo: extended intercontinental missions",
        "ACJ330neo: up to 21 hours nonstop",
        "ACJ350: up to 22 hours nonstop"
      ]
    },
    {
      question: "How far in advance should I book an ACJ charter?",
      answer: "Due to limited global availability, ACJ charters—especially wide-body aircraft—are best arranged well in advance, particularly for peak periods or diplomatic missions."
    },
    {
      question: "How do I request an ACJ charter?",
      answer: "You can submit a charter request through our website. A dedicated specialist will review your mission requirements and provide available aircraft options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-x-hidden">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                FAQS
              </span>
              <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">General Charter  </span>
                <span className="text-[#C9A24D] italic">Information</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
                Navigate with Confidence
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mb-8"></div>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-[#C9A24D] min-w-[40px] font-playfair-display">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg font-semibold text-[#F5F5F5] group-hover:text-[#C9A24D] font-playfair-display">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-[#C9A24D] transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? 'transform rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="pb-6 pl-[72px] animate-in slide-in-from-top-2 duration-300">
                      {faq.answer && (
                        <div className="flex gap-4 mb-4">
                          
                          <p className="text-sm text-white/70 leading-relaxed flex-1 pt-2 font-libre-baskerville">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                      {faq.benefits && (
                        <div className="space-y-2 mt-4">
                          {faq.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                              <span className="text-sm text-white/70 font-libre-baskerville">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/iMAGES/plane-4245416_1280.jpg"
                alt="Pilot"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                quality={100}
              />
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-6 shadow-xl max-w-[200px] border border-[#C9A24D]/30">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#9C8240] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#0E1116] mb-2 text-center font-playfair-display">150+</div>
                <p className="text-xs text-[#0E1116]/80 text-center leading-relaxed font-instrument-sans">
                  Airbus Corporate Jets aircraft in service worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
