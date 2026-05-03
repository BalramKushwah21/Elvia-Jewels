"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") return resolve(false);

      // Already loaded
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const isLoaded = await loadRazorpay();

    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    // 1️⃣ Create order
    const res = await fetch("/api/checkout/create-order", {
      method: "POST",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      setLoading(false);
      return;
    }

    const options = {
      key: data.key,
      amount: data.amount,
      currency: "INR",
      name: "Elvia Jewels",
      order_id: data.razorpayOrderId,

      handler: async function (response) {
        // 2️⃣ Verify payment
        const verifyRes = await fetch("/api/checkout/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...response,
            app_order_id: data.orderId,
          }),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
          window.location.href = "/user/success";
        } else {
          alert("Payment verification failed");
        }
      },

      modal: {
        ondismiss: () => {
          console.log("Payment popup closed");
        },
      },

      theme: {
        color: "#C89B3C", // luxury vibe for jewels ✨
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}