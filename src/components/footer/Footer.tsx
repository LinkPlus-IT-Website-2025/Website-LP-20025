import React, { useState } from "react";
import { Row, Col, Typography, Space, Modal } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RightOutlined,
  TrophyOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";
import footerBg from "../../assets/images/footer.jpg";
import lpLogo from "../../assets/images/lp-logo.png";

/* Award images you DO have */
import impactStarsImg from "../../assets/images/impact-stars.png";
import isoCertificatesImg from "../../assets/images/iso-certificates.jpg";

/* ✅ New: make these two clickable as well
   If your exact filenames differ (spaces / timestamps), just adjust the paths below. */
import presidentialMedalImg from "../../assets/images/Medalja e Presidentes.jpg";
import genderEquityImg from "../../assets/images/Screenshot 2025-10-28 at 11.10.57.png";

const { Title, Text, Link: AntLink } = Typography;

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "#", onClick }) => {
  const clickable = !!onClick;
  return (
    <div className={styles.footerLinkWrapper}>
      <AntLink
        href={clickable ? undefined : href}
        onClick={
          clickable
            ? (e) => {
                e.preventDefault();
                onClick?.();
              }
            : undefined
        }
        className={styles.footerLink}
      >
        <RightOutlined className={styles.footerLinkBullet} />
        <span>{children}</span>
      </AntLink>
    </div>
  );
};

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showConduct, setShowConduct] = useState(false);
  const [showDataProtection, setShowDataProtection] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Awards modal (shared)
  const [awardOpen, setAwardOpen] = useState(false);
  const [awardSrc, setAwardSrc] = useState<string | null>(null);
  const [awardCaption, setAwardCaption] = useState<React.ReactNode>(null);

  const openAward = (src: string, caption: React.ReactNode) => {
    setAwardSrc(src);
    setAwardCaption(caption);
    setAwardOpen(true);
  };

  return (
    <>
      <footer className={styles.footerContainer}>
        <div
          className={styles.footerBackground}
          style={{
            backgroundImage: `linear-gradient(rgba(110, 19, 22, 0.49), rgba(104, 16, 19, 0.41)), url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.footerOverlay}>
            <div className={styles.footerContent}>
              <Row gutter={[32, 32]} justify="space-between">
                {/* Brand */}
                <Col xs={24} sm={24} md={6} lg={6}>
                  <div className={styles.footerBrand}>
                    <div className={styles.logoContainer}>
                      <img src={lpLogo} alt="" className={styles.brandLogo} />
                      <Title level={3} className={styles.brandName}>LINKPLUS IT</Title>
                    </div>

                    <Text className={styles.brandDescription}>
                      LinkPlus IT is a trusted global partner, delivering top-tier software solutions.
                      For over 12 years, we’ve helped businesses build reliable, future-ready systems.
                    </Text>

                    <Space size="large" className={styles.socialIcons}>
                      <a
                        href="https://www.facebook.com/LinkPlusIT/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className={styles.socialLink}
                        title="Facebook"
                      >
                        <FacebookOutlined />
                      </a>
                      <a
                        href="https://www.instagram.com/linkplus_it/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={styles.socialLink}
                        title="Instagram"
                      >
                        <InstagramOutlined />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/linkplus-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.socialLink}
                        title="LinkedIn"
                      >
                        <LinkedinOutlined />
                      </a>
                    </Space>
                  </div>
                </Col>

                {/* Quick Links */}
                <Col xs={24} sm={12} md={5} lg={5}>
                  <div className={styles.footerSection}>
                    <Title level={4} className={styles.sectionTitle}>Quick Links</Title>
                    <div className={styles.footerLinks}>
                      <FooterLink href="/aboutus">About Us</FooterLink>
                      <FooterLink href="/services">Services</FooterLink>
                      <FooterLink href="/career">Career</FooterLink>
                      <FooterLink href="/team">Team</FooterLink>
                      <FooterLink href="/contactus">Contact</FooterLink>
                    </div>
                  </div>
                </Col>

                {/* Awards */}
                <Col xs={24} sm={12} md={7} lg={7}>
                  <div className={styles.footerSection}>
                    <Title level={4} className={styles.sectionTitle}>Awards</Title>

                    <div className={`${styles.footerLinkss} ${styles.awardsGlass}`}>
                      {/* Impact Stars (clickable) */}
                      <p className={styles.awardLine}>
                        <TrophyOutlined className={styles.awardIcon} />
                        <button
                          className={styles.awardBtn}
                          aria-label="View Impact Stars award"
                          onClick={() =>
                            openAward(
                              impactStarsImg,
                              <>
                                Laureate of <strong>Impact Stars</strong>,{" "}
                                <strong>Technology Fast 50 2022 Central Europe, Deloitte</strong>
                              </>
                            )
                          }
                        >
                          Laureate of <strong>Impact Stars</strong>,{" "}
                          <strong>Technology Fast 50 2022 Central Europe, Deloitte</strong>
                        </button>
                      </p>

                      {/* ISO (clickable, plain text visual) */}
                      <p className={styles.awardLine}>
                        <TrophyOutlined className={styles.awardIcon} />
                        <button
                          className={styles.awardBtn}
                          aria-label="View ISO certificates"
                          onClick={() =>
                            openAward(
                              isoCertificatesImg,
                              <>ISO 9001:2015 &amp; ISO 27001 CERTIFIED</>
                            )
                          }
                        >
                          <span className={styles.badge}>
                            ISO 9001:2015 &amp; ISO 27001 CERTIFIED
                          </span>
                        </button>
                      </p>

                      {/* Presidential Medal (now clickable) */}
                      <p className={styles.awardLine}>
                        <TrophyOutlined className={styles.awardIcon} />
                        <button
                          className={styles.awardBtn}
                          aria-label="View Presidential Medal of Merits"
                          onClick={() =>
                            openAward(
                              presidentialMedalImg,
                              <>
                                <strong>Presidential Medal of Merits for Innovation and R&amp;D</strong>, awarded by{" "}
                                <strong>H.E. President Vjosa Osmani (2023)</strong>
                              </>
                            )
                          }
                        >
                          <span className={styles.awardText}>
                            <strong>Presidential Medal of Merits for Innovation and R&amp;D,</strong> awarded by{" "}
                            <strong>H.E. President Vjosa Osmani (2023)</strong>
                          </span>
                        </button>
                      </p>

                      {/* Gender Equity (now clickable — “this pic”) */}
                      <p className={styles.awardLine}>
                        <TrophyOutlined className={styles.awardIcon} />
                        <button
                          className={styles.awardBtn}
                          aria-label="View Gender Equity in Workplace Award"
                          onClick={() =>
                            openAward(
                              genderEquityImg,
                              <>
                                <strong>Gender Equity in Workplace Award (2023)</strong>
                              </>
                            )
                          }
                        >
                          <span className={styles.awardText}>
                            <strong>Gender Equity in Workplace Award (2023)</strong>
                          </span>
                        </button>
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Contact */}
                <Col xs={24} sm={24} md={6} lg={6}>
                  <div className={`${styles.footerSection} ${styles.contactSection}`}>
                    <Title level={4} className={styles.sectionTitle}>Contact</Title>
                    <div className={styles.contactInfo}>
                      {/* Address 1 */}
                      <Space align="start" size={8} style={{ display: "flex" }}>
                        <EnvironmentOutlined style={{ fontSize: 14, color: "#fff", marginTop: 2 }} />
                        <Text className={styles.contactAddress}>
                          Str.Tirana, Icon Tower – 12th Floor, no.46, Prishtine, 10000, Kosovo
                        </Text>
                      </Space>
                      {/* Address 2 */}
                      <Space align="start" size={8} style={{ display: "flex", marginTop: 8 }}>
                        <EnvironmentOutlined style={{ fontSize: 14, color: "#fff", marginTop: 2 }} />
                        <Text className={styles.contactAddress}>
                          Boris Trajkovski 1/2 - 75 Skopje 1000, North Macedonia
                        </Text>
                      </Space>
                      {/* Email */}
                      <Space align="start" size={8} style={{ display: "flex", marginTop: 8 }}>
                        <MailOutlined style={{ fontSize: 14, color: "#fff", marginTop: 2 }} />
                        <Text className={styles.contactEmail}>office@linkplus-it.com</Text>
                      </Space>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Legal links */}
            <div className={styles.footerLegal}>
              <button className={styles.legalBtn} onClick={() => setShowPrivacy(true)}>
                Privacy policy
              </button>
              <button className={styles.legalBtn} onClick={() => setShowConduct(true)}>
                Code of conduct
              </button>
              <button className={styles.legalBtn} onClick={() => setShowDataProtection(true)}>
                Data protection policy
              </button>
              {/* <button className={styles.legalBtn} onClick={() => setShowTerms(true)}>
                Terms of use
              </button> */}
            </div>

            {/* Copyright */}
            <div className={styles.footerBottom}>
              <Text className={styles.copyrightText}>
                © 2025 <span className={styles.brandHighlight}>LINKPLUS IT</span> | All rights reserved
              </Text>
            </div>
          </div>
        </div>
      </footer>

      {/* ======= AWARD MODAL ======= */}
      <Modal
        open={awardOpen}
        onCancel={() => setAwardOpen(false)}
        footer={null}
        width={720}
        title={null}
        className={styles.awardModal}
        centered
      >
        <div className={styles.modalHeader}>
          <h2>Award</h2>
        </div>
        <div className={styles.modalBody}>
          {awardSrc && <img src={awardSrc} alt="Award" className={styles.modalImg} />}
          {awardCaption && <div className={styles.modalCaption}>{awardCaption}</div>}
        </div>
      </Modal>

      {/* ======= LEGAL MODALS (trimmed placeholders) ======= */}
      <Modal
        open={showPrivacy}
        onCancel={() => setShowPrivacy(false)}
        footer={null}
        width={980}
        title={null}
        className={styles.legalModal}
        centered
      >
        <div className={styles.modalHeader}><h2>Privacy Policy</h2></div>
        <div className={styles.modalBody}>{/* content */}</div>
      </Modal>

      <Modal
        open={showConduct}
        onCancel={() => setShowConduct(false)}
        footer={null}
        width={980}
        title={null}
        className={styles.legalModal}
        centered
      >
        <div className={styles.modalHeader}><h2>Code of Conduct</h2></div>
        <div className={styles.modalBody}>{/* content */}</div>
      </Modal>

      <Modal
        open={showDataProtection}
        onCancel={() => setShowDataProtection(false)}
        footer={null}
        width={980}
        title={null}
        className={styles.legalModal}
        centered
      >
        <div className={styles.modalHeader}><h2>Data Protection Policy</h2></div>
        <div className={styles.modalBody}>{/* content */}</div>
      </Modal>

      <Modal
        open={showTerms}
        onCancel={() => setShowTerms(false)}
        footer={null}
        width={980}
        title={null}
        className={styles.legalModal}
        centered
      >
        <div className={styles.modalHeader}><h2>Terms of Use</h2></div>
        <div className={styles.modalBody}>{/* content */}</div>
      </Modal>
    </>
  );
};

export default Footer;
