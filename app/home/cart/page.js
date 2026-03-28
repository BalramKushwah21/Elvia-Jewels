"use client";

import Image from "next/image";
import Link from "next/link";

export default function CartPage() {

  const products = [
    {
      id: 1,
      name: "Gold Necklace Set",
      price: 1299,
      oldPrice: 1599,
      image: "/necklace.jpg",
      qty: 1
    },
    {
      id: 2,
      name: "Diamond Earrings",
      price: 899,
      oldPrice: 1099,
      image: "/earring.jpg",
      qty: 1
    }
  ];

  const total = products.reduce((acc, item) => acc + item.price, 0);
  const discount = 200;

  return (
    <div className="page">

      {/* 🔥 HEADER */}
      <div className="header">
        <div className="logoSection">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <h2>ELVIA JEWELS</h2>
        </div>

        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>

      {/* 🔥 STEPPER */}
      <div className="stepper">
        <div className="step active">
          <div className="circle">1</div>
          <p>Cart</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">2</div>
          <p>Address</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">3</div>
          <p>Payment</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">4</div>
          <p>Summary</p>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="container">

        {/* LEFT */}
        <div className="left">
          <h3>Product Details</h3>

          {products.map((item) => (
            <div className="card" key={item.id}>

              <Image
                src={item.image}
                width={100}
                height={100}
                alt="product"
                className="img"
              />

              <div className="info">
                <h4>{item.name}</h4>

                <p className="price">
                  ₹{item.price}
                  <span> ₹{item.oldPrice}</span>
                </p>

                <p>Qty: {item.qty}</p>

                <button className="remove">REMOVE</button>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="right">

          <h3>Price Details</h3>

          <div className="row">
            <span>Total Price</span>
            <span>₹{total}</span>
          </div>

          <div className="row discount">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>

          <hr />

          <div className="row total">
            <span>Order Total</span>
            <span>₹{total - discount}</span>
          </div>

          <button className="btn">Continue</button>

        </div>

      </div>
    </div>
  );
}