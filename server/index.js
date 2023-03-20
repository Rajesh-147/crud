import express from "express";
const app = express();
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router/router.js";
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/info", router);

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("server is connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(5000, () => {
  connect();
  console.log("server is running on port 5000");
});
