const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Video", videoSchema);
