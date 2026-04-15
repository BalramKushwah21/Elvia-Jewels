import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    // 🔐 AUTH CHECK
    if (!session) {
      return Response.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const { productId, quantity } = await req.json();

    // ❌ DON'T convert to number (your IDs are strings)
    // const pid = Number(productId); ❌ REMOVE

    // ✅ Find user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // ✅ Find or create cart
    let cart = await prisma.cart.findFirst({
      where: { userId: user.id },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: user.id },
      });
    }

    // ✅ Check existing item
    const existing = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId, // 🔥 string 그대로
      },
    });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: {
          quantity: { increment: 1 },
        },
      });

      return Response.json(updated);
    }

    // ✅ Create new item
    const item = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: productId,
        quantity: quantity || 1,
      },
    });

    return Response.json(item);

  } catch (err) {
    console.error("CART ERROR:", err);

    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
} 