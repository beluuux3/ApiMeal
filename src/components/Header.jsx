import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories" },
    { name: "Random", path: "/random" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 py-4 flex flex-col justify-center items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-primary-700 hover:text-primary-800 transition duration-300"
        >
          RECETAS
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 font-semibold hover:text-primary-600 transition duration-300 uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
