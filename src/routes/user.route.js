import { Router } from "express";
import {
  create,
  deleteUserController,
  get,
  getId,
  updateUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", create);
userRouter.get("/user", get);
userRouter.get("/user/:id", getId);
userRouter.patch("/user/:id", updateUserController);
userRouter.delete("/user/:id", deleteUserController);

export default userRouter;
