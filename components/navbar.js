"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 🔹 Fetch user
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, [pathname]);

  // 🔹 Logout
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className={styles.headerNavbar}>
      {/* Brand */}
      <div className={styles.navbarBrand}>
        <img src="/logo.jpeg" className={styles.logo} />
        Elvia Jewels
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileNavbar} ${open ? styles.mobileActive : ""}`}
      >
        <button className={styles.navbarClose} onClick={() => setOpen(false)}>
          ✖
        </button>

        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/home/store" onClick={() => setOpen(false)}>
          Store
        </Link>
        <Link href="/home/contactus" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link href="/home/cart" onClick={() => setOpen(false)}>
          Cart
        </Link>
      </div>

      {/* Toggle */}
      <button className={styles.navbarOpen} onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Desktop */}
      <div className={styles.navbarLinks}>
        {/* <Link className={styles.navbarLink} href="/">Home</Link>
        <Link className={styles.navbarLink} href="/home/store">Store</Link>
        <Link className={styles.navbarLink} href="/home/contactus">Contact</Link>
        <Link className={styles.navbarLink} href="/home/cart">Cart</Link> */}

        {user ? (
          <div className={styles.userMenu}>
            <div className={styles.laptopNavbar}>

             <Link className={styles.navbarLink} href="/">Home</Link>
             <Link className={styles.navbarLink} href="/home/store">Store</Link>
            <Link className={styles.navbarLink} href="/home/cart">Cart</Link>

            <button
              className={styles.userButton}
              onClick={() => setOpen(!open)}
              >
              Hi, {user.name} 👇
            </button>
              </div>

            {open && (
              <div className={styles.dropdown}>
                <Link href="/profile" onClick={() => setOpen(false)}>
                  Profile
                </Link>

                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/home/contactus" onClick={() => setOpen(false)}>
                  Contact
                </Link>

                <button className={styles.logoutBtn} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
            <Link className={styles.navbarLink} href="/home/store">
              Store
            </Link>
            <Link className={styles.navbarLink} href="/home/contactus">
              Contact
            </Link>
            <Link className={styles.navbarLink} href="/home/cart">
              Cart
            </Link>
            <Link href="/auth/login" className={styles.btn}>
              Login
            </Link>
            <Link href="/auth/register" className={styles.btn}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
