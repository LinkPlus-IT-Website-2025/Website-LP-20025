// src/pages/aboutus/AboutUs.tsx
import React, { useState, useEffect, useRef } from "react";
import { Check, ArrowUp } from "lucide-react";
import styles from "./AboutUs.module.scss";
import { Link } from "react-router-dom";
/* ===== Local assets ===== */
import deboraMeta from "../../assets/images/debora-meta.jpeg";
import ermalSadiku from "../../assets/images/ermal-sadiku.png";
import ilirianaIbraj from "../../assets/images/iliriana-ibraj.png";
import leonaTahiri from "../../assets/images/leona-tahiri.jpg";
import zimrieIdrizi from "../../assets/images/zimrie-idrizi.jpg";
import aleksandarIlioski from "../../assets/images/aleksandar-ilioski.jpg";

import icExperience from "../../assets/icons/experience.png";
import icProfessionals from "../../assets/icons/proffessionals.png";
import icProjects from "../../assets/icons/projects.png";
import icIndustries from "../../assets/icons/projects (1).png"; // “Industries”
import icClients from "../../assets/icons/clients.png";
import bdoLogo from "../../assets/images/BDO.png";
import conplementLogo from "../../assets/images/conplement.png"; // if your file is spelled "conplement.png", use that
import whatdigitalLogo from "../../assets/images/whatdigital.png";
import teamMeeting from "../../assets/images/teammeeting.jpg";
import aboutushero from "../../assets/images/aboutushero.jpg";
import teamDiscussion from "../../assets/images/teamdiscussion.jpg";

/* ===== Optional step images (kept) ===== */
const stepImgs = {
  one: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
  two: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
  three: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
};

const steps = [
  { n: "01", title: "Understanding Your Story", text: "We listen to the story and objectives of your brand, and conduct analysis to plan for successful partnering.", img: stepImgs.one },
  { n: "02", title: "Tailoring Software Solutions", text: "We identify your software needs and quickly develop enhancements to provide you with improvements in e-commerce and digital marketing.", img: stepImgs.two },
  { n: "03", title: "Provide Ongoing Support", text: "Our team of experts provides ongoing technical and marketing support to help you maximize customer engagement and sales.", img: stepImgs.three },
];

/* ===== Team ===== */
const teamMembers = [
  { image: ermalSadiku, name: 'Ermal Sadiku', position: 'Managing Partner' },
   { name: 'Lulzim Ibrahimi', position: 'Managing partner' },
  { image: ilirianaIbraj, name: 'Iliriana Ibraj', position: 'Chief Business Development Officer' },
  { image: aleksandarIlioski, name: 'Aleksandar Ilioski', position: 'Country Manager' },
  { image: leonaTahiri, name: 'Leona Tahiri', position: 'Business Development Representative' },
  { image: deboraMeta, name: 'Debora Meta', position: 'Human Resources Manager' },
  { image: zimrieIdrizi, name: 'Zimrie Idrizi', position: 'IT Recruiter & Product Lead' },
];

/* ===== Testimonials (logo-based) used by your new section ===== */
const testimonialsLogos = [
  {
    logo: bdoLogo,
    quote:
      "We have found that what you can achieve with LinkPlus, with very little effort, is astounding.",
    company: "BDO Lixar",
    country: "Canada",
  },
  {
    logo: conplementLogo,
    quote:
      "Ambition and skills are two traits we believe LinkPlus has proven to Conplement AG, time and time again.",
    company: "Conplement AG",
    country: "Germany",
  },
  {
    logo: whatdigitalLogo,
    quote:
      "LinkPlus raised our engineering bar—clear comms, reliable delivery, and measurable impact across multiple teams.",
    company: "WhatDigital",
    country: "UK",
  },
];

/* ===== Icons for contact list ===== */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="none" stroke="currentColor" strokeWidth="1.6"
    />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6"
      fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
    />
  </svg>
);

/* ===== FAQ kept (unused here, but left intact) ===== */
// const faqItems = [
//   { question: "What services do you offer?", answer: "We provide IT consulting, software development, managed IT services, and cloud/security solutions tailored to your business." },
//   { question: "How quickly can we start a project?", answer: "Most discovery phases start within 1–2 weeks. Implementation timelines depend on scope and team availability." },
//   { question: "Do you offer support and maintenance?", answer: "Yes. We provide SLAs and ongoing support plans for bug fixes, enhancements, and infrastructure upkeep." },
// ];

