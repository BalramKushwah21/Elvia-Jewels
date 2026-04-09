// app/api/order/checkout/route.js

import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth.server";

export async function POST() {
  const user = getUserFromToken();
  if (!user) return Response.json({ error: "Unauthorized" });

  const cartItems = await prisma.cartItem.findMany({
    where: { cartId: user.id },
  });

  if (!cartItems.length) {
    return Response.json({ error: "Cart empty" });
  }

  let total = 0;

  for (const item of cartItems) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId },
    });

    // 🔥 VALIDATION
    if (!product) continue;
    if (product.stock < item.quantity) {
      return Response.json({ error: "Out of stock" });
    }

    total += product.price * item.quantity;
  }

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      amount: total,
    },
  });

  // reduce stock
  for (const item of cartItems) {
    await prisma.product.update({
      where: { id: item.productId },
      data: {
        stock: { decrement: item.quantity },
      },
    });
  }

  return Response.json(order);
}