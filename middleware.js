import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  // 🌐 Public routes (always allowed)
  if (
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/products")
  ) {
    return NextResponse.next();
  }

  // 🔒 Protected routes
  if (
    pathname.startsWith("/home/cart") ||
    pathname.startsWith("/home/checkout")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/cart/:path*",
    "/home/checkout/:path*",
  ],
};