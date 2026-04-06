// app/api/payment/create/route.js

import { razorpay } from "@/lib/razorpay";

export async function POST(req) {
  const { amount } = await req.json();

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  return Response.json(order);
}