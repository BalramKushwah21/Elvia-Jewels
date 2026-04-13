export async function POST(req) {
  try {
    const body = await req.json();
    console.log("BODY:", body); // 👈 important

    const { productId, quantity } = body;

    const userId = "1"; // temp

    let cart = await prisma.cart.findFirst({
      where: { userId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + (quantity || 1),
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity: quantity || 1,
        },
      });
    }

    return Response.json({ message: "Added to cart" });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error); // 👈 THIS LINE IS GOLD

    return Response.json(
      { error: error.message }, // 👈 return REAL error
      { status: 500 }
    );
  }
}