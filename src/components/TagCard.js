import React from "react";
import { Link } from "react-router-dom";

const TagCard = ({ img, title, color }) => {
  return (
    <Link to={`/tags/${title}`}>
      <div
        className={`m-1 p-2 max-w-[160px] rounded-lg ${color} shadow-lg border-0.5 border-black`}
      >
        <img src={img} alt={title} className="rounded-t-lg" height={400}></img>
        <h1 className="font-bold text-xl lg:text-base mt-2 text-center">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default TagCard;
