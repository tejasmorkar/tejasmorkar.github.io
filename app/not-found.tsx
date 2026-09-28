import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Nothing here.
      </h1>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
      >
        Back home
      </Link>
    </div>
  );
}
