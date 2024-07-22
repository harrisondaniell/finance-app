import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllController,
  getIdController,
  updateUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.get("/user", getAllController);
userRouter.get("/user/:id", getIdController);
userRouter.patch("/user/:id", updateUserController);
userRouter.delete("/user/:id", deleteUserController);

export default userRouter;
