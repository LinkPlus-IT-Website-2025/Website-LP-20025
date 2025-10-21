import React from "react";
import styles from "./ServiceFeatureCard.module.scss";

export type ServiceCardProps = {
  imageSrc: string;
  title: string;
  excerpt: string;
  category?: string;
  showIcon?: boolean;
  /** Choose how big the card should be */
  size?: "md" | "lg" | "xl";
};

const ServiceFeatureCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  excerpt,
  category,
  showIcon = true,
  size = "lg", // default bigger than before
}) => {
  return (
    <article
      className={[
        styles.svcCard,
        size === "lg" ? styles.lg : "",
        size === "xl" ? styles.xl : "",
      ].join(" ")}
    >
      <img className={styles.svcImage} src={imageSrc} alt={title} loading="lazy" />

      <div className={styles.svcPanel}>
        <div className={styles.svcHeader}>
          {showIcon && <span className={styles.svcBadge} />}
          <div className={styles.svcHeading}>
            {category && <p className={styles.svcCategory}>{category}</p>}
            <h3 className={styles.svcTitle}>{title}</h3>
          </div>
        </div>
        <p className={styles.svcExcerpt}>{excerpt}</p>
      </div>
    </article>
  );
};

export default ServiceFeatureCard;
