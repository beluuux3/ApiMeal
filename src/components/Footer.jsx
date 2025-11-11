import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-tr from-orange-500 to-amber-500 text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center  ">
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-primary-400 hover:text-primary-300"
            >
              Foods
            </Link>

            <p>Belen, Moises, Edmund</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
