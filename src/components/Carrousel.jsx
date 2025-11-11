import React, { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Recetas de Verano",
    color: "bg-primary-500",
    subtitle: "Platos frescos y ligeros.",
  },
  {
    id: 2,
    title: "Dominando la Parrilla",
    color: "bg-primary-600",
    subtitle: "Secretos de la carne perfecta.",
  },
  {
    id: 3,
    title: "Postres Express",
    color: "bg-primary-700",
    subtitle: "Dulces listos en 30 minutos.",
  },
];

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const currentItem = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl h-[400px]">
      <div
        className={`w-full h-full flex items-center justify-center transition-colors duration-500 ${currentItem.color}`}
      >
        <div className="text-center p-8 text-white">
          <h2 className="text-4xl font-extrabold drop-shadow-lg mb-2">
            {currentItem.title}
          </h2>
          <p className="text-xl font-medium drop-shadow-md">
            {currentItem.subtitle}
          </p>
        </div>
      </div>

      {/* Flechita izq */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-200 z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Flechita der */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition duration-200 z-10"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* puntos indicadores  */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
