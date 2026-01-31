"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <nav className={`bbj-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="navLinks">
          <li className="nav-item dropdown">
            <span className="dropdown-toggle">BBJ Models</span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/aircraft/bbj-737" onClick={closeMenu}>
                  BBJ 737
                </Link>
              </li>
              <li>
                <Link href="/aircraft/bbj-747" onClick={closeMenu}>
                  BBJ 747
                </Link>
              </li>
              <li>
                <Link href="/aircraft/bbj-777" onClick={closeMenu}>
                  BBJ 777
                </Link>
              </li>
              <li>
                <Link href="/aircraft/bbj-787" onClick={closeMenu}>
                  BBJ 787
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="dropdown-toggle">Information</span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/charter" onClick={closeMenu}>
                  Charter Guide
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link href="/blog" onClick={closeMenu}>
              Insights (Blog)
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#charter-cta" className="cta-btn" onClick={closeMenu}>
              Charter a BBJ
            </Link>
          </li>
        </ul>

        <div
          className={`mobile-toggle ${isMenuOpen ? "active" : ""}`}
          id="mobileToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Link href="/" className="logo" onClick={closeMenu}>
          <Image 
            src="/iMAGES/logo.png" 
            alt="BBJ Logo" 
            width={160} 
            height={55}
            className="logo-image"
            priority
          />
        </Link>
      </div>
    </nav>
    </>
  );
}
