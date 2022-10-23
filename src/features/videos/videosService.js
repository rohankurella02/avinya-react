import axios from "axios";
const url = "http://localhost:3001/videos/";

const getVideos = async (tag) => {
  let respose = await axios.get(url + tag);

  return respose.data;
};

export const videosService = {
  getVideos,
};
