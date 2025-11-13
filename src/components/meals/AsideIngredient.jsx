import React, { useContext } from "react";
import { useAxiosFood } from "../../hooks/useAxiosFood";
import { FoodContext } from "../../context/FoodContext";

export default function AsideIngredient() {
  const {
    selectedIngredient,
    setSelectedIngredient,
    setSelectedCategory,
    setSelectedArea,
    setSearchTerm,
  } = useContext(FoodContext);

  const { data, loading } = useAxiosFood(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );

  const ingredients = data && data.meals ? data.meals.slice(0, 15) : [];

  const handleIngredientClick = (ingredientName) => {
    setSelectedIngredient(ingredientName);
    setSelectedCategory(null);
    setSelectedArea(null);
    setSearchTerm("");
  };

  if (loading) {
    return <p className="text-sm">Cargando ingredientes...</p>;
  }

  return (
    <nav className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
      {ingredients.map((ing) => (
        <button
          key={ing.idIngredient}
          onClick={() => handleIngredientClick(ing.strIngredient)}
          className={`
            text-xs py-1 px-3 rounded-full transition-colors duration-200
            ${
              selectedIngredient === ing.strIngredient
                ? "bg-orange-500 text-white font-bold"
                : "bg-gray-100 hover:bg-orange-200 text-gray-700"
            }
          `}
        >
          {ing.strIngredient}
        </button>
      ))}
    </nav>
  );
}
