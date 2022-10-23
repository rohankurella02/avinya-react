import React from "react";
import TagCard from "./components/TagCard";
import tags from "./services/tags";

const Home = () => {
  return (
    <div className="flex flex-wrap p-3 justify-evenly items-start">
      {tags.map((tag, index) => {
        return <TagCard {...tag} key={index} />;
      })}
    </div>
  );
};

export default Home;
