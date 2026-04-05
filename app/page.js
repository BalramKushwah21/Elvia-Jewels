
import React from "react";
import "./home.css";
import Slider from "@/components/slider";
import ShowSlider from "@/components/imageSlider";
import { redirect } from "next/navigation";
import { getUserFromToken }  from "@/lib/auth.server";


export default async  function Home() {
  const user = await getUserFromToken();

  return (
    <div className="main">
      <ShowSlider />
      <Slider/>
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
