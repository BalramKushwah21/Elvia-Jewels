"use client";
import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import "./page.css";


export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const slider = document.querySelector(".slider");
    const img = document.querySelectorAll(".img");
    let length = img.length;
    let counter = 1;

    //Dot styling start

    const bottom = document.querySelector(".bottom");
    for (let i = 0; i < length; i++) {
      const button = document.createElement("button");
      button.className = "slidebtn";
      bottom.appendChild(button);
    }

    const buttons = document.querySelectorAll(".slidebtn");

    buttons[0].style.backgroundColor = "pink";

    const resetbg = () => {
      buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
        button.addEventListener("mouseover", stopSlideShow);
        button.addEventListener("mouseout", startSlideShow);
      });
    };

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        resetbg();
        slider.style.transform = `translateX(-${i * 100}%)`;
        counter = i + 1;
        button.style.backgroundColor = "pink";
      });
    });

    const changeColor = () => {
      resetbg();
      buttons[counter - 1].style.backgroundColor = "pink";
    };

    // Dot styling end here

    const nextSlide = () => {
      slider.style.transform = `translateX(-${counter * 100}%)`;
      counter++;
    };
    const prevSlide = () => {
      slider.style.transform = `translateX(-${(counter - 2) * 100}%)`;
      counter--;
    };
    const getFirstSlide = () => {
      slider.style.transform = `translateX(0%)`;
      counter = 1;
    };

    const getLastSlide = () => {
      slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
      counter = length;
    };

    right.addEventListener("click", () => {
      counter < length ? nextSlide() : getFirstSlide();
      changeColor();
    });

    left.addEventListener("click", () => {
      counter > 1 ? prevSlide() : getLastSlide();
      changeColor();
    });
    // start auto slider

    let slideInterval;
    const startSlideShow = () => {
      slideInterval = setInterval(() => {
        counter < length ? nextSlide() : getFirstSlide();
        changeColor();
      }, 2000);
    };

    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };

    slider.addEventListener("mouseover", stopSlideShow);
    slider.addEventListener("mouseout", startSlideShow);
    right.addEventListener("mouseover", stopSlideShow);
    right.addEventListener("mouseout", startSlideShow);
    left.addEventListener("mouseover", stopSlideShow);
    left.addEventListener("mouseout", startSlideShow);

    startSlideShow();
  }, []);

  return (
    <div className="main">
      {/* this is for img slider */}

      <div className="container">
        <div className="top">
          <button id="left">
            <svg
              className="left"
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
              <img src="slider/image1.png" className="img" />
              <img src="slider/image1.png" className="img" />
              <img src="slider/image1.png" className="img" />
              <img src="slider/image1.png" className="img" />
            </div>
          </div>

          <button id="right">
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
        </div>{" "}
        {/* //end top */}
        <div className="bottom">
          {/* <button className="slidedot"></button>
          <button className="slidedot"></button>
          <button className="slidedot"></button>
          <button className="slidedot"></button> */}
        </div>
        {/* end botom */}
      </div> {/* Container end */}

      {/* category slider */}
      <div className="categoryContainer">
        <button className="categoryLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#75FB4C"
          >
            <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
          </svg>
        </button>

        
          <div className="categorySlider">
            
            <div className="categorySlide">
              <img
                alt="bracelet"
                className="categoryImage"
                src="/category/bracelet.png"
              />
              <span className="categoryText">Bracelet</span>
            </div>
            <div className="categorySlide">
              <img
                alt="pendant"
                className="categoryImage"
                src="/category/pendant.png"
              />
              <span className="categoryText">Pandent</span>
            </div>
            <div className="categorySlide">
              <img
                alt="earring"
                className="categoryImage"
                src="/category/earring.png"
              />
              <span className="categoryText">Earring</span>
            </div>
            <div className="categorySlide">
              <img
                alt="ring"
                className="categoryImage"
                src="/category/ring.png"
              />
              <span className="categoryText">Ring</span>
            </div>
            <div className="categorySlide">
              <img
                alt="anklet"
                className="categoryImage"
                src="/category/anklet.png"
              />
              <span className="categoryText">Anklets</span>
            </div>
            <div className="categorySlide">
              <img
                alt="bangle"
                className="categoryImage"
                src="/category/bangle.png"
              />
              <span className="categoryText">Bangle</span>
            </div>
            <div className="categorySlide">
              <img
                alt="sets"
                className="categoryImage"
                src="/category/sets.png"
              />
              <span className="categoryText">Sets</span>
            </div>

            <div className="categorySlide">
              <img
                alt="meninsilver"
                className="categoryImage"
                src="/category/meninsilver.png"
              />
              <span className="categoryText">Men in Silver</span>
            </div>
        
    
        </div>
        <button className="categoryRigth">
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
      </div>

      <div id="img-container" className="flex-col gap-8">
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={0} />
        </div>
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={0} />
        </div>
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={0} />
        </div>
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={400} />
        </div>
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={400} />
        </div>
        <div id="showimg" className="m-5">
          <img alt="" src="/features/demo1.jpeg" width={1500} height={400} />
        </div>
      </div>
    </div>
  );
}
