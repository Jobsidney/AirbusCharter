import Image from "next/image";

export default function ContactContent() {
  return (
    <section className="contactContentSection section-padding">
      <div className="contactContentGrid">
        <div className="contactContentLeft">
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
            <span className="tagBadgeText">CONTACT US</span>
          </div>

          <h2 className="contactContentTitle">
            CONNECT WITH OUR TEAM<br />
            ANYTIME YOU NEED
          </h2>

          <p className="contactContentDescription">
            Have questions or need assistance? Our team is ready to help you with the right solutions at any time.
          </p>

          <div className="contactInfoList">
            <div className="contactInfoItem">
              <div className="contactInfoIcon">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.21l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
              </div>
              <div className="contactInfoContent">
                <span className="contactInfoLabel">PHONE</span>
                <span className="contactInfoValue">+1 234 567 890</span>
              </div>
            </div>

            <div className="contactInfoDivider"></div>

            <div className="contactInfoItem">
              <div className="contactInfoIcon">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                </svg>
              </div>
              <div className="contactInfoContent">
                <span className="contactInfoLabel">WORKING HOURS</span>
                <span className="contactInfoValue">MON – SAT, 9:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="contactInfoDivider"></div>

            <div className="contactInfoItem">
              <div className="contactInfoIcon">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <div className="contactInfoContent">
                <span className="contactInfoLabel">EMAIL</span>
                <span className="contactInfoValue">SUPPORT@AIRBUS.COM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contactContentImage">
          <Image
            src="https://jetora.tokotema.xyz/wp-content/uploads/2025/09/image-35.jpg"
            alt="Flight Attendant"
            width={540}
            height={720}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

