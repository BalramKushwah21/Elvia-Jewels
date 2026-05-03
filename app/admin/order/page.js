import styles from "./order.module.css";
import { prisma } from "@/lib/prisma";

async function getOrders() {
  return prisma.order.findMany({
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Customer Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={styles.card}>
            
            <div className={styles.header}>
              <p><strong>Order:</strong> {order.id}</p>
              <p><strong>User:</strong> {order.user?.email}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>

            <div className={styles.products}>
              {order.items.map((item) => (
                <div key={item.id} className={styles.product}>
                  <img
                    src={item.product.image || "/placeholder.png"}
                    className={styles.image}
                    alt={item.product.name}
                  />
                  <div>
                    <p>{item.product.name}</p>
                    <p>₹{item.product.price}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className={styles.total}>
              Total: ₹{order.amount / 100}
            </h3>

          </div>
        ))
      )}
    </div>
  );
}