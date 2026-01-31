import Image from "next/image";

export default function Features() {
  return (
    <section className="aboutUsSection section-padding bg-gradient">
      <div className="grid2ColItemsStartGap12">
        <div className="flexColGap6">
          <div className="image360">
            <Image
              src="/jet-hangar.jpg"
              alt="Private Jet in Hangar"
              width={540}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flexColGap4">
            <div className="progressItemWrapper">
              <div className="progressHeaderRow">
                <span className="progressLabelText">
                  Client Satisfaction
                </span>
                <span className="progressValueText">
                  98%
                </span>
              </div>
              <div className="progressBarBg">
                <div className="progressBarFill98"></div>
              </div>
            </div>

            <div className="progressItemWrapper">
              <div className="progressHeaderRow">
                <span className="progressLabelText">
                  Safety Excellence
                </span>
                <span className="progressValueText">
                  100%
                </span>
              </div>
              <div className="progressBarBg">
                <div className="progressBarFill100"></div>
              </div>
            </div>

            <div className="progressItemWrapper">
              <div className="progressHeaderRow">
                <span className="progressLabelText">
                  Personalized Service
                </span>
                <span className="progressValueText">
                  92%
                </span>
              </div>
              <div className="progressBarBg">
                <div className="progressBarFill92"></div>
              </div>
            </div>
          </div>
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
              WHY AIRBUS CORPORATE JETS
              </span>
            </div>

            <h2 className="h2Uppercase">
            Designed Without Compromise
            </h2>

            <p className="subtitleText">
            Unlike traditional business jets, ACJs are derived from Airbus' most advanced commercial aircraft platforms. The result is unmatched cabin volume, ultra‑long‑range performance, and superior stability at altitude.
            </p>
          </div>

          <div className="flexColGap6">
            <div className="featureBoxHorizontalWrapper">
              <div className="featureIconCircle">
                <svg
                  className="featureIconSvgAccent"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                </svg>
              </div>
              <div className="featureContentWrapper">
                <h3 className="h3Mb2">
                  Superior Stablity at:
                </h3>
                <p className="subtitleSmall14">
                  Our fleet operates under the highest aviation standards, ensuring security and peace of mind on every journey.
                </p>
                <br />
                <ul className="featureListSection">
                  <li className="featureListItemSection">
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
                    <span>Full‑height cabins with wide‑body proportions</span>
                  </li>
                  <li className="featureListItemSection">
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
                    <span>Dedicated private suites, bedrooms, lounges, and dining areas</span>
                  </li>
                  <li className="featureListItemSection">
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
                    <span>Intercontinental and ultra‑long‑range capability</span>
                  </li>
                  <li className="featureListItemSection">
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
                    <span>Quiet, smooth flight experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="featureBoxHorizontalWrapper">
              <div className="featureIconCircle">
                <svg
                  className="featureIconSvgAccent"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                </svg>
              </div>
              <div className="featureContentWrapper">
                <h3 className="h3Mb2">
                OUR CHARTER PHILOSOPHY
                </h3>
                <p className="subtitleSmall14">
                Every charter is curated individually. From aircraft selection and routing to cabin configuration and onboard services, each detail is aligned with your mission — whether it's a transcontinental executive movement or a multi‑week private family journey.
                 <i>" Precision. Privacy. Personalization."</i></p>
              </div>
            </div>
          </div>

          <button className="buttonPrimaryLarge">
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
}

