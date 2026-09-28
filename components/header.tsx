import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          tejas morkar
        </Link>
        <nav
          aria-label="Section navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
