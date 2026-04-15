"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getGuestCart } from "@/lib/cart";

export default function useCartCount() {
  const { data: session } = useSession();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      if (!session) {
        const cart = getGuestCart();
        setCount(cart.length);
      } else {
        const res = await fetch("/api/cart/get");
        const data = await res.json();
        setCount(data.length || 0);
      }
    };

    fetchCount();
  }, [session]);

  return count;
}