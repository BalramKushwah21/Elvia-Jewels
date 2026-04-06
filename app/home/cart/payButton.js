"use client";

export default function payButton({ amount }) {

  const checkout = async () => {
    if (amount <= 0) {
      alert("Cart is empty");
      return;
    }

    const res = await fetch("/api/payment/create", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      order_id: order.id,

      handler: async function () {
        await fetch("/api/order/checkout", {
          method: "POST",
        });

        alert("Payment Successful!");
        window.location.reload();
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={checkout}>
      Proceed to Payment
    </button>
  );
}