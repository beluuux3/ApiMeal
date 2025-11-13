import React from "react";
import CaracMeal from "../components/recipe/CaracMeal";
import HeroRecipe from "../components/recipe/HeroRecipe";
import Ingredients from "../components/recipe/Ingredients";
import Proced from "../components/recipe/Proced";

export default function Recipe() {
  return (
    <div className=" pt-4">
      <HeroRecipe />

      <div className="m-4 p-4 sm:p-8 ">
        <h1 className="font-bold text-4xl font-lobster">Nombre del Plato</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="order-2 sm:order-1">
            <Ingredients />
          </div>

          <div className="justify-center items-center mb-8 order-1 sm:order-2">
            <div
              className="
                w-full h-auto
                rounded-full 
                bg-gray-100/50 
            "
            >
              IMAG MEAL
            </div>
            <CaracMeal />
          </div>

          <div className="w-full order-3 sm:order-3">
            <Proced></Proced>
          </div>
        </div>
      </div>
    </div>
  );
}
