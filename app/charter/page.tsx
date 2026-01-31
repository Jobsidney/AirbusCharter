'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Check, Plane, Globe, Users, Shield, DollarSign, MapPin, ArrowRight } from 'lucide-react';

export default function CharterGuidePage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/iMAGES/777x-tarmac.jpg"
            alt="BBJ Charter"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            BBJ Charter Guide
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4">
            How to Charter a Boeing Business Jet
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base mt-8">
            <Link href="/" className="hover:text-[#C9A24D] transition-colors">
              Boeing
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Charter Guide</span>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
        {/* Introduction Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                VIP Charter Experience
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">The Ultimate </span>
                <span className="text-[#C9A24D] italic">VIP Airliner</span>
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
                Charter Experience
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-libre-baskerville">
                Chartering a Boeing Business Jet (BBJ) offers a level of space, comfort, and long-range performance unmatched by any traditional private jet. With multi-zone interiors, true bedrooms, dining rooms, showers, and up to 10,000+ nautical miles of range, BBJs are designed for missions where privacy, productivity, and comfort matter most.
              </p>
              <p className="text-lg text-white/80 font-medium mt-6 max-w-3xl mx-auto">
                This guide explains everything you need to know before booking a BBJ charter.
              </p>
            </div>
          </div>
        </section>

        {/* What Is a BBJ Charter Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#1a1d24] via-[#0E1116] to-[#1a1d24]">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                  BBJ Charter
                </span>
                <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                  <span className="text-[#F5F5F5]">What Is a </span>
                  <span className="text-[#C9A24D] italic">BBJ Charter?</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mb-8"></div>
                <p className="text-lg text-white/70 leading-relaxed font-libre-baskerville">
                  A BBJ charter involves hiring a privately configured Boeing Business Jet for exclusive use on a specific trip or series of flights. BBJs are especially suitable for:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">Government & diplomatic travel</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">High-level corporate itineraries</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">Ultra-long-range leisure travel</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">Multi-city roadshows</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">Large family or delegation travel</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#F5F5F5] mb-1">Event and sports team transport</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/iMAGES/AERIA-777-Concept-Interior-1.jpg"
                  alt="BBJ Interior"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover shadow-xl"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Charter a BBJ Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#1a1d24] via-[#0E1116] to-[#1a1d24]">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                Why BBJ
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">Why Charter a </span>
                <span className="text-[#C9A24D] italic">BBJ</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
                Instead of a Traditional Private Jet
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              <p className="text-white/70 max-w-3xl mx-auto font-libre-baskerville">
                Chartering a Boeing Business Jet (BBJ) offers a level of space, comfort, and long-range performance unmatched by any traditional private jet. With multi-zone interiors, true bedrooms, dining rooms, showers, and up to 10,000+ nautical miles of range, BBJs are designed for missions where privacy, productivity, and comfort matter most.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-6">
                Key Benefits of Chartering a BBJ:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">Space</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      BBJs offer up to 4,000 sq ft of interior space—up to 10 times more than a long-range business jet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">Range</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      BBJ 737 series: 5,500–6,200 nm. BBJ MAX series: up to 7,000 nm. BBJ 777-200LR: over 10,000 nm. BBJ 787-9: up to ~9,800 nm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">Fully Private Cabin Zones</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Multiple isolated areas for work, sleep, dining, and relaxation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">VIP Amenities</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Bedrooms, showers, full galleys, conference rooms, and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">Large Delegation Capacity</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      12–88 passengers depending on configuration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <style dangerouslySetInnerHTML={{__html: `
              .cost-section .cost-grid {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -15px;
              }

              .cost-section .cost-col {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 0 15px;
              }

              .cost-section .cost-col-image {
                display: flex;
                align-items: flex-start;
                position: relative;
                margin-bottom: 0;
                margin-top: 0;
                margin-left: -2px;
              }

              .cost-section .cost-col-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
              }

              .cost-section .cost-header {
                margin-bottom: 45px;
              }

              .cost-section .cost-title {
                font-size: 36px;
                font-weight: 700;
                line-height: 1.2;
                margin-bottom: 16px;
                color: #F5F5F5;
              }

              .cost-section .cost-description {
                font-size: 16px;
                line-height: 30px;
                color: rgba(255,255,255,0.7);
                margin: 0;
              }

              .cost-section .cost-description-line {
                display: block;
              }

              .cost-section .pricing-list {
                display: flex;
                flex-direction: column;
                gap: 24px;
                margin-bottom: 40px;
              }

              .cost-section .cost-section-image {
                margin-top: -2px;
                position: relative;
                z-index: 1;
              }

              .cost-section .cost-section-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
              }

              .cost-section .pricing-item {
                display: flex;
                align-items: flex-start;
                gap: 16px;
                padding-bottom: 24px;
                border-bottom: 1px solid rgba(201,162,77,0.2);
              }

              .cost-section .pricing-item:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }

              .cost-section .pricing-item-label {
                flex: 0 0 180px;
                font-size: 18px;
                font-weight: 600;
                color: #F5F5F5;
              }

              .cost-section .pricing-item-subtitle {
                font-size: 14px;
                color: rgba(255,255,255,0.6);
                margin-top: 4px;
              }

              .cost-section .pricing-item-value {
                flex: 1;
              }

              .cost-section .pricing-amount {
                font-size: 24px;
                font-weight: 700;
                color: #C9A24D;
                margin-bottom: 4px;
                line-height: 1;
              }

              .cost-section .pricing-unit {
                font-size: 14px;
                color: rgba(255,255,255,0.6);
              }

              .cost-section .cost-factors {
                margin-top: 0;
              }

              .cost-section .cost-factors-title {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 28px;
                color: #F5F5F5;
              }

              .cost-section .cost-factors-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                grid-template-columns: 315px 315px;
                gap: 10px 0;
              }

              .cost-section .cost-factors-item {
                font-weight: 500;
                font-size: 16px;
                position: relative;
                padding-left: 30px;
                color: rgba(255,255,255,0.7);
              }

              .cost-section .cost-factors-icon {
                position: absolute;
                left: 0;
                top: 6px;
                font-size: 18px;
                line-height: 18px;
                background: linear-gradient(90deg, #C9A24D 0%, #D4B05E 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              @media (max-width: 1199px) {
                .cost-section .cost-factors-list {
                  grid-template-columns: 1fr;
                }
              }

              @media (max-width: 991px) {
                .cost-section .cost-grid {
                  flex-direction: column;
                }
                .cost-section .cost-col {
                  flex: 0 0 100%;
                  max-width: 100%;
                }
                .cost-section .cost-title {
                  font-size: 28px;
                }
                .cost-section .pricing-item {
                  flex-direction: column;
                  gap: 12px;
                }
                .cost-section .pricing-item-label {
                  flex: 1;
                }
                .cost-section .pricing-amount {
                  font-size: 22px;
                }
                .cost-section .cost-col-image {
                  min-height: auto;
                  margin-bottom: 30px;
                  justify-content: center;
                }
                .cost-section .cost-col-image-bg {
                  width: 100%;
                  max-width: 100%;
                  height: auto;
                  aspect-ratio: 1;
                  position: relative;
                }
                .cost-section .cost-col-image img {
                  margin-left: 0;
                  width: 100%;
                  max-width: 100%;
                  height: auto;
                  position: relative;
                }
              }
            `}} />
            
            <div className="cost-section">
              <div className="cost-grid">
                <div className="cost-col">
                  <div className="cost-header">
                    <h2 className="cost-title">How Much Does It Cost to Charter a BBJ?</h2>
                    <p className="cost-description">
                      <span className="cost-description-line">BBJ charter pricing varies based on aircraft model, configuration, routing, and mission requirements. Below are typical hourly rates for different BBJ categories.</span>
                    </p>
                  </div>

                  <div className="pricing-list">
                    <div className="pricing-item">
                      <div className="pricing-item-label">
                        Narrowbody BBJs
                        <div className="pricing-item-subtitle">737 / MAX series</div>
                      </div>
                      <div className="pricing-item-value">
                        <div className="pricing-amount">$11,000–$15,000</div>
                        <p className="pricing-unit">per hour</p>
                      </div>
                    </div>

                    <div className="pricing-item">
                      <div className="pricing-item-label">
                        Widebody BBJs
                        <div className="pricing-item-subtitle">777 / 787</div>
                      </div>
                      <div className="pricing-item-value">
                        <div className="pricing-amount">$18,000–$32,000</div>
                        <p className="pricing-unit">per hour</p>
                      </div>
                    </div>
                  </div>

                  <div className="cost-section-image">
                    <Image
                      src="/iMAGES/bbj-engine-side.jpg"
                      alt="BBJ Aircraft"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      quality={100}
                    />
                  </div>
                </div>

                <div className="cost-col">
                  <div className="cost-col-image">
                    <Image
                      src="/iMAGES/27-BBJ_777X_Executive_Book_GE9X_engine-smaller.jpg"
                      alt="BBJ Charter"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      quality={100}
                    />
                  </div>
                  <div className="cost-factors">
                    <h3 className="cost-factors-title">Costs vary based on:</h3>
                    <ul className="cost-factors-list">
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Aircraft model
                      </li>
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Cabin configuration
                      </li>
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Distance & routing
                      </li>
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Overnight crew fees
                      </li>
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Fuel prices
                      </li>
                      <li className="cost-factors-item">
                        <span className="cost-factors-icon">✓</span>
                        Short-notice logistics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                What's Included
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">What Is Included in a </span>
                <span className="text-[#C9A24D] italic">BBJ Charter?</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              <p className="text-white/70 max-w-3xl mx-auto font-libre-baskerville">
                Every BBJ charter includes comprehensive services to ensure a seamless, luxurious experience from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative">
                <Image
                  src="/iMAGES/homepage-comfort.jpg"
                  alt="BBJ Charter"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover shadow-xl"
                  quality={100}
                />
              </div>

              <div className="space-y-6">
                <ul className="space-y-4">
                  {[
                    'Exclusive aircraft use',
                    'VIP catering',
                    'Crew and flight attendants',
                    'Full mission planning',
                    'Handling and ground support',
                    'Permits and overflight approvals',
                    'Security (where applicable)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#C9A24D]" />
                        </div>
                      </div>
                      <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#1a1d24] via-[#0E1116] to-[#1a1d24] overflow-hidden">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,162,77,0.15) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                Global Reach
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">Popular </span>
                <span className="text-[#C9A24D] italic">BBJ Routes</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              <p className="text-white/70 mt-6 max-w-2xl mx-auto font-libre-baskerville">
                These are some of the most frequently chartered routes, showcasing the BBJ's capability to connect major global destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { route: 'New York → Dubai', distance: '6,850 nm' },
                { route: 'London → Singapore', distance: '6,750 nm' },
                { route: 'LA → Tokyo', distance: '5,500 nm' }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border-2 border-[#C9A24D]/20 hover:border-[#C9A24D]/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C9A24D]/10 to-transparent rounded-bl-full"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B8924A] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-bold text-[#F5F5F5] mb-1">{item.route}</div>
                        <div className="text-sm text-white/60 flex items-center gap-1">
                          <Plane className="w-4 h-4" />
                          <span>{item.distance}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#C9A24D] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowRight className="w-4 h-4" />
                      <span>Non-stop capability</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Bottom two cards spanning full width */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { route: 'Riyadh → Washington, DC', distance: '6,200 nm' },
                  { route: 'Paris → Buenos Aires', distance: '6,100 nm' }
                ].map((item, index) => (
                  <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border-2 border-[#C9A24D]/20 hover:border-[#C9A24D]/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C9A24D]/10 to-transparent rounded-bl-full"></div>
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A24D] to-[#B8924A] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-bold text-[#F5F5F5] mb-1">{item.route}</div>
                          <div className="text-sm text-white/60 flex items-center gap-1">
                            <Plane className="w-4 h-4" />
                            <span>{item.distance}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#C9A24D] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowRight className="w-4 h-4" />
                        <span>Non-stop capability</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Access Jet Group CTA Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
                Charter a BBJ With Access Jet Group
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Access Jet Group provides global access to BBJ aircraft, including BBJ 737, BBJ MAX, and VIP-configured BBJ 777 and BBJ 787 models.
              </p>

              <p className="text-xl font-semibold text-[#F5F5F5] mb-8">
                Their team specializes in:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                {[
                  'Ultra-long-range routing',
                  'Diplomatic and government missions',
                  'Confidential charter sourcing',
                  'Complex multi-country itineraries',
                  '24/7 mission support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#charter-cta"
                className="inline-flex items-center gap-3 px-8 py-4 text-[#C9A24D] font-semibold text-lg border border-[#C9A24D] bg-gradient-to-br from-[#0E1116] to-[#1a1d24] hover:bg-gradient-to-br hover:from-[#C9A24D] hover:to-[#a8863d] hover:text-[#0E1116] transition-all duration-300 hover:-translate-y-0.5 font-instrument-sans"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                }}
              >
                Request a BBJ Charter Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

