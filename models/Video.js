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
});

module.exports = mongoose.model("Video", videoSchema);
