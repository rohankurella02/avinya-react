import React, { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoLink = ({ title, link }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-white border border-gray-300 shadow-lg m-2 p-2 rounded cursor-pointer">
      <h1 onClick={() => setVisible(!visible)} className="font-bold text-xl">
        {title}
      </h1>
      {visible && (
        <YoutubeEmbed
          embedId={link}
          className="transition duration-100 ease-in rounded-lg my-6"
        />
      )}
    </div>
  );
};

export default VideoLink;
