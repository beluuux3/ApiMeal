// src/components/HeroAbout.jsx
import React from "react";
import AboutUs from "../images/about/aboutus-bg.png";

const HeroAbout = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">

      <img
        src={AboutUs}
        alt="About Us"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="text-center px-6 text-white">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px black",
              textShadow: "3px 3px 4px black"
            }}
          >
            Meet the Team
          </h1>

          <p
            className="text-xl md:text-2xl font-medium drop-shadow-md"
            style={{
              WebkitTextStroke: "0.5px black",
              textShadow: "2px 2px 4px black"
            }}
          >
            The Chef's behind every Dish
          </p>
        </div>
      </div>

    </div>
  );
};

export default HeroAbout;
