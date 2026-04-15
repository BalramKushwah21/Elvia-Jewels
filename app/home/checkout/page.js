import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import CheckoutButton from "@/components/CheckoutButton";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);

  if (!session) return <h2>Please login</h2>;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const cart = await prisma.cart.findFirst({
    where: { userId: user.id },
    include: {
      items: {
        include: { product: true },
      },
    },
  });

  const items = cart?.items || [];

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      {items.map((item) => (
        <div key={item.id}>
          <p>{item.product.name}</p>
          <p>₹{item.product.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <CheckoutButton />
    </div>
  );
}