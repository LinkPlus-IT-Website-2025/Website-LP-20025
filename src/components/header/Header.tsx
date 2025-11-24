import React, { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  Layout,
  Row,
  Col,
  Space,
  Typography,
  Menu,
  Button,
  Drawer,
  Tooltip,
} from "antd";
import {
  ClockCircleOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  ExportOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import lpLogo from "../../assets/images/lp-logo.png";

const { Header } = Layout;
const { Text } = Typography;

const WRAP: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  color: "#fff",
};
const TOPBAR: CSSProperties = {
  borderBottom: "1px solid rgba(255,255,255,0.25)",
  background: "transparent",
};
const MAINBAR: CSSProperties = {
  background: "transparent",
  padding: 0,
  borderBottom: "1px solid rgba(255,255,255,0.18)",
};

const NAV_LINK_DESKTOP: CSSProperties = {
  color: "#fff",
  opacity: 0.9,
  fontWeight: 500,
  fontSize: 13,
};
const DROPDOWN_LINK_DESKTOP: CSSProperties = {
  color: "#111827",
  opacity: 0.95,
  fontWeight: 500,
  fontSize: 13,
};
const NAV_LINK_MOBILE: CSSProperties = {
  color: "#111827",
  opacity: 1,
  fontWeight: 600,
  fontSize: 15,
};

const TOPBAR_TEXT: CSSProperties = {
  color: "#fff",
  opacity: 0.85,
  fontSize: 11,
};
const GRADIENT_BTN: CSSProperties = {
  border: "none",
  borderRadius: 10,
  fontWeight: 600,
  fontSize: 12,
};
const SOCIAL_ICON_LINK: CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
};

/* ---------- width hook ---------- */
const MOBILE_CUTOFF = 1145;
function useIsDesktop(cutoff = MOBILE_CUTOFF) {
  const [w, setW] = useState<number>(() =>
    typeof window === "undefined" ? Number.POSITIVE_INFINITY : window.innerWidth
  );
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w > cutoff;
}

/* ---------- Logo ---------- */
const Logo: React.FC = () => (
  <Link
    to="/"
    className={styles.brand}
    aria-label="LinkPlus IT — Home"
  >
    <img src={lpLogo} alt="" className={styles.brandImg} />
    <span className={styles.brandText}>LINKPLUS&nbsp;IT</span>
  </Link>
);

/* ---------- ISO (trophy always visible, long text on hover) ---------- */
const IsoInline: React.FC = () => (
  <div className={styles.isoCenter}>
    <Tooltip
      title="ISO 9001:2015 Quality Management & ISO/IEC 27001 Information Security"
      placement="bottom"
      trigger={["hover"]}
    >
      <span
        className={styles.isoInline}
        aria-label="ISO certifications"
        // data-label="ISO 9001:2015 Quality Management & ISO/IEC 27001 Information Security"
      >
        <TrophyOutlined className={styles.isoIcon} />
        <span className={styles.isoLabel}>
          ISO 9001:2015 &amp; 27001 CERTIFIED
        </span>
      </span>
    </Tooltip>
  </div>
);

/* ---------- menu items ---------- */
function useMenuItems(opts: {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  onLinkClick?: () => void;
  t?: (k: string) => string | undefined;
}) {
  const { isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t } = opts;
  const tr = (k: string, def: string) => (t ? t(k) ?? def : def);

  const makeItems = (linkStyle: CSSProperties, childStyle: CSSProperties) => {
    const authDashboard =
      isAuthenticated && (isCompanyUser || isEmployeeUser)
        ? {
            key: "authDashboard",
            label: (
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                {isCompanyUser && (
                  <Link
                    to="/company/dashboard"
                    onClick={onLinkClick}
                    style={linkStyle}
                  >
                    {tr("navigationlinks.dashboard", "Dashboard")}
                  </Link>
                )}
                {isEmployeeUser && (
                  <Link
                    to="/employee/dashboard"
                    onClick={onLinkClick}
                    style={linkStyle}
                  >
                    {tr("navigationlinks.dashboard", "Dashboard")}
                  </Link>
                )}
              </div>
            ),
          }
        : null;

    return (
      [
        authDashboard || undefined,
        {
          key: "home",
          label: (
            <Link to="/" onClick={onLinkClick} style={linkStyle}>
              {tr("navigationlinks.home", "Home")}
            </Link>
          ),
        },
        {
          key: "about",
          label: (
            <Link to="/aboutus" onClick={onLinkClick} style={linkStyle}>
              {tr("navigationlinks.about", "About Us")}
            </Link>
          ),
        },
        {
          key: "services",
          label: (
            <Link to="/services" onClick={onLinkClick} style={linkStyle}>
              {tr("navigationlinks.services", "Services")}
            </Link>
          ),
        },
        {
          key: "portfolio",
          label: (
            <Link to="/portofolio" onClick={onLinkClick} style={linkStyle}>
              {tr("navigationlinks.portofolio", "Portofolio")}
            </Link>
          ),
        },
        {
          key: "other",
          label: (
            <span style={linkStyle}>
              {tr("navigationlinks.other", "Other")}
            </span>
          ),
          children: [
            {
              key: "career",
              label: (
                <Link to="/career" onClick={onLinkClick} style={childStyle}>
                  {tr("navigationlinks.career", "Career")}
                </Link>
              ),
            },
            {
              key: "team",
              label: (
                <Link to="/team" onClick={onLinkClick} style={childStyle}>
                  {tr("navigationlinks.team", "Team")}
                </Link>
              ),
            },
          ],
        },
      ].filter(Boolean) as any[]
    );
  };

  const desktop = makeItems(NAV_LINK_DESKTOP, DROPDOWN_LINK_DESKTOP);
  const mobile = makeItems(NAV_LINK_MOBILE, NAV_LINK_MOBILE);
  return { desktop, mobile };
}

