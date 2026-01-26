import styles from "../../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoSection}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoIcon}>
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
            <span className={styles.footerLogoText}>Airbus</span>
          </div>
          <p className={styles.footerDescription}>
            Facilisis in sagittis cras a dignissim morbi feugiat. Ridiculus facilisis pellentesque dapibus erat at. Massa viverra tortor adipiscing arcu.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnHeading}>COMPANY</h3>
          <a href="#" className={styles.footerLink}>About Us</a>
          <a href="#" className={styles.footerLink}>Our Services</a>
          <a href="#" className={styles.footerLink}>Careers</a>
          <a href="#" className={styles.footerLink}>Fleet Overview</a>
          <a href="#" className={styles.footerLink}>Contact</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnHeading}>EXPLORE</h3>
          <a href="#" className={styles.footerLink}>Destinations</a>
          <a href="#" className={styles.footerLink}>Special Offers</a>
          <a href="#" className={styles.footerLink}>Blog Insights</a>
          <a href="#" className={styles.footerLink}>Testimonials</a>
          <a href="#" className={styles.footerLink}>Gallery</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnHeading}>SUPPORT</h3>
          <a href="#" className={styles.footerLink}>Help Center</a>
          <a href="#" className={styles.footerLink}>FAQs</a>
          <a href="#" className={styles.footerLink}>Booking Guide</a>
          <a href="#" className={styles.footerLink}>Terms & Conditions</a>
          <a href="#" className={styles.footerLink}>Privacy Policy</a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          Copyright © 2025 Airbus | Design by Tokotema
        </div>
        <div className={styles.footerLegalLinks}>
          <a href="#" className={styles.footerLegalLink}>Term of use</a>
          <span className={styles.footerLegalSeparator}>|</span>
          <a href="#" className={styles.footerLegalLink}>Privacy Policy</a>
          <span className={styles.footerLegalSeparator}>|</span>
          <a href="#" className={styles.footerLegalLink}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

