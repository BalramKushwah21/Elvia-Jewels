import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const cart = await prisma.cart.findFirst({
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      items: cart?.items || [],
    });

  } catch (error) {
    console.error("Cart fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        items: [],
        error: "Failed to fetch cart",
      },
      { status: 500 }
    );
  }
}