import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllController,
  getByIdController,
  getUserBalanceController,
  updateUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/users", getAllController);
userRouter.get("/user/:id", getByIdController);
userRouter.get("/user/:userId/balance", getUserBalanceController);
userRouter.post("/user", createUserController);
userRouter.patch("/user/:id", updateUserController);
userRouter.delete("/user/:id", deleteUserController);

export default userRouter;
