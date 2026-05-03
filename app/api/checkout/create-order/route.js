import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 🔍 Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    // 🛒 Get cart
    const cart = await prisma.cart.findFirst({
      where: { userId: user.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: "Cart empty" }, { status: 400 });
    }

    // 🔐 Calculate amount (SERVER ONLY)
    const amount = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity * 100,
      0
    );

    // 💳 Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
    });

    // 🧾 Save Order in DB
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        amount,
        status: "pending",
        razorpayOrderId: razorpayOrder.id,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price * 100,
          })),
        },
      },
    });

    return NextResponse.json({
      orderId: order.id,
      razorpayOrderId: razorpayOrder.id,
      amount,
      key: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}