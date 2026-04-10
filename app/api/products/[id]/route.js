import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET single product
export async function GET(req, { params }) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" });
  }
}

// UPDATE product
export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(params.id) },
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
        image: body.image,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" });
  }
}

// DELETE product
export async function DELETE(req, { params }) {
  try {
    await prisma.product.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" });
  }
}