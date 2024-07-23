import { Router } from "express";
import {
  createTransactionController,
  deleteTransactionController,
  getTransactionByUserIdController,
  updateTransactionController,
} from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.post("/transactions", createTransactionController);
transactionRouter.get(
  "/transactions/:userId",
  getTransactionByUserIdController
);
transactionRouter.patch("/transactions/:id", updateTransactionController);
transactionRouter.delete("/transactions/:id", deleteTransactionController);

export default transactionRouter;
