// app/dashboard/admin/orders/page.js

"use client";

import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map(o => (
        <div key={o.id}>
          <p>₹{o.amount}</p>
          <p>{o.status}</p>
        </div>
      ))}
    </div>
  );
}