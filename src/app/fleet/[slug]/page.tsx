import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Navbar from "../../../components/navbar/Navbar";
import FleetDetailHero from "../../_components/fleet-detail-hero/FleetDetailHero";
import FleetDetailContent from "../../_components/fleet-detail-content/FleetDetailContent";
import HowToBook from "../../_components/how-to-book/HowToBook";
import CTA from "../../../components/cta/CTA";
import Footer from "../../../components/footer/Footer";

const fleetData = {
  "midnight-falcon": {
    name: "Midnight Falcon",
    image: "/midnight-falcon.jpg",
    description: "The Midnight Falcon is designed for regional escapes, blending sleek performance with intimate luxury. Its agility and refined interior make it the perfect choice for short-haul private journeys.",
    passengers: 7,
    range: "2,500 km",
    cruisingSpeed: "750 km/h",
    crew: "2 Pilots",
    cabinHeight: "1.6 m",
    luxuryFeatures: [
      "Hand-stitched leather seating with bronze detail",
      "Advanced noise-reduction cabin system",
      "Adjustable ambient golden lighting",
      "Foldable tables with dark wood finishing",
      "Compact refreshment bar"
    ],
    amenities: [
      "Complimentary Wi-Fi onboard",
      "Entertainment system with premium audio",
      "Refreshment selection for regional flights",
      "Concierge-assisted booking and transfers"
    ],
    safetyTechnology: [
      "Equipped with the latest avionics systems",
      "Certified to international safety standards",
      "Enhanced navigation and turbulence management"
    ],
    features: ["Wi-Fi Onboard", "Premium Entertainment", "Climate Control", "Luxury Seating"],
    specifications: {
      maxSpeed: "850 km/h",
      cabinHeight: "1.75m",
      cabinLength: "7.5m",
      baggageCapacity: "1.2m³"
    }
  },
  "shadow-hawk": {
    name: "Shadow Hawk",
    image: "/shadow-hawk.jpg",
    description: "A swift and stylish aircraft built for short-haul trips with uncompromising privacy. The Shadow Hawk delivers exceptional performance with refined elegance.",
    passengers: 6,
    range: "2,800 km",
    cruisingSpeed: "780 km/h",
    crew: "2 Pilots",
    cabinHeight: "1.6 m",
    luxuryFeatures: [
      "Hand-stitched leather seating with bronze detail",
      "Advanced noise-reduction cabin system",
      "Adjustable ambient golden lighting",
      "Foldable tables with dark wood finishing",
      "Compact refreshment bar"
    ],
    amenities: [
      "Complimentary Wi-Fi onboard",
      "Entertainment system with premium audio",
      "Refreshment selection for regional flights",
      "Concierge-assisted booking and transfers"
    ],
    safetyTechnology: [
      "Equipped with the latest avionics systems",
      "Certified to international safety standards",
      "Enhanced navigation and turbulence management"
    ],
    features: ["Premium Leather Seats", "Advanced Avionics", "Quiet Cabin", "Custom Interior"],
    specifications: {
      maxSpeed: "880 km/h",
      cabinHeight: "1.70m",
      cabinLength: "7.0m",
      baggageCapacity: "1.0m³"
    }
  },
  "eclipse-raven": {
    name: "Eclipse Raven",
    image: "/eclipse-raven.jpg",
    description: "Designed for comfort and reach, Eclipse Raven redefines midsize jet travel with precision and luxury. Experience extended range capabilities with uncompromised comfort.",
    passengers: 9,
    range: "4,500 km",
    cruisingSpeed: "820 km/h",
    crew: "2 Pilots",
    cabinHeight: "1.7 m",
    luxuryFeatures: [
      "Hand-stitched leather seating with bronze detail",
      "Advanced noise-reduction cabin system",
      "Adjustable ambient golden lighting",
      "Foldable tables with dark wood finishing",
      "Compact refreshment bar"
    ],
    amenities: [
      "Complimentary Wi-Fi onboard",
      "Entertainment system with premium audio",
      "Refreshment selection for regional flights",
      "Concierge-assisted booking and transfers"
    ],
    safetyTechnology: [
      "Equipped with the latest avionics systems",
      "Certified to international safety standards",
      "Enhanced navigation and turbulence management"
    ],
    features: ["Inflight Dining", "Stand-up Cabin", "Private Lavatory", "Entertainment System"],
    specifications: {
      maxSpeed: "900 km/h",
      cabinHeight: "1.85m",
      cabinLength: "8.5m",
      baggageCapacity: "1.8m³"
    }
  },
  "noir-horizon": {
    name: "Noir Horizon",
    image: "/noir-horizon.jpg",
    description: "Balancing performance with luxury, Noir Horizon is ideal for longer regional journeys in refined style. Experience the pinnacle of private aviation excellence.",
    passengers: 8,
    range: "4,200 km",
    cruisingSpeed: "800 km/h",
    crew: "2 Pilots",
    cabinHeight: "1.7 m",
    luxuryFeatures: [
      "Hand-stitched leather seating with bronze detail",
      "Advanced noise-reduction cabin system",
      "Adjustable ambient golden lighting",
      "Foldable tables with dark wood finishing",
      "Compact refreshment bar"
    ],
    amenities: [
      "Complimentary Wi-Fi onboard",
      "Entertainment system with premium audio",
      "Refreshment selection for regional flights",
      "Concierge-assisted booking and transfers"
    ],
    safetyTechnology: [
      "Equipped with the latest avionics systems",
      "Certified to international safety standards",
      "Enhanced navigation and turbulence management"
    ],
    features: ["Private Lounge Interior", "Gourmet Kitchen", "Master Suite", "Conference Area"],
    specifications: {
      maxSpeed: "870 km/h",
      cabinHeight: "1.80m",
      cabinLength: "8.0m",
      baggageCapacity: "1.5m³"
    }
  }
};

export default async function FleetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fleet = fleetData[slug as keyof typeof fleetData];

  if (!fleet) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <FleetDetailHero />
      <FleetDetailContent
        name={fleet.name}
        image={fleet.image}
        description={fleet.description}
        passengers={fleet.passengers}
        range={fleet.range}
        cruisingSpeed={fleet.cruisingSpeed}
        crew={fleet.crew}
        cabinHeight={fleet.cabinHeight}
        luxuryFeatures={fleet.luxuryFeatures}
        amenities={fleet.amenities}
        safetyTechnology={fleet.safetyTechnology}
        slug={slug}
      />
      <HowToBook />
      <CTA />
      <Footer />
    </div>
  );
}

