import Image from "next/image";
import Link from "next/link";

interface FleetCardProps {
  name: string;
  image: string;
  description: string;
  passengers: number;
  range: string;
  feature: string;
  slug: string;
}

export default function FleetCard({
  name,
  image,
  description,
  passengers,
  range,
  feature,
  slug,
}: FleetCardProps) {
  return (
    <div className="fleetCard">
      <div className="fleetCardImage">
        <Image
          src={image}
          alt={name}
          width={540}
          height={380}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="fleetCardContent">
        <h3 className="fleetCardTitle">{name}</h3>
        <p className="fleetCardDescription">{description}</p>
        <ul className="fleetSpecsList">
          <li className="fleetSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
            </svg>
            <span className="fleetSpecText">{passengers} Passengers</span>
          </li>
          <li className="fleetSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
            </svg>
            <span className="fleetSpecText">{range}</span>
          </li>
          <li className="fleetSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"></path>
            </svg>
            <span className="fleetSpecText">{feature}</span>
          </li>
        </ul>
        <Link href={`/fleet/${slug}`} className="viewDetailsLink">
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}

