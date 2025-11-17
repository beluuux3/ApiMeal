import React from "react";
import { Link } from "react-router-dom";
export default function ButtonRandom() {
  return (
    <>
      <Link
        to="/recipe/random"
        className="bg-amber-500 hover:bg-orange-500 text-white rounded-xl p-1"
      >
        Ramdon
      </Link>
    </>
  );
}
