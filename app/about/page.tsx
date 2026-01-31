'use client';

import { FAQSection } from '@/components/faq-section';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {

  return (
    <>
    {/* Hero Banner Section - Same as aircraft pages */}
    <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/iMAGES/Cover_takeoff.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          About Us
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:text-[#C9A24D] transition-colors">
            Boeing
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/80">About Us</span>
        </div>
      </div>
    </section>

    <div className="about-page-content">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ===== CSS ISOLATION ===== */
        /* Isolate about page styles to prevent affecting footer and FAQ section */
        .about-page-content {
          isolation: isolate;
          contain: layout style paint;
        }
        
        /* ===== CSS RESET & BASE STYLES ===== */
        /* All styles are scoped to .about-page-content to prevent affecting footer */
        .about-page-content * {
          box-sizing: border-box;
        }

        .about-page-content {
          --color-primary: #C9A24D;
          --color-primary-light: #a8863d;
          --color-dark: #0E1116;
          --color-text: #F5F5F5;
          --color-text-muted: rgba(245, 245, 245, 0.7);
          --color-bg-light: #1a1d24;
          --color-white: #F5F5F5;
          --color-border: rgba(201, 162, 77, 0.2);
          --font-primary: 'Inter', sans-serif;
          --font-secondary: 'Manrope', sans-serif;
        }

        .about-page-content {
          font-family: var(--font-secondary);
          color: var(--color-text);
          font-size: 16px;
          line-height: 30px;
          font-weight: 400;
          background: linear-gradient(to bottom, #0E1116, #1a1d24, #0E1116);
          -webkit-tap-highlight-color: transparent;
        }

        /* ===== UTILITY CLASSES ===== */
        .about-page-content .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .about-page-content .section {
          position: relative;
        }

        /* ===== TYPOGRAPHY ===== */
        /* Target only specific about page sections, not FAQ section */
        /* Exclude item titles from general h3 styling */
        .about-page-content .about h2,
        .about-page-content .about h3:not(.why-choose-item-title),
        .about-page-content .about h4,
        .about-page-content .about h5,
        .about-page-content .about h6,
        .about-page-content .features h2,
        .about-page-content .features h3,
        .about-page-content .features h4,
        .about-page-content .features h5,
        .about-page-content .features h6,
        .about-page-content .why-choose h2,
        .about-page-content .why-choose h3:not(.why-choose-item-title),
        .about-page-content .why-choose h4,
        .about-page-content .why-choose h5,
        .about-page-content .why-choose h6 {
          font-family: var(--font-primary);
          color: var(--color-text);
          margin: 0;
        }

        .about-page-content .about h2,
        .about-page-content .features h2,
        .about-page-content .why-choose h2 {
          font-size: 100px;
          font-weight: 700;
          line-height: 120px;
          letter-spacing: -4px;
        }

        .about-page-content .about h3:not(.why-choose-item-title),
        .about-page-content .features h3,
        .about-page-content .why-choose h3:not(.why-choose-item-title) {
          font-size: 55px;
          line-height: 65px;
          font-weight: 600;
          letter-spacing: -2.09px;
        }

        .about-page-content .about h4,
        .about-page-content .features h4,
        .about-page-content .why-choose h4 {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
          letter-spacing: -0.76px;
        }

        .about-page-content .about h6,
        .about-page-content .features h6,
        .about-page-content .why-choose h6 {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: normal;
          line-height: 24px;
        }

        .about-page-content p {
          margin: 0;
        }

        .about-page-content a {
          text-decoration: none;
          color: inherit;
        }

        /* ===== BUTTONS ===== */
        .about-page-content .btn {
          display: inline-block;
          padding: 10.5px 30px;
          font-family: var(--font-primary);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 0;
          transition: 0.5s;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--color-primary);
          cursor: pointer;
        }

        .about-page-content .btn-primary {
          background: linear-gradient(135deg, #0E1116 0%, #1a1d24 100%);
          color: var(--color-primary);
        }

        .about-page-content .btn-primary:hover {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: var(--color-dark);
          transform: translateY(-2px);
        }

        .about-page-content .btn-white {
          background: linear-gradient(135deg, #0E1116 0%, #1a1d24 100%);
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }

        .about-page-content .btn-white:hover {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: var(--color-dark);
        }

        /* ===== ABOUT SECTION ===== */
        .about-page-content .about {
          position: relative;
          overflow: hidden;
          background: linear-gradient(to bottom, #0E1116, #1a1d24, #0E1116);
          padding: 120px 0;
          text-align: center;
          min-height: 1190px;
        }

        .about-page-content .about::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          background-image: url('https://hyperflywp.bracketweb.com/wp-content/uploads/2025/07/work-process-4-bg-1.png');
          background-repeat: no-repeat;
          background-size: auto;
          background-position: 50% 100%;
        }

        .about-page-content .about-header {
          padding-bottom: 52px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-tagline {
          margin-bottom: 22px;
        }

        .about-page-content .section-tagline-word {
          display: inline-block;
          position: relative;
        }

        .about-page-content .section-tagline-letter {
          display: inline-block;
          position: relative;
        }

        .about-page-content .section-title {
          margin-bottom: 45px;
        }

        .about-page-content .section-title-word {
          display: inline-block;
          position: relative;
          margin-right: 0.25em;
        }
        
        .about-page-content .section-title-word:last-child {
          margin-right: 0;
        }

        .about-page-content .section-title-letter {
          display: inline-block;
          position: relative;
        }

        .about-page-content .about-description {
          font-size: 16px;
          line-height: 28px;
          font-weight: 500;
          margin: 45px auto 0;
          color: var(--color-text);
          max-width: 1200px;
        }

        .about-page-content .about-cta {
          position: relative;
          text-align: center;
          margin-bottom: 100px;
        }

        .about-page-content .about-image-wrapper {
          position: relative;
          display: block;
          text-align: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-image-wrapper img {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }

        @media (max-width: 991px) {
          .about-page-content .about-image-wrapper {
            width: 100%;
            padding: 0 15px;
          }
          .about-page-content .about-image-wrapper img {
            width: 100%;
            height: auto;
          }
        }

        .about-page-content .about-features {
          list-style: none;
          padding: 0;
          margin: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 600px;
          pointer-events: none;
        }
        
        .about-page-content .about-feature {
          pointer-events: auto;
        }

        .about-page-content .about-feature {
          max-width: 350px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          border-radius: 0;
          padding: 20px 20px 20px 80px;
          font-size: 16px;
          line-height: 26px;
          font-weight: 600;
          color: var(--color-text);
          text-align: left;
          position: absolute;
        }

        .about-feature:nth-child(1) {
          left: 10%;
          top: 40px;
        }

        .about-feature:nth-child(2) {
          right: 10%;
          top: 40px;
        }

        .about-feature:nth-child(3) {
          left: 5%;
          top: 258px;
        }

        .about-feature:nth-child(4) {
          right: 5%;
          top: 258px;
        }

        .about-feature:nth-child(5) {
          left: 50%;
          transform: translateX(-50%);
          top: 460px;
        }

        /* Tablet adjustments for about-feature cards - 2 column grid centered */
        @media (max-width: 1199px) and (min-width: 992px) {
          .about-page-content .about-image-wrapper {
            max-width: 950px;
            margin: 0 auto;
            padding: 0 30px;
          }
          .about-page-content .about-features {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
            max-width: 700px;
            margin: 40px auto 0;
            min-height: auto;
            padding: 0 20px;
          }
          .about-page-content .about-feature {
            position: relative;
            max-width: 100%;
            width: 100%;
            padding: 18px 18px 18px 70px;
            font-size: 15px;
            line-height: 24px;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
          }
          .about-feature:nth-child(5) {
            grid-column: 1 / -1;
            max-width: 100%;
            justify-self: center;
            width: calc(50% - 10px);
          }
          .about-page-content .about-feature-icon {
            left: 25px;
            top: 22px;
            font-size: 28px;
          }
        }

        /* Mobile - stack all cards */
        @media (max-width: 991px) {
          .about-page-content .about {
            overflow: visible;
            padding-bottom: 60px;
          }
          .about-page-content .about-features {
            position: relative !important;
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: auto;
            padding: 30px 15px 0;
          }
          .about-page-content .about-feature {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            margin: 0 0 20px 0;
            max-width: 100%;
            width: 100%;
          }
          .about-page-content .about-feature-icon {
            left: 20px;
            top: 20px;
            font-size: 24px;
          }
          .about-page-content .about-feature {
            padding: 18px 18px 18px 70px;
            font-size: 15px;
          }
        }

        .about-page-content .about-feature-icon {
          position: absolute;
          left: 33px;
          top: 25px;
          font-size: 30px;
          line-height: 30px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ===== FEATURES SECTION ===== */
        .about-page-content .features {
          padding: 120px 0;
          position: relative;
        }

        .about-page-content .features-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .about-page-content .features-col {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        .about-page-content .features-col-image {
          display: flex;
          align-items: center;
          position: relative;
          min-height: 410px;
        }

        .about-page-content .features-col-image-bg {
          width: 410px;
          height: 410px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          border-radius: 0;
          position: absolute;
          left: 0;
          top: 0;
        }

        .about-page-content .features-col-image img {
          position: relative;
          margin-left: -90px;
          max-width: 100%;
          height: auto;
          animation: shapeMove 3s linear infinite;
        }

        .about-page-content .features-content {
          position: relative;
        }

        .about-page-content .features-title {
          margin-bottom: 40px;
        }

        .about-page-content .features-title-line {
          display: block;
          text-align: start;
        }

        .about-page-content .features-description {
          font-weight: 400;
          color: var(--color-text);
          font-size: 16px;
          line-height: 30px;
        }

        .about-page-content .features-description-line {
          display: block;
          text-align: start;
        }

        .about-page-content .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 45px;
          display: grid;
          grid-template-columns: 315px 315px;
          gap: 10px 0;
        }

        .about-page-content .features-list-item {
          font-weight: 500;
          font-family: var(--font-primary);
          font-size: 16px;
          position: relative;
          padding-left: 30px;
        }

        .about-page-content .features-list-icon {
          position: absolute;
          left: 0;
          top: 6px;
          font-size: 18px;
          line-height: 18px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ===== WHY CHOOSE SECTION ===== */
        .about-page-content .why-choose {
          position: relative;
          padding: 120px 0 0;
          min-height: 949px;
          background: linear-gradient(to bottom, #1a1d24, #0E1116, #1a1d24);
        }

        .why-choose::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://hyperflywp.bracketweb.com/wp-content/uploads/2025/07/why-choose-2-bg.png');
          background-position: 0% 50%;
          background-repeat: no-repeat;
          background-size: auto;
          animation: movebounce3 3s linear infinite;
        }

        .about-page-content .why-choose-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .about-page-content .why-choose-col-left {
          flex: 0 0 58.3333%;
          max-width: 58.3333%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .about-page-content .why-choose-col-right {
          flex: 0 0 41.6667%;
          max-width: 41.6667%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .about-page-content .why-choose-header {
          padding-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        .about-page-content .why-choose-description {
          margin: 0 0 28px;
        }

        .about-page-content .why-choose-item {
          position: relative;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 30px;
          padding: 0 0 21px 85px;
          transition: 0.4s;
        }

        .why-choose-item-icon {
          font-size: 45px;
          line-height: 45px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: absolute;
          left: 0;
          top: 9px;
        }

        .about-page-content .why-choose-item-title {
          margin-bottom: 14px;
          font-size: 14px !important;
          line-height: 20px !important;
          font-weight: 600;
          letter-spacing: -0.4px;
        }

        .why-choose-item-description {
          margin: 0;
        }

        .about-page-content .why-choose-image {
          position: relative;
          text-align: center;
          margin-top: -95px;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 15px;
        }

        .why-choose-image img {
          max-width: 100%;
          height: auto;
          animation: shapeMove 3s linear infinite;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes shapeMove {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes movebounce3 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotated {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* ===== RESPONSIVE ===== */
        /* Large Desktop (1400px and up) */
        @media (min-width: 1400px) {
          .container {
            max-width: 1320px;
          }
        }

        /* Desktop (1200px - 1399px) */
        @media (max-width: 1399px) {
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 90px;
            line-height: 110px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 50px;
            line-height: 60px;
          }
          .hero {
            min-height: 90vh;
          }
          .hero-image {
            max-width: 700px;
          }
        }

        /* Tablet Large (992px - 1199px) */
        @media (max-width: 1199px) {
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 75px;
            line-height: 90px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 45px;
            line-height: 55px;
          }
          .hero {
            padding: 60px 20px 100px;
            min-height: 85vh;
          }
          .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
          .hero-stats {
            width: 100%;
            max-width: 420px;
          }
          .about-page-content .about-feature {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            margin: 10px 0;
          }
          .about-page-content .about-image-wrapper {
            margin-top: 40px;
            width: 100%;
            padding: 0 15px;
          }
          .about-page-content .about-image-wrapper img {
            width: 100%;
            height: auto;
          }
        }

        /* Tablet (768px - 991px) */
        @media (max-width: 991px) {
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 60px;
            line-height: 72px;
            letter-spacing: -2.5px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 40px;
            line-height: 50px;
            letter-spacing: -1.5px;
          }
          .about-page-content .about h4,
          .about-page-content .features h4,
          .about-page-content .why-choose h4 {
            font-size: 18px;
            line-height: 28px;
          }
          .hero {
            padding: 50px 20px 80px;
            min-height: 80vh;
          }
          .hero-title {
            margin-bottom: 30px;
          }
          .hero-main {
            margin: 30px 0;
          }
          .hero-image {
            max-width: 600px;
          }
          .hero-cta {
            max-width: 100%;
          }
          .hero-cta p {
            font-size: 16px;
            line-height: 28px;
          }
          .hero-stats {
            padding: 25px 25px 25px 100px;
          }
          .hero-stats-icon {
            left: 30px;
            font-size: 45px;
          }
          .hero-stats-number {
            font-size: 26px;
          }
          .hero-stats-label {
            font-size: 16px;
          }
          .about-page-content .features-col,
          .why-choose-col-left,
          .about-page-content .why-choose-col-right {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .about-page-content .features-grid {
            display: flex;
            flex-direction: column;
          }
          .about-page-content .features-col-image {
            order: -1;
            min-height: auto;
            margin-bottom: 40px;
            justify-content: center;
          }
          .about-page-content .features-col:not(.features-col-image) {
            order: 1;
          }
          .about-page-content .features-list {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .about-page-content .features-col-image-bg {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1;
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
          }
          .about-page-content .features-col-image img {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            position: relative !important;
          }
          .about {
            padding: 80px 0;
          }
          .features {
            padding: 80px 0;
          }
          .why-choose {
            padding: 80px 0 0;
          }
          .about-page-content .why-choose-image {
            margin-top: 40px;
            max-width: 100%;
            padding: 0 15px;
          }
        }

        /* Mobile Large (576px - 767px) */
        @media (max-width: 767px) {
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 40px;
            line-height: 48px;
            letter-spacing: -1.5px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 32px;
            line-height: 42px;
            letter-spacing: -1px;
          }
          .about-page-content .about h6,
          .about-page-content .features h6,
          .about-page-content .why-choose h6 {
            font-size: 18px;
          }
          .hero {
            padding: 40px 15px 60px;
            min-height: 75vh;
          }
          .hero-header {
            margin-bottom: 20px;
          }
          .hero-title {
            margin-bottom: 20px;
          }
          .hero-main {
            margin: 20px 0;
          }
          .hero-image {
            max-width: 100%;
          }
          .hero-bottom {
            gap: 25px;
          }
          .hero-cta p {
            font-size: 15px;
            line-height: 26px;
            margin-bottom: 20px;
          }
          .btn {
            padding: 10px 25px;
            font-size: 13px;
          }
          .hero-stats {
            width: 100%;
            padding: 20px 20px 20px 90px;
          }
          .hero-stats-icon {
            left: 25px;
            top: 25px;
            font-size: 40px;
          }
          .hero-stats-number {
            font-size: 24px;
          }
          .hero-stats-label {
            font-size: 15px;
          }
          .about-page-content .section-title {
            margin-bottom: 30px;
          }
          .about-page-content .about-header {
            padding-bottom: 40px;
          }
          .about-page-content .about-description {
            font-size: 15px;
            line-height: 26px;
            margin-top: 30px;
            padding: 0 15px;
          }
          .about-page-content .about-feature {
            padding: 15px 15px 15px 65px;
            font-size: 14px;
            line-height: 22px;
          }
          .about-page-content .about-feature-icon {
            left: 20px;
            top: 18px;
            font-size: 22px;
          }
          .about-page-content .features-content {
            margin-top: 30px;
          }
          .about-page-content .features-title {
            margin-bottom: 30px;
          }
          .about-page-content .features-description {
            font-size: 15px;
            line-height: 26px;
          }
          .about-page-content .features-grid {
            flex-direction: column;
          }
          .about-page-content .features-col-image {
            order: -1;
            margin-bottom: 30px;
            min-height: auto;
            justify-content: center;
          }
          .about-page-content .features-col:not(.features-col-image) {
            order: 1;
          }
          .about-page-content .features-col-image-bg {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1;
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
          }
          .about-page-content .features-col-image img {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            position: relative !important;
          }
          .about-page-content .features-list {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 12px 0;
          }
          .about-page-content .features-list-item {
            font-size: 15px;
            padding-left: 28px;
          }
          .about-page-content .why-choose-header {
            padding-bottom: 40px;
          }
          .about-page-content .why-choose-description {
            font-size: 15px;
            line-height: 26px;
            margin-bottom: 25px;
          }
          .about-page-content .why-choose-item {
            padding: 0 0 20px 70px;
            margin-bottom: 25px;
          }
          .why-choose-item-icon {
            font-size: 35px;
            left: 0;
            top: 5px;
          }
          .about-page-content .why-choose-item-title {
            font-size: 14px !important;
            line-height: 20px !important;
            margin-bottom: 10px;
          }
          .why-choose-item-description {
            font-size: 14px;
            line-height: 24px;
          }
        }

        /* Mobile Small (up to 575px) */
        @media (max-width: 575px) {
          .about-page-content .container {
            padding: 0 15px;
          }
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 32px;
            line-height: 40px;
            letter-spacing: -1px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 28px;
            line-height: 38px;
          }
          .about-page-content .about h4,
          .about-page-content .features h4,
          .about-page-content .why-choose h4 {
            font-size: 16px;
            line-height: 24px;
          }
          .about-page-content {
            font-size: 15px;
            line-height: 26px;
          }
          .hero {
            padding: 30px 15px 50px;
            min-height: 70vh;
          }
          .hero-title-word {
            display: block;
            margin-bottom: 5px;
          }
          .hero-image img {
            animation-duration: 4s;
          }
          .hero-cta {
            width: 100%;
          }
          .hero-cta p {
            font-size: 14px;
            line-height: 24px;
          }
          .hero-stats {
            padding: 18px 18px 18px 80px;
          }
          .hero-stats-icon {
            left: 20px;
            top: 20px;
            font-size: 35px;
          }
          .hero-stats-number {
            font-size: 22px;
          }
          .hero-stats-label {
            font-size: 14px;
          }
          .btn {
            padding: 9px 20px;
            font-size: 12px;
            width: 100%;
            text-align: center;
          }
          .about,
          .features,
          .why-choose {
            padding: 60px 0;
          }
          .section-tagline {
            font-size: 16px;
            margin-bottom: 15px;
          }
          .about-page-content .section-title {
            margin-bottom: 25px;
          }
          .about-page-content .features-grid {
            flex-direction: column;
          }
          .about-page-content .features-col-image {
            order: -1;
            margin-bottom: 25px;
          }
          .about-page-content .features-col:not(.features-col-image) {
            order: 1;
          }
          .about-page-content .features-col-image-bg {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1;
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
          }
          .about-page-content .features-col-image img {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            position: relative !important;
          }
          .about-page-content .features-list {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .about-page-content .features-list-item {
            font-size: 14px;
            padding-left: 25px;
          }
          .about-description,
          .features-description,
          .about-page-content .why-choose-description {
            font-size: 14px;
            line-height: 24px;
          }
          .about-page-content .about-feature {
            padding: 12px 12px 12px 60px;
            font-size: 13px;
            line-height: 20px;
          }
          .about-page-content .about-feature-icon {
            left: 18px;
            top: 15px;
            font-size: 20px;
          }
          .about-page-content .features-col-image-bg {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 1;
            position: relative !important;
          }
          .about-page-content .features-col-image img {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
          }
          .about-page-content .why-choose-image {
            margin-top: 30px;
          }
          .why-choose-image img {
            width: 100%;
          }
        }

        /* Extra Small Mobile (up to 375px) */
        @media (max-width: 375px) {
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 28px;
            line-height: 36px;
          }
          .about-page-content .about h3,
          .about-page-content .features h3,
          .about-page-content .why-choose h3:not(.why-choose-item-title) {
            font-size: 24px;
            line-height: 32px;
          }
          .hero {
            padding: 25px 10px 40px;
          }
          .hero-stats {
            padding: 15px 15px 15px 70px;
          }
          .hero-stats-icon {
            font-size: 30px;
            left: 15px;
            top: 15px;
          }
          .hero-stats-number {
            font-size: 20px;
          }
          .hero-stats-label {
            font-size: 13px;
          }
        }

        /* Landscape Orientation */
        @media (max-height: 600px) and (orientation: landscape) {
          .about-page-content .hero {
            min-height: auto;
            padding: 40px 20px 60px;
          }
          .about-page-content .about h2,
          .about-page-content .features h2,
          .about-page-content .why-choose h2 {
            font-size: 50px;
            line-height: 60px;
          }
          .hero-main {
            margin: 20px 0;
          }
          .hero-image {
            max-width: 500px;
          }
        }
      `}} />

      {/* About Section */}
      <section className="about relative">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
        <div className="container">
          <div className="about-header">
            <h6 className="section-tagline">
              <span className="section-tagline-word">
                <span className="section-tagline-letter">A</span>
                <span className="section-tagline-letter">b</span>
                <span className="section-tagline-letter">o</span>
                <span className="section-tagline-letter">u</span>
                <span className="section-tagline-letter">t</span>
              </span>
              <span className="section-tagline-word">
                <span className="section-tagline-letter">U</span>
                <span className="section-tagline-letter">s</span>
              </span>
            </h6>

            <p className="about-description">
              BoeingBusinessJet.com was created as a comprehensive, independent resource dedicated to Boeing Business Jet (BBJ) aircraft. Our purpose is to provide aviation professionals, operators, analysts, charter clients, and enthusiasts with clear, structured, and accessible information about the full BBJ family—from the original 737-based BBJs to the widebody BBJ 777 and BBJ 787 platforms.
              <br /><br />
              We focus exclusively on delivering accurate, high-quality reference material including technical specifications, performance data, interior configurations, operating costs, charter insights, and industry analysis.
            </p>
          </div>

          <div className="about-cta">
            <a href="#" className="btn btn-white">Learn more about us</a>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img src="https://hyperflywp.bracketweb.com/wp-content/uploads/2025/07/about-4-image.png" alt="About Us" />
          <ul className="about-features">
            <li className="about-feature">
              <span className="about-feature-icon">✓</span>
              Detailed BBJ Aircraft Profiles
              <br />
              <span style={{ fontSize: '13px', fontWeight: '400', lineHeight: '20px', display: 'block', marginTop: '6px' }}>
                Full technical breakdowns of all BBJ models, including range, cabin dimensions, MTOW, engines, and mission capabilities.
              </span>
            </li>
            <li className="about-feature">
              <span className="about-feature-icon">✓</span>
              Cabin & Interior Concepts
              <br />
              <span style={{ fontSize: '13px', fontWeight: '400', lineHeight: '20px', display: 'block', marginTop: '6px' }}>
                Overviews of multi-zone VVIP layouts, floorplans, completion center capabilities, and luxury configuration options.
              </span>
            </li>
            <li className="about-feature">
              <span className="about-feature-icon">✓</span>
              Operating Economics
              <br />
              <span style={{ fontSize: '13px', fontWeight: '400', lineHeight: '20px', display: 'block', marginTop: '6px' }}>
                Industry-informed cost analysis including hourly operating expenses, annual ownership estimates, maintenance considerations, and crew requirements.
              </span>
            </li>
            <li className="about-feature">
              <span className="about-feature-icon">✓</span>
              Charter Guidance
              <br />
              <span style={{ fontSize: '13px', fontWeight: '400', lineHeight: '20px', display: 'block', marginTop: '6px' }}>
                Practical insights for travelers, corporations, and government delegations looking to understand how BBJs are used for ultra-long-range travel.
              </span>
            </li>
            <li className="about-feature">
              <span className="about-feature-icon">✓</span>
              Insights & Industry Articles
              <br />
              <span style={{ fontSize: '13px', fontWeight: '400', lineHeight: '20px', display: 'block', marginTop: '6px' }}>
                A growing collection of technical articles, comparisons, engineering explainers, and BBJ market commentary.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="features relative">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
        <div className="container">
          <div className="features-grid">
            <div className="features-col features-col-image">
              <div className="features-col-image-bg"></div>
              <img src="https://hyperflywp.bracketweb.com/wp-content/uploads/2025/07/feature-7.png" alt="Features" />
            </div>

            <div className="features-col">
              <div className="features-content">
                <div className="features-header">
                  <h3 className="features-title">
                    <span className="features-title-line">Who This Resource Is For</span>
                  </h3>

                  <p className="features-description">
                    <span className="features-description-line">A growing collection of technical articles, comparisons, engineering explainers, and BBJ market commentary.</span>
                  </p>
                </div>

                <ul className="features-list">
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Private jet charter clients
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Aviation consultants &amp; advisors
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Flight departments &amp; operators
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Technical engineers &amp; maintenance teams
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Completion centers &amp; VIP interior specialists
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Aircraft owners and ownership candidates
                  </li>
                  <li className="features-list-item">
                    <span className="features-list-icon">✓</span>
                    Aviation journalists and researchers
                  </li>
                </ul>

                <Link 
                  href="#"
                  className="inline-block px-7 py-3 bg-gradient-to-br from-[#0E1116] to-[#1a1d24] border border-[#C9A24D] text-[#C9A24D] font-semibold transition-all duration-300 hover:bg-gradient-to-br hover:from-[#C9A24D] hover:to-[#D4B05E] hover:text-[#0E1116] hover:translate-y-[-2px] hover:shadow-lg"
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  Charter a BBJ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-hidden">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Independence & Transparency */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-4">Independence & Transparency</h3>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                This website does not represent Boeing, Boeing Business Jets, or any aircraft manufacturer.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                It exists solely to organize and present publicly available information in a structured, useful format for educational and reference purposes.
              </p>
            </div>

            {/* Official Disclaimer */}
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20">
              <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">Official Disclaimer (Full Legal Statement)</h4>
              <p className="text-sm text-white/80 font-semibold mb-4">
                <span className="text-[#C9A24D]">⚠</span> This is an independent informational resource and is not affiliated with Boeing Business Jets.
              </p>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                <strong>Disclaimer:</strong> BoeingBusinessJet.com is an independent informational resource and is not affiliated with, 
                endorsed by, or sponsored by The Boeing Company or Boeing Business Jets.
              </p>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                All trademarks and product names are property of their respective owners.
              </p>
              <p className="text-xs text-white/60 leading-relaxed">
                For official manufacturer specifications and documentation, please visit:{" "}
                <a 
                  href="https://businessjets.boeing.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C9A24D] hover:underline"
                >
                  https://businessjets.boeing.com
                </a>
              </p>
            </div>

            {/* Contact */}
            {/* <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                For editorial inquiries or feedback regarding published content, please reach out via the contact form.
              </p>
            </div> */}
          </div>
        </div>
      </section>

    </div>

    {/* FAQ Section - Outside about-page-content wrapper to match home page exactly */}
    <FAQSection />
    </>
  );
}
