"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const noopSubscribe = () => () => {};
const CONGRATS_MS = 3000;

type Popover = "none" | "warn" | "congrats";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR and hydration, true on the client, since the theme is unknown until then.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const [popover, setPopover] = useState<Popover>("none");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const stayRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (popover === "congrats") {
      const timer = setTimeout(() => setPopover("none"), CONGRATS_MS);
      return () => clearTimeout(timer);
    }
    if (popover !== "warn") return;

    stayRef.current?.focus();
    const close = () => {
      setPopover("none");
      toggleRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setPopover("none");
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [popover]);

  if (!mounted) {
    return <div className="size-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  function handleClick() {
    if (isDark) {
      setPopover(popover === "warn" ? "none" : "warn");
    } else {
      setTheme("dark");
      setPopover("congrats");
    }
  }

  function goLight() {
    setPopover("none");
    setTheme("light");
    toggleRef.current?.focus();
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={toggleRef}
        type="button"
        onClick={handleClick}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-expanded={popover === "warn"}
        aria-controls="theme-popover"
        className="flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="size-[18px]"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="size-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            />
          </svg>
        )}
      </button>

      {popover === "warn" && (
        <div
          id="theme-popover"
          role="dialog"
          aria-labelledby="theme-popover-title"
          className="absolute top-full right-0 z-20 mt-2 w-64 rounded-lg border border-border bg-surface p-3 text-left shadow-lg"
        >
          <p
            id="theme-popover-title"
            className="text-sm font-medium text-foreground"
          >
            Flashbang warning!
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            Light mode hits your eyes at 300&nbsp;km/h. MotoGP riders pull their
            visor down for less.
          </p>
          <div className="mt-3 flex justify-end gap-2">
            <button
              ref={stayRef}
              type="button"
              onClick={() => {
                setPopover("none");
                toggleRef.current?.focus();
              }}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Stay dark
            </button>
            <button
              type="button"
              onClick={goLight}
              className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Visor down
            </button>
          </div>
        </div>
      )}
      <div role="status" aria-live="polite">
        {popover === "congrats" && (
          <p className="absolute top-full right-0 z-20 mt-2 w-max max-w-64 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-foreground shadow-lg">
            <span className="font-semibold text-accent">+1</span> for your eyes!
            Good call, light attracts bugs anyway.
          </p>
        )}
      </div>
    </div>
  );
}
