"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div
        className="w- h-[40vh] bg-pink-300 bg-center m-2"
          ></div>

      <div
        id="track"
        className="flex gap-4 my-10 justify-around overflow-hidden"
      >
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl"
            src="/category/bracelet.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Bracelet
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className=" rounded-4xl "
            src="/category/pendant.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Pandent
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl"
            src="/category/earring.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Earring
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl"
            src="/category/ring.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Ring</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl"
            src="/category/anklet.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Anklets
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl"
            src="/category/bangle.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Bangle</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl "
            src="/category/sets.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Sets</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            className="rounded-4xl "
            src="/category/meninsilver.png"
            alt="Description"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Men in Silver
          </span>
        </div>
      </div>

      <div id="image-container" className="flex-col gap-8">
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={400}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={400}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            src="/features/demo1.jpeg"
            alt="Description"
            width={1500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
