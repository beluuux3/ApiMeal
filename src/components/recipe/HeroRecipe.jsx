import React from "react";
import { Link } from "react-router-dom";

export default function HeroRecipe() {
  return (
    <>
      <Link to="/Categories">
        <div className="flex items-center text-orange-400 text-lg font-semibold cursor-pointer m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Regresar
        </div>
      </Link>
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </>
  );
}
