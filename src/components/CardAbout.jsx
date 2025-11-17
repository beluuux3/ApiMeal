import React, { useState } from "react";
import BelenImg from "../images/about/belen-1.png";
import EdmundImg from "../images/about/edmund-1.png";
import MoisesImg from "../images/about/moises-1.png";

export default function CardAbout({ member }) {
  const [hovered, setHovered] = useState(false);

  if (!member) return null;

  const images = {
    EDMUND: EdmundImg,
    MOISES: MoisesImg,
    BELÉN: BelenImg,
  };

  const imageSrc = images[member.name.toUpperCase()] || EdmundImg;

  return (
    <div
      className={`bg-neutral-primary-soft max-w-sm p-6 border border-default rounded-xl shadow-md mx-auto transition-transform duration-300 ${
        hovered ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="rounded-xl w-full object-cover mb-4"
        src={imageSrc}
        alt={member.name}
      />

      <h5 className="text-2xl font-bold text-center mb-2">{member.name}</h5>

      <h6 className="text-sm text-center text-gray-500 mb-4">{member.title}</h6>

      <p className="text-center text-gray-600 text-[15px] leading-relaxed">
        {member.description}
      </p>
    </div>
  );
}
