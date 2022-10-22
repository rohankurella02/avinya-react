const express = require("express");
const asyncHandler = require("express-async-handler");
const Video = require("../../models/Video");

const videosRouter = express.Router();

videosRouter.get(
  "/all-videos",
  asyncHandler(async (req, res) => {
    try {
      const videos = await Video.find();
      res.status(200).send(videos);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

videosRouter.get(
  "/:tag",
  asyncHandler(async (req, res) => {
    try {
      const { tag } = req.params;
      const videos = await Video.find().where({ tag: tag });

      res.status(200).send(videos);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

module.exports = videosRouter;
