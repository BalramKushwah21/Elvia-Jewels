<<<<<<< HEAD
"use client";
import { useState } from "react";

export default function CartPage() {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gold Necklace",
      price: 2500,
      qty: 1,
      img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=500"
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 1800,
      qty: 1,
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500"
    },
    {
      id: 3,
      name: "Luxury Bracelet",
      price: 1500,
      qty: 1,
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500"
    }
  ]);

  const changeQty = (id, val) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        let newQty = item.qty + val;
        if (newQty < 1) newQty = 1;
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = 200;
  const total = subtotal + gst;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.left}>

          {/* Steps */}
          <div style={styles.steps}>
            <span style={styles.active}>🛒 Cart</span>
            <span>Checkout</span>
            <span>Order</span>
          </div>

          {/* Items */}
          {cart.map(item => (
            <div key={item.id} style={styles.item}>

              <img src={item.img} style={styles.img} />

              <div style={styles.details}>
                <h4>{item.name}</h4>
                <p style={{ color: "gray" }}>Premium Jewelry</p>
              </div>

              {/* Quantity */}
              <div style={styles.qty}>
                <button style={styles.qtyBtn} onClick={() => changeQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button style={styles.qtyBtn} onClick={() => changeQty(item.id, 1)}>+</button>
              </div>

              {/* Price */}
              <div style={styles.price}>
                ₹{item.price * item.qty}
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <h3>Elvia Jewels</h3>

          <div style={styles.row}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div style={styles.row}>
            <span>GST</span>
            <span>₹{gst}</span>
          </div>

          <div style={styles.total}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button style={styles.checkout}>
            Place Order 💎
          </button>
        </div>

      </div>
    </div>
  );
}


/* STYLES */
const styles = {

  page: {
    background: "#eef1f5",
    minHeight: "100vh",
    padding: "40px"
  },

  container: {
    display: "flex",
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto"
  },

  left: {
    flex: 3,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  },

  steps: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f3f3f3",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "20px"
  },

  active: {
    fontWeight: "bold"
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #eee"
  },

  img: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  details: {
    flex: 2,
    marginLeft: "15px"
  },

  qty: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  qtyBtn: {
    padding: "5px 10px",
    border: "none",
    background: "#ddd",
    cursor: "pointer"
  },

  price: {
    fontWeight: "bold"
  },

  right: {
    flex: 1,
    background: "#0b3c6d",  // 🔵 BLUE THEME
    color: "white",
    padding: "20px",
    borderRadius: "10px"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0"
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px"
  },

  checkout: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#ffd700",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  }
};
=======
export default function Cart(){
    return(
        <div>
            this is card
        </div>
    )
}
>>>>>>> 9ba33d7f2cd7601e358e55423d3e49dda3fd14c9
