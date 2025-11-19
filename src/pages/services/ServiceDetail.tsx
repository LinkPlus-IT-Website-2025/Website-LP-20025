import React, { useEffect, useMemo } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { SERVICES_DETAIL } from "./servicesData";
import styles from "./ServiceDetail.module.scss";
import frame13 from "../../assets/images/Frame 13.png";

type LocationState = { heroImg?: string } | undefined;

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { state } = useLocation() as { state: LocationState };
  const data = slug ? SERVICES_DETAIL[slug] : undefined;

  useEffect(() => {
    document.body.classList.add("sdBleed");
    return () => document.body.classList.remove("sdBleed");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <Navigate to="/services" replace />;

  const heroBg = useMemo(() => state?.heroImg ?? data.heroImage, [state, data]);
  const lines = data.heroTitle.split("\n");

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        aria-label={data.heroTitle}
        style={
          heroBg
            ? {
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      >
       <div className={styles.band} style={{ background: "rgba(94, 14, 17, 0.87)" }}>

          <div className={styles.inner}>
            <h1 className={styles.title}>
              {lines.map((l, i) => (
                <span key={i}>
                  {l}
                  {i < lines.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </div>
        </div>

        
      </section>

      {data.introCards?.length ? (
        <section className={styles.cardsWrap} aria-label="Intro">
          <div className={styles.cards}>
            {data.introCards.map((c, i) => (
              <article key={i} className={styles.card}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {data.process?.length ? (
        <section className={styles.process} aria-label="Process">
          <h2 className={styles.processHeading}>Our Support Process</h2>
          <ol className={styles.steps}>
            {data.process.map((p, i) => (
              <li key={i} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div>
                  <div className={styles.stepTitle}>{p.title}</div>
                  {p.sub ? <div className={styles.stepSub}>{p.sub}</div> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {slug === "dedicated-team" && (
        <div style={{ display: "flex", justifyContent: "center", padding: "16px" }}>
          <img
            src={frame13}
            alt="Dedicated Team"
            loading="lazy"
            style={{
              maxWidth: "1100px",
              width: "100%",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </div>
      )}

      <div className={styles.backRow}>
        <Link to="/services" className={styles.backLink}>
          ← Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
