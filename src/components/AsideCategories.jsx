import React, { useContext } from "react";
import { useAxiosFood } from "../hooks/useAxiosFood";
import { FoodContext } from "../context/FoodContext";

export default function AsideCategories() {
  const { setSelectedCategory, selectedCategory } = useContext(FoodContext);

  const { data, loading, error } = useAxiosFood(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  if (loading || error || !data || !data.categories) {
    return <p>Cargando categorías...</p>;
  }

  return (
    <>
      <div className="border-2 border-orange-300 bg-white shadow-md gap-8 p-4 mt-4 rounded-md">
        <h5 className="font-bold">CATEGORIES</h5>

        <nav className="flex flex-col">
          {data.categories.map((categoria) => (
            <a
              key={categoria.idCategory}
              href="#"
              //onClick para llamar a la función que actualiza el estado
              onClick={() => handleCategoryClick(categoria.strCategory)}
              className={`hover:bg-orange-400 rounded-md px-4 ${
                selectedCategory === categoria.strCategory
                  ? "bg-orange-500 text-white font-bold"
                  : ""
              }`}
            >
              {categoria.strCategory}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
