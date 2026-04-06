// app/api/cart/add/route.js

import prisma from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth.server";

export async function POST(req) {
  const user = getUserFromToken();
  const { productId } = await req.json();

  await prisma.cartItem.create({
    data: {
      productId,
      quantity: 1,
      cartId: user.id,
    },
  });

  return Response.json({ success: true });
}