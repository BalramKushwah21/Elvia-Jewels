// app/api/admin/orders/route.js

import { prisma } from "@/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: { items: true },
  });

  return Response.json(orders);
}