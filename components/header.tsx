import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3 sm:py-4">
        <Link
          href="/"
          className="mr-auto font-mono text-sm font-medium tracking-tight whitespace-nowrap text-foreground"
        >
          tejas morkar
        </Link>
        <nav
          aria-label="Section navigation"
          className="order-last flex w-full items-center gap-x-5 overflow-x-auto text-sm text-muted [scrollbar-width:none] sm:order-none sm:w-auto sm:overflow-visible"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
