// src/pages/services/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.scss";
import ServiceFeatureCard from "../../components/servicecard/ServiceFeatureCard";
import icTechnologies from "../../assets/icons/technologies.svg";
import icDatabases from "../../assets/icons/databases.svg";
import icMobile from "../../assets/icons/mobile.svg";
import icQA from "../../assets/icons/quality testing.svg";
import icBI from "../../assets/icons/business intelligence.svg";
import icPM from "../../assets/icons/project management.svg";
import serviceHero from "../../assets/images/service.jpg";
import highendservice from "../../assets/images/highendservice.jpg";
import dedicatedTeam from "../../assets/images/deticaatedteam.jpg";
import itservice from "../../assets/images/pic4.jpg";

const pics = {
  one: highendservice,
  two: dedicatedTeam,
  three: itservice,
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

const Services: React.FC = () => {
  return (
    <div>
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

      <main className={styles.wrap}>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              state={{ heroImg: s.image }}
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

        <section className={styles.stackSection} aria-label="Tech stack">
          <h2 className={styles.stackTitle}>WHAT TECH STACK WE USE?</h2>
          <p className={styles.stackText}>
            In LinkPlus IT we have brought together the best engineers in the
            region. Our greatest asset is <strong>JAVA</strong>
          </p>

          <div className={styles.accordion}>
            <details>
              <summary className={styles.row}>
                <img
                  className={styles.iconImg}
                  src={icTechnologies}
                  alt="Technologies icon"
                />
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
                <img
                  className={styles.iconImg}
                  src={icDatabases}
                  alt="Databases icon"
                />
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
                <div>
                  <p>Selenium &amp; Gherkin</p>
                </div>
                <div>
                  <p>Manual testing</p>
                </div>
                <div>
                  <p>Cypress</p>
                </div>
              </div>
            </details>

            <details>
              <summary className={styles.row}>
                <img className={styles.iconImg} src={icBI} alt="Business intelligence icon" />
                <span className={styles.rowTitle}>BUSINESS INTELLIGENCE</span>
                <span className={styles.toggle} aria-hidden />
              </summary>
              <div className={styles.content}>
                <div>
                  <p>Data Analysis</p>
                </div>
                <div>
                  <p>Report building</p>
                </div>
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
                <div>
                  <p>Agile &amp; Scrum Methodologies</p>
                </div>
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
