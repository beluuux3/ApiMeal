import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AsideCategories from "../components/meals/AsideCategories";
import AsideCountry from "../components/meals/AsideCountry";
import AsideIngredient from "../components/meals/AsideIngredient";
import Search from "../components/meals/Search";
import ButtonRandom from "../components/meals/ButtonRandom";

import CardFood from "../components/meals/CardFood";
import { FoodContext } from "../context/FoodContext";

export default function Meals() {
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const contextValue = {
    selectedCategory,
    setSelectedCategory,
    selectedArea,
    setSelectedArea,
    selectedIngredient,
    setSelectedIngredient,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  };

  const location = useLocation();
  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const cat = params.get("category");
      if (cat) setSelectedCategory(cat);
    } catch (e) {}
  }, [location.search]);

  return (
    <FoodContext.Provider value={contextValue}>
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="font-josefin text-4xl font-black text-orange-900 mb-6">
          ALL MEALS
        </h1>

        <div className="flex justify-end items-center mb-6 space-x-4">
          <ButtonRandom />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          <div className="lg:col-span-1 space-y-8">
            <div className="border-2 border-orange-300 bg-white shadow-md p-4 rounded-md flex flex-col gap-2">
              <h2 className="font-bold text-xl ">FILTERS</h2>
              <h3 className="font-bold text-lg text-orange-500">CATEGORY</h3>
              <AsideCategories />

              <h3 className="font-bold text-lg text-orange-500">COUNTRY</h3>
              <AsideCountry />

              <h3 className="font-bold text-lg text-orange-500">
                MAIN INGREDIENT
              </h3>
              <AsideIngredient />
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-6">
            <Search />
            <CardFood />
          </div>
        </div>
      </div>
    </FoodContext.Provider>
  );
}
