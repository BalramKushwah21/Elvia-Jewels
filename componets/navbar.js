import React from "react";
import Link from "next/link";
import "./navbar.css"

const navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full rounded-2xl ">
      <div className="text-lg font-bold flex items-center gap-2 text-white hover: cursor-pointer">
        <img
          src="/logo.jpeg"
          alt="Elvia Jewels"
          className="h-10 w-10 rounded-full"
        />
        Elvia Jewels
      </div>

      <div>
        <Link
          href="/"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300 rounded hover:text-black"
        >
          Home
        </Link>
        <Link
          href="/home/store"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
         Store
        </Link>

        <Link
          href="/home/contactus"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Contact
        </Link>
        <Link
          href="/home/cart"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Cart
        </Link>
        <Link
          href="/auth/login"
          className="btn px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
