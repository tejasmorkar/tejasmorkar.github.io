import type { Metadata } from "next";
import { ROLES, EDUCATION, SKILLS } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history, education, and the tools I reach for.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Experience</h1>

      <ol className="mt-10">
        {ROLES.map((role) => (
          // A transition keeps the timeline line unbroken into the next
          // (older) entry. A job switch leaves a gap.
          <li
            key={role.company}
            className={`border-l border-border pl-6 ${role.transition ? "pb-8" : "mb-10"}`}
          >
            <h2 className="font-medium text-foreground">{role.company}</h2>
            <p className="mt-1 font-mono text-xs text-muted">
              {role.dateRange} · {role.location}
            </p>

            {role.positions.length > 1 ? (
              <ol className="mt-4 space-y-3">
                {role.positions.map((position, i) => (
                  <li key={position.title} className="relative pl-5">
                    <span
                      aria-hidden
                      className={`absolute top-1.5 left-0 size-2 rounded-full ${
                        i === 0
                          ? "bg-accent"
                          : "border border-muted bg-background"
                      }`}
                    />
                    {i < role.positions.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-4 left-[3.5px] h-[calc(100%-0.25rem)] w-px bg-border"
                      />
                    )}
                    <p className="text-sm font-medium text-foreground">
                      {position.title}
                    </p>
                    <p className="font-mono text-xs text-muted">
                      {position.dateRange}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-2 text-sm font-medium text-foreground">
                {role.positions[0].title}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {role.summary}
            </p>
            {role.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            {role.transition && (
              <p className="mt-6 inline-flex items-start gap-2 rounded-md border border-border bg-surface px-3 py-2 text-xs leading-relaxed text-muted">
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-0.5 size-3.5 shrink-0 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 13V3M4 7l4-4 4 4"
                  />
                </svg>
                {role.transition}
              </p>
            )}
          </li>
        ))}

        <li className="border-l border-border pl-6">
          <h2 className="font-medium text-foreground">{EDUCATION.school}</h2>
          <p className="mt-1 text-sm text-muted">{EDUCATION.degree}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {EDUCATION.dateRange}
          </p>
        </li>
      </ol>

      <h2 className="mt-14 text-lg font-semibold tracking-tight">Skills</h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
