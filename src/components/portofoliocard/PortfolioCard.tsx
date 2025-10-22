// src/pages/portofolio/PortfolioCard.tsx
import React from "react";
import s from "./PortfolioCard.module.scss";

export type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  excerpt?: string;
  category?: string;
  href?: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  title,
  excerpt,
  category,
  href,
}) => {
  const Inner = (
    <article className={s.card} aria-label={title}>
      <img src={imageSrc} alt="" className={s.bg} loading="lazy" />
      <div className={s.shade} />
      <div className={s.ribbonTop} aria-hidden />
      <div className={s.ribbonBottom} aria-hidden />

      <div className={s.body}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.meta}>
          {category && <span className={s.chip}>{category}</span>}
          {excerpt && <p className={s.excerpt}>{excerpt}</p>}
        </div>
      </div>
    </article>
  );

  return href ? (
    <a href={href} className={s.linkWrap}>
      {Inner}
    </a>
  ) : (
    <div className={s.linkWrap}>{Inner}</div>
  );
};

export default PortfolioCard;
