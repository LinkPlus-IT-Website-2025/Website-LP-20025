import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import itServicesBg from '../../assets/images/intro-pattern-light.svg';
import teamImage from '../../assets/images/team.jpg';
import headerBg from '../../assets/images/header.jpg';
import iconSoftware from '../../assets/icons/software development.svg';
import iconTeam from '../../assets/icons/team building.svg';
import iconIT from '../../assets/icons/it support.svg';
import iconMVP from '../../assets/icons/mvp for startups.svg';
import iconQA from '../../assets/icons/quality testing.svg';
import experience from '../../assets/icons/experience.svg';
import speed from '../../assets/icons/speed.svg';
import deboraMeta from '../../assets/images/debora-meta.jpeg';
import ermalSadiku from '../../assets/images/ermal-sadiku.png';
import ilirianaIbraj from '../../assets/images/iliriana-ibraj.png';
import leonaTahiri from '../../assets/images/leona-tahiri.jpg';
import zimrieIdrizi from '../../assets/images/zimrie-idrizi.jpg';
import aleksandarIlioski from '../../assets/images/aleksandar-ilioski.jpg';
import bdoLogo from '../../assets/images/BDO.png';
import conplementLogo from '../../assets/images/conplement.png';
import whatdigitalLogo from '../../assets/images/whatdigital.png';
import pic6 from '../../assets/images/pic6.jpg';
import pic7 from '../../assets/images/pic7.jpg';
import pic8 from '../../assets/images/pic8.jpg';
import pic9 from '../../assets/images/pic9.jpg';
import pic10 from '../../assets/images/pic10.jpg';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import teamMeeting from '../../assets/images/teammeeting.jpg';
import teamDiscussion from '../../assets/images/teamdiscussion.jpg';

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const icons = [
  <img key="i1" src={iconSoftware} alt="Software Development" className={styles.iconImg} />,
  <img key="i2" src={iconTeam} alt="Team Building" className={styles.iconImg} />,
  <img key="i3" src={iconIT} alt="IT Support" className={styles.iconImg} />,
  <img key="i4" src={iconMVP} alt="MVP for Startups" className={styles.iconImg} />,
  <img key="i5" src={iconQA} alt="Quality Testing" className={styles.iconImg} />,
];

const cards = [
  { title: 'Software Development', text: 'We build custom software that fits your business and scales with you.' },
  { title: 'Team Building', text: 'We help you assemble the right tech team, from one expert to a full squad.' },
  { title: 'IT Support', text: 'Reliable IT support and maintenance so your systems run smoothly.' },
  { title: 'MVP for Startups', text: 'We turn ideas into working MVPs fast, helping you test and grow.' },
  { title: 'Quality Testing', text: 'Thorough testing and QA to make sure your product works flawlessly.' },
];

const hoverImages = [pic6, pic7, pic8, pic10, pic9];
const serviceImages = [pic1, pic2, pic4];

type TeamMember = { image?: string; name: string; position: string };

const teamMembers: TeamMember[] = [
  { image: ermalSadiku, name: 'Ermal Sadiku', position: 'Managing Partner' },
  { name: 'Lulzim Ibrahimi', position: 'Managing partner' },
  { image: ilirianaIbraj, name: 'Iliriana Ibraj', position: 'Chief Business Development Officer' },
  { image: aleksandarIlioski, name: 'Aleksandar Ilioski', position: 'Country Manager' },
  { image: leonaTahiri, name: 'Leona Tahiri', position: 'Business Development Representative' },
  { image: deboraMeta, name: 'Debora Meta', position: 'Human Resources Manager' },
  { image: zimrieIdrizi, name: 'Zimrie Idrizi', position: 'IT Recruiter & Product Lead' },
];

const testimonialsLogos = [
  {
    logo: bdoLogo,
    quote: 'We have found that what you can achieve with LinkPlus, with very little effort, is astounding.',
    company: 'BDO Lixar',
    country: 'Canada',
  },
  {
    logo: conplementLogo,
    quote: 'Ambition and skills are two traits we believe LinkPlus has proven to Conplement AG, time and time again.',
    company: 'Conplement AG',
    country: 'Germany',
  },
  {
    logo: whatdigitalLogo,
    quote: 'LinkPlus raised our engineering bar—clear comms, reliable delivery, and measurable impact across multiple teams.',
    company: 'WhatDigital',
    country: 'UK',
  },
];

