// src/pages/services/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.scss";
import ServiceFeatureCard from "../../components/servicecard/ServiceFeatureCard";
// icons
import icTechnologies from "../../assets/icons/technologies.png";
import icDatabases from "../../assets/icons/databases.png";
import icMobile from "../../assets/icons/mobile.png";
import icQA from "../../assets/icons/quality testing.png";
import icBI from "../../assets/icons/business intelligence.png";
import icPM from "../../assets/icons/project management.png";

/* ===== local images (from your screenshot) ===== */
import serviceHero from "../../assets/images/service.jpg";
import highendservice from "../../assets/images/highendservice.jpg";
/* NOTE: if your file is actually named `deticatedteam.jpg`, adjust this import */
import dedicatedTeam from "../../assets/images/deticaatedteam.jpg";
import itservice from "../../assets/images/itservice.jpg";

/* map the three cards to local pics */
const pics = {
  one: highendservice,   // HIGH-END CUSTOM SOFTWARE SOLUTIONS
  two: dedicatedTeam,    // DEDICATED TEAM MODEL
  three: itservice,      // IT SUPPORT
};

const services = [
  {
    slug: "custom-software",
    image: pics.one,
    title: "High-End Custom Software Solutions",
    excerpt:
      "Custom-built, in-house solutions designed to match your vision and business needs.",
  },
  {
    slug: "dedicated-team",
    image: pics.two,
    title: "Dedicated Team Model",
    excerpt:
      "Building a team that fits your project, from a single expert to a complete unit.",
  },
  {
    slug: "it-support",
    image: pics.three,
    title: "IT Support",
    excerpt:
      "1st and 2nd level IT support to ensure the seamless functioning of clients systems.",
  },
];

const steps = [
  {
    title: "Assessment & Setup",
    sub: "Understand your systems and set up support workflows.",
    time: "~ 1–2 Weeks",
    icon: (
      <svg viewBox="0 0 48 48" className={styles.stepIcon}>
        <path fill="#e10600" d="M8 10a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V10z" />
        <rect x="6" y="30" width="36" height="3" rx="1.5" fill="#e10600" />
        <rect x="18" y="34" width="12" height="3.5" rx="1.75" fill="#e10600" />
        <path fill="#fff" d="M24 16a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 3.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" />
      </svg>
    ),
  },
  {
    title: "Monitoring & Maintenance",
    sub: "Prevent issues with continuous monitoring.",
    time: "~ 2–3 Weeks",
    icon: (
      <svg viewBox="0 0 48 48" className={styles.stepIcon}>
        <rect x="5" y="8" width="38" height="24" rx="3.5" fill="#e10600" />
        <path d="M9 20h6l3-6 5 14 4-8h12" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        <rect x="16" y="34" width="16" height="3.5" rx="1.75" fill="#e10600" />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    sub: "Quick resolution of technical problems.",
    time: "Within hours",
    icon: (
      <svg viewBox="0 0 48 48" className={styles.stepIcon}>
        <path fill="#e10600" d="M24 6 3.5 42a2.5 2.5 0 0 0 2.2 3.8h36.6a2.5 2.5 0 0 0 2.2-3.8L24 6z" />
        <rect x="22.5" y="18" width="3" height="11" rx="1.5" fill="#fff" />
        <rect x="22.5" y="31.5" width="3" height="3" rx="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    sub: "Updates, patches, and performance tuning.",
    time: "Ongoing",
    icon: (
      <svg viewBox="0 0 48 48" className={styles.stepIcon}>
        <rect x="6" y="14" width="36" height="22" rx="2.5" fill="none" stroke="#e10600" strokeWidth="4" />
        <circle cx="18" cy="22" r="5" fill="none" stroke="#e10600" strokeWidth="4" />
        <path d="M13 32c2.5-3 7.5-3 10 0" fill="none" stroke="#e10600" strokeWidth="4" strokeLinecap="round" />
        <path d="M28 25h10m0 0-4-4m4 4-4 4" fill="none" stroke="#e10600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <div>
      {/* ===== HERO with local background ===== */}
      <section
        className={styles.hero}
        aria-label="Services hero"
        style={{
          backgroundImage: `linear-gradient(rgba(128,19,23,0.08), rgba(128,19,23,0.08)), url(${serviceHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.heroShade} />
        <div className={styles.heroDecor} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href="#">Home</a>
            <span className={styles.bcSep}>/</span>
            <span>Services</span>
          </div>
          <h1 className={styles.heroTitle}>Services</h1>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <main className={styles.wrap}>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              state={{ heroImg: s.image }}   // ✅ pass image to detail page
              className={styles.cardLink}
              aria-label={s.title}
            >
              <ServiceFeatureCard
                imageSrc={s.image}
                title={s.title}
                excerpt={s.excerpt}
                showIcon={true}
              />
            </Link>
          ))}
        </div>

        {/* ===== WHAT WE USE (Accordion) ===== */}
        <section className={styles.stackSection} aria-label="Tech stack">
          <h2 className={styles.stackTitle}>WHAT TECH STACK WE USE?</h2>
          <p className={styles.stackText}>
            In LinkPlus IT we have brought together the best engineers in the
            region. Our greatest asset is <strong>JAVA</strong>
          </p>

          <div className={styles.accordion}>
            {/* your details blocks unchanged */}
            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icTechnologies} alt="Technologies icon" />
                <span className={styles.rowTitle}>TECHNOLOGIES</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div>
                  <p>JAVA EE Spring</p>
                  <p>Hibernate</p>
                </div>
                <div>
                  <p>.NET stack</p>
                  <p>PHP</p>
                </div>
                <div>
                  <p>JAVASCRIPT</p>
                  <p>Angular</p>
                  <p>React.JS</p>
                </div>
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icDatabases} alt="Databases icon" />
                <span className={styles.rowTitle}>DATABASES</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div>
                  <p>MYSQL</p>
                  <p>PostgreSQL</p>
                </div>
                <div>
                  <p>MongoDB</p>
                </div>
                <div />
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icMobile} alt="Mobile icon" />
                <span className={styles.rowTitle}>MOBILE</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div>
                  <p>React Native</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Kotlin</p>
                  <p>Swift</p>
                </div>
                <div />
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icQA} alt="Quality testing icon" />
                <span className={styles.rowTitle}>QUALITY ASSURANCE</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div><p>Selenium &amp; Gherkin</p></div>
                <div><p>Manual testing</p></div>
                <div><p>Cypress</p></div>
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icBI} alt="Business intelligence icon" />
                <span className={styles.rowTitle}>BUSINESS INTELLIGENCE</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div><p>Data Analysis</p></div>
                <div><p>Report building</p></div>
                <div />
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icPM} alt="Project management icon" />
                <span className={styles.rowTitle}>PROJECT MANAGEMENT</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div><p>Agile &amp; Scrum Methodologies</p></div>
                <div />
                <div />
              </div>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
