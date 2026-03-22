import React from "react";
import Link from "next/link";



const navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full ">
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
          href="/store/products"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Products
        </Link>
        <Link
          href="/store/aboutus"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          About
        </Link>
        <Link
          href="/store/contactus"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Contact
        </Link>
        <Link
          href="/store/cart"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Cart
        </Link>
        <Link
          href="/auth/login"
          className="px-3 py-2 text-white font-bold hover:bg-pink-300  rounded hover:text-black"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
