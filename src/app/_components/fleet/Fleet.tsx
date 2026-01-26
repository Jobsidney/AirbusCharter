import styles from "../../page.module.css";
import FleetCard from "./FleetCard";

const fleetData = [
  {
    name: "Midnight Falcon",
    image: "/midnight-falcon.jpg",
    description: "Perfect for regional escapes, the Midnight Falcon blends agility, comfort, and sleek dark elegance.",
    passengers: 7,
    range: "2,500 km",
    feature: "Wi-Fi Onboard",
    slug: "midnight-falcon",
  },
  {
    name: "Shadow Hawk",
    image: "/shadow-hawk.jpg",
    description: "A swift and stylish aircraft built for short-haul trips with uncompromising privacy.",
    passengers: 6,
    range: "2,800 km",
    feature: "Premium Leather Seats",
    slug: "shadow-hawk",
  },
  {
    name: "Eclipse Raven",
    image: "/eclipse-raven.jpg",
    description: "Designed for comfort and reach, Eclipse Raven redefines midsize jet travel with precision and",
    passengers: 9,
    range: "4,500 km",
    feature: "Inflight Dining",
    slug: "eclipse-raven",
  },
  {
    name: "Noir Horizon",
    image: "/noir-horizon.jpg",
    description: "Balancing performance with luxury, Noir Horizon is ideal for longer regional journeys in refined style.",
    passengers: 8,
    range: "4,200 km",
    feature: "Private Lounge Interior",
    slug: "noir-horizon",
  },
];

export default function Fleet() {
  return (
    <section className="fleetSection section-padding">
      <div className={styles.fleetHeader}>
        <div className={styles.fleetHeaderTop}>
          <div className={styles.fleetHeaderContent}>
            <div className="tagBadgeMb0">
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
                Discover Our Fleet
              </span>
            </div>
            <h2 className="h2Uppercase">
              Luxury Jets Designed For Elite Travel
            </h2>
          </div>
          <div className={styles.fleetHeaderButton}>
            <button className={styles.buttonPrimary}>
              EXPLORE THE FLEET
            </button>
          </div>
        </div>
      </div>

      <div className={styles.fleetGrid}>
        {fleetData.map((aircraft) => (
          <FleetCard
            key={aircraft.slug}
            name={aircraft.name}
            image={aircraft.image}
            description={aircraft.description}
            passengers={aircraft.passengers}
            range={aircraft.range}
            feature={aircraft.feature}
            slug={aircraft.slug}
          />
        ))}
      </div>
    </section>
  );
}
