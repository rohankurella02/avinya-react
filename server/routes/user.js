const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../../models/User");

userRouter = express.Router();

userRouter.post(
  "/create-user",
  asyncHandler(async (req, res) => {
    const userObj = req.body;
    console.log(userObj);
    try {
      // check if the user is already present
      const userOfDB = await User.findOne({ phone: userObj.phone });
      // if user is already present
      if (userOfDB !== null) {
        res.send({ message: "Phone number is already registered" });
      } else {
        const newUser = new User({
          name: userObj.name,
          phone: userObj.phone,
          gender: userObj.gender,
        });
        // insert the user
        await newUser.save();
        res.status(200).send({ message: "user created" });
      }
    } catch (e) {
      res.send({ message: "error", error: e.message });
    }
  })
);

module.exports = userRouter;
