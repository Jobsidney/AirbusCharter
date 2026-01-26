"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "HOW DO I BOOK A PRIVATE JET WITH AIRBUS?",
      answer: "A adipiscing tortor cum in morbi orci mus. Integer vitae turpis habitant facilisis quam. Cras quam eget diam augue aenean rhoncus gravida lorem ultricies. Diam nibh feugiat molestie aliquet.",
    },
    {
      question: "WHAT IS INCLUDED IN THE MEMBERSHIP PLANS?",
      answer: "Our membership plans include exclusive access to our fleet, priority booking, personalized concierge services, and special rates. Each tier offers different benefits tailored to your travel needs.",
    },
    {
      question: "HOW FAR IN ADVANCE SHOULD I BOOK?",
      answer: "We recommend booking at least 48 hours in advance for domestic flights and 72 hours for international flights. However, we can accommodate last-minute requests based on availability.",
    },
    {
      question: "WHAT DESTINATIONS CAN I FLY TO?",
      answer: "Airbus provides access to thousands of airports worldwide, including many private terminals. We can arrange flights to virtually any destination, subject to airspace regulations and airport availability.",
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

