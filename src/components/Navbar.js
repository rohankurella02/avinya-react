import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[56px] bg-green-600 text-white flex items-center justify-around">
      <Link to="/">
        <h1 className="text-2xl font-medium cursor-pointer">Jeeva</h1>
      </Link>
    </div>
  );
};

export default Navbar;
