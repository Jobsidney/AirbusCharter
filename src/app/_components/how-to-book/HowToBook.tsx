import Image from "next/image";

export default function HowToBook() {
  const steps = [
    {
      number: "01",
      title: "CHOOSE YOUR FLIGHT",
      description: "Select your preferred destination and schedule.",
    },
    {
      number: "02",
      title: "CUSTOMIZE EXPERIENCE",
      description: "Add special requests, from catering to transfers.",
    },
    {
      number: "03",
      title: "CONFIRM & FLY",
      description: "Secure your booking and enjoy seamless travel.",
    },
  ];

  return (
    <section className="howToBookSection section-padding">
      <div className="howToBookGrid">
        <div className="howToBookImage">
          <Image
            src="https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-35.jpg"
            alt="Flight Attendant"
            width={540}
            height={720}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="howToBookContent">
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
            <span className="tagBadgeText">HOW TO BOOK</span>
          </div>

          <h2 className="h2Uppercase">Seamless Process For Your Exclusive Journey</h2>

          <p className="howToBookDescription">
            Booking your private flight with Airbus is designed to be effortless. In just a few steps, your luxury journey is ready.
          </p>

          <div className="howToBookSteps">
            {steps.map((step, index) => (
              <div key={index} className="howToBookStep">
                <div className="howToBookStepNumberContainer">
                  <div className="howToBookStepNumber">{step.number}</div>
                  {index < steps.length - 1 && <div className="howToBookStepLine"></div>}
                </div>
                <div className="howToBookStepContent">
                  <h3 className="howToBookStepTitle">{step.title}</h3>
                  <p className="howToBookStepDescription">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="buttonPrimary">START BOOKING</button>
        </div>
      </div>
    </section>
  );
}

