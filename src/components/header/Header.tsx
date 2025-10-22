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
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// 🔴 adjust path if needed (relative to this file)
import lpLogo from "../../assets/images/lp-logo.png";

const { Header } = Layout;
const { Text } = Typography;

/* ---------- CSS overrides (with responsive bits) ---------- */
const FORCE_CSS = `
/* base container padding */
.lp-container { padding-left: 70px !important; padding-right: 90px !important; }

/* top utility bar & main header compactness */
.lp-topbar { padding-top: 8px !important; padding-bottom: 2px !important; }
.lp-header-compact { height: 80px !important; line-height: 48px !important; }

/* AntD horizontal menu compact */
.lp-header-compact :where(.ant-menu-horizontal) {
  height: 34px !important;
  line-height: 34px !important;
  border-bottom: none !important;
  background: transparent !important;
}
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-item),
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-submenu) {
  padding-inline: 10px !important;
}
.lp-header-compact :where(.ant-menu-submenu-title) {
  line-height: 34px !important;
}

/* Make top-level submenu title + caret white on the transparent header */
.lp-header-compact :where(.ant-menu-horizontal)
  > :where(.ant-menu-submenu)
  > :where(.ant-menu-submenu-title) {
  color: #fff !important;
}
.lp-header-compact :where(.ant-menu-submenu-expand-icon),
.lp-header-compact :where(.ant-menu-submenu-arrow) {
  color: #fff !important;
}

/* Ensure dropdown text is dark on white popup (defensive for portal popup) */
:where(.ant-menu-submenu-popup) :where(.ant-menu-item) a,
.lp-header-compact :where(.ant-menu-submenu) :where(.ant-menu-item) a {
  color: #111827 !important;
}

/* Buttons on the right side also compact */
.lp-header-compact :where(.ant-btn) {
  height: 32px !important;
  line-height: 32px !important;
  padding-inline: 12px !important;
}

/* Tighten typography */
.lp-topbar :where(.ant-typography),
.lp-header-compact :where(.ant-typography) { line-height: 1.2 !important; }

/* Drawer (sidebar) styling */
.lp-drawer .ant-drawer-header { border-bottom: 0 !important; }
.lp-drawer .ant-drawer-title { font-weight: 800; letter-spacing: .02em; }
.lp-drawer .ant-drawer-body { padding: 8px 0 !important; }
.lp-drawer .ant-menu-inline { border-right: none !important; }
.lp-drawer .ant-menu-item a { font-weight: 600 !important; color: #111827 !important; }

/* Social links: remove underline */
.lp-topbar a { text-decoration: none !important; }
.lp-topbar a:hover { text-decoration: none !important; opacity: .85; }

/* ---------- Brand (logo + wordmark) ---------- */
.lp-brand{
  display:inline-flex;
  align-items:center;
  gap:10px;
  text-decoration:none !important;
}
.lp-brand__img{
  margin-top:15px;
  height:28px;
  width:auto;
  display:block;
}
.lp-brand__text{
  margin-top:15px;
  font-size:18px;
  font-weight:800;
  letter-spacing:.02em;
  color:#fff;
  line-height:1;
}

/* ===== Nav link hover color ===== */
.lp-header-compact :where(.ant-menu-horizontal) a,
.lp-header-compact :where(.ant-menu-submenu-title) {
  transition: color .2s ease;
}
/* top-level items (desktop) */
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-item):hover a {
  color: #99171C !important;
}
/* "Other" submenu title (desktop) */
.lp-header-compact :where(.ant-menu-horizontal)
  > :where(.ant-menu-submenu):hover
  > :where(.ant-menu-submenu-title) {
  color: #99171C !important;
}
/* dropdown items (popup menu) */
:where(.ant-menu-submenu-popup) :where(.ant-menu-item):hover a {
  color: #99171C !important;
}
/* also change caret/arrow on hover for submenu */
.lp-header-compact :where(.ant-menu-horizontal)
  > :where(.ant-menu-submenu):hover
  :where(.ant-menu-submenu-expand-icon, .ant-menu-submenu-arrow) {
  color: #99171C !important;
}
/* mobile drawer links */
.lp-drawer .ant-menu-item:hover a,
.lp-drawer .ant-menu-submenu-title:hover {
  color: #99171C !important;
}

/* ===== Keep Contact button on one line; shrink only on phones ===== */
.lp-contact-btn { white-space: nowrap !important; }
.lp-contact-btn:hover,
.lp-contact-btn:focus {
  color: #99171C !important;
}
@media (max-width: 520px) {
  .lp-contact-btn {
    font-size: 11px !important;
    padding-inline: 10px !important;
    height: 30px !important;
    line-height: 30px !important;
  }
}

/* Responsive rules */
@media (max-width: 1280px) {
  .lp-container { padding-left: 32px !important; padding-right: 32px !important; }
}

@media (max-width: 1145px) {
  .lp-container { padding-left: 16px !important; padding-right: 16px !important; }
  .lp-header-compact { height: 22px !important; }
  .lp-brand__img{ height:26px; }
  .lp-brand__text{ font-size:17px; }
  /* hide the long address line in the topbar to avoid overflow */
  .lp-topbar .lp-ut-group > *:nth-child(3) { display: none !important; }
}

/* tiny screens */
@media (max-width: 640px) {
  .lp-topbar .lp-ut-group > *:nth-child(2) { display: none !important; } /* hide email too */
  .lp-brand__img{ height:24px; }
  .lp-brand__text{ font-size:16px; }
// }
//   /* === BIGGER LOGO (desktop) === */
// .lp-header-compact{ height:110px !important; }   /* give room */
// .lp-brand{
//   display:inline-flex;
//   align-items:center;
//   height:84px;                                    /* taller logo row */
//   overflow:visible;
//   gap:10px;
//   text-decoration:none !important;
// }
// .lp-brand__img{
//   height:100px !important;                         /* fill the 84px row */
//   width:auto !important;
//   margin:0 !important;
//   padding-top:10px;
//   display:block;

//   /* if PNG has transparent padding, zoom it */
//   transform: scale(2.35);                         /* ← MUCH bigger */
//   transform-origin: left center;
// }

// /* Laptop / tablet */
// @media (max-width:1145px){
//   .lp-header-compact{ height:96px !important; }
//   .lp-brand{ height:70px; }
//   .lp-brand__img{ transform: scale(2.0); }
// }

/* Phones */
// @media (max-width:640px){
//   .lp-header-compact{ height:86px !important; }
//   .lp-brand{ height:58px; }
//   .lp-brand__img{ transform: scale(1.7); }
// }

`;

