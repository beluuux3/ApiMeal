import React from "react";
import CardCategories from "../components/CardCategories";
import Carrousel from "../components/Carrousel";

export default function Home() {
  return (
    <div className=" px-15 py-8">
      <section className="mb-10">
        <Carrousel />
      </section>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Categorías</h2>
          <button className="text-primary-600 hover:text-primary-800 font-semibold">
            Ver todas las categorías
          </button>
        </div>

        <div className="">
          <CardCategories />
        </div>
      </section>
    </div>
  );
}