const AboutUs: React.FC = () => {
  /* hero parallax + back-to-top */
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setShowBackToTop(y > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* progress bars animation trigger */
  const [progressAnimated, setProgressAnimated] = useState(false);
  const progressSectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = progressSectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* testimonials (logo slider) index for your new block */
  const [tIdx, setTIdx] = useState(0);

  /* contact form state/handlers (mailto) */
  type ContactForm = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };

  const [contactData, setContactData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const onContactChange =
    (k: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setContactData((d) => ({ ...d, [k]: e.target.value }));

  const isContactValid =
    contactData.firstName &&
    contactData.lastName &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email) &&
    contactData.phone &&
    contactData.service;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isContactValid) return;

    const subject = `New contact form: ${contactData.firstName} ${contactData.lastName}`;
    const body = encodeURIComponent(
      [
        `Name: ${contactData.firstName} ${contactData.lastName}`,
        `Email: ${contactData.email}`,
        `Phone: ${contactData.phone}`,
        `Service: ${contactData.service}`,
        "",
        "Message:",
        contactData.message || "(no message)",
      ].join("\n")
    );

    window.location.href = `mailto:info@linkplus.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <>
      {/* ===== HERO ===== */}
     <section className={styles.hero} aria-label="About Us hero">
  <div
    className={styles.heroBackground}
    style={{
      transform: `translateY(${scrollY * 0.5}px)`,
      backgroundImage: `linear-gradient(rgba(183,28,28,0.5), rgba(183,28,28,0.5)), url(${aboutushero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      willChange: "transform",
    }}
  />
  {/* keep this if your CSS expects it; it can be transparent */}
  <div className={styles.heroOverlay} />

  <div className={styles.heroContent}>
    <div className={styles.heroContainer}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className={styles.bcSep}>/</span>
        <span>About Us</span>
      </nav>

      <h1 className={styles.heroTitle}>About Us</h1>
      {/* <p className={styles.heroSubtitle}>
        Discover our journey and commitment to excellence
      </p> */}
    </div>
  </div>
</section>

      {/* ===== MAIN ABOUT BLOCK ===== */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeText}>WHO WE ARE</span>
              </div>

              <h2 className={styles.mainTitle}>Built to Scale, Designed to Work</h2>

              <p className={styles.description}>
                With over 12 years of experience, we design and deliver IT solutions that adapt, scale, and evolve with your business.
              </p>

              <div className={styles.servicesList}>
                {[
                  "Application Development",
                  "Managed IT Services",
                  "IT Support Services",
                  "Maintenance & Support",
                ].map((service, i) => (
                  <div key={i} className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>
                      <Check size={16} />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <p className={styles.additionalText}>
                We focus on technology that fits your workflow, supports your team, and keeps your operations running smoothly.
              </p>

            <div className={styles.ctaSection}>
  <Link to="/portofolio" className={styles.ctaButton} role="link" aria-label="More about us">
    <span>MORE ABOUT US</span>
    <span className={styles.ctaArrow}>→</span>
  </Link>
</div>

            </div>

            <div className={styles.imageContent}>
              <div className={styles.imageWrapper}>
                <div className={styles.primaryImage} style={{ backgroundImage: `url(${teamMeeting})` }} />
                <div className={styles.secondaryImage} style={{ backgroundImage: `url(${teamDiscussion})` }} />

                <div className={styles.decorativePattern}>
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className={styles.patternDot} />
                  ))}
                </div>
                <div className={styles.decorativeLines}>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className={styles.line} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE BRING ===== */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsBanner}>
            <div className={styles.statsLeft}>
              <div className={styles.statsBadge}>
                <span className={styles.statsDot} /> WHO WE BRING
              </div>
              <h2 className={styles.statsTitle}>
                Over the years, LinkPlus IT has built a reputation for delivering reliable software solutions across industries and continents
              </h2>
              <div className={styles.statsShape} aria-hidden />
            </div>

            <div className={styles.statsRight}>
              <div className={styles.kpiGrid}>
                <article className={styles.kpi}>
                  <img src={icExperience} alt="Experience" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>12+</div>
                    <div className={styles.kpiLabel}>Years Of Experience</div>
                  </div>
                </article>

                <article className={styles.kpi}>
                  <img src={icProfessionals} alt="Professionals" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>60+</div>
                    <div className={styles.kpiLabel}>Professionals</div>
                  </div>
                </article>

                <article className={styles.kpi}>
                  <img src={icProjects} alt="Projects" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>250+</div>
                    <div className={styles.kpiLabel}>Projects</div>
                  </div>
                </article>

                <article className={styles.kpi}>
                  <img src={icClients} alt="Clients" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>100+</div>
                    <div className={styles.kpiLabel}>Clients</div>
                  </div>
                </article>

                 <article className={styles.kpi}>
                  <img src={icIndustries} alt="Industries" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>5+</div>
                    <div className={styles.kpiLabel}>Industries</div>
                  </div>
                </article>
                 <article className={styles.kpi}>
                  <img src={icIndustries} alt="Industries" className={styles.kpiIconImg} />
                  <div>
                    <div className={styles.kpiNumber}>98%</div>
                    <div className={styles.kpiLabel}>Client Satisfaction</div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== % PROGRESS BARS ===== */}
      <section className={styles.techIndex} aria-label="Technology Index">
        <div className={styles.techLeft}>
          <span className={styles.techBadge}>
            <span className={styles.techBadgeDot} />
            PROJECT INDEX
          </span>

          <h2 className={styles.techTitle}>
           Since 2013 with more than 60 people, we have been oriented to delivering 
           services abroad, creating new jobs, and engaging with world-class companies.  </h2> <br /> 
           <h4 className={styles.techTitlee}>
           We use the latest and greatest technologies that enable businesses to reach out 
           to their customers in all mediums, regardless of the platform they use. </h4>
{/* 
          <div className={styles.techBullets}>
            <div className={styles.techBullet}>
              <span className={styles.techTick}><Check size={14} /></span>
              <span>Application Development</span>
            </div>
            <div className={styles.techBullet}>
              <span className={styles.techTick}><Check size={14} /></span>
              <span>IT Support Services</span>
            </div>
            <div className={styles.techBullet}>
              <span className={styles.techTick}><Check size={14} /></span>
              <span>Managed IT Services</span>
            </div>
            <div className={styles.techBullet}>
              <span className={styles.techTick}><Check size={14} /></span>
              <span>Maintenance And Support</span>
            </div>
          </div> */}

          {/* <p className={styles.techDesc}>
            With over 12 years of experience, we design and deliver IT solutions that adapt, scale, and evolve with your business.
            We focus on technology that fits your workflow, supports your team, and keeps your operations running smoothly.
          </p> */}
        </div>

        <div className={styles.techRight} ref={progressSectionRef}>
          <div className={styles.meter}>
            <label>Certified Standards</label>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} style={{ width: progressAnimated ? "95%" : "0%" }}>
                <span className={styles.meterTag}>95%</span>
              </div>
            </div>
          </div>

          <div className={styles.meter}>
            <label>Qualified Team</label>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} style={{ width: progressAnimated ? "93%" : "0%" }}>
                <span className={styles.meterTag}>80%</span>
              </div>
            </div>
          </div>

          <div className={styles.meter}>
            <label>Long-Term Partnerships</label>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} style={{ width: progressAnimated ? "90%" : "0%" }}>
                <span className={styles.meterTag}>90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
    <div className={styles.teamSection}>
  <p className={styles.teamLabel}>MEET OUR TEAM</p>
  <h2 className={styles.teamHeading}>Our Leadership</h2>

  <div className={styles.teamSlider}>
    <div className={styles.teamSlides}>
      {teamMembers.map((member, index) => {
        const missing = !member.image;
        return (
          <div key={`original-${index}`} className={styles.teamCard}>
            {missing ? (
              // Red placeholder "photo" (no text)
              <div
                className={styles.teamMember}
                aria-label={`${member.name} (no photo)`}
                style={{ background: '#b71c1c' }}
              />
            ) : (
              <img
                src={member.image as string}
                alt={member.name}
                className={styles.teamMember}
                loading="lazy"
                decoding="async"
              />
            )}

            <p className={styles.teamName}>{member.name}</p>
            <p className={styles.teamPosition}>{member.position}</p>
          </div>
        );
      })}

      {/* duplicate set for seamless slider */}
      {teamMembers.map((member, index) => {
        const missing = !member.image;
        return (
          <div key={`duplicate-${index}`} className={styles.teamCard}>
            {missing ? (
              <div
                className={styles.teamMember}
                aria-label={`${member.name} (no photo)`}
                style={{ background: '#b71c1c' }}
              />
            ) : (
              <img
                src={member.image as string}
                alt={member.name}
                className={styles.teamMember}
                loading="lazy"
                decoding="async"
              />
            )}

            <p className={styles.teamName}>{member.name}</p>
            <p className={styles.teamPosition}>{member.position}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

      {/* ===== YOUR NEW TESTIMONIALS BLOCK ===== */}
      <section className={styles.testimonialSection} aria-label="What clients say">
        <div className={styles.tWrap}>
          <div className={styles.tInner}>
            <p className={styles.tLabel}>WHAT CLIENTS SAY</p>
            <h2 className={styles.tHeading}>Testimonials That Inspire Trust</h2>

            <div className={styles.tStars} aria-hidden>★★★★★</div>

            <p className={styles.tQuote}>{testimonialsLogos[tIdx].quote}</p>

            <div className={styles.tAuthor}>
              <span className={styles.tAvatar}>
                <img
                  src={testimonialsLogos[tIdx].logo}
                  alt={`${testimonialsLogos[tIdx].company} logo`}
                  loading="lazy"
                />
              </span>
              <div>
                <div className={styles.tName}>{testimonialsLogos[tIdx].company}</div>
                <div className={styles.tRole}>{testimonialsLogos[tIdx].country}</div>
              </div>
            </div>

            <div className={styles.tDots} role="tablist" aria-label="Testimonials">
              {testimonialsLogos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === tIdx}
                  className={`${styles.tDot} ${i === tIdx ? styles.tDotActive : ""}`}
                  onClick={() => setTIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className={styles.contactShell} aria-label="Contact form">
        <div className={styles.contactGrid}>
          {/* LEFT */}
          <div className={styles.cLeft}>
            <span className={styles.cEyebrow}>
              <span className={styles.cDot} /> OUR CONTACTS
            </span>
            <h2 className={styles.cHeading}>Reach Out</h2>

            <ul className={styles.cList}>
              <li className={styles.cRow}>
                <span className={styles.cIcon}><PinIcon /></span>
                <div className={styles.cTexts}>
                  <p className={styles.cLabel}>Location</p>
                  <p className={styles.cValue}>
                    Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo
                  </p>
                </div>
              </li>

              <li className={styles.cRow}>
                <span className={styles.cIcon}><MailIcon /></span>
                <div className={styles.cTexts}>
                  <p className={styles.cLabel}>Email</p>
                  <p className={styles.cValue}>office@linkplus-it.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className={styles.cRight}>
            <div className={styles.cCard} aria-labelledby="cFormTitle">
              <h3 id="cFormTitle" className={styles.cTitle}>Got a Project in Mind?</h3>

              <form className={styles.cForm} onSubmit={handleContactSubmit}>
                <div className={styles.cGrid2}>
                  <input className={styles.cInput} placeholder="First Name*" value={contactData.firstName} onChange={onContactChange("firstName")} required />
                  <input className={styles.cInput} placeholder="Last Name*" value={contactData.lastName} onChange={onContactChange("lastName")} required />
                </div>

                <div className={styles.cGrid2}>
                  <input className={styles.cInput} placeholder="Phone Number*" type="tel" value={contactData.phone} onChange={onContactChange("phone")} required />
                  <input className={styles.cInput} placeholder="Your email*" type="email" value={contactData.email} onChange={onContactChange("email")} required />
                </div>

                <select className={styles.cInput} value={contactData.service} onChange={onContactChange("service")} required aria-label="Select service">
                  <option value="" disabled>Select Service*</option>
                  <option value="HIGH-END CUSTOM SOFTWARE SOLUTIONS">HIGH-END CUSTOM SOFTWARE SOLUTIONS</option>
                  <option value="DEDICATED TEAM MODEL">DEDICATED TEAM MODEL</option>
                  <option value="IT SUPPORT">IT SUPPORT</option>
                </select>

                <textarea
                  className={`${styles.cInput} ${styles.cTextarea}`}
                  placeholder="How Can We Assist Your Aesthetic Needs..."
                  rows={5}
                  value={contactData.message}
                  onChange={onContactChange("message")}
                />

                {!isContactValid && (
                  <div className={styles.cError}>Please fill all required fields with a valid email.</div>
                )}

                <button type="submit" className={`${styles.cSubmit} ${!isContactValid ? styles.cDisabled : ""}`} disabled={!isContactValid}>
                  <span>SEND VIA EMAIL</span>
                  <span className={styles.cSubmitArrow} aria-hidden>↗</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className={styles.ctaBand} aria-label="Get in touch">
        <div className={styles.ctaBg} />
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready to gain competitive advantage by harnessing <br />
            data and modernising your technology?
          </h2>

          <a href="/contactus" className={styles.ctaButton}>GET IN TOUCH ↗</a>
        </div>
      </section>

      {/* back to top */}
      <button
        onClick={scrollToTop}
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default AboutUs;
