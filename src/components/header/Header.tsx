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

// 🔴 adjust path if needed
import lpLogo from "../../assets/images/lp-logo.png";

const { Header } = Layout;
const { Text } = Typography;

/* ---------- CSS overrides (kept minimal & safe) ---------- */
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
.lp-header-compact :where(.ant-menu-submenu-title) { line-height: 34px !important; }

/* Top-level submenu title + caret white on transparent header */
.lp-header-compact :where(.ant-menu-horizontal)
  > :where(.ant-menu-submenu)
  > :where(.ant-menu-submenu-title) { color: #fff !important; }
.lp-header-compact :where(.ant-menu-submenu-expand-icon),
.lp-header-compact :where(.ant-menu-submenu-arrow) { color: #fff !important; }

/* Popup dropdown text dark on white */
:where(.ant-menu-submenu-popup) :where(.ant-menu-item) a,
.lp-header-compact :where(.ant-menu-submenu) :where(.ant-menu-item) a { color: #111827 !important; }

/* Buttons on the right side compact */
.lp-header-compact :where(.ant-btn) {
  height: 32px !important; line-height: 32px !important; padding-inline: 12px !important;
}

/* Tight typography */
.lp-topbar :where(.ant-typography),
.lp-header-compact :where(.ant-typography) { line-height: 1.2 !important; }

/* Drawer (portal root) — keep panel above mask for clicks */
.lp-drawer-root .ant-drawer-mask { z-index: 1999 !important; }
.lp-drawer-root .ant-drawer-content-wrapper { z-index: 2000 !important; }
.lp-drawer-root .ant-drawer-header { border-bottom: 0 !important; }
.lp-drawer-root .ant-drawer-title { font-weight: 800; letter-spacing: .02em; }
.lp-drawer-root .ant-drawer-body { padding: 8px 0 !important; }
.lp-drawer-root .ant-menu-inline { border-right: none !important; }
.lp-drawer-root .ant-menu-item a { font-weight: 600 !important; color: #111827 !important; }

/* Social links: remove underline */
.lp-topbar a { text-decoration: none !important; }
.lp-topbar a:hover { text-decoration: none !important; opacity: .85; }

/* ---------- Brand (logo + wordmark) ---------- */
.lp-brand{
  display:inline-flex; align-items:center; gap:10px; text-decoration:none !important; white-space:nowrap;
}
.lp-brand__img{ margin-top:15px; height:28px; width:auto; display:block; flex-shrink:0; }
.lp-brand__text{ margin-top:15px; font-size:18px; font-weight:800; letter-spacing:.02em; color:#fff; line-height:1; white-space:nowrap; word-break:keep-all; }

/* ===== Nav link hover color ===== */
.lp-header-compact :where(.ant-menu-horizontal) a,
.lp-header-compact :where(.ant-menu-submenu-title) { transition: color .2s ease; }
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-item):hover a { color: #99171C !important; }
.lp-header-compact :where(.ant-menu-horizontal)
  > :where(.ant-menu-submenu):hover
  > :where(.ant-menu-submenu-title) { color: #99171C !important; }
:where(.ant-menu-submenu-popup) :where(.ant-menu-item):hover a { color: #99171C !important; }
.lp-drawer-root .ant-menu-item:hover a,
.lp-drawer-root .ant-menu-submenu-title:hover { color: #99171C !important; }

/* ===== Contact button ===== */
.lp-contact-btn {
  display:inline-flex; align-items:center; gap:8px;
  font-weight:700; font-size:12px; letter-spacing:.02em;
  color:#fff; background:transparent; white-space:nowrap !important; opacity:.95;
  border:1px solid #fff !important; border-radius:10px; padding:2px 10px;
  box-shadow:0 0 3px 1px rgba(207,207,207,.35);
  transition: color .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.lp-contact-btn:hover, .lp-contact-btn:focus { color:#99171C !important; border-color:#99171C; box-shadow:0 0 0 2px rgba(93,91,91,.15); }
@media (max-width:520px){
  .lp-contact-btn { font-size:11px !important; padding-inline:10px !important; height:30px !important; line-height:30px !important; }
}

/* ===== Minimal inline ISO (keep trophy icon always visible) ===== */
.lp-iso-inline {
  display:inline-flex !important; align-items:center; gap:8px;
  line-height:2.3; font-weight:700; font-size:12px; letter-spacing:.02em;
  color:#111; background:#fff; border:0; border-radius:10px; padding:2px 10px; white-space:nowrap; text-decoration:none; margin-top:10px;
}
.lp-iso-inline:hover, .lp-iso-inline:focus, .lp-iso-inline:active { color:#111; background:#fff; border:0; text-decoration:none; }
.lp-iso-inline__icon { display:inline-block !important; visibility:visible !important; opacity:1 !important; font-size:13px; color:#FFC107; }

/* phones: NEVER hide the icon; only simplify the pill */
@media (max-width:600px){
  .lp-iso-inline{
    background:transparent !important; color:inherit !important; border:0 !important; border-radius:0 !important;
    padding:0 !important; margin-top:0 !important; line-height:1.4 !important; white-space:normal !important; gap:6px;
  }
  .lp-iso-inline__icon{ display:inline-block !important; }
}

/* ≤562px: hide only the text label (keep icon) */
@media (max-width:562px){ .lp-iso-inline__label { display:none !important; } }

/* Tiny tooltip when label is hidden */
@media (max-width:562px){
  .lp-iso-inline{ position:relative; }
  .lp-iso-inline:hover::after, .lp-iso-inline:focus-within::after{
    content: attr(data-label);
    position:absolute; top:100%; left:50%; transform:translateX(-50%);
    white-space:nowrap; background:rgba(0,0,0,.88); color:#fff;
    padding:4px 8px; border-radius:6px; font-size:10.5px; line-height:1.2; margin-top:4px; z-index:1200; pointer-events:none;
  }
}

/* ---------------------------------------------
   Spacing under header on small displays
---------------------------------------------- */
@media (max-width:1145px){ .lp-header-compact .lp-container { margin-bottom:17px !important; } }

/* Responsive paddings */
@media (max-width:1280px){ .lp-container { padding-left:32px !important; padding-right:32px !important; } }
@media (max-width:1145px){
  .lp-container { padding-left:16px !important; padding-right:16px !important; }
  .lp-brand__img{ height:26px; } .lp-brand__text{ font-size:17px; }
}
/* tiny screens */
@media (max-width:640px){
  .lp-topbar .lp-ut-group > *:nth-child(3) { display:none !important; } /* hide long address */
  .lp-brand__img{ height:24px; } .lp-brand__text{ font-size:16px; }
}
  
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
const TOPBAR: CSSProperties = { borderBottom: "1px solid rgba(255,255,255,0.25)", background: "transparent" };
const MAINBAR: CSSProperties = { background: "transparent", padding: 0, borderBottom: "1px solid rgba(255,255,255,0.18)" };

const NAV_LINK_DESKTOP: CSSProperties = { color: "#fff", opacity: 0.9, fontWeight: 500, fontSize: 13 };
const DROPDOWN_LINK_DESKTOP: CSSProperties = { color: "#111827", opacity: 0.95, fontWeight: 500, fontSize: 13 };
const NAV_LINK_MOBILE: CSSProperties = { color: "#111827", opacity: 1, fontWeight: 600, fontSize: 14 };

const TOPBAR_TEXT: CSSProperties = { color: "#fff", opacity: 0.85, fontSize: 11 };
const GRADIENT_BTN: CSSProperties = { border: "none", borderRadius: 10, fontWeight: 600, fontSize: 12 };
const SOCIAL_ICON_LINK: CSSProperties = { color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center" };

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
  <Link to="/" className="lp-brand" aria-label="LinkPlus IT — Home">
    <img src={lpLogo} alt="" className="lp-brand__img" />
    <span className="lp-brand__text">LINKPLUS&nbsp;IT</span>
  </Link>
);

/* ---------- ISO (trophy always visible) ---------- */
const IsoInline: React.FC = () => (
  <Tooltip
    title="ISO 9001:2015 Quality Management & ISO/IEC 27001 Information Security"
    placement="bottomRight"
  >
    <span
      className="lp-iso-inline"
      aria-label="ISO certifications"
      data-label="ISO 9001:2015 & 27001 CERTIFIED"   // <-- restored for hover text on small screens
    >
      <TrophyOutlined className="lp-iso-inline__icon" />
      <span className="lp-iso-inline__label">ISO 9001:2015 & 27001 CERTIFIED</span>
    </span>
  </Tooltip>
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

  const desktop = makeItems(NAV_LINK_DESKTOP, DROPDOWN_LINK_DESKTOP);
  const mobile  = makeItems(NAV_LINK_MOBILE,  NAV_LINK_MOBILE);
  return { desktop, mobile };
}

/* ---------- top utility bar ---------- */
const UtilityBar: React.FC = () => (
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
                Str.Tirana, Icon Tower – 12th Floor, no.46, Prishtine, 10000, Kosovo
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
    <div style={WRAP}>
      <style>{FORCE_CSS}</style>

      <UtilityBar />

      <Header className="lp-header-compact" style={MAINBAR}>
        <div className="lp-container">
          <Row align="middle" gutter={12} wrap={false}>
            {/* Logo */}
            <Col>
              <Logo />
            </Col>

            {/* Nav (left) */}
            <Col flex="auto" style={{ display: "flex", justifyContent: "flex-start", minWidth: 0 }}>
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
                  icon={<MenuOutlined />}
                  onClick={() => setOpen(true)}
                  style={{ color: "#fff", fontSize: 18 }}
                  aria-label="Open menu"
                />
              )}
            </Col>

            {/* Right side: ISO (inline) + Contact */}
            <Col flex="none" style={{ whiteSpace: "nowrap" }}>
              <Space size={16} align="center" style={{ color: "#fff", padding: "15px" }}>
                <IsoInline />
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
        rootClassName="lp-drawer-root"     /* target the portal root (mask + panel) */
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
