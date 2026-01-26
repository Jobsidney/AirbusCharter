import Image from "next/image";
import styles from "../../app/page.module.css";

export default function AboutUs() {
  return (
    <section className="aboutUsSection section-padding">
      <div className="grid2ColItemsStartGap12">
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
                REDEFINING PRIVATE AVIATION
              </span>
            </div>

            <h2 className="h2Uppercase">
            Independent Platform Dedicated Exclusively to Airbus Corporate Jet Charter
            </h2>

            <p className={styles.subtitleText}>
            AirbusCorporateJet.com was created to serve a very specific segment of private aviation: clients whose missions demand the space, range, endurance, and discretion that only Airbus Corporate Jets (ACJs) can provide.
We operate as an independent charter platform, focused exclusively on the ACJ family — from the ACJ TwoTwenty to the flagship ACJ350. Our role is not to promote aircraft manufacturers, nor to act as a generic charter marketplace, but to advise, structure, and execute complex private aviation missions using some of the world’s most capable aircraft. </p>
          </div>

          <div className="grid2ColGap6">
            <div className={styles.spaceY3}>
              <div className={styles.featureIconCircle}>
                <svg
                  className={styles.featureIconSvg}
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
                </svg>
              </div>
              <h3 className={styles.h3}>
                Elite Fleet
              </h3>
              <p className={styles.subtitleSmall14}>
                Our collection of private jets is curated to deliver exceptional comfort, advanced safety, and refined design that reflect the essence of dark luxury travel.
              </p>
            </div>

            <div className={styles.spaceY3}>
              <div className={styles.featureIconCircle}>
                <svg
                  className={styles.featureIconSvg}
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                </svg>
              </div>
              <h3 className={styles.h3}>
                Global Access
              </h3>
              <p className={styles.subtitleSmall14}>
                Our collection of private jets is curated to deliver exceptional comfort, advanced safety, and refined design that reflect the essence of dark luxury travel.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.gridCols2}>
          <div className="flexColGap4">
            <div className={styles.image360}>
              <Image
                src="/jet-front.jpg"
                alt="Private Jet Front View"
                width={260}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
            <div className={styles.image210}>
              <Image
                src="/jet-lounge.jpg"
                alt="Luxury Lounge"
                width={260}
                height={210}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flexColGap4">
            <div className={styles.image410}>
              <Image
                src="/jet-cabin.jpg"
                alt="Private Jet Cabin Interior"
                width={260}
                height={410}
                className="object-cover w-full h-full"
              />
            </div>
            <div className={styles.vipCounter}>
              <div className={styles.vipNumber}>
                390+
              </div>
              <div className={styles.vipLabel}>
                VIP Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

