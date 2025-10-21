// src/pages/contactus/ContactUs.tsx
import React, { useMemo, useState } from "react";
import styles from "./ContactUs.module.scss";

/* ✅ hero image */
import heroImg from "../../assets/images/pic4.jpg";

/* === Recipient email === */
const TO_EMAIL = "info@linkplus.com";

/* === Address & exact coordinates (street-level zoom) === */
const ADDRESS =
  "Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo";
const MAP_LAT = 42.655479;
const MAP_LNG = 21.1516511;
const ZOOM = 18;

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=en&z=${ZOOM}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}&zoom=${ZOOM}`;

/* Icons */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

/* Form state */
type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
const initial: FormState = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function buildMailtoHref(d: FormState) {
  const subject = `New contact form: ${d.firstName} ${d.lastName}`;
  const safeMsg = (d.message || "").slice(0, 1600);
  const body = encodeURIComponent(
    [
      `Name: ${d.firstName} ${d.lastName}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      "",
      "Message:",
      safeMsg || "(no message)",
    ].join("\n")
  );
  return `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

const ContactUs: React.FC = () => {
  const [data, setData] = useState<FormState>(initial);
  const [showMailHint, setShowMailHint] = useState(false);

  const onChange =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  const isValid = useMemo(() => {
    if (!data.firstName || !data.lastName || !data.email || !data.phone) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  }, [data]);

  const mailtoHref = useMemo(() => buildMailtoHref(data), [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    window.location.href = mailtoHref;
    setTimeout(() => setShowMailHint(true), 1200);
  };

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero} aria-label="Contact hero">
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: `linear-gradient(rgba(128,19,23,0.08), rgba(128,19,23,0.08)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroBlob} aria-hidden />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span className={styles.bcSep}>/</span>
            <span>CONTACT US</span>
          </nav>
          <h1 className={styles.heroTitle}>Contact us</h1>
        </div>
      </section>

      {/* CONTENT */}
      <main className={styles.container}>
        <section className={styles.shell} aria-label="Contact content">
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrow}>
                <span className={styles.dot} /> OUR CONTACTS
              </span>
            </div>

            <h2 className={styles.heading}>Reach Out</h2>

            <div className={styles.rowsWrap}>
              <div className={styles.mapWatermark} aria-hidden />
              <ul className={styles.list}>
                <li className={styles.row}>
                  <span className={styles.icon}><PinIcon /></span>
                  <div className={styles.texts}>
                    <p className={styles.label}>Location</p>
                    <p className={styles.value}>{ADDRESS}</p>
                  </div>
                </li>

                <li className={styles.row}>
                  <span className={styles.icon}><MailIcon /></span>
                  <div className={styles.texts}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>{TO_EMAIL}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT (Form) */}
          <div className={styles.right}>
            <div className={styles.formCard} aria-labelledby="formTitle">
              <h3 id="formTitle" className={styles.formTitle}>Ready to Get Started?</h3>
              <p className={styles.formNote}>
                Your email address will not be published. Required fields are marked <strong>*</strong>
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.grid2}>
                  <input className={styles.input} placeholder="First Name*" value={data.firstName} onChange={onChange("firstName")} required />
                  <input className={styles.input} placeholder="Last Name*"  value={data.lastName}  onChange={onChange("lastName")}  required />
                </div>

                <div className={styles.grid2}>
                  <input className={styles.input} placeholder="Phone Number*" type="tel"  value={data.phone} onChange={onChange("phone")} required />
                  <input className={styles.input} placeholder="Your email*"    type="email" value={data.email} onChange={onChange("email")} required />
                </div>

                <textarea className={`${styles.input} ${styles.textarea}`} placeholder="How Can We Assist Your Aesthetic Needs..." rows={5} value={data.message} onChange={onChange("message")} />

                {!isValid && <div className={styles.error}>Please fill all required fields with a valid email.</div>}

                <button type="submit" className={`${styles.submit} ${!isValid ? styles.disabled : ""}`} disabled={!isValid}>
                  <span>SEND VIA EMAIL</span>
                  <span className={styles.submitArrow} aria-hidden>↗</span>
                </button>

                {showMailHint && (
                  <div className={styles.hint} style={{ marginTop: 8 }}>
                    If no email window opened, set a default mail app:
                    <ul>
                      <li>Chrome → open <strong>mail.google.com</strong> → allow “Open email links”.</li>
                      <li>macOS → Mail ▸ Settings ▸ General ▸ Default email reader.</li>
                      <li>Windows → Settings ▸ Apps ▸ Default apps ▸ Choose default by protocol ▸ <code>MAILTO</code>.</li>
                    </ul>
                  </div>
                )}

                <noscript>
                  <p style={{ marginTop: 8 }}>
                    JavaScript disabled. Email <a href={`mailto:${TO_EMAIL}`}>{TO_EMAIL}</a>.
                  </p>
                </noscript>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* MAP */}
      <section className={styles.mapSection} aria-label="Map">
        <div className={styles.mapWrap}>
          <iframe className={styles.mapIframe} src={MAP_EMBED_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-label={`Map to ${ADDRESS}`} title="Google Map" />
          <a className={styles.mapOverlay} href={MAP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Open in Google Maps" />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
