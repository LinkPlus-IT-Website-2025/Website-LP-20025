// /api/contact.ts
// Vercel serverless function: receives JSON and sends email via Resend

import { Resend } from "resend";

/**
 * 🔑 Where the API key comes from:
 * - Prefer: process.env.RESEND_API_KEY (set in Vercel Environment Variables or .env.local)
 * - Fallback: the literal string below (so you can SEE where to paste if you really want)
 *   Replace "REPLACE_WITH_YOUR_RESEND_API_KEY" with your key starting with re_...
 */
const RESEND_KEY =
  process.env.RESEND_API_KEY || "re_RBxmHUy1_5eCxak2gGWx98xmv4qtR44Gm";

const resend = new Resend(RESEND_KEY);

// Where the email is sent
const TO = ["d.lika@linkplus-it.com"];

/**
 * From/sender:
 * - For first tests, this works without domain setup: onboarding@resend.dev
 * - After you verify your domain in Resend, change to something like:
 *   "LinkPlus Website <no-reply@linkplus-it.com>"
 */
const FROM =
  process.env.MAIL_FROM || "LinkPlus Website <onboarding@resend.dev>";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Body can be string or object depending on runtime
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const subject = `New contact form: ${firstName} ${lastName}`;
    const text = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      (message || "(no message)").trim(),
    ].join("\n");

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("contact API error:", e);
    res.status(500).json({ error: "Failed to send email" });
  }
}
