import Image from "next/image";

export default function Values() {
  return (
    <section className="valuesSection section-padding">
      <div className="grid2ColItemsStartGap12">
        <div className="valuesImageContainerSection">
          <Image
            src="https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-35.jpg"
            alt="Flight Attendant in Private Jet Cabin"
            width={540}
            height={720}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flexColGap8">
          <div className="flexColGap6">
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
              <span className="tagBadgeText">
                OUR VALUES
              </span>
            </div>

            <h2 className="h2Uppercase">
              Guiding Principles For Timeless Private Aviation
            </h2>

            <p className="subtitleText">
              At Airbus, our values shape every flight and every detail of service. They define who we are, what we stand for, and how we elevate your journey.
            </p>
          </div>

          <div className="flexColGap6">
            <div className="valueItemSection">
              <div className="valueItemContentSection">
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
                <div>
                  <h3 className="valueTitleSection">EXCLUSIVITY</h3>
                  <p className="valueDescriptionSection">
                    Delivering private experiences reserved for the elite.
                  </p>
                </div>
              </div>
            </div>

            <div className="valueDividerSection"></div>

            <div className="valueItemSection">
              <div className="valueItemContentSection">
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
                <div>
                  <h3 className="valueTitleSection">INNOVATION</h3>
                  <p className="valueDescriptionSection">
                    Embracing technology to refine luxury aviation.
                  </p>
                </div>
              </div>
            </div>

            <div className="valueDividerSection"></div>

            <div className="valueItemSection">
              <div className="valueItemContentSection">
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
                <div>
                  <h3 className="valueTitleSection">SAFETY</h3>
                  <p className="valueDescriptionSection">
                    Ensuring uncompromised standards in every journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="buttonPrimary">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
}

