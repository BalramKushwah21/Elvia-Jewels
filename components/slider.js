"use client";
import { useState } from "react";
import  "./slider.css";
import { useRouter } from "next/navigation";


export default function Slider() {
  const visibleSlides = 8;
  const [index, setIndex] = useState(0);
  
  const router = useRouter();





  const slides = [
    {
      img: "/category/bracelet.png",
      title: "Bracelet",
      price: "₹199",
    },
    {
      img: "/category/bangle.png",
      title: "Bangles",
      price: "₹249",
    },
    {
      img: "/category/ring.png",
      title: "Ring",
      price: "₹299",
    },
    {
      img: "/category/earring.png",
      title: "Earring",
      price: "₹349",
    },
    {
      img: "/category/pendant.png",
      title: "Pendants",
      price: "₹399",
    },
    {
      img: "/category/anklet.png",
      title: "Anklet",
      price: "₹399",
    },
    {
      img: "/category/sets.png",
      title: "Sets",
      price: "₹399",
    },
    {
      img: "/category/mangalsutras.png",
      title: "Mangalsutras",
      price: "₹399",
    },
    
    {
      img: "/category/meninsilver.png",
      title: "Men-In-Silver",
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
              style={{ minWidth: `${85.6 / visibleSlides}%` }}
            >
              <div className={"card"}>
                <img className={"card"} src={slide.img} alt={slide.title} 
                onClick={() => router.push(`/collections/${slide.title.toLowerCase()}`)}/>
                

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
