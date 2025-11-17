import React from "react";
import { useAxiosFood } from "../../hooks/useAxiosFood";

export default function MealDetail({ id, name, thumbnail, country, catego }) {
  // If country or category missing, fetch meal details by id
  const needDetails = !country || !catego;
  const lookupUrl = needDetails
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    : null;

  const { data } = useAxiosFood(lookupUrl);
  const details = data && data.meals ? data.meals[0] : null;

  const resolvedCategory = catego || (details && details.strCategory) || "";
  const resolvedCountry = country || (details && details.strArea) || "";

  return (
    <div className="flex flex-col rounded-md bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:border-orange-400 overflow-hidden">
      <div className="w-full h-40 overflow-hidden bg-gray-100">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h5 className="text-base font-bold text-gray-800 mb-1 leading-tight">
          {name}
        </h5>

        <div className="flex text-sm text-orange-600 space-x-1">
          <span>
            <b>Category:</b> {resolvedCategory}
          </span>
        </div>
        <div className="flex text-sm text-orange-600 space-x-1">
          <span>
            <b>Country:</b> {resolvedCountry}
          </span>
        </div>
      </div>
    </div>
  );
}
