import React from "react";

export default function Proced({ meal }) {
  return (
    <div className=" p-4 h-140 overflow-auto ">
      <h2 className="text-2xl font-bold mb-2 text-orange-500">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">{meal.strInstructions}</p>
    </div>
  );
}
