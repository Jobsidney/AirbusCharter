"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT IS AN AIRBUS CORPORATE JET CHARTER?",
      answer: "An Airbus Corporate Jet charter offers private access to aircraft typically reserved for state or ultra‑long‑range missions. These aircraft provide airline‑grade reliability combined with bespoke private interiors, making them ideal for long‑duration flights, large delegations, or travelers requiring space and privacy beyond traditional business jets.",
    },
    {
      question: "WHO CHARTERS ACJS?",
      answer: "Royal families, UHNW individuals, corporate leadership teams, and entertainment, sports, and global events clients.",
    },
    {
      question: "HOW THE CHARTER PROCESS WORKS",
      answer: "Submit a charter request, aircraft and operator matching, route planning, permits, and clearances, interior configuration and catering selection, flight execution with dedicated trip support.",
    },
    {
      question: "PRICING OVERVIEW",
      answer: "ACJ charter pricing varies based on aircraft type, flight duration, routing, airport access, and onboard services. Due to the bespoke nature of these aircraft, each quotation is prepared individually.",
    },
    {
      question: "GLOBAL OPERATIONS ?",
      answer: "Worldwide charter coverage, diplomatic and high‑profile mission experience, discreet handling and security‑focused coordination, flexible departure locations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqSection section-padding">
      <div className="faqGrid">
        <div className="faqContent">
          <div className="tagBadgeMb6">
            <svg
              className="diamondIcon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2 L20 10 L12 18 L4 10 Z"
              />
            </svg>
            <span className="tagBadgeText">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="h2Uppercase">Clear Answers For Seamless Travel Experience</h2>

          <p className="faqDescription">
            We've compiled answers to the most common questions, ensuring your Airbus journey is smooth, transparent, and effortless.
          </p>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <div key={index} className="faqItem">
                <button
                  className="faqQuestion"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`faqIcon ${openIndex === index ? "faqIconOpen" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {openIndex === index ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v14M5 12h14"
                      />
                    )}
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="faqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                )}
                {index < faqs.length - 1 && <div className="faqDivider"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="faqImageSection">
          <div className="faqImage">
            <Image
              src="https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-35.jpg"
              alt="Flight Attendant"
              width={540}
              height={720}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="faqSupportText">
            Have more questions? Our support team is available <span className="faqHighlight">24/7</span> to assist you with bookings, memberships, or special requests.
          </p>
        </div>
      </div>
    </section>
  );
}

