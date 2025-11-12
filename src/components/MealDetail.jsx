import React from "react";
import { useAxiosFood } from "../hooks/useAxiosFood";

export default function MealDetail({ id, selectedCategory }) {
  const detailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, loading, error } = useAxiosFood(detailUrl);

  if (loading || error || !data || !data.meals || !data.meals[0]) {
    return <p>Cargando detalle...</p>;
  }

  const mealDetail = data.meals[0];

  return (
    <a
      key={mealDetail.idMeal}
      className="flex flex-col items-center rounded-t-md justify-center h-50 bg-orange-100 border border-gray-200 rounded-lg shadow-sm hover:bg-orange-400 hover:text-white transition-all duration-200"
    >
      <div className="py-2">
        <h5 className="text-sm font-semibold text-gray-900 text-center ">
          {mealDetail.strMeal}
        </h5>
        <h5 className="text-sm text-gray-900 px-2">
          Categoría: {selectedCategory}
        </h5>
        {/* ¡Aquí está el Origen real! */}
        <h5 className="text-sm text-gray-900 px-2 font-bold">
          Origen: {mealDetail.strArea}
        </h5>
      </div>
    </a>
  );
}
