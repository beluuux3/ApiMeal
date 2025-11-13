import React from "react";

export default function Ingredients() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          src="/src/images/hojita.png"
          alt=""
          className="drop-shadow-lg w-[90%]"
        />

        <div className="absolute top-15 flex flex-col  w-full">
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-bold text-orange-500 border-b border-orange-300">
              Ingredientes
            </h3>
          </div>
          <div className="px-9 py-4">
            <ul className=" text-gray-700">
              <li>1 taza de arroz</li>
              <li>200g de pollo</li>
              <li>Pimienta y sal</li>
              <li>Zanahoria picada</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
