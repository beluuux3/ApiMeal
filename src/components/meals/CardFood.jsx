import React, { useContext, useMemo } from "react";
import { FoodContext } from "../../context/FoodContext";
import { useAxiosFood } from "../../hooks/useAxiosFood";
import Loader from "../Loader";
import MealDetail from "./MealDetail";
import { Link } from "react-router-dom";

export default function CardFood() {
  const {
    selectedCategory,
    selectedArea,
    selectedIngredient,
    searchTerm,
    sortOrder,
  } = useContext(FoodContext);

  const API_BASE = "https://www.themealdb.com/api/json/v1/1/";

  const categoryUrl = `${API_BASE}filter.php?c=${selectedCategory}`;
  const searchUrl = `${API_BASE}search.php?s=${searchTerm}`;
  const areaUrl = `${API_BASE}filter.php?a=${selectedArea}`;
  const ingredientUrl = `${API_BASE}filter.php?i=${selectedIngredient}`;

  // Determinar la URL activa: primero search, luego ingredient, luego area, luego category
  let activeUrl = null;
  let filterType = "";
  let filterSource = ""; // 'search' | 'ingredient' | 'area' | 'category'

  if (searchTerm) {
    activeUrl = searchUrl;
    filterType = `${searchTerm}`;
    filterSource = "search";
  } else if (selectedIngredient) {
    activeUrl = ingredientUrl;
    filterType = `${selectedIngredient}`;
    filterSource = "ingredient";
  } else if (selectedArea) {
    activeUrl = areaUrl;
    filterType = `${selectedArea}`;
    filterSource = "area";
  } else {
    activeUrl = categoryUrl;
    filterType = `${selectedCategory}`;
    filterSource = "category";
  }

  const { data, loading, error } = useAxiosFood(activeUrl);

  const meals = useMemo(() => (data && data.meals ? data.meals : []), [data]);

  const sortedMeals = useMemo(() => {
    if (!meals || meals === "None") return [];

    const sorted = [...meals].sort((a, b) => {
      const nameA = a.strMeal.toUpperCase();
      const nameB = b.strMeal.toUpperCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [meals, sortOrder]);

  // Estados
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <p className="p-4 text-center text-red-600">Error. NO FOUND MEALS</p>
    );
  }
  if (!sortedMeals.length || (data && data.meals === "None")) {
    return <p className="p-4 text-center">Not found meals of {filterType}.</p>;
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Meals: {filterType}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-10 ">
        {sortedMeals.map((meal) => {
          const country =
            meal.strArea || (filterSource === "area" ? selectedArea : "");
          const catego =
            meal.strCategory ||
            (filterSource === "category" ? selectedCategory : "");
          return (
            <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
              <MealDetail
                id={meal.idMeal}
                name={meal.strMeal}
                thumbnail={meal.strMealThumb}
                country={country}
                catego={catego}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
