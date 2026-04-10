"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Fetch product
  useEffect(() => {
  async function fetchProduct() {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();

    setProduct({
      name: data.name || "",
      price: data.price || "",
      description: data.description || "",
      image: data.image || "",
    });
  }

  fetchProduct();
}, [id]);

  // Handle update
  async function handleUpdate(e) {
    e.preventDefault();

    await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    router.push("/admin/products");
  }

  // Handle delete
  async function handleDelete() {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    router.push("/admin/products");
  }

  return (
    <div>
      <h1>Edit Product</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          placeholder="Name"
        />

        <input
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
          placeholder="Price"
        />

        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          placeholder="Description"
        />

        <input
          type="text"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
          placeholder="Image URL"
        />

        <button type="submit">Update</button>
      </form>

      <button onClick={handleDelete} style={{ color: "red" }}>
        Delete Product
      </button>
    </div>
  );
}