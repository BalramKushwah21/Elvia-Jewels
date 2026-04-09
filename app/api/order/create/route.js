// app/api/order/create/route.js

import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth.server";

export async function POST(req) {
  const user = getUserFromToken();
  const { amount } = await req.json();

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      amount,
    },
  });

  return Response.json(order);
}