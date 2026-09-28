import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Or reach me directly at{" "}
        <a href="mailto:tejasmorkar@gmail.com" className="text-accent hover:underline">
          tejasmorkar@gmail.com
        </a>
        .
      </p>
      <ContactForm />
    </div>
  );
}
