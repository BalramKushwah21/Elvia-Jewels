"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { getGuestCart, clearGuestCart } from "@/lib/cart";

export default function CartSync() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    const syncCart = async () => {
      const guestCart = getGuestCart();

      if (guestCart.length === 0) return;

      for (const item of guestCart) {
        await fetch("/api/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
      }

      clearGuestCart();
      console.log("Cart synced ✅");
    };

    syncCart();
  }, [session]);

  return null;
}