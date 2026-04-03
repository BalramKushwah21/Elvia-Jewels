
import Link from "next/link";
import "./navbar.css";
import { getUserFromToken } from "@/lib/auth";
import ProfileDropdown from "./ProfileDropdown";
import { navbar_open, navbar_close } from "./navbar_client";

export default async function Navbar() {
  const user = await getUserFromToken();
  

  return (
    <nav>
      <div className="navbar-brand">
        <img src="/logo.jpeg" alt="Elvia Jewels" />
        
        Elvia Jewels
      </div>
      {/* mobile menu toggle */}
      <div className="mobile_navbar">
        < button className="navbar-close" onClick={navbar_close}>
      ☰
      </button>
        <Link href="/">Home</Link>
        <Link href="/home/store">Store</Link>
        <Link href="/home/contactus">Contact</Link>
        <Link href="/home/cart">Cart</Link>

      </div>


      < button className="navbar-open" onClick={navbar_open}>
      ☰
      </button>

      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/home/store">Store</Link>
        <Link href="/home/contactus">Contact</Link>
        <Link href="/home/cart">Cart</Link>

        {/* 🔥 AUTH SECTION */}
        {user ? (
          <ProfileDropdown user={user} />
        ) : (
          <>
            <Link href="/auth/login" className="btn">
              Login
            </Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}