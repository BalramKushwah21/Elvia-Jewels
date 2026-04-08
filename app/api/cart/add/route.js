import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth.server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId } = await req.json();

    // 1. Find or create cart
    let cart = await prisma.cart.findUnique({
      where: { userId: user.id },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: user.id,
        },
      });
    }

    // 2. Check if product already in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    if (existingItem) {
      // 3. Increase quantity
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + 1 },
      });
    } else {
      // 4. Create new item
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
        },
      });
    }

    return NextResponse.json({ message: "Added to cart" });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}