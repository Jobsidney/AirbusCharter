import Image from "next/image";
import styles from "../../page.module.css";

export default function Hero() {
  return (
    <>
      <section className="heroSection section-padding bg-gradient">
        <div className="heroGridItemsStart">
          <div className={styles.heroContentWrapper}>
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
              Ultra‑Long‑Range • Widebody Comfort • Bespoke Luxury
              </span>
            </div>

            <h1 className={styles.h1}>
              <span className={styles.h1Block}>Airbus Corporate </span>
              <span className={styles.h1Block}>Jet Charter</span>
            </h1>

            <div className="buttonsDescriptionGridPt2">
              <div className={styles.buttonsRow}>
                <button className={styles.buttonPrimary}>
                  BOOK A FLIGHT
                </button>
                <button className={styles.buttonSecondary}>
                  EXPLORE FLEET
                </button>
              </div>

              <p className="subtitleSmall14TextLeftMt0">
              Experience private aviation at its most refined. Airbus Corporate Jets redefine what it means to fly privately; expansive wide‑body cabins,
               intercontinental range, and interiors designed more like private residences than aircraft. AirbusCorporateJet.com provides global charter access to the world’s most exclusive ACJ fleet, tailored for heads of state, UHNW individuals, corporations, and private families.
              </p>
            </div>
          </div>

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
        </div>
      </section>

      <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0501] via-[#0A0501]/80 to-transparent z-10"></div>
        <div className="absolute inset-0">
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

