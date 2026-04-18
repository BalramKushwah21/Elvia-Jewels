import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

// ✅ GET → fetch all orders
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: { product: true },
        },
        user: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return Response.json(orders);
  } catch (error) {
    console.error(error);
    return new Response("Error fetching orders", { status: 500 });
  }
}

// ✅ POST → create order
export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return new Response("Unauthorized", { status: 401 });
    }

    // ✅ Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // ✅ Get cart
    const cart = await prisma.cart.findFirst({
      where: { userId: user.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return new Response("Cart empty", { status: 400 });
    }

    // ✅ Calculate total
    const totalAmount = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    // ✅ Create order
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        total: totalAmount,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
    });

    return Response.json(order);

  } catch (error) {
    console.error(error);
    return new Response("Error creating order", { status: 500 });
  }
}