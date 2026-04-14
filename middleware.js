import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // 🌐 Public routes
  if (
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/home/cart") // ✅ allow cart
  ) {
    return NextResponse.next();
  }

  // 🔒 Protected routes (ONLY checkout + admin)
  if (
    pathname.startsWith("/home/checkout") ||
    pathname.startsWith("/admin")
  ) {
    const token = req.cookies.get("next-auth.session-token");

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/checkout/:path*",
    "/admin/:path*",
  ],
};