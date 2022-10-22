const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const videosRouter = require("./routes/videos");
const userRouter = require("./routes/user");

require("dotenv").config();

const DB_URL = process.env.DB_URL;
// DB connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB connection successful"))
  .catch((e) => console.log(e.message));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/videos", videosRouter);
app.use("/user", userRouter);

app.listen(3001, () => console.log("Server is running.."));
