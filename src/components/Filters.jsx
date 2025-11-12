import React from "react";

export default function Filters() {
  return (
    <>
      <div className="p-3 ">
        <h1 className="text-2xl font-bold mb-1.5 "> Explore Meal Categories</h1>
        <h3 className="">
          Filter thousands of recipes by category, origin, or Key Ingredient
        </h3>
        <div className="flex flex-row  items-center justify-center gap-4 p-6 md:justify-around  ">
          <p className=" text-xl font-bold  md:w-[400px] ">Quicf Filters :</p>
          <div className="flex flex-col w-[400px] gap-2 md:flex-row  md:w-full md:gap-8">
            <button className="flex flex-col items-start text-gray-600 w-full gap-1">
              Origen de la comida
              <input
                type="text"
                placeholder="Bolivia"
                className="border-2 border-gray-300 w-full h-8 outline-none rounded-[10px] pl-2.5"
              />
            </button>
            <button className="flex flex-col items-start text-gray-500 gap-1 w-full">
              Ingridiente principal
              <input
                type="text"
                placeholder="Cebolla"
                className="border-2  border-gray-300 w-full rounded-[10px] outline-none pl-2.5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
