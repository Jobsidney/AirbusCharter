export default function CTA() {
  return (
    <section className="ctaSection section-padding bg-gradient">
      <div className="ctaContent">
        <h2 className="ctaHeading">STAY IN TOUCH</h2>
        <p className="ctaDescription">
          Facilisis in sagittis cras a dignissim morbi feugiat. Ridiculus facilisis pellentesque dapibus erat at. Massa viverra tortor adipiscing arcu ac vivamus. Pharetra etiam eget pellentesque nisi.
        </p>
      </div>
      <div className="ctaForm">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="ctaInput"
        />
        <button className="ctaButton">
          BOOK A FLIGHT
        </button>
      </div>
    </section>
  );
}

