import React, { useContext } from "react";
import { useAxiosFood } from "../../hooks/useAxiosFood";
import { FoodContext } from "../../context/FoodContext";

export default function AsideCategories() {
  const { setSelectedCategory, selectedCategory } = useContext(FoodContext);

  const { data, loading, error } = useAxiosFood(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  if (loading || error || !data || !data.categories) {
    return <p>Loading categoris...</p>;
  }

  return (
    <>
      <nav className="flex flex-col">
        {data.categories.map((categ) => (
          <a
            key={categ.idCategory}
            href="#"
            //para actualizat el estado
            onClick={() => handleCategoryClick(categ.strCategory)}
            className={`hover:bg-orange-400 rounded-md px-4 text-[13px] ${
              selectedCategory === categ.strCategory
                ? "bg-orange-500 text-white font-bold"
                : ""
            }`}
          >
            {categ.strCategory}
          </a>
        ))}
      </nav>
    </>
  );
}
