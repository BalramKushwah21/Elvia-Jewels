
import React from "react";
import "./home.css";
import Slider from "../components/slider";
import ShowSlider from "../components/imageSlider";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";


export default function Home() {
  const user = getUserFromToken();

  if (!user) {
    redirect("/auth/login");
  }

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
