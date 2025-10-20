import { NextRequest, NextResponse } from "next/server";

// Paths that should be publicly accessible (prefix-matching)
const PUBLIC_PATH_PREFIXES = ["/login", "/register", "/api/auth/"];

// Paths to protect (prefix-matching). For now protect the root and any subpaths you add.
const PROTECTED_PATH_PREFIXES = ["/"];

// Route we redirect unauthenticated users to
const LOGIN_ROUTE = "/login";

function isStaticAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico"
  );
}

function isApiRoute(pathname: string) {
  return pathname.startsWith("/api");
}

function matchesPrefix(prefixes: string[], pathname: string) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets, Next internals and API routes to pass through
  if (isStaticAsset(pathname) || isApiRoute(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get("session")?.value;

  // Public pages (login/register) don't require a session
  if (matchesPrefix(PUBLIC_PATH_PREFIXES, pathname)) {
    return NextResponse.next();
  }

  // If this is a protected path and the user is not authenticated, redirect to login
  const isProtected = matchesPrefix(PROTECTED_PATH_PREFIXES, pathname);
  if (isProtected && !session) {
    const url = request.nextUrl.clone();
    url.pathname = LOGIN_ROUTE;
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  // Otherwise allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
