import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/food-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-amber-800 to-amber-600 text-white mt-12 pt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Food Logo"
                className="w-60 h-20 object-contain"
              />
            </Link>
            <p className="text-sm max-w-xs opacity-90">
               <strong>Recetas:</strong> donde cocinar no requiere un diploma, solo hambre. <br/>
                Aquí encontrarás recetas fáciles, rápidas y deliciosas para cuando quieres impresionar… 
                o simplemente sobrevivir al almuerzo. <br />
                Desde ideas para principiantes que apenas saben hervir agua, 
                hasta platillos que harían llorar de orgullo a tu abuela, 
                este sitio es tu compañero de cocina. <br />
                Explora por categorías, prueba algo al azar si te sientes valiente, 
                y prepárate para ensuciar la cocina (y triunfar en el intento).
            </p>
          </div>

          {/*Navigation*/}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/categories" className="hover:underline">Categories</Link>
            <Link to="/random" className="hover:underline">Pick the Recipie for Me</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.86c0-2.38 1.42-3.69 3.58-3.69 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.76h2.64l-.42 2.9h-2.22v7.03c4.78-.75 8.44-4.91 8.44-9.93z" />
                </svg>
              </a>

              <a href="#" className="hover:text-gray-200" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5c3.07 0 5.75-2.68 5.75-5.75v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5c2.35 0 4.25 1.9 4.25 4.25v8.5c0 2.35-1.9 4.25-4.25 4.25h-8.5C5.4 20.5 3.5 18.6 3.5 16.25v-8.5C3.5 5.4 5.4 3.5 7.75 3.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a>

              <a href="#https://www.youtube.com/watch?v=xvFZjo5PgG0" className="hover:text-gray-200" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19.615 3.184A2.992 2.992 0 0 0 17.514 2H6.486a2.992 2.992 0 0 0-2.101 1.184C3.613 3.924 3.5 5.085 3.5 7.14v9.72c0 2.055.113 3.216.885 3.956A2.992 2.992 0 0 0 6.486 22h11.028a2.992 2.992 0 0 0 2.101-1.184c.772-.74.885-1.901.885-3.956V7.14c0-2.055-.113-3.216-.885-3.956zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-300 mt-8 mb-4 opacity-50"></div>

        <div className="text-center text-sm pb-4 opacity-80">
          © 2025 RECETAS | Desarrollado por Belen, Moises y Edmund
        </div>
      </div>
    </footer>
  );
}
