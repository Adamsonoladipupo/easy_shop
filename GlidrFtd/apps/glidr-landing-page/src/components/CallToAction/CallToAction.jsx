import { CartIllustration } from "../../assets/illustrations";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.card}>
        {/* Copy */}
        <div className={styles.copy}>
          <h2 id="cta-heading" className={styles.heading}>
            Shop your product with ease
          </h2>
          <p className={styles.body}>
            Get ₦300 off your first order when you use this promo code!
          </p>
          <a href="#" className={styles.cta}>Shop Now!</a>
        </div>

        {/* Illustration */}
        <div className={styles.illustration} aria-hidden="true">
          <CartIllustration className={styles.illustrationSvg} />
        </div>
      </div>
    </section>
  );
}
