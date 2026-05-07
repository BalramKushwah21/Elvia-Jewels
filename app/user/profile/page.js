import React from 'react'
import styles from './profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profilePage}>
      
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.userCard}>
          <div className={styles.avatar}></div>
          <h2>User Name</h2>
          <p>user@email.com</p>
          <button>Edit Profile</button>
        </div>

        <div className={styles.menu}>
          <button>My Profile</button>
          <button>My Orders</button>
          <button>Wishlist</button>
          <button>Saved Address</button>
          <button>Logout</button>
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        <h1>My Profile</h1>

        <div className={styles.formBox}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className={styles.inputGroup}>
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className={styles.inputGroup}>
            <label>Gender</label>
            <select>
              <option>Select Gender</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>City</label>
            <input type="text" placeholder="Enter your city" />
          </div>

          <div className={styles.inputGroupFull}>
            <label>Address</label>
            <textarea placeholder="Enter your address"></textarea>
          </div>

          <div className={styles.buttonBox}>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}