const HomePage: React.FC = () => {
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

  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonialsLogos.length), 5000);
    return () => clearInterval(id);
  }, []);

  const [contactData, setContactData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const PinIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );

  const MailIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );

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
        '',
        'Message:',
        contactData.message || '(no message)',
      ].join('\n')
    );
    window.location.href = `mailto:info@linkplus.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <div className={styles.navigation}>
          <label htmlFor="slide1" className={styles.navBtn}></label>
          <label htmlFor="slide2" className={styles.navBtn}></label>
          <label htmlFor="slide3" className={styles.navBtn}></label>
        </div>
      </div>

      <div
        className={styles.textSection}
        style={{
          backgroundImage: `linear-gradient(rgba(94, 14, 17, 0.87), rgba(94, 19, 21, 0.87)), url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className={styles.subheading}>
          <a href="https://linkplus-it.com/"> Advanced Software Solutions</a>
        </p>
        <p className={styles.subheading}>Scalable, Customized Technology - Built for Growth at Any Level</p>

        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            <Link to="/services" className={styles.button} role="button">
              READ MORE
            </Link>
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.cardSection}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ ['--card-bg' as any]: `url(${hoverImages[index % hoverImages.length]})` }}
          >
            <div className={styles.cardIcon}>{icons[index]}</div>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.exclusiveSection}>
        <div className={styles.exclusiveText}>
          <p className={styles.sectionLabel}>WHO WE BRING</p>
          <h2 className={styles.sectionHeading}>Built to Scale, Designed to Work</h2>
          <p className={styles.sectionDescription}>
            With over 12 years of experience, we design and deliver IT solutions that adapt, scale, and evolve with your business.
          </p>
          <div className={styles.listGrid}>
            <ul>
              <li>✔ Application Development</li>
              <li>✔ Managed IT Services</li>
            </ul>
            <ul>
              <li>✔ IT Support Services</li>
              <li>✔ Maintenance & Support</li>
            </ul>
          </div>
          <p className={styles.sectionDescription}>
            We focus on technology that fits your workflow, supports your team, and keeps your operations running smoothly.
          </p>
          <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>
              <Link to="/aboutus" className={styles.button} role="button">
                MORE ABOUT US
              </Link>
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>
        </div>

        <div className={styles.exclusiveImages}>
          <img src={teamMeeting} alt="Team meeting" className={styles.imgTop} loading="lazy" decoding="async" />
          <img src={teamDiscussion} alt="Team discussion" className={styles.imgBottom} loading="lazy" decoding="async" />
        </div>
      </div>

      <div className={styles.itServicesSection} style={{ ['--it-services-bg' as any]: `url(${itServicesBg})` }}>
        <p className={styles.subheading}>OUR SERVICES</p>
        <h2
          className={styles.headinggg}
          style={{ color: '#99171C', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          Complete IT Expertise Under One Roof
        </h2>

        <div className={styles.itCardSection}>
          <Link to="/services/custom-software" className={styles.cardLink}>
            <div className={styles.itCard} role="link" tabIndex={0}>
              <img src={serviceImages[0]} alt="High-End Custom Software Solutions" />
              <h4 className={styles.cardTitle}>High-End Custom Software Solutions</h4>
              <p className={styles.cardText}>We deliver advanced and scalable software tailored to your business needs.</p>
            </div>
          </Link>

          <Link to="/services/dedicated-team" className={styles.cardLink}>
            <div className={styles.itCard} role="link" tabIndex={0}>
              <img src={serviceImages[1]} alt="Dedicated Team Model" />
              <h4 className={styles.cardTitle}>Dedicated Team Model</h4>
              <p className={styles.cardText}>Build a team that fits your project, from one expert to a full development unit.</p>
            </div>
          </Link>

          <Link to="/services/it-support" className={styles.cardLink}>
            <div className={styles.itCard} role="link" tabIndex={0}>
              <img src={serviceImages[2]} alt="IT Support" />
              <h4 className={styles.cardTitle}>IT support</h4>
              <p className={styles.cardText}>1st and 2nd level IT support to ensure the seamless functioning of clients systems.</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.technologySolutionSection}>
        <div className={styles.imageWrapper}>
          <img src={teamImage} alt="Team working" className={styles.teamImage} />
        </div>

        <div className={styles.technologyContent}>
          <p className={styles.technologyLabel}>Project Index</p>
          <h2 className={styles.technologyHeading}>
            We develop custom applications for a wide range of industries, with a focus on delivering real-world solutions that
            drive business results.
          </h2>

          <div className={styles.serviceIcons}>
            <div className={styles.serviceItem}>
              <img src={experience} alt="Experience" className={styles.serviceIconImg} />
              <div className={styles.serviceText}>
                <p>Experience</p>
                <span>Decades of expertise, dictate effective outcome.</span>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <img src={speed} alt="Quick Support" className={styles.serviceIconImg} />
              <div className={styles.serviceText}>
                <p>Quick Support</p>
                <span>Your safety net for every tech challenge.</span>
              </div>
            </div>
          </div>

          <div className={styles.progressBars} ref={progressSectionRef}>
            <div className={styles.progressItem}>
              <p>Key Industries:</p>
              <span>Airline</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: progressAnimated ? '95%' : '0%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} role="progressbar" />
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Automotive</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: progressAnimated ? '80%' : '0%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} role="progressbar" />
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Fintech</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: progressAnimated ? '90%' : '0%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} role="progressbar" />
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Telecom</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: progressAnimated ? '80%' : '0%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} role="progressbar" />
              </div>
            </div>
          </div>

          <p className={styles.technologyDescription}>
            LinkPlus IT has successfully partnered with clients across USA, Canada, Western Europe, and beyond, completing
            projects that meet the highest standards of quality, performance, and reliability.
          </p>
        </div>
      </div>

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
                    <div className={styles.teamMember} aria-label={`${member.name} (no photo)`} style={{ background: '#b71c1c' }} />
                  ) : (
                    <img src={member.image as string} alt={member.name} className={styles.teamMember} loading="lazy" decoding="async" />
                  )}
                  <p className={styles.teamName}>{member.name}</p>
                  <p className={styles.teamPosition}>{member.position}</p>
                </div>
              );
            })}

            {teamMembers.map((member, index) => {
              const missing = !member.image;
              return (
                <div key={`duplicate-${index}`} className={styles.teamCard}>
                  {missing ? (
                    <div className={styles.teamMember} aria-label={`${member.name} (no photo)`} style={{ background: '#b71c1c' }} />
                  ) : (
                    <img src={member.image as string} alt={member.name} className={styles.teamMember} loading="lazy" decoding="async" />
                  )}
                  <p className={styles.teamName}>{member.name}</p>
                  <p className={styles.teamPosition}>{member.position}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className={styles.testimonialSection} aria-label="What clients say">
        <div className={styles.tWrap}>
          <div className={styles.tInner}>
            <p className={styles.tLabel}>WHAT CLIENTS SAY</p>
            <h2 className={styles.tHeading}>Testimonials That Inspire Trust</h2>
            <div className={styles.tStars} aria-hidden>★★★★★</div>
            <p className={styles.tQuote}>{testimonialsLogos[tIdx].quote}</p>
            <div className={styles.tAuthor}>
              <span className={styles.tAvatar}>
                <img src={testimonialsLogos[tIdx].logo} alt={`${testimonialsLogos[tIdx].company} logo`} loading="lazy" />
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
                  className={`${styles.tDot} ${i === tIdx ? styles.tDotActive : ''}`}
                  onClick={() => setTIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactShell} aria-label="Contact form">
        <div className={styles.contactGrid}>
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
                  <p className={styles.cValue}>Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo</p>
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

          <div className={styles.cRight}>
            <div className={styles.cCard} aria-labelledby="cFormTitle">
              <h3 id="cFormTitle" className={styles.cTitle}>Got a Project in Mind?</h3>
              <form className={styles.cForm} onSubmit={handleContactSubmit}>
                <div className={styles.cGrid2}>
                  <input className={styles.cInput} placeholder="First Name*" value={contactData.firstName} onChange={onContactChange('firstName')} required />
                  <input className={styles.cInput} placeholder="Last Name*" value={contactData.lastName} onChange={onContactChange('lastName')} required />
                </div>
                <div className={styles.cGrid2}>
                  <input className={styles.cInput} placeholder="Phone Number*" type="tel" value={contactData.phone} onChange={onContactChange('phone')} required />
                  <input className={styles.cInput} placeholder="Your email*" type="email" value={contactData.email} onChange={onContactChange('email')} required />
                </div>
                <select className={styles.cInput} value={contactData.service} onChange={onContactChange('service')} required aria-label="Select service">
                  <option value="" disabled>Select Service*</option>
                  <option value="HIGH-END CUSTOM SOFTWARE SOLUTIONS">HIGH-END CUSTOM SOFTWARE SOLUTIONS</option>
                  <option value="DEDICATED TEAM MODEL">DEDICATED TEAM MODEL</option>
                  <option value="IT SUPPORT">IT SUPPORT</option>
                </select>
                <textarea className={`${styles.cInput} ${styles.cTextarea}`} placeholder="How Can We Assist Your Aesthetic Needs..." rows={5} value={contactData.message} onChange={onContactChange('message')} />
                {!isContactValid && <div className={styles.cError}>Please fill all required fields with a valid email.</div>}
                <button type="submit" className={`${styles.cSubmit} ${!isContactValid ? styles.cDisabled : ''}`} disabled={!isContactValid}>
                  <span>SEND VIA EMAIL</span>
                  <span className={styles.cSubmitArrow} aria-hidden>↗</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default HomePage;
