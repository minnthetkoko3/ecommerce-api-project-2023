import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/user.router.js";

const app = express();
app.use(express.json());
const {MONGO_URL, PORT} = process.env
app.use("/app/user", userRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("databases connection success"))
  .catch((err) => {
    console.log(err);
  });



app.listen(PORT, () => {
  console.log("connection success");
});
