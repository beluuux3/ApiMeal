import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../images/food-logo.png";
import Search from "./meals/Search";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Meals", path: "/meals" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-amber-800 md sticky top-0 z-50">
      <div className="px-4 py-3 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={logo}
              alt="Food Logo"
              className="w-50 h-15 object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-amber-100 font-bold hover:text-primary-600 transition duration-300 uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-amber-100 hover:text-primary-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>


      {menuOpen && (
        <nav className="md:hidden bg-amber-600 border-t border-amber-200 flex flex-col items-center space-y-3 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-amber-100 font-semibold hover:text-primary-600 transition duration-300 uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
