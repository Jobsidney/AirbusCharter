import styles from "../../app/page.module.css";

export default function CTA() {
  return (
    <section className="ctaSection section-padding bg-gradient">
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>STAY IN TOUCH</h2>
        <p className={styles.ctaDescription}>
          Facilisis in sagittis cras a dignissim morbi feugiat. Ridiculus facilisis pellentesque dapibus erat at. Massa viverra tortor adipiscing arcu ac vivamus. Pharetra etiam eget pellentesque nisi.
        </p>
      </div>
      <div className={styles.ctaForm}>
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className={styles.ctaInput}
        />
        <button className={styles.ctaButton}>
          BOOK A FLIGHT
        </button>
      </div>
    </section>
  );
}

