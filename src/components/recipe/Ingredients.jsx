import React from "react";
export default function Ingredients({ meal }) {
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ing ? `${ing} - ${measure}` : null;
  }).filter(Boolean);

  return (
    <>
      <div className="relative flex justify-center items-center ">
        <img
          src="../../images/hojita.png"
          alt=""
          className="drop-shadow-lg w-[95%]"
        />
        <div className="absolute top-12 ml-4 flex flex-col w-full">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold mb-2  text-orange-500">
              Ingredients
            </h2>
          </div>
          <div>
            <ul className="absolute list-disc pl-8 text-gray-700 mt-5 md:pl-8 ">
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
