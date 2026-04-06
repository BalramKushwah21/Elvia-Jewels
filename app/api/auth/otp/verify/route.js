// app/api/auth/otp/verify/route.js

import prisma from "@/lib/prisma";
import { signAccessToken, signRefreshToken } from "@/lib/auth.server";

export async function POST(req) {
  const { email, code } = await req.json();

  const record = await prisma.oTP.findFirst({
    where: { email, code },
  });

  if (!record) {
    return Response.json({ error: "Invalid OTP" });
  }

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: { email, name: email.split("@")[0] },
    });
  }

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  const res = Response.json({ success: true });

  res.cookies.set("accessToken", accessToken);
  res.cookies.set("refreshToken", refreshToken);

  return res;
}