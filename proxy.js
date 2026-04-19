import { NextResponse } from "next/server";

export function proxy(req) {
  const { pathname } = req.nextUrl;

  // ✅ ALWAYS allow NextAuth routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 🌐 Public routes
  if (
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/home/cart")
  ) {
    return NextResponse.next();
  }

  // 🔒 Protected routes
  if (pathname.startsWith("/home/checkout")) {
    const token = req.cookies.get("next-auth.session-token");

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/checkout/:path*"],
};