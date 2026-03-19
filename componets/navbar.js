import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="bg-pink-400 text-white p-4 flex justify-between items-center w-full [background:radial-gradient(100%_125%_at_90%_100%,#fff_30%,#63e_100%)]">
   
        <div className="text-lg font-bold flex items-center gap-2 text-black hover: cursor-pointer">
          <img src="/logo.jpeg" alt="Elvia Jewels" className="h-10 w-10 rounded-full" />Elvia Jewels
        </div>
        <div>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300 rounded">
            Home
          </Link>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300  rounded">
            Shop
          </Link>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300  rounded">
            About
          </Link>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300  rounded">
            Contact
          </Link>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300  rounded">
            Cart
          </Link>
          <Link href="#" className="px-3 py-2 text-black font-bold hover:bg-pink-300  rounded">
            Login
          </Link>
        </div>
    </nav>
  );
};

export default navbar;
