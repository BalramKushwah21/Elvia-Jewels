import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields required" },
      { status: 400 }
    );
  }

  // 🔍 Find user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  // 🔐 Compare password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return NextResponse.json(
      { message: "Invalid password" },
      { status: 401 }
    );
  }

  // 🎟️ Generate JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const res = NextResponse.json({ message: "Login successful" });

  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}