import React from "react";
import s from "./PortfolioCard.module.scss";

export type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  /** short line under title (optional, shows on hover) */
  excerpt?: string;
  /** small label/chip e.g. “Web”, “Mobile”, “Branding” */
  category?: string;
  /** If you want to wrap as a link outside, keep this false */
  href?: string;
  /** Optional: replace the default icon (emoji/SVG) */
  icon?: React.ReactNode;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  title,
  excerpt,
  category,
  href,
  icon,
}) => {
  const Inner = (
    <article className={s.card} aria-label={title}>
      {/* BG image */}
      <img src={imageSrc} alt="" className={s.bg} loading="lazy" />

      {/* gradient shade for readability */}
      <div className={s.shade} />

      {/* corner ribbons (appear on hover) */}
      <div className={s.ribbonTop} aria-hidden />
      <div className={s.ribbonBottom} aria-hidden />

      {/* content */}
      <div className={s.body}>
        <div className={s.badge} aria-hidden>
          {icon ?? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M12 2v2.2M12 19.8V22M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M2 12h2.2M19.8 12H22M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </div>

        <h3 className={s.title}>{title}</h3>

        <div className={s.meta}>
          {category && <span className={s.chip}>{category}</span>}
          {excerpt && <p className={s.excerpt}>{excerpt}</p>}
        </div>
      </div>
    </article>
  );

  return href ? (
    <a href={href} className={s.linkWrap}>{Inner}</a>
  ) : (
    <div className={s.linkWrap}>{Inner}</div>
  );
};

export default PortfolioCard;
