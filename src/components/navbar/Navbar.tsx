import Link from "next/link";
import styles from "../../app/page.module.css";

export default function Navbar() {
  return (
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

        <button className={styles.mobileMenuBtn}>
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
  );
}

