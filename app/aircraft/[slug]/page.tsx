"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Check, Plane, Shield, DollarSign, Settings, Users, ArrowUpRight, Sparkles, X, ZoomIn } from "lucide-react";
import { FooterSection } from "@/components/footer-section";

// Aircraft data - can be moved to a separate file later
const aircraftData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  overviewImage: string;
  crewImage: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: "plane" | "dollar" | "shield" | "settings";
  }[];
  interiorFeatures: string[];
  specs: {
    range: string;
    passengers: string;
    cabinSpace: string;
  };
  performance: {
    engine: string;
    mtow: string;
    cruiseSpeed: string;
    fuelBurn: string;
    maxAltitude: string;
    airportCapability: string;
  };
  technicalSpecs: {
    range: string;
    engines: string;
    cabinArea: string;
    mtow: string;
    cruiseSpeed?: string;
    cabinZones?: string;
    efficiency?: string;
    cabinDiameter?: string;
    cabinAltitude?: string;
    hull?: string;
    humidity?: string;
  };
  pricing: {
    hourlyRate: string;
    category: "narrowbody" | "widebody";
  };
  gallery: {
    image: string;
    title: string;
    size: "small" | "medium" | "large";
  }[];
}> = {
  "bbj-737": {
    name: "ACJ 737",
    tagline: "The Original VIP Narrowbody Jet",
    description: "The ACJ 737 revolutionized executive aviation as the original VIP narrowbody jet. Combining the proven reliability of the world's most popular commercial aircraft with bespoke luxury interiors, the ACJ 737 offers unmatched versatility for discerning travelers who demand both performance and prestige.",
    heroImage: "/iMAGES/Boieng Inside.jpg",
    overviewImage: "/iMAGES/BoeingMainFront.jpg",
    crewImage: "/iMAGES/1882_DIN_CAM02_Final.jpg",
    features: [
      "Operational Excellence",
      "Top-Notch Safety & Security"
    ],
    benefits: [
      {
        title: "Hassle-Free Operations",
        description: "We handle everything from flight planning to maintenance, crew management, and regulatory compliance, so you can enjoy seamless travel.",
        icon: "plane"
      },
      {
        title: "Cost Optimization",
        description: "Our experts reduce operational costs through fuel management, maintenance scheduling, and insurance negotiations.",
        icon: "dollar"
      },
      {
        title: "Uncompromised Safety & Compliance",
        description: "We ensure your aircraft adheres to all aviation regulations and safety standards, providing peace of mind on every flight.",
        icon: "shield"
      },
      {
        title: "Personalized Service & Flexibility",
        description: "Whether you fly frequently or occasionally, customized management solutions are designed to fit your unique travel needs.",
        icon: "settings"
      }
    ],
    interiorFeatures: [
      "Master bedroom suites",
      "En-suite showers",
      "Private lounges & family areas",
      "Executive conference rooms",
      "Full dining rooms",
      "Galleys & crew rest areas"
    ],
    specs: {
      range: "5,200–6,200 nm",
      passengers: "25-50",
      cabinSpace: "870–1,120 sq ft"
    },
    performance: {
      engine: "CFM56-7B series",
      mtow: "171,000–187,700 lb",
      cruiseSpeed: "Mach 0.78–0.79",
      fuelBurn: "850 gal/hr",
      maxAltitude: "41,000 ft",
      airportCapability: "5,500 ft runway"
    },
    technicalSpecs: {
      range: "5,200–6,200 nm",
      engines: "CFM56-7B series",
      cabinArea: "870–1,120 sq ft",
      mtow: "171,000–187,700 lb",
      cruiseSpeed: "Mach 0.78–0.79",
      cabinZones: "3–5"
    },
    pricing: {
      hourlyRate: "$11,000–$15,000",
      category: "narrowbody"
    },
    gallery: [
      { image: "/iMAGES/ACJ-Select-737-7-FWD_lounge_A_serene.jpg", title: "Forward Lounge", size: "large" },
      { image: "/iMAGES/ACJ-Select-737-7-Stateroom_earthbound.jpg", title: "Luxury Stateroom", size: "medium" },
      { image: "/iMAGES/ACJ-Select-737-7-AFT_lounge_C_serene.jpg", title: "Aft Lounge", size: "medium" },
      { image: "/iMAGES/ACJ-Select-737-7-Private_Room_D_earthbound.jpg", title: "Private Room", size: "small" },
      { image: "/iMAGES/ACJ-Select-737-7-Private_Office_earthbound.jpg", title: "Private Office", size: "large" },
      { image: "/iMAGES/ACJ-Select-737-7-Ensuite_midnight.jpg", title: "Ensuite Bathroom", size: "small" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Entryway", size: "medium" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Dining Area", size: "large" },
      { image: "/iMAGES/ACJ-Select-737-7-FWD_lounge_B_serene.jpg", title: "Forward Lounge B", size: "medium" },
      { image: "/iMAGES/ACJ-Select-737-7-Stateroom_midnight.jpg", title: "Stateroom Midnight", size: "small" },
      { image: "/iMAGES/ACJ-Select-737-7-AFT_lounge_C_earthbound.jpg", title: "Aft Lounge Earthbound", size: "large" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Conference Room", size: "medium" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Executive Office", size: "small" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Comfort Zone", size: "medium" },
      { image: "/iMAGES/737-tarmac.jpg", title: "ACJ 737 on Tarmac", size: "large" }
    ]
  },
  "bbj-747": {
    name: "ACJ 747",
    tagline: "The Ultimate Flying Palace",
    description: "The ACJ 747-8 represents the pinnacle of private aviation luxury. With its iconic silhouette and unprecedented cabin space, this widebody masterpiece offers up to 4,786 square feet of customizable interior, making it the ultimate choice for heads of state and ultra-high-net-worth individuals.",
    heroImage: "/iMAGES/Boieng Inside.jpg",
    overviewImage: "/iMAGES/BoeingMainFront.jpg",
    crewImage: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg",
    features: [
      "Unmatched Cabin Space",
      "Intercontinental Range"
    ],
    benefits: [
      {
        title: "Hassle-Free Operations",
        description: "We handle everything from flight planning to maintenance, crew management, and regulatory compliance.",
        icon: "plane"
      },
      {
        title: "Cost Optimization",
        description: "Our experts reduce operational costs through fuel management, maintenance scheduling, and insurance negotiations.",
        icon: "dollar"
      },
      {
        title: "Uncompromised Safety & Compliance",
        description: "We ensure your aircraft adheres to all aviation regulations and safety standards.",
        icon: "shield"
      },
      {
        title: "Personalized Service & Flexibility",
        description: "Customized management solutions designed to fit your unique travel needs.",
        icon: "settings"
      }
    ],
    interiorFeatures: [
      "Master bedroom suites",
      "En-suite showers",
      "Private lounges & family areas",
      "Executive conference rooms",
      "Full dining rooms",
      "Galleys & crew rest areas"
    ],
    specs: {
      range: "8,000 nm",
      passengers: "50-100",
      cabinSpace: "Up to 4,786 sq ft"
    },
    performance: {
      engine: "GEnx-2B67",
      mtow: "987,000 lbs",
      cruiseSpeed: "Mach 0.855",
      fuelBurn: "2,800 gal/hr",
      maxAltitude: "43,100 ft",
      airportCapability: "10,000 ft runway"
    },
    technicalSpecs: {
      range: "8,000 nm",
      engines: "GEnx-2B67",
      cabinArea: "Up to 4,786 sq ft",
      mtow: "987,000 lbs",
      cruiseSpeed: "Mach 0.855"
    },
    pricing: {
      hourlyRate: "$18,000–$32,000",
      category: "widebody"
    },
    gallery: [
      { image: "/iMAGES/Arabian-Heritage-1.2.jpg", title: "Heritage Interior", size: "large" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Dining Area", size: "medium" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Conference Room", size: "medium" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Executive Office", size: "small" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Comfort Zone", size: "large" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Grand Entryway", size: "small" },
      { image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg", title: "Premium Cabin", size: "medium" },
      { image: "/iMAGES/bbj-engine-side.jpg", title: "Engine Detail", size: "large" },
      { image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg", title: "Luxury Suite", size: "medium" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Formal Dining", size: "small" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Executive Conference", size: "large" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Private Study", size: "medium" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Relaxation Area", size: "small" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Spacious Foyer", size: "medium" },
      { image: "/iMAGES/27-ACJ_777X_Executive_Book_GE9X_engine-smaller.jpg", title: "ACJ 747 Exterior", size: "large" }
    ]
  },
  "bbj-777": {
    name: "ACJ 777",
    tagline: "Long-Range Luxury Redefined",
    description: "The ACJ 777X delivers extraordinary range and cabin space in a twin-engine widebody configuration. With the ability to fly non-stop to virtually any destination on Earth, this aircraft combines Airbus's most advanced technology with limitless interior possibilities.",
    heroImage: "/iMAGES/Boieng Inside.jpg",
    overviewImage: "/iMAGES/BoeingMainFront.jpg",
    crewImage: "/iMAGES/32-2200_ENTRY.jpg",
    features: [
      "Ultra Long Range",
      "Advanced Technology"
    ],
    benefits: [
      {
        title: "Hassle-Free Operations",
        description: "We handle everything from flight planning to maintenance, crew management, and regulatory compliance.",
        icon: "plane"
      },
      {
        title: "Cost Optimization",
        description: "Our experts reduce operational costs through fuel management, maintenance scheduling, and insurance negotiations.",
        icon: "dollar"
      },
      {
        title: "Uncompromised Safety & Compliance",
        description: "We ensure your aircraft adheres to all aviation regulations and safety standards.",
        icon: "shield"
      },
      {
        title: "Personalized Service & Flexibility",
        description: "Customized management solutions designed to fit your unique travel needs.",
        icon: "settings"
      }
    ],
    interiorFeatures: [
      "Master bedroom suites",
      "En-suite showers",
      "Private lounges & family areas",
      "Executive conference rooms",
      "Full dining rooms",
      "Galleys & crew rest areas"
    ],
    specs: {
      range: "9,300–10,500 nm",
      passengers: "50-75",
      cabinSpace: "3,700–4,200 sq ft"
    },
    performance: {
      engine: "GE90",
      mtow: "775,000 lbs",
      cruiseSpeed: "Mach 0.84",
      fuelBurn: "2,200 gal/hr",
      maxAltitude: "43,100 ft",
      airportCapability: "8,500 ft runway"
    },
    technicalSpecs: {
      range: "9,300–10,500 nm",
      engines: "GE90",
      cabinArea: "3,700–4,200 sq ft",
      mtow: "775,000 lbs",
      cruiseSpeed: "Mach 0.84",
      cabinDiameter: "19.3 ft"
    },
    pricing: {
      hourlyRate: "$18,000–$32,000",
      category: "widebody"
    },
    gallery: [
      { image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg", title: "777X Concept Interior", size: "large" },
      { image: "/iMAGES/777x-tarmac.jpg", title: "ACJ 777X on Tarmac", size: "large" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Conference Room", size: "medium" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Dining Area", size: "medium" },
      { image: "/iMAGES/27-ACJ_777X_Executive_Book_GE9X_engine-smaller.jpg", title: "GE9X Engine", size: "small" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Executive Office", size: "small" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Grand Entryway", size: "medium" },
      { image: "/iMAGES/bbj-engine-side.jpg", title: "Engine Detail", size: "large" },
      { image: "/iMAGES/Arabian-Heritage-1.2.jpg", title: "Heritage Interior", size: "medium" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Comfort Zone", size: "small" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Widebody Dining", size: "large" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Executive Conference", size: "medium" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Private Study", size: "small" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Spacious Foyer", size: "medium" },
      { image: "/iMAGES/777x-tarmac.jpg", title: "ACJ 777X Profile", size: "large" }
    ]
  },
  "bbj-787": {
    name: "ACJ 787",
    tagline: "The Dreamliner Experience",
    description: "The ACJ 787 Dreamliner brings revolutionary comfort to private aviation. With larger windows, higher cabin pressure, and advanced air filtration, passengers arrive refreshed. The composite construction enables fuel efficiency while providing a whisper-quiet cabin environment.",
    heroImage: "/iMAGES/Boieng Inside.jpg",
    overviewImage: "/iMAGES/BoeingMainFront.jpg",
    crewImage: "/iMAGES/Arabian-Heritage-1.2.jpg",
    features: [
      "Superior Passenger Comfort",
      "Fuel Efficient Design"
    ],
    benefits: [
      {
        title: "Hassle-Free Operations",
        description: "We handle everything from flight planning to maintenance, crew management, and regulatory compliance.",
        icon: "plane"
      },
      {
        title: "Cost Optimization",
        description: "Our experts reduce operational costs through fuel management, maintenance scheduling, and insurance negotiations.",
        icon: "dollar"
      },
      {
        title: "Uncompromised Safety & Compliance",
        description: "We ensure your aircraft adheres to all aviation regulations and safety standards.",
        icon: "shield"
      },
      {
        title: "Personalized Service & Flexibility",
        description: "Customized management solutions designed to fit your unique travel needs.",
        icon: "settings"
      }
    ],
    interiorFeatures: [
      "Master bedroom suites",
      "En-suite showers",
      "Private lounges & family areas",
      "Executive conference rooms",
      "Full dining rooms",
      "Galleys & crew rest areas"
    ],
    specs: {
      range: "7,400–9,800 nm",
      passengers: "40-60",
      cabinSpace: "2,400–2,700 sq ft"
    },
    performance: {
      engine: "GEnx-1B or Rolls-Royce Trent 1000",
      mtow: "560,000 lbs",
      cruiseSpeed: "Mach 0.85",
      fuelBurn: "1,500 gal/hr",
      maxAltitude: "43,000 ft",
      airportCapability: "7,500 ft runway"
    },
    technicalSpecs: {
      range: "7,400–9,800 nm",
      engines: "GEnx-1B or Rolls-Royce Trent 1000",
      cabinArea: "2,400–2,700 sq ft",
      mtow: "560,000 lbs",
      cabinAltitude: "6,000 ft",
      hull: "Carbon Fiber Composite",
      humidity: "20–25% controlled environment"
    },
    pricing: {
      hourlyRate: "$18,000–$32,000",
      category: "widebody"
    },
    gallery: [
      { image: "/iMAGES/Arabian-Heritage-1.2.jpg", title: "Dreamliner Interior", size: "large" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Comfort Zone", size: "medium" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Dining Area", size: "medium" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Conference Room", size: "small" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Executive Office", size: "large" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Grand Entryway", size: "small" },
      { image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg", title: "Premium Cabin", size: "medium" },
      { image: "/iMAGES/27-ACJ_777X_Executive_Book_GE9X_engine-smaller.jpg", title: "Engine Technology", size: "large" },
      { image: "/iMAGES/Arabian-Heritage-1.2.jpg", title: "Luxury Suite", size: "medium" },
      { image: "/iMAGES/homepage-comfort.jpg", title: "Relaxation Space", size: "small" },
      { image: "/iMAGES/1882_DIN_CAM02_Final.jpg", title: "Formal Dining", size: "large" },
      { image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg", title: "Executive Conference", size: "medium" },
      { image: "/iMAGES/44x25_300dpi_Office_800.jpg", title: "Private Study", size: "small" },
      { image: "/iMAGES/32-2200_ENTRY.jpg", title: "Spacious Foyer", size: "medium" },
      { image: "/iMAGES/bbj-engine-side.jpg", title: "ACJ 787 Exterior", size: "large" }
    ]
  }
};

const iconMap = {
  plane: Plane,
  dollar: DollarSign,
  shield: Shield,
  settings: Settings
};

// Performance Carousel Component
function PerformanceCarousel({ aircraft }: { aircraft: typeof aircraftData[keyof typeof aircraftData] }) {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayImage, setDisplayImage] = useState(0);

  // Build comprehensive feature list based on available specs
  const allFeatures = [
    {
      title: "Range & Capability",
      description: `${aircraft.technicalSpecs.range} maximum nonstop flight distance. See how far the ${aircraft.name} can fly nonstop from any location.`,
      image: "/iMAGES/777X-range-map.jpg",
      selector: "Range Maps",
      specs: [
        { label: "Range", value: aircraft.technicalSpecs.range },
        { label: "Max Altitude", value: aircraft.performance.maxAltitude },
        { label: "Airport Capability", value: aircraft.performance.airportCapability }
      ]
    },
    {
      title: "Engine Details",
      description: `${aircraft.technicalSpecs.engines}. Advanced powerplants delivering reliability and performance.`,
      image: "/iMAGES/27-ACJ_777X_Executive_Book_GE9X_engine-smaller.jpg",
      selector: "Engine Details",
      specs: [
        { label: "Engines", value: aircraft.technicalSpecs.engines },
        { label: "Fuel Burn", value: aircraft.performance.fuelBurn },
        { label: "Cruise Speed", value: aircraft.technicalSpecs.cruiseSpeed || aircraft.performance.cruiseSpeed }
      ]
    },
    {
      title: "Performance Tables",
      description: `MTOW, cruise speed, and fuel burn specifications for the ${aircraft.name}.`,
      image: "/iMAGES/bbj-engine-side.jpg",
      selector: "Performance Tables",
      specs: [
        { label: "MTOW", value: aircraft.technicalSpecs.mtow },
        { label: "Cruise Speed", value: aircraft.technicalSpecs.cruiseSpeed || aircraft.performance.cruiseSpeed },
        { label: "Fuel Burn", value: aircraft.performance.fuelBurn }
      ]
    },
    {
      title: "Cabin Specifications",
      description: `${aircraft.technicalSpecs.cabinArea} interior space available. Interior space and configuration details.`,
      image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg",
      selector: "Cabin Specs",
      specs: [
        { label: "Cabin Area", value: aircraft.technicalSpecs.cabinArea },
        ...(aircraft.technicalSpecs.cabinZones ? [{ label: "Cabin Zones", value: aircraft.technicalSpecs.cabinZones }] : []),
        ...(aircraft.technicalSpecs.cabinDiameter ? [{ label: "Cabin Diameter", value: aircraft.technicalSpecs.cabinDiameter }] : []),
        ...(aircraft.technicalSpecs.cabinAltitude ? [{ label: "Cabin Altitude", value: aircraft.technicalSpecs.cabinAltitude }] : [])
      ]
    },
    ...(aircraft.technicalSpecs.cabinZones ? [{
      title: "Cabin Zones",
      description: `${aircraft.technicalSpecs.cabinZones} typical cabin configuration zones for optimal space utilization.`,
      image: "/iMAGES/1882_DIN_CAM02_Final.jpg",
      selector: "Cabin Zones",
      specs: [
        { label: "Cabin Zones", value: aircraft.technicalSpecs.cabinZones },
        { label: "Cabin Area", value: aircraft.technicalSpecs.cabinArea }
      ]
    }] : []),
    ...(aircraft.technicalSpecs.efficiency ? [{
      title: "Fuel Efficiency",
      description: `${aircraft.technicalSpecs.efficiency} fuel savings compared to previous generation aircraft.`,
      image: "/iMAGES/bbj-engine-side.jpg",
      selector: "Fuel Efficiency",
      specs: [
        { label: "Fuel Efficiency", value: aircraft.technicalSpecs.efficiency },
        { label: "Fuel Burn", value: aircraft.performance.fuelBurn }
      ]
    }] : []),
    ...(aircraft.technicalSpecs.cabinDiameter ? [{
      title: "Cabin Diameter",
      description: `${aircraft.technicalSpecs.cabinDiameter} interior width dimension providing spacious cabin environment.`,
      image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg",
      selector: "Cabin Diameter",
      specs: [
        { label: "Cabin Diameter", value: aircraft.technicalSpecs.cabinDiameter },
        { label: "Cabin Area", value: aircraft.technicalSpecs.cabinArea }
      ]
    }] : []),
    ...(aircraft.technicalSpecs.cabinAltitude ? [{
      title: "Cabin Altitude",
      description: `${aircraft.technicalSpecs.cabinAltitude} pressurized cabin altitude for enhanced passenger comfort.`,
      image: "/iMAGES/homepage-comfort.jpg",
      selector: "Cabin Altitude",
      specs: [
        { label: "Cabin Altitude", value: aircraft.technicalSpecs.cabinAltitude },
        { label: "Max Altitude", value: aircraft.performance.maxAltitude }
      ]
    }] : []),
    ...(aircraft.technicalSpecs.hull ? [{
      title: "Hull Construction",
      description: `${aircraft.technicalSpecs.hull} aircraft structure material providing strength and efficiency.`,
      image: "/iMAGES/777x-tarmac.jpg",
      selector: "Hull Construction",
      specs: [
        { label: "Hull Construction", value: aircraft.technicalSpecs.hull },
        { label: "MTOW", value: aircraft.technicalSpecs.mtow }
      ]
    }] : []),
    ...(aircraft.technicalSpecs.humidity ? [{
      title: "Humidity Control",
      description: `${aircraft.technicalSpecs.humidity} controlled environment for optimal cabin comfort.`,
      image: "/iMAGES/32-2200_ENTRY.jpg",
      selector: "Humidity Control",
      specs: [
        { label: "Humidity Control", value: aircraft.technicalSpecs.humidity },
        ...(aircraft.technicalSpecs.cabinAltitude ? [{ label: "Cabin Altitude", value: aircraft.technicalSpecs.cabinAltitude }] : [])
      ]
    }] : []),
    {
      title: "Operational Profiles",
      description: `Typical missions, altitude, and airport capability for the ${aircraft.name}.`,
      image: "/iMAGES/777x-tarmac.jpg",
      selector: "Operational Profiles",
      specs: [
        { label: "Max Altitude", value: aircraft.performance.maxAltitude },
        { label: "Airport Capability", value: aircraft.performance.airportCapability },
        { label: "Range", value: aircraft.technicalSpecs.range }
      ]
    }
  ];

  const performanceFeatures = allFeatures;

  useEffect(() => {
    if (performanceFeatures.length > 0) {
      const safeIndex = Math.max(0, Math.min(selectedFeature, performanceFeatures.length - 1));
      setDisplayImage(safeIndex);
    }
  }, [selectedFeature, performanceFeatures.length]);

  const selectors = performanceFeatures.map((feature, index) => ({
    label: feature.selector,
    featureIndex: index
  }));

  const handleFeatureChange = (featureIndex: number) => {
    if (featureIndex === selectedFeature || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedFeature(featureIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Safety check: ensure displayImage is within bounds
  const safeDisplayImage = Math.max(0, Math.min(displayImage, performanceFeatures.length - 1));
  const currentFeature = performanceFeatures[safeDisplayImage];

  // Safety check: ensure currentFeature exists
  if (!currentFeature || !performanceFeatures.length) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden h-[85vh] min-h-[600px] md:h-auto md:aspect-[16/9] md:min-h-0">
        {/* Main Image Container with Fade Transition */}
        <div className="relative w-full h-full pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          {/* Current Image */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={currentFeature.image}
              alt={currentFeature.title || 'Aircraft feature'}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          
          {/* Text Overlay on Left - Enhanced for visibility, with bottom padding to avoid selector */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
            <div 
              className={`absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 max-w-[85%] sm:max-w-md transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg font-playfair-display">
                {currentFeature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed drop-shadow-md mb-3 sm:mb-4 font-instrument-sans">
                {currentFeature.description}
              </p>
              {/* Specs List */}
              <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                {currentFeature.specs.slice(0, 3).map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full flex-shrink-0"></div>
                    <span className="text-white/90 text-xs sm:text-sm font-instrument-sans">
                      <span className="font-semibold">{spec.label}:</span> <span className="text-[#C9A24D]">{spec.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selector Bar at Bottom - Centered, with proper z-index */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0E1116]/90 backdrop-blur-sm border-t border-[#C9A24D]/30 z-20">
          <div className="flex items-center justify-center overflow-x-auto py-2 sm:py-3 md:py-4 px-2 sm:px-4">
            <div className="flex items-center gap-0">
              {selectors.map((selector, index) => {
                const isActive = selectedFeature === selector.featureIndex;
                const isLast = index === selectors.length - 1;
                
                return (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <button
                      onClick={() => handleFeatureChange(selector.featureIndex)}
                      className={`px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-light transition-all duration-200 border whitespace-nowrap flex-shrink-0 ${
                        isActive
                          ? "border-[#C9A24D] bg-[#C9A24D]/20 text-[#C9A24D]"
                          : "border-[#C9A24D]/20 bg-[#0E1116]/40 text-[#F5F5F5]/70 hover:bg-[#0E1116]/60 hover:text-[#C9A24D] hover:border-[#C9A24D]/40"
                      }`}
                      style={{ 
                        cursor: 'pointer',
                        textTransform: 'none',
                        letterSpacing: 'normal'
                      }}
                    >
                      {selector.label}
                    </button>
                    {!isLast && (
                      <div className="h-8 sm:h-10 md:h-12 w-px bg-[#C9A24D]/20 flex-shrink-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Carousel Component
function FeatureCarousel({ aircraft }: { aircraft: typeof aircraftData[keyof typeof aircraftData] }) {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayImage, setDisplayImage] = useState(0);

  const features = [
    {
      title: "Open Entryways",
      description: "Spacious entryways and welcoming foyers that create a grand first impression.",
      image: "/iMAGES/32-2200_ENTRY.jpg",
      selector: "Open Entryways"
    },
    {
      title: "VIP Amenities",
      description: "Bedrooms, showers, full galleys, conference rooms, and more.",
      image: "/iMAGES/AERIA-777-Concept-Interior-1.jpg",
      selector: "VIP Lavatories"
    },
    {
      title: "Large Delegation Capacity",
      description: `${aircraft.specs.passengers} passengers depending on configuration.`,
      image: "/iMAGES/1882_DIN_CAM02_Final.jpg",
      selector: "Spacious Living Areas"
    },
    {
      title: "Private Rooms",
      description: "Elegant private staterooms and suites designed for ultimate comfort and privacy.",
      image: "/iMAGES/Arabian-Heritage-1.2.jpg",
      selector: "Private Rooms"
    },
    {
      title: "Staterooms",
      description: "Luxurious staterooms with premium amenities and sophisticated design.",
      image: "/iMAGES/34-2200_CONFERENCE_FWD_PAUSE.jpg",
      selector: "Staterooms"
    },
    {
      title: "Cost Per Hour",
      description: `Charter pricing for the ${aircraft.name}. Costs vary based on multiple factors including aircraft model, cabin configuration, distance, and operational requirements.`,
      image: "/iMAGES/27-ACJ_777X_Executive_Book_GE9X_engine-smaller.jpg",
      selector: "Cost Per Hour",
      pricingInfo: {
        hourlyRate: aircraft.pricing.hourlyRate,
        category: aircraft.pricing.category === "narrowbody" ? "Narrowbody ACJ" : "Widebody ACJ",
        costFactors: [
          "Aircraft model",
          "Cabin configuration",
          "Distance & routing",
          "Overnight crew fees",
          "Fuel prices",
          "Short-notice logistics"
        ]
      }
    }
  ];

  const selectors = [
    { label: "Open Entryways", featureIndex: 0 },
    { label: "Spacious Living Areas", featureIndex: 2 },
    { label: "Private Rooms", featureIndex: 3 },
    { label: "Staterooms", featureIndex: 4 },
    { label: "VIP Lavatories", featureIndex: 1 },
    { label: "Cost Per Hour", featureIndex: 5 }
  ];

  useEffect(() => {
    if (features.length > 0) {
      const safeIndex = Math.max(0, Math.min(selectedFeature, features.length - 1));
      setDisplayImage(safeIndex);
    }
  }, [selectedFeature, features.length]);

  const handleFeatureChange = (featureIndex: number) => {
    if (featureIndex === selectedFeature || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedFeature(featureIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Safety check: ensure displayImage is within bounds
  const safeDisplayImage = Math.max(0, Math.min(displayImage, features.length - 1));
  const currentFeature = features[safeDisplayImage];

  // Safety check: ensure currentFeature exists
  if (!currentFeature || !features.length) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* Main Image Container with Fade Transition */}
        <div className="relative w-full h-full">
          {/* Current Image */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={currentFeature.image}
              alt={currentFeature.title || 'Aircraft feature'}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          
          {/* Text Overlay on Left - Enhanced for visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10">
            <div 
              className={`absolute left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 max-w-md transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* Special display for Cost Per Hour */}
              {currentFeature.selector === "Cost Per Hour" && currentFeature.pricingInfo ? (
                <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 rounded-xl p-6 md:p-8">
                  {/* Badge */}
                  <div className="inline-block bg-[#C9A24D] px-4 py-1.5 rounded mb-4">
                    <span className="text-[#0E1116] text-xs font-semibold uppercase tracking-wide font-instrument-sans">
                      {currentFeature.pricingInfo.category}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-2">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C9A24D] mb-1 font-playfair-display">
                      {currentFeature.pricingInfo.hourlyRate}
                    </div>
                    <p className="text-white/70 text-sm font-instrument-sans">per hour</p>
                  </div>
                  
                  {/* Cost Factors */}
                  <div className="mt-6">
                    <p className="text-white/70 text-sm mb-4 font-instrument-sans">Costs vary based on:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {currentFeature.pricingInfo.costFactors.map((factor, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#C9A24D] flex-shrink-0" />
                          <span className="text-white/80 text-sm font-instrument-sans">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 leading-tight drop-shadow-lg">
                    {currentFeature.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/95 leading-relaxed drop-shadow-md">
                    {currentFeature.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Selector Bar at Bottom - Centered */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0E1116]/80 backdrop-blur-sm border-b border-[#C9A24D]/30">
          <div className="flex items-center justify-center overflow-x-auto py-3 sm:py-4 md:py-5">
            <div className="flex items-center">
              {selectors.map((selector, index) => {
                const isActive = selectedFeature === selector.featureIndex;
                const isLast = index === selectors.length - 1;
                
                return (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <button
                      onClick={() => handleFeatureChange(selector.featureIndex)}
                      className={`px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 text-xs sm:text-sm md:text-sm lg:text-base font-light transition-all duration-200 border whitespace-nowrap ${
                        isActive
                          ? "border-[#C9A24D] bg-[#C9A24D]/20 text-[#C9A24D]"
                          : "border-[#C9A24D]/20 bg-[#0E1116]/40 text-[#F5F5F5]/70 hover:bg-[#0E1116]/60 hover:text-[#C9A24D] hover:border-[#C9A24D]/40"
                      }`}
                      style={{ 
                        cursor: 'pointer',
                        textTransform: 'none',
                        letterSpacing: 'normal'
                      }}
                    >
                      {selector.label}
                    </button>
                    {!isLast && (
                      <div className="h-10 sm:h-12 w-px bg-[#C9A24D]/20 flex-shrink-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AircraftDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const aircraft = aircraftData[slug];
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string } | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = aircraft.gallery || [];
  const totalGallery = gallery.length;
  const currentGalleryItem = totalGallery > 0 ? gallery[galleryIndex % totalGallery] : null;
  const prevIndex = totalGallery > 0 ? (galleryIndex - 1 + totalGallery) % totalGallery : 0;
  const nextIndex = totalGallery > 0 ? (galleryIndex + 1) % totalGallery : 0;

  if (!aircraft) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">Aircraft Not Found</h1>
          <Link href="/" className="text-[#C9A24D] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const openLightbox = (image: string, title: string) => {
    setLightboxImage({ image, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={aircraft.heroImage}
            alt={aircraft.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {aircraft.name}
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <Link href="/" className="hover:text-[#C9A24D] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#aircraft" className="hover:text-[#C9A24D] transition-colors">
              Aircraft
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">{aircraft.name}</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-playfair-display text-[#F5F5F5]">
                {aircraft.tagline}
              </h2>
              
              <p className="text-white/70 leading-relaxed">
                {aircraft.description}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                {aircraft.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#C9A24D]" />
                    <span className="text-[#F5F5F5] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Specs Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A24D] font-playfair-display">{aircraft.specs.range}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide font-instrument-sans">Range</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A24D] font-playfair-display">{aircraft.specs.passengers}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide font-instrument-sans">Passengers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A24D] font-playfair-display">{aircraft.specs.cabinSpace}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide font-instrument-sans">Cabin Space</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link 
                  href="/#booking"
                  className="inline-flex items-center gap-2 px-7 py-3 text-[#F5F5F5] font-semibold border border-[#C9A24D] bg-gradient-to-br from-[#0E1116] to-[#1a1d24] hover:bg-gradient-to-br hover:from-[#C9A24D] hover:to-[#a8863d] hover:text-[#0E1116] transition-all duration-300 hover:-translate-y-0.5 font-instrument-sans"
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  Request a Quote for {aircraft.name}
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={aircraft.crewImage}
                alt="Flight Crew"
                width={600}
                height={700}
                className="w-full h-auto object-cover shadow-xl"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          {/* Customizable Luxury Interiors Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div className="relative">
              <Image
                src="/iMAGES/AERIA-777-Concept-Interior-1.jpg"
                alt={`${aircraft.name} Interior`}
                width={600}
                height={500}
                className="w-full h-auto object-cover shadow-xl"
                quality={100}
              />
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#C9A24D] rounded-full" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] font-playfair-display">
                Fully Customizable <span className="text-[#C9A24D] italic">Luxury Interiors</span>
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                ACJs are fully customizable luxury aircraft, offering up to 4,000 sq ft of interior space 
                depending on model. Design your perfect flying sanctuary with layouts that include:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">Master bedroom suites</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">En-suite showers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">Private lounges & family areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">Executive conference rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">Full dining rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full" />
                  <span className="text-white/80">Galleys & crew rest areas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display text-[#F5F5F5]">
              How You Benefit from Our Charter Services
            </h2>
            <p className="text-white/70 max-w-3xl">
              Whether you choose a full turn-key service or a personalised program based on your specific needs, 
              our team of experts will ensure your aircraft is well maintained, operated to the highest standards, 
              and fully compliant with all regulations.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-6">
              Key Benefits of Our Charter Services:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aircraft.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon];
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Exclusive aircraft use
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    VIP catering
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Crew and flight attendants
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Full mission planning
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Handling and ground support
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Permits and overflight approvals
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                    Security (where applicable)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="pt-16 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                Engineering Excellence
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">Range, Performance & </span>
                <span className="text-[#C9A24D] italic">Operational Depth</span>
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
                Advanced Aviation Technology
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
              <p className="text-white/70 max-w-3xl mx-auto">
                Airbus Corporate Jets are selected for charter missions requiring extended nonstop range, large-scale cabin environments, and consistent operational performance. Capability varies by aircraft model, configuration, and mission profile.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Carousel - Full Width */}
        <PerformanceCarousel aircraft={aircraft} />
      </section>

      {/* How Much It Costs Section */}
      <section className="relative bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="pt-16 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
                Charter Pricing
              </span>
              <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
                <span className="text-[#F5F5F5]">How Much Does It Cost to Charter a </span>
                <span className="text-[#C9A24D] italic">{aircraft.name}?</span>
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
                Premium Charter Rates
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
            </div>
          </div>
        </div>

        {/* Key Features - Image Carousel - Full Width */}
        <FeatureCarousel aircraft={aircraft} />

        <div className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
          {/* Access Jet Group Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/20 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F5] font-playfair-display">
                Charter a {aircraft.name} With <span className="text-[#C9A24D] italic">Access Jet Group</span>
              </h3>
              <p className="text-white/70 max-w-3xl mx-auto leading-relaxed font-instrument-sans">
                Access Jet Group provides global access to ACJ aircraft, including {aircraft.name}, and VIP-configured ACJ 777 and ACJ 787 models.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-white/70 mb-6 text-center font-instrument-sans">Their team specializes in:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 font-instrument-sans">Ultra-long-range routing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 font-instrument-sans">Diplomatic and government missions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 font-instrument-sans">Confidential charter sourcing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 font-instrument-sans">Complex multi-country itineraries</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2 justify-center">
                  <Check className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 font-instrument-sans">24/7 mission support</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
       {/* Range Map */}
       <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-12">
             <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
               Global Reach
             </span>
             <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
               <span className="text-[#F5F5F5]">Popular </span>
               <span className="text-[#C9A24D] italic">{aircraft.name} Routes</span>
             </h2>
             <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
               Unparalleled Global Capability
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
             <p className="text-white/70 text-center max-w-3xl mx-auto">
               {aircraft.name} has the range to cover the entire globe, flying nonstop to any location with this unparalleled capability.
             </p>
           </div>
           <div className="relative w-full overflow-hidden border border-[#C9A24D]/30 shadow-xl">
             <Image
               src="/iMAGES/777X-range-map.jpg"
               alt={`${aircraft.name} Range Map`}
               width={1200}
               height={675}
               className="w-full h-auto object-cover"
               quality={90}
             />
           </div>
         </div>
       </section>

      {/* Gallery Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-x-hidden">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
              Our Gallery
            </span>
            <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
              <span className="text-[#F5F5F5]">Explore the </span>
              <span className="text-[#C9A24D] italic">Gallery</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
              See Excellence Unfold
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              From sleek exteriors to luxurious cabin interiors, this gallery captures 
              the essence of what makes the {aircraft.name} a masterpiece of aviation.
            </p>
          </div>

          {/* Gallery Carousel - single track, scrolls in direction of click */}
          {totalGallery > 0 && (
            <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden  py-10 md:py-12">
              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[680px] overflow-hidden">
                {/* Infinite track: [last, ...all, first] so center always has two side images */}
                <div
                  className="flex items-center absolute inset-y-0 left-0 transition-transform duration-700 ease-in-out"
                  style={{
                    height: "100%",
                    width: `calc(${totalGallery + 2} * 60vw + ${(totalGallery + 1)} * 1.25rem)`,
                    transform: `translateX(calc(20vw - ${galleryIndex + 1} * (60vw + 1.25rem)))`,
                    gap: "1.25rem",
                  }}
                >
                  {/* Prepend last image so at index 0 we see last on left */}
                  <div
                    className="relative flex-shrink-0 cursor-pointer w-[60vw] overflow-hidden transition-[height] duration-500 ease-in-out"
                    style={{ height: "82%" }}
                    onClick={() => openLightbox(gallery[totalGallery - 1].image, gallery[totalGallery - 1].title)}
                  >
                    <Image
                      src={gallery[totalGallery - 1]?.image || "/iMAGES/Boieng Inside.jpg"}
                      alt={gallery[totalGallery - 1]?.title || "Gallery"}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  {gallery.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 cursor-pointer w-[60vw] overflow-hidden transition-[height] duration-500 ease-in-out"
                      style={{
                        height: i === galleryIndex ? "100%" : "82%",
                      }}
                      onClick={() => openLightbox(item.image, item.title)}
                    >
                      <Image
                        src={item.image || "/iMAGES/Boieng Inside.jpg"}
                        alt={item.title || "Gallery"}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  ))}
                  {/* Append first image so at last index we see first on right */}
                  <div
                    className="relative flex-shrink-0 cursor-pointer w-[60vw] overflow-hidden transition-[height] duration-500 ease-in-out"
                    style={{ height: "82%" }}
                    onClick={() => openLightbox(gallery[0].image, gallery[0].title)}
                  >
                    <Image
                      src={gallery[0]?.image || "/iMAGES/Boieng Inside.jpg"}
                      alt={gallery[0]?.title || "Gallery"}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                </div>

                {/* Left dim overlay + prev button (desktop) */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[20vw] z-10 pointer-events-none">
                  <div className="absolute inset-0 " />
                </div>
                <button
                  type="button"
                  onClick={() => setGalleryIndex(prevIndex)}
                  className="hidden md:flex absolute left-[2vw] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#C9A24D] bg-black/50 hover:bg-black/70 items-center justify-center transition-colors pointer-events-auto"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
                </button>

                {/* Right dim overlay + next button (desktop) */}
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[20vw] z-10 pointer-events-none">
                  <div className="absolute inset-0 " />
                </div>
                <button
                  type="button"
                  onClick={() => setGalleryIndex(nextIndex)}
                  className="hidden md:flex absolute right-[2vw] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#C9A24D] bg-black/50 hover:bg-black/70 items-center justify-center transition-colors pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
                </button>

                {/* Pagination - bottom right of center zone */}
                <div className="absolute bottom-3 right-[20vw] md:right-[20vw] text-white/90 text-sm font-light drop-shadow-md z-10">
                  {galleryIndex + 1} / {totalGallery}
                </div>

                {/* Mobile arrows */}
                <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none z-20">
                  <button
                    type="button"
                    onClick={() => setGalleryIndex(prevIndex)}
                    className="pointer-events-auto w-11 h-11 rounded-full border border-[#C9A24D] bg-black/50 flex items-center justify-center flex-shrink-0"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setGalleryIndex(nextIndex)}
                    className="pointer-events-auto w-11 h-11 rounded-full border border-[#C9A24D] bg-black/50 flex items-center justify-center flex-shrink-0"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Popup */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.image}
              alt={lightboxImage.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-xl font-semibold">{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

