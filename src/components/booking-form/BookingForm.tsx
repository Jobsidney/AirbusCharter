export default function BookingForm() {
  return (
    <section className="bookingFormSection section-padding ">
      <div className="bookingFormContent">
        <div className="bookingFormHeader">
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
              BOOK YOUR FLIGHT
            </span>
          </div>

          <h2 className="h2Uppercase">
            Exclusive Flights Tailored To Your Lifestyle
          </h2>

          <p className="bookingFormDescription">
            Experience effortless booking designed for ultimate convenience. Choose your destination, select your schedule, and let Airbus handle the rest.
          </p>
        </div>

        <form className="bookingForm bg-gradient">
          <div className="bookingFormRow">
            <div className="bookingFormField">
              <label className="bookingFormLabel">FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bookingFormInput"
              />
            </div>

            <div className="bookingFormField">
              <label className="bookingFormLabel">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bookingFormInput"
              />
            </div>

            <div className="bookingFormField">
              <label className="bookingFormLabel">PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="bookingFormInput"
              />
            </div>
          </div>

          <div className="bookingFormRow">
            <div className="bookingFormField">
              <label className="bookingFormLabel">PASSENGERS</label>
              <input
                type="number"
                placeholder="Number of passengers"
                className="bookingFormInput"
              />
            </div>

            <div className="bookingFormField">
              <label className="bookingFormLabel">DEPARTURE CITY</label>
              <input
                type="text"
                placeholder="Enter departure city"
                className="bookingFormInput"
              />
            </div>

            <div className="bookingFormField">
              <label className="bookingFormLabel">DESTINATION CITY</label>
              <input
                type="text"
                placeholder="Enter destination city"
                className="bookingFormInput"
              />
            </div>
          </div>

          <div className="bookingFormRow">
            <div className="bookingFormField">
              <label className="bookingFormLabel">DEPARTURE DATE</label>
              <input
                type="date"
                placeholder="Select departure date"
                className="bookingFormInput"
              />
            </div>

            <div className="bookingFormField bookingFormFieldFull">
              <label className="bookingFormLabel">SPECIAL REQUESTS</label>
              <textarea
                placeholder="Enter additional details"
                className="bookingFormTextarea"
                rows={4}
              />
            </div>
          </div>

          <button type="submit" className="bookingFormButton">
            BOOK NOW
          </button>
        </form>
      </div>
    </section>
  );
}

