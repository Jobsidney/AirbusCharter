import Image from "next/image";
import styles from "../../page.module.css";

export default function Hero() {
  return (
    <>
      <section className="heroSection section-padding bg-gradient">
        <div className={styles.heroMobileContainer}>
          <div className={styles.heroContentWrapper}>
            <h1 className={`${styles.h1} ${styles.heroTitle}`}>
              <span className={styles.h1Block}>Airbus Corporate </span>
              <span className={styles.h1Block}>Jet Charter</span>
            </h1>

            <div className={styles.pilotSectionWrapper}>
              <div className={styles.pilotAvatarsRow}>
                <div className={styles.pilotAvatarItem}>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Pilot 1"
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className={styles.pilotAvatarItem}>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Pilot 2"
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className={styles.pilotAvatarItem}>
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                    alt="Pilot 3"
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <p className={styles.pilotTextLabel}>50+ EXPERT PILOTS</p>
            </div>

            <div className={styles.heroButtonsWrapper}>
              <button className={styles.buttonPrimary}>
                BOOK A FLIGHT
              </button>
              <button className={styles.buttonSecondary}>
                EXPLORE FLEET
              </button>
            </div>

            <p className={styles.heroDescription}>
              Experience private aviation at its most refined. Airbus Corporate Jets redefine what it means to fly privately; expansive wide‑body cabins, intercontinental range, and interiors designed more like private residences than aircraft. AirbusCorporateJet.com provides global charter access to the world's most exclusive ACJ fleet, tailored for heads of state, UHNW individuals, corporations, and private families.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.jetImageSection}>
        <div className={styles.jetImageOverlay}></div>
        <div className={styles.jetImageContainer}>
          <Image
            src="/jet.jpg"
            alt="Private Jet"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}

