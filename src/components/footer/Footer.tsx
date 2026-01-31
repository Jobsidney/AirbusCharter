export default function Footer() {
  return (
    <footer className="aboutUsSection section-padding footer">
      <div className="footerContent">
        <div className="footerLogoSection">
          <div className="footerLogo">
            <div className="footerLogoIcon">
              <svg
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
            <span className="footerLogoText">Airbus</span>
          </div>
          <p className="footerDescription">
            Facilisis in sagittis cras a dignissim morbi feugiat. Ridiculus facilisis pellentesque dapibus erat at. Massa viverra tortor adipiscing arcu.
          </p>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnHeading">COMPANY</h3>
          <a href="#" className="footerLink">About Us</a>
          <a href="#" className="footerLink">Our Services</a>
          <a href="#" className="footerLink">Careers</a>
          <a href="#" className="footerLink">Fleet Overview</a>
          <a href="#" className="footerLink">Contact</a>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnHeading">EXPLORE</h3>
          <a href="#" className="footerLink">Destinations</a>
          <a href="#" className="footerLink">Special Offers</a>
          <a href="#" className="footerLink">Blog Insights</a>
          <a href="#" className="footerLink">Testimonials</a>
          <a href="#" className="footerLink">Gallery</a>
        </div>

        <div className="footerColumn">
          <h3 className="footerColumnHeading">SUPPORT</h3>
          <a href="#" className="footerLink">Help Center</a>
          <a href="#" className="footerLink">FAQs</a>
          <a href="#" className="footerLink">Booking Guide</a>
          <a href="#" className="footerLink">Terms & Conditions</a>
          <a href="#" className="footerLink">Privacy Policy</a>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerCopyright">
          Copyright © 2025 Airbus | Design by Tokotema
        </div>
        <div className="footerLegalLinks">
          <a href="#" className="footerLegalLink">Term of use</a>
          <span className="footerLegalSeparator">|</span>
          <a href="#" className="footerLegalLink">Privacy Policy</a>
          <span className="footerLegalSeparator">|</span>
          <a href="#" className="footerLegalLink">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

