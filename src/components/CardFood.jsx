import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { useAxiosFood } from "../hooks/useAxiosFood";
import MealDetail from "./MealDetail";

export default function CardFood() {
  const { selectedCategory } = useContext(FoodContext);

  const categoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

  const { data, loading, error } = useAxiosFood(categoryUrl);

  const meals = data && data.meals ? data.meals : [];

  if (loading) {
    return <p>Cargando platos de la categoría **{selectedCategory}**...</p>;
  }
  if (error) {
    return <p>Error al cargar platos: {error}</p>;
  }
  if (!meals.length) {
    return <p>No se encontraron platos para **{selectedCategory}**.</p>;
  }
  console.log(`${data.strArea}`);
  return (
    <>
      <div className="border-2 border-orange-300 bg-white shadow-md gap-8 p-4 mt-4 rounded-md">
        <h2>Platos de la Categoría: **{selectedCategory}**</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4 mt-4">
          {meals.map((meal) => (
            <MealDetail
              key={meal.idMeal}
              id={meal.idMeal}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
}
