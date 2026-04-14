// 🛒 Get guest cart
export function getGuestCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

// ➕ Add to guest cart
export function addToGuestCart(productId, quantity = 1) {
  const cart = getGuestCart();

  const existing = cart.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// 🧹 Clear guest cart
export function clearGuestCart() {
  localStorage.removeItem("cart");
}