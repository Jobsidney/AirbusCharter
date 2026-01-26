import Image from "next/image";
import styles from "../../page.module.css";

export default function Features() {
  return (
    <section className="featuresSection section-padding bg-gradient">
      <div className="grid2ColItemsStartGap12">
        <div className="flexColGap6">
          <div className={styles.image360}>
            <Image
              src="/jet-hangar.jpg"
              alt="Private Jet in Hangar"
              width={540}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flexColGap4">
            <div className={styles.progressItemWrapper}>
              <div className={styles.progressHeaderRow}>
                <span className={styles.progressLabelText}>
                  Client Satisfaction
                </span>
                <span className={styles.progressValueText}>
                  98%
                </span>
              </div>
              <div className={styles.progressBarBg}>
                <div className="progressBarFill98"></div>
              </div>
            </div>

            <div className={styles.progressItemWrapper}>
              <div className={styles.progressHeaderRow}>
                <span className={styles.progressLabelText}>
                  Safety Excellence
                </span>
                <span className={styles.progressValueText}>
                  100%
                </span>
              </div>
              <div className={styles.progressBarBg}>
                <div className="progressBarFill100"></div>
              </div>
            </div>

            <div className={styles.progressItemWrapper}>
              <div className={styles.progressHeaderRow}>
                <span className={styles.progressLabelText}>
                  Personalized Service
                </span>
                <span className={styles.progressValueText}>
                  92%
                </span>
              </div>
              <div className={styles.progressBarBg}>
                <div className="progressBarFill92"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flexColGap8">
          <div className={styles.spaceY6}>
            <div className="tagBadgeMb6">
              <svg
                className={styles.diamondIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2 L20 10 L12 18 L4 10 Z"
                />
              </svg>
              <span className={styles.tagBadgeText}>
                Why Fly With Airbus
              </span>
            </div>

            <h2 className="h2Uppercase">
              Redefining Luxury Aviation With Dark Elegance
            </h2>

            <p className={styles.subtitleText}>
              At Airbus, we blend discretion, prestige, and comfort into every journey. From world-class safety standards to bespoke experiences, our promise is to make private aviation seamless, secure, and unforgettable.
            </p>
          </div>

          <div className="flexColGap6">
            <div className={styles.featureBoxHorizontalWrapper}>
              <div className={styles.featureIconCircle}>
                <svg
                  className={styles.featureIconSvgAccent}
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                </svg>
              </div>
              <div className={styles.featureContentWrapper}>
                <h3 className="h3Mb2">
                  Absolute Safety
                </h3>
                <p className={styles.subtitleSmall14}>
                  Our fleet operates under the highest aviation standards, ensuring security and peace of mind on every journey.
                </p>
              </div>
            </div>

            <div className={styles.featureBoxHorizontalWrapper}>
              <div className={styles.featureIconCircle}>
                <svg
                  className={styles.featureIconSvgAccent}
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                </svg>
              </div>
              <div className={styles.featureContentWrapper}>
                <h3 className="h3Mb2">
                  On-Time Flights
                </h3>
                <p className={styles.subtitleSmall14}>
                  With precision scheduling and priority access, Airbus guarantees punctual departures and arrivals for all routes.
                </p>
              </div>
            </div>
          </div>

          <button className="buttonPrimaryLarge">
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
}

