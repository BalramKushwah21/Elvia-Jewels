import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
console.log("🔥 ADD PRODUCT API HIT");
export async function POST(req) {
  try {
    const { name, description, price, image } = await req.json();

    if (!name || !price) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        stock:10,
        name,
        description,
        price: parseFloat(price),
        image,
      },
    });

    return NextResponse.json({ success: true, product });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}