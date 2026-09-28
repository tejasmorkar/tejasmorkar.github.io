"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";

const noopSubscribe = () => () => {};
const TOAST_MS = 3500;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR and hydration, true on the client, since the theme is unknown until then.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), TOAST_MS);
    return () => clearTimeout(timer);
  }, [showToast]);

  if (!mounted) {
    return <div className="size-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  function handleClick() {
    if (isDark) {
      dialogRef.current?.showModal();
    } else {
      setTheme("dark");
      setShowToast(true);
    }
  }

  function goLight() {
    dialogRef.current?.close();
    setShowToast(false);
    setTheme("light");
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
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

      <dialog
        ref={dialogRef}
        aria-labelledby="light-warning-title"
        className="m-auto w-[min(26rem,calc(100%-2rem))] rounded-xl border border-border bg-background p-6 text-foreground shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <p className="font-mono text-xs tracking-wide text-accent uppercase">
          Flashbang warning
        </p>
        <h2 id="light-warning-title" className="mt-2 text-lg font-semibold">
          Whoa, hold on!
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Light mode is about to hit your eyes at 300&nbsp;km/h. MotoGP riders pull
          their visor down for less. Are you sure you want to continue?
        </p>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Stay in the dark
          </button>
          <button
            type="button"
            onClick={goLight}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Visor down, let&apos;s go
          </button>
        </div>
      </dialog>

      {createPortal(
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
        >
          {showToast && (
            <p className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-lg">
              <span className="font-semibold text-accent">+1</span> for your
              eyes! Good call, light attracts bugs anyway.
            </p>
          )}
        </div>,
        document.body,
      )}
    </>
  );
}
