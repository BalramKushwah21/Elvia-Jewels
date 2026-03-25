"use client";
import React from "react";
import Image from "next/image";
import "./page.css";

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector(".slider");

let counter = 1;
const rightbtn = () => {
  // alert("right");
  counter++;
  slider.style.transform = `translateX(-${counter * 100}%)`;
}

const leftbtn = () => {
  // alert("left");
  counter--;
  slider.style.transform = `translateX(${counter * 100}%)`;
}







const Home = () => {
  return (
    <div className="main">
      {/* this image slider */}
    
        <div className="container">
            <button id="left" onClick={leftbtn}>
            <svg className="left"
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#75FB4C"
            >
              <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
            </svg>
          </button>

        <div className="frame">
          <div className="slider">
            <img src="slider/image1.png" className="image" />
            <img src="slider/image2.png" className="image" />
            <img src="slider/image3.png" className="image" />
            <img src="slider/image4.png" className="image" />
          </div>
        </div>

          <button id="right" onClick={rightbtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#75FB4C"
            >
              <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
            </svg>
          </button>
        </div>{/* Container end */}
     
      {/* category slider */}
      <div
        id="track"
        className="flex gap-4 my-10 justify-around overflow-hidden"
      >
        <div className="  flex-col text-center">
          <Image
          alt="bracelet"
            className="rounded-4xl"
            src="/category/bracelet.png"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Bracelet
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="pendant"
            className=" rounded-4xl "
            src="/category/pendant.png"
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Pandent
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="earring"
            className="rounded-4xl"
            src="/category/earring.png"
            
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Earring
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="ring"

            className="rounded-4xl"
            src="/category/ring.png"
            
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Ring</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="anklet"

            className="rounded-4xl"
            src="/category/anklet.png"
           
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">
            Anklets
          </span>
        </div>
        <div className="  flex-col text-center">
          <Image 
            alt="bangle"
            className="rounded-4xl"
            src="/category/bangle.png"
    
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Bangle</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="sets"
            className="rounded-4xl "
            src="/category/sets.png"
        
            width={450}
            height={100}
          />
          <span className="font-bold font-sans text-xl text-black">Sets</span>
        </div>
        <div className="  flex-col text-center">
          <Image
            alt="meninsilver"
            className="rounded-4xl "
            src="/category/meninsilver.png"
         
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
          alt=""
            src="/features/demo1.jpeg"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            alt=""

            src="/features/demo1.jpeg"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
              alt=""
            src="/features/demo1.jpeg"
            width={1500}
            height={0}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            alt=""
            src="/features/demo1.jpeg"
            width={1500}
            height={400}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            alt=""  
            src="/features/demo1.jpeg"
            width={1500}
            height={400}
          />
        </div>
        <div id="showimage" className="m-5">
          <Image
            alt=""
            src="/features/demo1.jpeg"
            width={1500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
