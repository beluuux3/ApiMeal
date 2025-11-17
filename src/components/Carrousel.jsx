import React, { useState, useEffect } from "react";
import img1 from "../images/carousel/1.jpg";
import img2 from "../images/carousel/2.jpg";
import img3 from "../images/carousel/3.jpg";
import aboutImg from "../images/carousel/about-us.png";
import img4 from "../images/carousel/4.jpg";
import img5 from "../images/carousel/5.jpg";
import img6 from "../images/carousel/6.jpg";

const slides = [
  { id: 1, 
    image: img1, 
    title: "Food out of Food", 
    subtitle: "Where Food and art are equal." 
  },
  { id: 2, 
    image: img2, 
    title: "Ricepedia", 
    subtitle: "Where Rice can be made in a million ways." 
  },
  { id: 3, 
    image: img3, 
    title: "World of Meats", 
    subtitle: "Carnivore Dishes that make your Hunger Roar!!" 
  },
  { id: 4, 
    image: 
    aboutImg, 
    title: "Meet the Chefs", 
    subtitle: "Learn about our culinary experts in the About Us Page" 
  },
  { id: 5, 
    image: img4, 
    title: "Fast Food Party", 
    subtitle: "Comfort food, Happy Food" 
  },
  { id: 6, 
    image: img5, 
    title: "Gourmet with Style", 
    subtitle: "From classy to street food, all with a touch of style." 
  },
  { id: 7, 
    image: img6, 
    title: "World of Flavor", 
    subtitle: "Rice and Pasta that will steal the show." 
  },
];

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const currentItem = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl h-[400px]">
      {/* Image */}
      <img
        src={currentItem.image}
        alt={currentItem.title}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8 text-white">
          <h2 className="text-4xl font-extrabold drop-shadow-lg mb-2" style={{WebkitTextStroke: "0.5px black", textShadow: "2px 2px 4px black",}}>{currentItem.title}</h2>
          <p className="text-xl font-medium drop-shadow-md" style={{WebkitTextStroke: "0.2px black", textShadow: "1px 1px 2px black",}}>{currentItem.subtitle}</p>
        </div>
      </div>

      {/* Left */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full text-white z-10 hover:bg-[rgba(255,255,255,0.2)] transition duration-500"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full text-white z-10 hover:bg-[rgba(255,255,255,0.2)] transition duration-500"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
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

console.log(img1, img2, img3, aboutImg, img4, img5, img6);
export default Carrousel;
