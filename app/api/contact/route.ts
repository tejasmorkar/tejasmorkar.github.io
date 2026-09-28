import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
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
