import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllController,
  getByIdController,
  updateUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.get("/users", getAllController);
userRouter.get("/user/:id", getByIdController);
userRouter.patch("/user/:id", updateUserController);
userRouter.delete("/user/:id", deleteUserController);

export default userRouter;
