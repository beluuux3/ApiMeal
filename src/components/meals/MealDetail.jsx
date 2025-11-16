import React from "react";

export default function MealDetail({ id, name, thumbnail, country, catego }) {
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
          <span>Category: {catego}</span>
        </div>
        <div className="flex text-sm text-orange-600 space-x-1">
          <span>Country: {country}</span>
        </div>
      </div>
    </div>
  );
}
