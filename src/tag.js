import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allVideos, resetVideosState } from "./features/videos/videosSlice";
import VideoLink from "./components/VideoLink";

const Tag = () => {
  const { tag } = useParams();

  const videosState = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  const fetchBooks = async () => {
    dispatch(allVideos(tag));
  };

  useEffect(() => {
    fetchBooks();
    dispatch(resetVideosState());
  }, []);

  return (
    <div>
      <h1 className="mt-2 text-center font-medium text-xl">{tag}</h1>
      <div className="p-2 w-full">
        {videosState.videos.length > 0 &&
          videosState.videos.map((video, index) => {
            return <VideoLink key={index} {...video} />;
          })}
      </div>
    </div>
  );
};

export default Tag;
