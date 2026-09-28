import type { Metadata } from "next";
import { PCCOE_SESSIONS } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "PCCoE Sessions",
  description: "Session materials for PCCoE students, shared by an alum.",
  robots: { index: false, follow: false },
};

export default function PccoePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        PCCoE session archive
      </h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Material from the sessions I take for students at PCCoE, my college.
        This page is shared directly with students and faculty, so it
        isn&apos;t in the site menu.
      </p>

      <ul className="mt-10 space-y-4">
        {PCCOE_SESSIONS.map((session) => (
          <li key={session.href}>
            <a
              href={session.href}
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              {session.title}
            </a>
            <p className="font-mono text-xs text-muted">{session.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
