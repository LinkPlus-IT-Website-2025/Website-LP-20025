import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Portofolio.module.scss";
import PortfolioCard from "../../components/portofoliocard/PortfolioCard";
import { PORTFOLIO } from "./portfolioItems";

import portfolioHero from "../../assets/images/portofolio.webp";


const TEN_ITEMS = Array.from({ length: 10 }, (_, i) => {
  const base = PORTFOLIO[i % PORTFOLIO.length];
  return { ...base, __key: `ten-${i}-${base.id}` };
});

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Portfolio hero">
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: `linear-gradient(rgba(128,19,23,0.08), rgba(128,19,23,0.08)), url(${portfolioHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroDecor} aria-hidden />
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="#">Home</a>
            <span className={styles.bcSep}>/</span>
            <span>Portfolio</span>
          </div>
          <h1 className={styles.heroTitle}>Portfolio</h1>
        </div>
      </section>

      <main className={styles.container}>
         <div className={styles.gridHeader}>
    <h2 className={styles.gridTitle}>Some of Our Key Projects</h2>
  </div>
        <div className={styles.grid}>
          {TEN_ITEMS.map((p) => (
            <Link
              key={p.__key}
              to={`/portofolicards/${p.id}`}
              className={styles.cardLink}
            >
              <PortfolioCard
                imageSrc={p.cardImg ?? p.heroImg}
                title={p.title}
                excerpt={p.excerpt}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
