import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import CheckoutButton from "@/components/CheckoutButton";
import Image from "next/image";

export default async function CheckoutPage({ searchParams }) {
  const params = await searchParams;
   let selectedIds = [];

  try {
    selectedIds = params.items
      ? JSON.parse(params.items)
      : [];
  } catch {
    selectedIds = [];
  }
  console.log("Selected IDs:", selectedIds);
  try {
    // ✅ Get session safely
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return <h2>Please login</h2>;
    }

    // ✅ Find user safely
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return <h2>User not found</h2>;
    }

    // ✅ Get cart safely
    const cart = await prisma.cart.findFirst({
  where: { userId: user.id },
  include: {
    items: {
      where: {
        id: { in: selectedIds }, // ✅ filter here
      },
      include: {
        product: true,
      },
    },
  },
});

    const items = cart?.items ?? [];

    // ✅ Calculate total safely
    const total = items.reduce((acc, item) => {
      const price = item.product?.price || 0;
      return acc + price * item.quantity;
    }, 0);

    return (
      <div style={{ padding: "20px" }}>
        <h1>Checkout</h1>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id}>
              <Image src={item.product?.image} alt={item.product?.name} width={100} height={100} />
              <p>{item.product?.name}</p>
              <p>₹{item.product?.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          ))
        )}

        <h2>Total: ₹{total}</h2>

        <CheckoutButton />
      </div>
    );
  } catch (error) {
    console.error("Checkout Error:", error);

    return (
      <div style={{ padding: "20px" }}>
        <h2>Something went wrong ⚠️</h2>
        <p>Please try again later</p>
      </div>
    );
  }
}