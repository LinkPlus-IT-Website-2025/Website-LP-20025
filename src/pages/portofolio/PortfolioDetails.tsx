import React, { useMemo, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Row, Col, Typography, Divider } from "antd";
import { PORTFOLIO } from "./portfolioItems";
import styles from "./portfolioDetails.module.scss";

// If you don't use this, feel free to delete the import
// import ServiceFeatureCard from "../../components/servicecard/ServiceFeatureCard";

const { Title, Paragraph, Text } = Typography;

export default function PortfolioDetails() {
  const { id } = useParams<{ id: string }>();

  // Always start at top when navigating between portfolio items
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const item = useMemo(() => PORTFOLIO.find((p) => p.id === id), [id]);
  if (!item) return <Navigate to="/portofolio" replace />; // ✅ route matches your listing page

  // Prepare “Service outcome” bullets (skip empty ones)
  const outcomes = [
    item.info.completionDate,
    item.info.completionDatee,
    item.info.completionDateee,
    item.info.completionDateeee,
    item.info.completionDateeeee,
  ].filter(Boolean);

  return (
    <main className={styles.pageWrap}>
      {/* ===== HERO BAND (top) ===== */}
      <section className={styles.pageHero} aria-label="Case study hero">
        {/* ✅ header uses heroImg */}
        <img src={item.heroImg} alt="" className={styles.heroBg} />
        <div className={styles.heroShade} />
        <div className={styles.heroDecor} aria-hidden />
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span className={styles.bcSep}>/</span>
            <Link to="/portofolio">Portfolio</Link>
            <span className={styles.bcSep}>/</span>
            <span className={styles.bcCurrent}>{item.title}</span>
          </div>
          <h1 className={styles.heroTitle}>{item.title}</h1>
        </div>
      </section>

      <div className={styles.container}>
        {/* ===== Big rounded preview under the hero ===== */}
        <div className={styles.heroImgWrap}>
          {/* ✅ big preview prefers detailMainImg; falls back to heroImg */}
          <img
            src={item.detailMainImg ?? item.heroImg}
            alt={item.title}
            loading="lazy"
          />
        </div>

        <Row gutter={[48, 24]} className={styles.contentRow}>
          {/* LEFT: title + body + gallery */}
          <Col xs={24} lg={16}>
            <Title level={2} className={styles.detailTitle}>
              {item.title}
            </Title>

            <Paragraph className={styles.lead}>{item.body}</Paragraph>

            {/* Show ONLY TWO images */}
            <div className={styles.galleryRow}>
              {item.gallery.slice(0, 2).map((src, i) => (
                <div key={i} className={styles.galleryItem}>
                  <img
                    src={src}
                    alt={`${item.title} ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT: Project Information */}
          <Col xs={24} lg={8}>
            <div className={styles.infoPanel}>
              <div className={styles.panelCard}>
                <Title level={4} className={styles.infoTitle}>
                  Project Information
                </Title>
                <Divider className={styles.infoDivider} />

                <div className={styles.infoRow}>
                  <Text className={styles.infoLabel}>Service outcome:</Text>
                  <Text className={styles.infoValue}>
                    {outcomes.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < outcomes.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </Text>
                </div>

                <div className={styles.infoRow}>
                  <Text className={styles.infoLabel}>Location</Text>
                  <Text className={styles.infoValue}>
                    {item.info.location}
                  </Text>
                </div>

                <div className={styles.infoRow}>
                  <Text className={styles.infoLabel}>Tech Stack</Text>
                  <Text className={styles.infoValue}>
                    {item.info.techstack}
                  </Text>
                </div>
              </div>

              <div className={styles.backWrap}>
                <Link to="/portofolio" className={styles.backLink}>
                  ← Back to portfolio
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
}
