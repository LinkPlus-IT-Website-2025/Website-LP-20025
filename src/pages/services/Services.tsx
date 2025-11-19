import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.scss";
import ServiceFeatureCard from "../../components/servicecard/ServiceFeatureCard";
import TechScroller, { type TechItem } from "../../components/tech-scroller/TechScroller";

import serviceHero from "../../assets/images/service.webp";
import highendservice from "../../assets/images/highendservice.webp";
import dedicatedTeam from "../../assets/images/deticaatedteam.webp";
import itservice from "../../assets/images/pic4.jpg";

import javaLogo from "../../assets/images/devicon_java.svg";
import springLogo from "../../assets/images/logos_spring.svg";
import angularLogo from "../../assets/images/logos_angular.svg";
import reactLogo from "../../assets/images/devicon_react-wordmark.svg";
import jsLogo from "../../assets/images/skill-icons_javascript.svg";
import hibernateLogo from "../../assets/images/devicon_hibernate-wordmark.svg";
import phpLogo from "../../assets/images/material-icon-theme_php.svg";

import mongoLogo from "../../assets/images/logos_mongodb.svg";
import mysqlLogo from "../../assets/images/logos_mysql.svg";
import postgresLogo from "../../assets/images/devicon_postgresql-wordmark.svg";

import kotlinLogo from "../../assets/images/logos_kotlin.svg";
import androidLogo from "../../assets/images/logos_android.svg";
import swiftLogo from "../../assets/images/devicon_swift.svg";
import rnLogo from "../../assets/images/devicon_reactnative-wordmark.svg";

import seleniumLogo from "../../assets/images/skill-icons_selenium.svg";
import cypressLogo from "../../assets/images/logos_cypress.svg";
import gherkinLogo from "../../assets/images/skill-icons_gherkin-dark.svg";
import testcafeLogo from "../../assets/images/Group 34.svg";

import biChart from "../../assets/images/Group 31.svg";
import biReport from "../../assets/images/Group 31 (1).svg";

import pmLogo from "../../assets/images/Group 31 (5).svg";

import techIcon from "../../assets/icons/technologies (1).svg";
import dbIcon from "../../assets/icons/databases (1).svg";
import mobileIcon from "../../assets/icons/mobile (1).svg";
import qaIcon from "../../assets/icons/quality testing (2).svg";
import biIcon from "../../assets/icons/business intelligence (1).svg";
import pmIcon from "../../assets/icons/project management (1).svg";

const services = [
  {
    slug: "custom-software",
    image: highendservice,
    title: "High-End Custom Software Solutions",
    excerpt: "Custom-built, in-house solutions designed to match your vision and business needs.",
  },
  {
    slug: "dedicated-team",
    image: dedicatedTeam,
    title: "Dedicated Team Model",
    excerpt: "Building a team that fits your project, from a single expert to a complete unit.",
  },
  {
    slug: "it-support",
    image: itservice,
    title: "IT Support",
    excerpt: "1st and 2nd level IT support to ensure the seamless functioning of clients systems.",
  },
];

const techItems: TechItem[] = [
  { id: "java", name: "Java", logoSrc: javaLogo },
  { id: "spring", name: "Spring", logoSrc: springLogo },
  { id: "angular", name: "Angular", logoSrc: angularLogo },
  { id: "react", name: "React", logoSrc: reactLogo },
  { id: "js", name: "JavaScript", logoSrc: jsLogo },
  { id: "hibernate", name: "Hibernate", logoSrc: hibernateLogo },
  { id: "php", name: "PHP", logoSrc: phpLogo },
];

const dbItems: TechItem[] = [
  { id: "postgres", name: "PostgreSQL", logoSrc: postgresLogo },
  { id: "mysql", name: "MySQL", logoSrc: mysqlLogo },
  { id: "mongodb", name: "MongoDB", logoSrc: mongoLogo },
];

const mobileItems: TechItem[] = [
  { id: "kotlin", name: "Kotlin", logoSrc: kotlinLogo },
  { id: "android", name: "Android", logoSrc: androidLogo },
  { id: "swift", name: "Swift", logoSrc: swiftLogo },
  { id: "react-native", name: "React Native", logoSrc: rnLogo },
];

const qaItems: TechItem[] = [
  { id: "selenium", name: "Selenium", logoSrc: seleniumLogo },
  { id: "cypress", name: "Cypress", logoSrc: cypressLogo },
  { id: "gherkin", name: "Gherkin", logoSrc: gherkinLogo },
  { id: "testcafe", name: "TestCafe", logoSrc: testcafeLogo },
];

const biItems: TechItem[] = [
  { id: "data-analysis", name: "", logoSrc: biChart },
  { id: "reports", name: "", logoSrc: biReport },
];

const pmItems: TechItem[] = [{ id: "agile", name: "Agile & Scrum Methods", logoSrc: pmLogo }];

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className={styles.grid} style={{ gap: "60px" }}>
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              state={{ heroImg: s.image }}
              className={styles.cardLink}
              aria-label={s.title}
            >
              <ServiceFeatureCard imageSrc={s.image} title={s.title} excerpt={s.excerpt} showIcon />
            </Link>
          ))}
        </div>

        <section
          className={`${styles.stackSection} ${styles.stackIntroTight}`}
          aria-label="Technologies"
        >
          <h2 className={styles.stackTitle}>WHAT TECH STACK WE USE?</h2>
          <p className={styles.stackText}>
            In LinkPlus IT we have brought together the best engineers in the region.
            Our greatest asset is <strong>JAVA</strong>
          </p>
        </section>

        <section className={styles.stackSection} aria-label="Stacks">
          <div className={styles.scrollerGrid} style={{ gap: "60px" }}>
            <TechScroller title="Technologies" items={techItems} showNames={false} headerIconSrc={techIcon} />
            <TechScroller title="Databases" items={dbItems} showNames={false} headerIconSrc={dbIcon} />
            <TechScroller title="Mobile" items={mobileItems} showNames={false} headerIconSrc={mobileIcon} />
            <TechScroller title="Quality Assurance" items={qaItems} showNames={false} headerIconSrc={qaIcon} />
            <TechScroller title="Business Intelligence" items={biItems} showNames headerIconSrc={biIcon} />
            <TechScroller title="Project Management" items={pmItems} solo showNames={false} headerIconSrc={pmIcon} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
