import React, { useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";

export default function Search() {
  const { setSearchTerm } = useContext(FoodContext);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by name"
          className="w-full p-3 pl-10 text-lg border-2 border-orange-400 rounded-lg  focus:border-orange-700"
        />
      </div>
    </form>
  );
}
