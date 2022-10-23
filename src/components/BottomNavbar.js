import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  return (
    <div className="bg-white max-w-4xl w-full h-[56px] shadow-lg border border-t-gray-300 text-white flex items-center justify-around fixed bottom-0 text-3xl">
      <Link to="/">
        <AiFillHome
          className={`text-gray-400 ${
            path === "/" && "text-green-500"
          } cursor-pointer`}
        />
      </Link>
      <Link to="/chat">
        <BsFillChatDotsFill
          className={`text-gray-400 cursor-pointer ${
            path === "/chat" && "text-green-400"
          }`}
        />
      </Link>
      <Link to="/call">
        <BsCameraVideoFill
          className={`text-gray-400 cursor-pointer ${
            path === "/call" && "text-green-400"
          }`}
        />
      </Link>
    </div>
  );
};

export default BottomNavbar;
