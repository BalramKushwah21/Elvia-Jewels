import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth.server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cart = await prisma.cart.findUnique({
      where: { userId: user.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    return NextResponse.json(cart || { items: [] });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}