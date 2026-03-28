"use client";
import { useState } from "react";
import  "./slider.css";

export default function Slider() {
  const visibleSlides = 6;
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/category/anklet.png",
      title: "Bracelet One",
      price: "₹199",
    },
    {
      img: "/category/bangle.png",
      title: "Bracelet Two",
      price: "₹249",
    },
    {
      img: "/category/bracelet.png",
      title: "Bracelet Three",
      price: "₹299",
    },
    {
      img: "/category/earring.png",
      title: "Bracelet Four",
      price: "₹349",
    },
    {
      img: "/category/pendant.png",
      title: "Bracelet Five",
      price: "₹399",
    },
    {
      img: "/category/ring.png",
      title: "Bracelet Five",
      price: "₹399",
    },
    {
      img: "/category/sets.png",
      title: "Bracelet Five",
      price: "₹399",
    },
    {
      img: "/category/anklet.png",
      title: "Bracelet Five",
      price: "₹399",
    },
    {
      img: "/category/anklet.png",
      title: "Bracelet Five",
      price: "₹399",
    },
    {
      img: "/category/anklet.png",
      title: "Bracelet Five",
      price: "₹399",
    },
  ];

  const nextSlide = () => {
    if (index < slides.length - visibleSlides) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={"sliderContainer"}>
    

      <div className={"slider"}>
        <div
          className={"sliderTrack"}
          style={{
            transform: `translateX(-${index * (100 / visibleSlides)}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              className={"slide"}
              key={i}
              style={{ minWidth: `${100 / visibleSlides}%` }}
            >
              <div className={"card"}>
                <img src={slide.img} alt={slide.title} />

                <div className={"content"}>
                  <h3>{slide.title}</h3>
                  {/* <p>{slide.price}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="slider_btn slider_btn_prev" onClick={prevSlide}>
    ❮
  </button>
  <button className="slider_btn slider_btn_next" onClick={nextSlide}>
    ❯
  </button>
    </div>
  );
}
