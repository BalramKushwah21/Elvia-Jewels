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
      <div className={styles.pageBg}></div>
      <h2>Address Information</h2>
    <div className={styles.formgrid}>
      <div className={styles.inputBox}>
        <label> 👤First Name</label>
      <input
        placeholder="First Name"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        required
      />
      </div>
        <div className={styles.inputBox}>
        <label> 💰Last Name</label>
      <input
        placeholder="Last Name"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦Phone</label>                              
      <input
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 🖼️Street Address</label>

      <input
        placeholder="Street Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      />
      <div className={styles.inputBox}>
        <label> 🧍Default Address</label>
    <div className={styles.genderBox}>
      <label> 
         HOME
        <input type="radio" name="default" value="home" onChange={(e) => setForm({ ...form, default: e.target.value })}
        required/>
       
      </label>

      <label>
        WORK
        <input type="radio" name="default" value="work" onChange={(e) => setForm({ ...form, default: e.target.value })} 
        required/>
      </label>
    </div>
      </div>

      </div>    
        <div className={styles.inputBox}>
        <label> 🏷️Apt/Suite/Unit</label>

      <input
        placeholder="Apt/Suite/Unit"
        onChange={(e) => setForm({ ...form, apt: e.target.value })}
        required
      />
      </div>

      <div className={styles.inputBox}>
        <label> 🎨Landmark</label>
      <input
        placeholder="Landmark"
        onChange={(e) => setForm({ ...form, landmark: e.target.value })}
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦City</label>                              
      <input
        placeholder="City"
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦State</label>                              
      <input
        placeholder="State"
        onChange={(e) => setForm({ ...form, state: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦Country</label>                              
      <input
        placeholder="Country"
        onChange={(e) => setForm({ ...form, country: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦Pin Code</label>                              
      <input
        placeholder="Pin Code"
        onChange={(e) => setForm({ ...form, pin: e.target.value })}
        required
      />
      </div>

    </div>

       {/* Google Map */}
        {/* <div className={styles.map}> */}
          <iframe
            src="https://maps.google.com/maps?q=23.2595068,77.495494&z=17&output=embed"
            loading="lazy"
          ></iframe>
        {/* </div> */}

      <button type="submit" className={styles.button}>
          Save Address
        </button>
    
    </div>
  );
}