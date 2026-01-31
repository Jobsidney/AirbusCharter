"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/fleet", label: "FLEET", hasSubmenu: true },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <>
      <header className={`navbarHeader ${isScrolled ? "navbarHeaderScrolled" : "navbarHeaderTransparent"}`}>
        <div className="navbarHeaderContent">
          <Link href="/" className="navbarLogoContainer">
            <div className="navbarLogoIcon">
              <svg
                className="navbarLogoIconSvg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <span className="navbarLogoText">Airbus</span>
          </Link>

          <nav className="navbarNav">
            <Link href="/" className="navbarNavLink">
              Home
            </Link>
            <Link href="#" className="navbarNavLink">
              Charter Guide
            </Link>
            <Link href="/fleet" className="navbarNavLink">
              Fleet
            </Link>
            <Link href="/contact-us" className="navbarNavLink">
              FAQ
            </Link>
            <Link href="/contact-us" className="navbarNavLink">
              Contact
            </Link>
          </nav>

          <button className="navbarViewMembershipBtn">
            Request a Charter
          </button>

          <button className="navbarMobileMenuBtn" onClick={toggleDrawer}>
            <svg
              className="navbarMobileMenuIcon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={isDrawerOpen ? "mobileDrawer mobileDrawerOpenState" : "mobileDrawer"}>
        <div className="mobileDrawerOverlay" onClick={closeDrawer}></div>
        <div className="mobileDrawerContent">
          <div className="mobileDrawerHeader">
            <Link href="/" className="mobileDrawerLogo" onClick={closeDrawer}>
              <div className="logoIcon">
                <svg
                  className="logoIconSvg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <span className="logoText">Airbus</span>
            </Link>
            <button className="mobileDrawerClose" onClick={closeDrawer}>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="mobileDrawerCloseIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mobileDrawerNav">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={index}>
                  <Link
                    href={item.href}
                    className={isActive ? "mobileDrawerLink mobileDrawerLinkActive" : "mobileDrawerLink"}
                    onClick={closeDrawer}
                  >
                    <span>{item.label}</span>
                    {item.hasSubmenu && (
                      <svg
                        className="mobileDrawerChevron"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="mobileDrawerDivider"></div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

