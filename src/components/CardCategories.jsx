import React from "react";
import { useAxiosFood } from "../hooks/UseAxiosFood";

export default function CardCategories() {
  const { data, loading, error } = useAxiosFood(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm h-32 animate-pulse"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  if (error) {
    return <p>error:{error}</p>;
  }

  if (!data || !data.categories) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 p-4 mt-4">
        {data.categories.map((categoria) => (
          <a
            key={categoria.idCategory}
            href={`/category/${categoria.strCategory}`}
            className="flex flex-col items-center justify-center h-25 p-4 bg-orange-100 border border-gray-200 rounded-lg shadow-sm hover:bg-orange-400 hover:text-white hover:scale-115 transition-transform duration-200"
          >
            <div className=" flex items-center justify-center">
              <img
                src={categoria.strCategoryThumb}
                alt={categoria.strCategory}
                className="absolute  h-15 -top-8 object-contain "
              />
            </div>

            <h5 className="text-lg font-semibold text-gray-900  text-center -mt-4">
              {categoria.strCategory}
            </h5>
          </a>
        ))}
      </div>
    </>
  );
}
