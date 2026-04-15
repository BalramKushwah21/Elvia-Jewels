"use client";

export default function CheckoutButton() {
  const handlePayment = async () => {
    // 1️⃣ Create order
    const res = await fetch("/api/checkout/create-order", {
      method: "POST",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
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
          window.location.href = "/success";
        } else {
          alert("Payment verification failed");
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}