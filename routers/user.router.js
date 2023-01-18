import { Router } from "express";
const userRouter = Router();

userRouter.get("/auth", (req, res) => {
  res.send("user test successfully");
});

userRouter.post("/authpost", (req, res) => {
    const { username } = req.body;
    console.log("username is " + username);
});

export default userRouter;