/* ---------- inline styles ---------- */
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
  fontSize: 14,
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

/* ---------- custom width hook to use 1145px cutoff ---------- */
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

type Props = {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  t?: (k: string) => string;
};

/* ---------- Logo component (logo image + LINKPLUS text) ---------- */
const Logo: React.FC = () => (
  <Link to="/" className="lp-brand" aria-label="LinkPlus IT — Home">
    <img src={lpLogo} alt="" className="lp-brand__img" />
    <span className="lp-brand__text">LINKPLUS IT</span>
  </Link>
);

/* ---------- menu items (desktop vs mobile link colors) ---------- */
function useMenuItems(opts: {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  onLinkClick?: () => void;
  t?: (k: string) => string;
}) {
  const { isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t } = opts;
  const tr = (k: string, def: string) => (t ? t(k) : def);

  const makeItems = (linkStyle: CSSProperties, childStyle: CSSProperties) => {
    const authDashboard =
      isAuthenticated && (isCompanyUser || isEmployeeUser)
        ? {
            key: "authDashboard",
            label: (
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                {isCompanyUser && (
                  <Link to="/company/dashboard" onClick={onLinkClick} style={linkStyle}>
                    {tr("navigationlinks.dashboard", "Dashboard")}
                  </Link>
                )}
                {isEmployeeUser && (
                  <Link to="/employee/dashboard" onClick={onLinkClick} style={linkStyle}>
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
        { key: "home", label: <Link to="/" onClick={onLinkClick} style={linkStyle}>{tr("navigationlinks.home","Home")}</Link> },
        { key: "about", label: <Link to="/aboutus" onClick={onLinkClick} style={linkStyle}>{tr("navigationlinks.about","About Us")}</Link> },
        { key: "services", label: <Link to="/services" onClick={onLinkClick} style={linkStyle}>{tr("navigationlinks.services","Services")}</Link> },
        { key: "portfolio", label: <Link to="/portofolio" onClick={onLinkClick} style={linkStyle}>{tr("navigationlinks.portofolio","Portofolio")}</Link> },
        {
          key: "other",
          label: <span style={linkStyle}>{tr("navigationlinks.other", "Other")}</span>,
          children: [
            { key: "career", label: <Link to="/career" onClick={onLinkClick} style={childStyle}>{tr("navigationlinks.career","Career")}</Link> },
            { key: "team",   label: <Link to="/team"   onClick={onLinkClick} style={childStyle}>{tr("navigationlinks.team","Team")}</Link> },
          ],
        },
      ].filter(Boolean) as any[]
    );
  };

  // Desktop: white top row, dark dropdown. Mobile drawer: all dark.
  const desktop = makeItems(NAV_LINK_DESKTOP, DROPDOWN_LINK_DESKTOP);
  const mobile  = makeItems(NAV_LINK_MOBILE,  NAV_LINK_MOBILE);

  return { desktop, mobile };
}

/* ---------- top utility bar ---------- */
const UtilityBar = () => (
  <div className="lp-topbar" style={TOPBAR}>
    <div className="lp-container">
      <Row align="middle" gutter={[12, 4]}>
        <Col flex="auto">
          <Space
            size={16}
            wrap
            className="lp-ut-group"
            style={{ width: "100%", justifyContent: "flex-start", textAlign: "left" }}
          >
            <Space size={6} style={{ color: "#fff" }}>
              <ClockCircleOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>Mon - Fri : 9:00 - 17:00</Text>
            </Space>
            <Space size={6} style={{ color: "#fff" }}>
              <MailOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>info@linkplus.com</Text>
            </Space>
            <Space size={6} style={{ color: "#fff" }}>
              <EnvironmentOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>
                Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo
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
    <div style={WRAP}>
      {/* inject global overrides */}
      <style>{FORCE_CSS}</style>

      <UtilityBar />

      <Header className="lp-header-compact" style={MAINBAR}>
        <div className="lp-container">
          {/* 🚫 No wrapping so the button never drops */}
          <Row align="middle" gutter={12} wrap={false}>
            {/* Logo */}
            <Col>
              <Logo />
            </Col>

            {/* Nav */}
           {/* Nav */}
<Col
  flex="auto"
  style={{ display: "flex", justifyContent: "flex-start", minWidth: 0,}}
>
  {isDesktop ? (
    <Menu
      mode="horizontal"
      selectable={false}
      items={desktop}
      style={{ border: "none", background: "transparent" }} // ← remove left margin
    />
  ) : (
    <Button
      type="text"
      icon={<MenuOutlined />}
      onClick={() => setOpen(true)}
      style={{ color: "#fff", fontSize: 18 }}
      aria-label="Open menu"
    />
  )}
</Col>


            {/* Right side actions — ALWAYS show Contact Us */}
            <Col flex="none" style={{ whiteSpace: "nowrap" }}>
              <Space size={12} align="center" style={{ color: "#fff", padding: "15px" }}>
                <Link to="/contactus">
                  <Button className="lp-contact-btn" style={{ ...GRADIENT_BTN, whiteSpace: "nowrap" }}>
                    CONTACT US <ExportOutlined style={{ marginLeft: 6, fontSize: 12 }} />
                  </Button>
                </Link>
              </Space>
            </Col>
          </Row>
        </div>
      </Header>

      {/* Sidebar Drawer */}
      <Drawer
        className="lp-drawer"
        title={<span>LINKPLUS IT</span>}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={300}
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
