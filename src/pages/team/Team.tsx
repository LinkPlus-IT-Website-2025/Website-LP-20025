import React from "react";
import styles from "./Team.module.scss";

import teamImage from "../../assets/images/team.jpg";

import deboraMeta from "../../assets/images/debora-meta.jpeg";
import ermalSadiku from "../../assets/images/ermal-sadiku.png";
import ilirianaIbraj from "../../assets/images/iliriana-ibraj.png";
import leonaTahiri from "../../assets/images/leona-tahiri.jpg";
import zimrieIdrizi from "../../assets/images/zimrie-idrizi.jpg";
import aleksandarIlioski from "../../assets/images/aleksandar-ilioski.jpg";

/* Only keep LinkedIn */
type Social = {
  linkedin?: string;
};
type Member = {
  photo: string; // use "" for no photo
  name: string;
  role: string;
  social?: Social;
};

const members: Member[] = [
  {
    photo: ermalSadiku,
    name: "Ermal Sadiku",
    role: "Managing Partner",
    social: { linkedin: "https://www.linkedin.com/" },
  },
    {
    photo: "", // leave empty to trigger the red placeholder
       name: "Lulzim Ibrahimi",
    role: "Managing partner",
     social: { linkedin: "https://www.linkedin.com/" },
  },
  {
    photo: ilirianaIbraj,
    name: "Iliriana Ibraj",
    role: "Chief Business Development Officer",
    social: { linkedin: "https://www.linkedin.com/" },
  },
  {
    photo: aleksandarIlioski,
    name: "Aleksandar Ilioski",
    role: "Country Manager",
    social: { linkedin: "https://www.linkedin.com/" },
  },
  {
    photo: leonaTahiri,
    name: "Leona Tahiri",
    role: "Business Development Representative",
    social: { linkedin: "https://www.linkedin.com/" },
  },
  {
    photo: deboraMeta,
    name: "Debora Meta",
    role: "Human Resources Manager",
    social: { linkedin: "https://www.linkedin.com/" },
  },
  {
    photo: zimrieIdrizi,
    name: "Zimrie Idrizi",
    role: "IT Recruiter & Product Lead",
    social: { linkedin: "https://www.linkedin.com/" },
  },

  // ➕ EXTRA CARD WITHOUT PHOTO (renders as solid red block)

];

/* LinkedIn icon only */
const InIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
    <path
      d="M4 9h4v11H4zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 9h3.8v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V20h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20h-4V9Z"
      fill="currentColor"
    />
  </svg>
);

const Team: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero} aria-label="Our Team hero">
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${teamImage})` }}
        />
        <div className={styles.heroShade} />
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="#">Home</a>
            <span className={styles.bcSep}>/</span>
            <span>Our Team</span>
          </div>
          <h1 className={styles.heroTitle}>Our Team</h1>
        </div>
      </section>

      {/* GRID */}
      <main className={styles.container}>
        <div className={styles.grid}>
          {members.map((m, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.photoWrap}>
                {/* if photo is missing/empty => show solid red “photo” box */}
                {m.photo ? (
                  <img
                    className={styles.photo}
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={styles.photo}
                    aria-label={`${m.name} (no photo)`}
                    style={{ background: "#b71c1c" }} // solid red, same size as photos
                  />
                )}

                <div className={styles.overlay} aria-hidden="true">
                  <span className={styles.ribbonTL} />
                  <span className={styles.ribbonBR} />
                  <div className={styles.socials}>
                    {m.social?.linkedin ? (
                      <a
                        className={styles.socialBtn}
                        data-net="linkedin"
                        href={m.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                      >
                        <InIcon />
                      </a>
                    ) : (
                      <span
                        className={`${styles.socialBtn} ${styles.disabled}`}
                        aria-hidden
                      >
                        <InIcon />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
