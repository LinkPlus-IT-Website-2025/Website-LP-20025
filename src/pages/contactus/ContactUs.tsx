// src/pages/contactus/ContactUs.tsx
import React, { useMemo, useState } from "react";
import styles from "./ContactUs.module.scss";
import heroImg from "../../assets/images/pic4.jpg";

const TO_EMAIL = "info@linkplus.com";
const ADDRESS =
  "Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo";
const ADDRESS1 =
  "Boris Trajkovski 1/2 - 75 Skopje 1000, North Macedonia";

const MAP_LAT = 42.655479;
const MAP_LNG = 21.1516511;
const ZOOM = 18;
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=en&z=${ZOOM}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}&zoom=${ZOOM}`;

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs: React.FC = () => {
  const [data, setData] = useState<FormState>(initial);
  const [toast, setToast] = useState<null | { type: "ok" | "err"; text: string }>(
    null
  );
  const [submitting, setSubmitting] = useState(false);

  const onChange =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  const isValid = useMemo(() => {
    if (!data.firstName || !data.lastName || !data.email || !data.phone)
      return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  }, [data]);

  // JS submit to Netlify (no navigation). Works locally (fake) and on Netlify (real).
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || submitting) return;
    setSubmitting(true);
    setToast(null);

    try {
      const isLocal =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1");

      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.set("form-name", "contact"); // important for Netlify

      if (isLocal) {
        // Avoid 404 in Vite dev server
        await new Promise((r) => setTimeout(r, 350));
      } else {
        // Netlify production: post to "/"
        await fetch("/", { method: "POST", body: formData });
      }

      setData(initial);
      form.reset();
      setToast({
        type: "ok",
        text: isLocal
          ? "Thanks! (dev mode) We received your message."
          : "Thanks! We received your message.",
      });
    } catch {
      setToast({ type: "err", text: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
      setTimeout(() => setToast(null), 4000);
    }
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
                  <span className={styles.icon}>
                    <PinIcon />
                  </span>
                  <div className={styles.texts}>
                    <p className={styles.label}>Location</p>
                    <p className={styles.value}>{ADDRESS}</p>
                    <p className={styles.value}>{ADDRESS1}</p>
                  </div>
                </li>

                <li className={styles.row}>
                  <span className={styles.icon}>
                    <MailIcon />
                  </span>
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
              <h3 id="formTitle" className={styles.formTitle}>
                Ready to Get Started?
              </h3>
              <p className={styles.formNote}>
                Your email address will not be published. Required fields are
                marked <strong>*</strong>
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className={styles.grid2}>
                  <input
                    className={styles.input}
                    placeholder="First Name*"
                    name="firstName"
                    value={data.firstName}
                    onChange={onChange("firstName")}
                    required
                  />
                  <input
                    className={styles.input}
                    placeholder="Last Name*"
                    name="lastName"
                    value={data.lastName}
                    onChange={onChange("lastName")}
                    required
                  />
                </div>

                <div className={styles.grid2}>
                  <input
                    className={styles.input}
                    placeholder="Phone Number*"
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={onChange("phone")}
                    required
                  />
                  <input
                    className={styles.input}
                    placeholder="Your email*"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChange("email")}
                    required
                  />
                </div>

                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="How Can We Assist Your Aesthetic Needs..."
                  rows={5}
                  name="message"
                  value={data.message}
                  onChange={onChange("message")}
                />

                {!isValid && (
                  <div className={styles.error}>
                    Please fill all required fields with a valid email.
                  </div>
                )}

                <button
                  type="submit"
                  className={`${styles.submit} ${
                    !isValid || submitting ? styles.disabled : ""
                  }`}
                  disabled={!isValid || submitting}
                >
                  <span>{submitting ? "Sending…" : "SEND VIA EMAIL"}</span>
                  <span className={styles.submitArrow} aria-hidden>
                    ↗
                  </span>
                </button>

                {toast && (
                  <div
                    role="status"
                    className={
                      toast.type === "ok" ? styles.toastOk : styles.toastErr
                    }
                    style={{ marginTop: 12 }}
                  >
                    {toast.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* MAP */}
      <section className={styles.mapSection} aria-label="Map">
        <div className={styles.mapWrap}>
          <iframe
            className={styles.mapIframe}
            src={MAP_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Map to ${ADDRESS}`}
            title="Google Map"
          />
          <a
            className={styles.mapOverlay}
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in Google Maps"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
