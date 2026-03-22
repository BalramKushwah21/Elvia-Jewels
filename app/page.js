"use client";

import Image from "next/image";



function changeText() { 
  const ele = document.getElementById("para");
  ele.innerText = "Balram is the best";


}


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className=" text-black text-4xl font-bold mb-4">
        Welcome to Elvia Jewels
      </h1>
      <p id="para" className="text-lg text-gray-600 mb-8">
        Discover our exquisite collection of jewelry.
      </p>
      <button onClick={changeText} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Shop Now
      </button>
      
      <Image
        src="/jewelry-collection.jpg"
        alt="Jewelry Collection"
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
