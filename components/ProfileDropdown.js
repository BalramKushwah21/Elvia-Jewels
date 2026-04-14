"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  const { data: session } = useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // 🔒 Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!user) return null;

  const username = user.name || user.email?.split("@")[0];

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      {/* Button */}
      <button
        className={styles.userButton}
        onClick={() => setOpen(!open)}
      >
        Hi, {username} 👇
      </button>

      {/* Dropdown */}
      {open && (
        <div className={styles.dropdown}>
          <Link href="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>

          <Link href="/home/cart" onClick={() => setOpen(false)}>
            Cart
          </Link>

          <button
            className={styles.logoutBtn}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}