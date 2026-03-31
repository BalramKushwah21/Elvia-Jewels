import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const runtime = "nodejs";

export async function POST(req) {
  const {name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields required" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 401 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ message: "User registered successfully💐" } ,{status: 201});
}