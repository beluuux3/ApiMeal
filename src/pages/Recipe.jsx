import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CaracMeal from "../components/recipe/CaracMeal";
import HeroRecipe from "../components/recipe/HeroRecipe";
import Ingredients from "../components/recipe/Ingredients";
import Proced from "../components/recipe/Proced";

export default function Recipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => setMeal(data.meals[0]));
    } else {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => setMeal(data.meals[0]));
    }
  }, [id]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;
  console.log(meal.strMealThumb);

  return (
    <div className="pt-4">
      {/* Hero con el título e imagen */}
      <HeroRecipe meal={meal} />
      {meal.strYoutube
        ? meal.strYoutube && (
            <div className="mt-4 px-10 flex justify-center ">
              <div className="p-3 w-full flex justify-center ">
                <iframe
                  width="760"
                  height="315"
                  src={`https://www.youtube.com/embed/${
                    meal.strYoutube.split("v=")[1]
                  }?autoplay=1&mute=1`}
                  title={meal.strMeal}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          )
        : meal.strMealThumb && (
            <div className=" flex justify-center items-center">
              <img
                src={meal.strMealThumb}
                alt="comida"
                className="h-80 w-200 object-contain opacity-55"
              />{" "}
              <p className="absolute text-xl font-bold tracking-widest ">
                {meal.strMeal}
              </p>
            </div>
          )}
      <div className="m-4 p-4 sm:p-8">
        <div></div>
        <div className="flex justify-center">
          <h1 className="font-bold text-5xl font-lobster">{meal.strMeal}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Ingredientes */}
          <div className="order-2 sm:order-1">
            <Ingredients meal={meal} />
          </div>

          {/* Imagen + características */}
          <div className="justify-center items-center mb-8 order-1 sm:order-2">
            <img
              src={
                meal.strMealThumb ? meal.strMealThumb : "/src/images/gemini.png"
              }
              alt={meal.strMeal}
              className="rounded-lg shadow-md w-full"
            />
            <CaracMeal meal={meal} />
          </div>

          {/* Procedimiento */}
          <div className="w-full order-3 sm:order-3">
            <Proced meal={meal} />
          </div>
        </div>
      </div>
    </div>
  );
}
