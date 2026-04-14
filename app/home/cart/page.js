import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export default async function CartPage() {
  const session = await getServerSession(authOptions);

  let cartItems = [];

  // ✅ If logged in → fetch from DB
  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (user) {
      const cart = await prisma.cart.findFirst({
        where: { userId: user.id },
        include: {
          items: {
            include: {
              product: true, // 🔥 important
            },
          },
        },
      });

      cartItems = cart?.items || [];
    }
  }

  // ✅ calculate total
  const total = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {/* 🔓 Guest mode */}
      {!session && (
        <p style={{ color: "gray" }}>
          You are browsing as guest. Login to save your cart.
        </p>
      )}

      {/* 🛒 Cart items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <p><b>{item.product.name}</b></p>
            <p>₹{item.product.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}

      {/* 💰 Total */}
      <h2>Total: ₹{total}</h2>

      {/* 💳 Checkout */}
      {total > 0 && (
        <button>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}