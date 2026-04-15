import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      app_order_id,
    } = await req.json();

    // 🔐 Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // ✅ Update order
    const order = await prisma.order.update({
      where: { id: app_order_id },
      data: {
        status: "paid",
        razorpayPaymentId: razorpay_payment_id,
      },
    });

    // 🧹 Clear cart
    const cart = await prisma.cart.findFirst({
      where: { userId: order.userId },
    });

    if (cart) {
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("VERIFY ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}