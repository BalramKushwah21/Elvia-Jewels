import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
console.log("🔥 ADD PRODUCT API HIT");
export async function POST(req) {
  try {
    const { category,color,gender, name, description, price, stock, image } = await req.json();

    if (!name || !price) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        category,
        color,
        gender,
        stock:parseInt(stock),
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