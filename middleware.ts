import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// /pccoe/<slug> (no trailing slash) needs to become /pccoe/<slug>/ so the
// deck's relative asset paths (vendor/..., deck.js) resolve correctly in the
// browser. Checked as an exact string here rather than in next.config.ts's
// redirects(), because that config's route matching treats a trailing slash
// as optional and a redirect rule defined there loops on the already-slashed
// request.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (/^\/pccoe\/[^/]+$/.test(pathname)) {
    // Built from a plain URL rather than request.nextUrl.clone() — cloning
    // and reassigning .pathname on a NextURL silently strips the trailing
    // slash again (it normalizes per the site's default trailingSlash:false),
    // which is exactly the loop this redirect exists to avoid.
    return NextResponse.redirect(
      new URL(`${pathname}/${request.nextUrl.search}`, request.url),
      308,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/pccoe/:path*",
};
