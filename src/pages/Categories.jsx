import React, { useState } from "react";
import AsideCategories from "../components/AsideCategories";
import CardFood from "../components/CardFood";
import { FoodContext } from "../context/FoodContext";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  return (
    <FoodContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <div className="p-8">
        <h1 className="font-bold text-3xl">CATEGORIES MEALS</h1>
        <div></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          <div className="py-8">
            <AsideCategories />
          </div>
          <div className="py-8 md:col-span-2 lg:col-span-4">
            <CardFood />
          </div>
        </div>
      </div>
    </FoodContext.Provider>
  );
}
