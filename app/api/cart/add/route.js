import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth"; // if using auth

export async function POST(req) {
  try {
    const body = await req.json();
    const { productId, quantity } = body;

    if (!productId) {
      return Response.json({ error: "Product ID required" }, { status: 400 });
    }

    // ⚠️ Replace this with your auth logic
    const userId = 1; // TEMP (hardcoded)

    // 1️⃣ Check/Create Cart
    let cart = await prisma.cart.findFirst({
      where: { userId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId,
        },
      });
    }

    // 2️⃣ Check if product already in cart
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    // 3️⃣ Update OR Create
    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + (quantity || 1),
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity: quantity || 1,
        },
      });
    }

    return Response.json({ message: "Added to cart" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}