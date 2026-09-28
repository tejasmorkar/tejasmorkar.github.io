import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://github.com/tejasmorkar", label: "GitHub" },
  { href: "https://linkedin.com/in/tejasmorkar", label: "LinkedIn" },
  { href: "mailto:tejasmorkar@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link href="/resume" className="transition-colors hover:text-foreground">
            Resume
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Tejas Morkar</p>
      </div>
    </footer>
  );
}
