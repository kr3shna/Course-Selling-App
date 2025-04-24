import express from "express";
import { registerUser } from "../controllers/user.controllers.js";


const userRouter = express.Router();

userRouter.post("/signup",registerUser);


export default userRouter;