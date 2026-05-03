"use client";

import { useState } from "react";
import styles from "./address.module.css";

export default function AddressPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone:"",
    country: "India",
    address: "",
    apt: "",
    landmark: "",
    city: "",
    state: "",
    pin: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Address Saved!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Address Information</h2>

      <form onSubmit={handleSubmit} className={styles.form}>

          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
        <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
        />

        <label>Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option>India</option>
          <option>United States</option>
          <option>UK</option>
        </select>

        <label>Street Address</label>
        <input
          name="address"
          placeholder="Street address"
          value={form.address}
          onChange={handleChange}
          required
        />

          <label>Default Address</label>
        <div className={styles.radioGroup}>

            <label>
            <input
                type="radio"
                name="type"
                value="Home"
                checked={form.type === "Home"}
                onChange={handleChange}
            />
                Home
            </label>

            <label>
            <input 
                type="radio"
                name="type"
                value="Work"
                checked={form.type === "Work"}
                onChange={handleChange}
            />
                Work
            </label>
    </div>

        <label>Apt/Suite/Unit</label>
        <input
          name="apt"
          placeholder="Apt, suite, or unit"
          value={form.apt}
          onChange={handleChange}
        />

          <label>Landmark</label>
        <input
            name="landmark"
            placeholder="Landmark (optional)"
            value={form.landmark}
            onChange={handleChange}
        />

        <label>City</label>
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

          <label>State</label>
          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
          />

          <label>Pin Code</label>
          <input
            name="pin"
            placeholder="Pin code"
            value={form.pin}
            onChange={handleChange}
          />
        </form>

        {/* Google Map */}
        <div className={styles.map}>
          <iframe
            src="https://maps.google.com/maps?q=23.2595068,77.495494&z=17&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      

        <button type="submit" className={styles.button}>
          Save Address
        </button>
    </div>
  );
}