// app/api/auth/refresh/route.js

import { prisma } from "@/lib/prisma";
import { signAccessToken } from "@/lib/auth.server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const refreshToken = cookies().get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token" }, { status: 401 });
  }

  const decoded = verifyRefresh(refreshToken);
  if (!decoded) {
    return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
  });

  if (!user || user.refreshToken !== refreshToken) {
    return NextResponse.json({ error: "Token mismatch" }, { status: 401 });
  }

  const newAccessToken = signAccessToken(user);

  const res = NextResponse.json({ success: true });

  res.cookies.set("accessToken", newAccessToken, {
    httpOnly: true,
    maxAge: 60 * 15,
    path: "/",
  });

  return res;
}