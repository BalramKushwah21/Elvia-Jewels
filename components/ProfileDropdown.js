"use client";

import { useState, useRef, useEffect } from "react";

export default function ProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/auth/login";
  };

  return (
    <div className="profile-container" ref={ref}>
      {/* Trigger */}
      <div
        className="profile-trigger"
        onClick={() => setOpen(!open)}
      >
        👤 {user.email.split("@")[0]} ⬇
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item">My Profile</div>
          <div className="dropdown-item">Orders</div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-item logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}