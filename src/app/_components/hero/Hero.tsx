import Image from "next/image";

export default function Hero() {
  return (
    <section className="heroSectionWithBackground">
      <div className="heroBackgroundImage">
        <Image
          src="/jet.jpg"
          alt="Private Jet"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="heroOverlay"></div>
      <div className="section-padding">
        <div className="heroMobileContainer">
          <div className="heroContentWrapper">
            <div className="heroLeftColumn">
              <h1 className="heroTitleLarge">
                <span className="h1Block">Airbus Corporate </span>
                <span className="h1Block">Jet Charter</span>
              </h1>
              <p className="heroDescription">
                Experience private aviation at its most refined. Airbus Corporate Jets redefine what it means to fly privately; expansive wide‑body cabins, intercontinental range, and interiors designed more like private residences than aircraft. AirbusCorporateJet.com provides global charter access to the world's most exclusive ACJ fleet, tailored for heads of state, UHNW individuals, corporations, and private families.
              </p>

              <div className="heroButtonsWrapper">
                <button className="buttonPrimary">
                  BOOK A FLIGHT
                </button>
                <button className="buttonSecondary">
                  EXPLORE FLEET
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

