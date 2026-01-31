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

export default function FleetList() {
  return (
    <section className="fleetSection section-padding">
      <div className="fleetGridSection">
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