/* ---------- top utility bar ---------- */
const UtilityBar: React.FC = () => (
  <div className={styles.topbar} style={TOPBAR}>
    <div className={styles.container}>
      <Row align="middle" gutter={[12, 4]}>
        <Col flex="auto">
          <Space
            size={16}
            wrap
            className={styles.utGroup}
          >
            {/* Hours */}
            <Space size={6} style={{ color: "#fff" }}>
              <ClockCircleOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>Mon - Fri : 9:00 - 17:00</Text>
            </Space>

            {/* Email */}
            <Space size={6} style={{ color: "#fff" }}>
              <MailOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>info@linkplus.com</Text>
            </Space>

            {/* Address */}
            <Space size={6} style={{ color: "#fff" }}>
              <EnvironmentOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>
                Str.Tirana, Icon Tower – 12th Floor, no.46, Prishtine, 10000,
                Kosovo
              </Text>
              <EnvironmentOutlined style={{ fontSize: 12, paddingLeft: 10 }} />
              <Text style={TOPBAR_TEXT}>
                Flatiron 75, Skopje, North Macedonia
              </Text>
            </Space>
          </Space>
        </Col>

        {/* Socials */}
        <Col>
          <Space size={10} style={{ color: "#fff" }}>
            <a
              href="https://www.facebook.com/LinkPlusIT/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkPlus IT on Facebook"
              style={SOCIAL_ICON_LINK}
              title="Facebook"
            >
              <FacebookOutlined style={{ fontSize: 12 }} />
            </a>
            <a
              href="https://www.instagram.com/linkplus_it/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkPlus IT on Instagram"
              style={SOCIAL_ICON_LINK}
              title="Instagram"
            >
              <InstagramOutlined style={{ fontSize: 12 }} />
            </a>
            <a
              href="https://www.linkedin.com/company/linkplus-it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkPlus IT on LinkedIn"
              style={SOCIAL_ICON_LINK}
              title="LinkedIn"
            >
              <LinkedinOutlined style={{ fontSize: 12 }} />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  </div>
);

/* ---------- main header ---------- */
type Props = {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  t?: (k: string) => string | undefined;
};

export const SiteHeader: React.FC<Props> = ({
  isAuthenticated,
  isCompanyUser,
  isEmployeeUser,
  t,
}) => {
  const isDesktop = useIsDesktop(MOBILE_CUTOFF);
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);
  const { desktop, mobile } = useMenuItems({
    isAuthenticated,
    isCompanyUser,
    isEmployeeUser,
    onLinkClick: handleLinkClick,
    t,
  });

  return (
    <div className={styles.wrap} style={WRAP}>
      <UtilityBar />

      <Header className={styles.headerCompact} style={MAINBAR}>
        <div className={styles.container}>
          <Row align="middle" gutter={12} wrap={false}>
            {/* Logo */}
            <Col>
              <Logo />
            </Col>

            {/* Nav */}
            <Col
              flex="auto"
              style={{ display: "flex", justifyContent: "flex-start", minWidth: 0 }}
            >
              {isDesktop ? (
                <Menu
                  mode="horizontal"
                  selectable={false}
                  items={desktop}
                  style={{ border: "none", background: "transparent" }}
                />
              ) : (
                <Button
                  type="text"
                  className={styles.menuBtn}
                  icon={<MenuOutlined />}
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  style={{ color: "#fff" }}
                />
              )}
            </Col>

            {/* Right side */}
            <Col flex="none" style={{ whiteSpace: "nowrap" }}>
              <Space
                size={16}
                align="center"
                style={{ color: "#fff", padding: "15px" }}
              >
                <IsoInline />
                <Link to="/contactus">
                  <Button
                    className={styles.contactBtn}
                    style={{ ...GRADIENT_BTN, whiteSpace: "nowrap" }}
                  >
                    CONTACT US{" "}
                    <ExportOutlined style={{ marginLeft: 6, fontSize: 12 }} />
                  </Button>
                </Link>
              </Space>
            </Col>
          </Row>
        </div>
      </Header>

      {/* Sidebar Drawer */}
      <Drawer
        rootClassName={styles.drawerRoot}
        title={<span>LINKPLUS IT</span>}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={300}
        zIndex={2000}
        maskClosable
        keyboard
        styles={{ header: { borderBottom: "none" }, body: { padding: 0 } }}
      >
        <Menu
          mode="inline"
          theme="light"
          style={{ borderRight: "none", padding: "8px 8px 12px" }}
          items={mobile}
          selectable={false}
        />
      </Drawer>
    </div>
  );
};

export default SiteHeader;
