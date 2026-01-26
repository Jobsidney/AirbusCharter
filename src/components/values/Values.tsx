import Image from "next/image";
import styles from "../../app/page.module.css";

export default function Values() {
  return (
    <section className="valuesSection section-padding">
      <div className="grid2ColItemsStartGap12">
        <div className={styles.valuesImageContainer}>
          <Image
            src="/flight-attendant.jpg"
            alt="Flight Attendant in Private Jet Cabin"
            width={540}
            height={720}
            className="object-cover w-full h-full"
          />
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
                OUR VALUES
              </span>
            </div>

            <h2 className="h2Uppercase">
              Guiding Principles For Timeless Private Aviation
            </h2>

            <p className={styles.subtitleText}>
              At Airbus, our values shape every flight and every detail of service. They define who we are, what we stand for, and how we elevate your journey.
            </p>
          </div>

          <div className="flexColGap6">
            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <svg
                  className={styles.checkmarkIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className={styles.valueTitle}>EXCLUSIVITY</h3>
                  <p className={styles.valueDescription}>
                    Delivering private experiences reserved for the elite.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.valueDivider}></div>

            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <svg
                  className={styles.checkmarkIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className={styles.valueTitle}>INNOVATION</h3>
                  <p className={styles.valueDescription}>
                    Embracing technology to refine luxury aviation.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.valueDivider}></div>

            <div className={styles.valueItem}>
              <div className={styles.valueItemContent}>
                <svg
                  className={styles.checkmarkIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className={styles.valueTitle}>SAFETY</h3>
                  <p className={styles.valueDescription}>
                    Ensuring uncompromised standards in every journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.buttonPrimary}>
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}

