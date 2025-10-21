// src/pages/career/Career.tsx
import React from "react";
import styles from "./Career.module.scss";

/* ✅ local hero image */
import careerHero from "../../assets/images/career.jpg";

const perks = [
  {
    title: "COMPETITIVE\nSALARIES",
    body:
      "We are one of the only companies that pays the highest salaries in the region",
  },
  {
    title: "GREAT\nOPPORTUNITIES",
    body:
      "Tremendous potential for growth. We are always looking for leaders. So prove yourself.",
  },
  {
    title: "YOU MAKE\nTHE HOURS",
    body:
      "Work when you want. Set your own schedule and breaks during the day.",
  },
  {
    title: "WORK\nREMOTELY",
    body:
      "You can work from anywhere remotely (given that you are online… of course!).",
  },
];

const Career: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* ===== FULL-WIDTH HERO ===== */}
      <section className={styles.hero} aria-label="Careers hero">
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: `linear-gradient(rgba(128,19,23,0.08), rgba(128,19,23,0.08)), url(${careerHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroDecor} aria-hidden />
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span className={styles.bcSep}>/</span>
            <span>Careers</span>
          </div>
          <h1 className={styles.heroTitle}>Careers</h1>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <main className={styles.container}>
        {/* Intro block */}
        <section className={styles.intro}>
          <h2 className={styles.h1}>Working at Link Plus I.T.</h2>
          <p className={styles.lead}>
            We want people to thrive at Link Plus; we believe you do your best
            work when you feel your best. Here are just a few of the benefits
            we’re proud to provide our team.
          </p>
        </section>

        {/* Perks 2-column grid */}
        <section className={styles.grid} aria-label="Benefits and perks">
          {perks.map((perk, i) => (
            <article className={styles.card} key={i}>
              <h3 className={styles.h3}>
                {perk.title.split("\n").map((line, k) => (
                  <span key={k} className={styles.h3Line}>
                    {line}
                  </span>
                ))}
              </h3>
              <p className={styles.body}>{perk.body}</p>
            </article>
          ))}
        </section>

        {/* Opportunities big center block */}
        <section className={styles.opps} aria-label="Career opportunities">
          <h2 className={styles.h2}>
            Current Career
            <br />
            Opportunities
          </h2>
          <p className={styles.tagline}>
            We are looking for dynamic and dedicated people
          </p>

          <a
            className={styles.cta}
            href="https://hrbee.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
<span
  style={{
    backgroundColor: '#99171C',
    color: '#fff',
    padding: '8px 14px',
    borderRadius: '999px',
    fontWeight: 700,
  }}
>
  Go to all careers
</span>
            <svg
              className={styles.ctaIcon}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                d="M7 17 17 7M9 7h8v8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Career;
