"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FooterSection } from "@/components/footer-section";
import "./header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`bbj-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-accent-bar" aria-hidden="true" />
        <div className="nav-container">
          <div className="nav-left">
            <button type="button" className="nav-lang" aria-label="Language">
              <span>EN</span>
              <span className="nav-lang-chevron">▾</span>
            </button>
            <button type="button" className="nav-search" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <ul className="nav-links nav-links-left">
              <li className="nav-item dropdown">
                <span className="dropdown-toggle">ACJ MODELS</span>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/aircraft/acj-twenty-twenty" onClick={closeMenu}>
                      ACJ TwoTwenty
                    </Link>
                  </li>
                  <li>
                    <Link href="/aircraft/acj-neo" onClick={closeMenu}>
                      ACJ neo
                    </Link>
                  </li>
                  <li>
                    <Link href="/aircraft/acj330-neo" onClick={closeMenu}>
                      ACJ330 neo
                    </Link>
                  </li>
                  <li>
                    <Link href="/aircraft/acj350" onClick={closeMenu}>
                      ACJ350
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-toggle">INFORMATION</span>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/charter" onClick={closeMenu}>
                      Charter Guide
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-text">Airbus Jet</span>
          </Link>

          <div className="nav-right">
            <ul className="nav-links nav-links-right">
              <li className="nav-item">
                <Link href="/blog" onClick={closeMenu}>
                  INSIGHTS (BLOG)
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" onClick={closeMenu}>
                  ABOUT
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className={`nav-drawer-btn ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} aria-hidden="true" />
      <div className={`drawer-panel ${isMenuOpen ? "active" : ""}`}>
        <button
          type="button"
          className="drawer-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="drawer-nav-content">
          <nav className="drawer-menu">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item drawer-menu-group">
                <span className="drawer-menu-label">ACJ Models</span>
                <ul className="drawer-menu-sublist">
                  <li><Link href="/aircraft/acj-twenty-twenty" onClick={closeMenu}>ACJ TwoTwenty</Link></li>
                  <li><Link href="/aircraft/acj-neo" onClick={closeMenu}>ACJ neo</Link></li>
                  <li><Link href="/aircraft/acj330-neo" onClick={closeMenu}>ACJ330 neo</Link></li>
                  <li><Link href="/aircraft/acj350" onClick={closeMenu}>ACJ350</Link></li>
                </ul>
              </li>
              <li className="drawer-menu-item drawer-menu-group">
                <span className="drawer-menu-label">Information</span>
                <ul className="drawer-menu-sublist">
                  <li><Link href="/charter" onClick={closeMenu}>Charter Guide</Link></li>
                </ul>
              </li>
              <li className="drawer-menu-item">
                <Link href="/blog" onClick={closeMenu}>Insights (Blog)</Link>
              </li>
              <li className="drawer-menu-item">
                <Link href="/about" onClick={closeMenu}>About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="drawer-footer-content">
          <FooterSection />
        </div>
      </div>
    </>
  );
}
