import { Router } from "express";
import {
  createTransactionController,
  getTransactionByUserIdController,
  updateTransactionController,
} from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.post("/transactions", createTransactionController);
transactionRouter.get("/transactions", getTransactionByUserIdController);
transactionRouter.patch("/transactions/:id", updateTransactionController);

export default transactionRouter;
