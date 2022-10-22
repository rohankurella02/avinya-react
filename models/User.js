const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
