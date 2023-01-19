import { json, Router } from "express";
import CryptoJS from "crypto-js";
const authRouter = Router();
import UserSchema from "../models/user.model.js";

const { SEC_KEY } = process.env;

authRouter.post("/register", async (req, res) => {
  const newUser = new UserSchema({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, SEC_KEY).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default authRouter;
