import styles from "../../app/page.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
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
        </div>

        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            HOME
          </a>
          <a href="#" className={styles.navLink}>
            ABOUT US
          </a>
          <div className="relative group">
            <a href="#" className="navLinkWithDropdown">
              FLEET
              <svg
                className={styles.navDropdownIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="navLinkWithDropdown">
              PAGES
              <svg
                className={styles.navDropdownIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
          <a href="#" className={styles.navLink}>
            CONTACT US
          </a>
        </nav>

        <button className={styles.viewMembershipBtn}>
          VIEW MEMBERSHIP
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

