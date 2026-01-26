import Image from "next/image";

interface FleetDetailContentProps {
  name: string;
  image: string;
  description: string;
  passengers: number;
  range: string;
  cruisingSpeed: string;
  crew: string;
  cabinHeight: string;
  luxuryFeatures: string[];
  amenities: string[];
  safetyTechnology: string[];
  slug: string;
}

export default function FleetDetailContent({
  name,
  image,
  description,
  passengers,
  range,
  cruisingSpeed,
  crew,
  cabinHeight,
  luxuryFeatures,
  amenities,
  safetyTechnology,
  slug,
}: FleetDetailContentProps) {
  const galleryImages = [
    "https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-31.jpg",
    "https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-34.jpg",
    "https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-32.jpg",
    "https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-33.jpg",
  ];

  return (
    <section className="fleetDetailContentSection section-padding">
      <div className="fleetDetailContentInner">
        <div className="fleetDetailHeaderContent">
          <div className="fleetDetailHeaderLeft">
            <div className="tagBadgeMb6">
              <svg
                className="diamondIcon"
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
              <span className="tagBadgeText">{name}</span>
            </div>
            <h2 className="h2Uppercase">Agility And Comfort In Dark Elegance</h2>
            <p className="fleetDetailDescription">{description}</p>
          </div>
        </div>

        <div className="fleetDetailMainImage">
          <Image
            src="https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-4-1-1024x404.jpg"
            alt={name}
            width={800}
            height={316}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="fleetDetailGallery">
          {galleryImages.map((img, index) => (
            <div key={index} className="fleetDetailGalleryItem">
              <Image
                src={img}
                alt={`${name} gallery ${index + 1}`}
                width={270}
                height={270}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="fleetDetailSpecsRow">
          <div className="fleetDetailSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
            </svg>
            <span className="fleetSpecText">Passengers: {passengers}</span>
          </div>
          <div className="fleetDetailSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
            </svg>
            <span className="fleetSpecText">Range: {range}</span>
          </div>
          <div className="fleetDetailSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
            </svg>
            <span className="fleetSpecText">Cruising Speed: {cruisingSpeed}</span>
          </div>
          <div className="fleetDetailSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            <span className="fleetSpecText">Crew: {crew}</span>
          </div>
          <div className="fleetDetailSpecItem">
            <svg
              className="fleetSpecIcon"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path>
            </svg>
            <span className="fleetSpecText">Cabin Height: {cabinHeight}</span>
          </div>
        </div>

        <div className="fleetDetailFeaturesGrid">
          <div className="fleetDetailFeatureColumn">
            <h3 className="fleetDetailFeatureTitle">Luxury Features</h3>
            <div className="fleetDetailFeatureList">
              {luxuryFeatures.map((feature, index) => (
                <div key={index}>
                  <div className="fleetDetailFeatureItem">
                    <div className="checkmarkIcon">
                      <svg
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
                    </div>
                    <p className="fleetDetailFeatureText">{feature}</p>
                  </div>
                  {index < luxuryFeatures.length - 1 && (
                    <div className="fleetDetailFeatureDivider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="fleetDetailFeatureColumn">
            <h3 className="fleetDetailFeatureTitle">Amenities</h3>
            <div className="fleetDetailFeatureList">
              {amenities.map((amenity, index) => (
                <div key={index}>
                  <div className="fleetDetailFeatureItem">
                    <svg
                      className="checkmarkIcon"
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
                    <p className="fleetDetailFeatureText">{amenity}</p>
                  </div>
                  {index < amenities.length - 1 && (
                    <div className="fleetDetailFeatureDivider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="fleetDetailFeatureColumn">
            <h3 className="fleetDetailFeatureTitle">Safety & Technology</h3>
            <div className="fleetDetailFeatureList">
              {safetyTechnology.map((item, index) => (
                <div key={index}>
                  <div className="fleetDetailFeatureItem">
                    <svg
                      className="checkmarkIcon"
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
                    <p className="fleetDetailFeatureText">{item}</p>
                  </div>
                  {index < safetyTechnology.length - 1 && (
                    <div className="fleetDetailFeatureDivider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fleetDetailButtons">
          <button className="buttonPrimary">BOOK {name.toUpperCase()}</button>
          <button className="buttonSecondary">COMPARE FLEET</button>
        </div>
      </div>
    </section>
  );
}

