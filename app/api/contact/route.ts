import { NextResponse } from "next/server";
import { Resend } from "resend";

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: pretend success so the bot doesn't retry.
  if (field(body.website)) {
    return NextResponse.json({ ok: true });
  }

  // Newlines stripped: the name goes into the email subject line.
  const name = field(body.name).replace(/[\r\n]+/g, " ");
  const email = field(body.email);
  const message = field(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "That message is too long." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form submission blocked: RESEND_API_KEY and/or CONTACT_TO_EMAIL env vars are not set.",
    );
    return NextResponse.json(
      {
        error:
          "Contact form isn't configured yet — RESEND_API_KEY and CONTACT_TO_EMAIL need to be set.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "tejasmorkar.dev <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New message from ${name} via tejasmorkar.dev`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Failed to send — try again or email me directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
