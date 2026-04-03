"use client";
import { useState, useEffect } from "react";
import "./imageSlider.css";

export default function ImageSlider() {
  const images = [
 HEAD
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image1.png",
    "/slider/image5.png",
    "/slider/image1.jpg", 
    "/slider/image2.jpeg",
    "/slider/image3.png",
    "/slider/image4.png", 
    "/slider/image6.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 👉 Auto Slide Logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  // 👉 Manual Controls
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="slider_wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="slider_track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div className="slider_item" key={i}>
            <img src={img} />
            {/* <p className="slider_caption">Image {i + 1}</p> */}
          </div>
        ))}
      </div>

      <button className="img_slider_btn img_slider_btn_prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="img_slider_btn img_slider_btn_next" onClick={nextSlide}>
        ❯
      </button>

      <div className="slider_dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`slider_dot ${i === index ? "slider_dot_active" : ""
              }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}