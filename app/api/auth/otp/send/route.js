// app/api/auth/otp/send/route.js

import prisma from "@/lib/prisma";

export async function POST(req) {
  const { email } = await req.json();

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.oTP.create({
    data: {
      email,
      code,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    },
  });

  console.log("OTP:", code);

  return Response.json({ success: true });
}