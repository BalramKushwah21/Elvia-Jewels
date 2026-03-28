"use client";
import React from "react";
import "./register.module.css";

export default function Register() {
  return (
    <div className="main">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">
          <h1>REGISTER</h1>
          <p>Create your account</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="form-box">

            <div className="avatar">👤</div>
            <h2>REGISTER</h2>

            <form>
              <div className="input-box">
                <span>👤</span>
                <input type="text" placeholder="Full Name" />
              </div>

              <div className="input-box">
                <span>📧</span>
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-box">
                <span>🔒</span>
                <input type="password" placeholder="Password" />
              </div>

              <div className="input-box">
                <span>🔒</span>
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button>REGISTER</button>

              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}