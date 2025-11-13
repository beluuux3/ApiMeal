import React, { useContext } from "react";
import { useAxiosFood } from "../../hooks/useAxiosFood";
import { FoodContext } from "../../context/FoodContext";

export default function AsideCountry() {
  const {
    selectedArea,
    setSelectedArea,
    setSelectedCategory,
    setSelectedIngredient,
    setSearchTerm,
  } = useContext(FoodContext);

  const { data, loading } = useAxiosFood(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  const areas = data && data.meals ? data.meals : [];

  const handleAreaClick = (areaName) => {
    setSelectedArea(areaName);
    setSelectedCategory(null);
    setSelectedIngredient(null);
    setSearchTerm("");
  };

  if (loading) {
    return <p className="text-sm">Loadingcountry</p>;
  }

  return (
    <nav className="flex flex-wrap gap-1 max-h-40 overflow-y-auto">
      {areas.map((area) => (
        <button
          key={area.strArea}
          onClick={() => handleAreaClick(area.strArea)}
          className={`
            text-xs py-1 px-3 rounded-full transition-colors duration-200
            ${
              selectedArea === area.strArea
                ? "bg-orange-600 text-white font-bold"
                : "bg-gray-100 hover:bg-orange-200 "
            }
          `}
        >
          {area.strArea}
        </button>
      ))}
    </nav>
  );
}
