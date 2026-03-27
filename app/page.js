"use client";
import React from "react";

import { useEffect } from "react";
// import { useState } from "react";
import "./home.css";
import Slider from "../componets/slider";
import ShowSlider from "../componets/showSlider";

export default function Home() {
  return (
    <div className="main">
      <ShowSlider />
      <Slider />
      <div className="imageContainer">
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
        <div className="image">
          <img alt="" src="/features/demo1.jpeg" />
        </div>
      </div>
    </div>
  );
}
