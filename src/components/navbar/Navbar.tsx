"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../app/page.module.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

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
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <svg
                className={styles.logoIconSvg}
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
            <span className={styles.logoText}>Airbus</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="#" className={styles.navLink}>
              Charter Guide
            </Link>
            <Link href="/fleet" className={styles.navLink}>
              Fleet
            </Link>
            <Link href="/contact-us" className={styles.navLink}>
              FAQ
            </Link>
            <Link href="/contact-us" className={styles.navLink}>
              Contact
            </Link>
          </nav>

          <button className={styles.viewMembershipBtn}>
            Request a Charter
          </button>

          <button className={styles.mobileMenuBtn} onClick={toggleDrawer}>
            <svg
              className={styles.mobileMenuIcon}
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
      <div
        className={`${styles.mobileDrawer} ${isDrawerOpen ? styles.mobileDrawerOpen : ""}`}
      >
        <div className={styles.mobileDrawerOverlay} onClick={closeDrawer}></div>
        <div className={styles.mobileDrawerContent}>
          <div className={styles.mobileDrawerHeader}>
            <Link href="/" className={styles.mobileDrawerLogo} onClick={closeDrawer}>
              <div className={styles.logoIcon}>
                <svg
                  className={styles.logoIconSvg}
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
              <span className={styles.logoText}>Airbus</span>
            </Link>
            <button className={styles.mobileDrawerClose} onClick={closeDrawer}>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className={styles.mobileDrawerCloseIcon}
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

          <nav className={styles.mobileDrawerNav}>
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={index}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileDrawerLink} ${isActive ? styles.mobileDrawerLinkActive : ""}`}
                    onClick={closeDrawer}
                  >
                    <span>{item.label}</span>
                    {item.hasSubmenu && (
                      <svg
                        className={styles.mobileDrawerChevron}
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
                    <div className={styles.mobileDrawerDivider}></div>
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

