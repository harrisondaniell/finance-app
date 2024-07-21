import { Router } from "express";
import {
  createTransactionController,
  getTransactionByUserIdController,
} from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.post("/transactions", createTransactionController);
transactionRouter.get("/transactions", getTransactionByUserIdController);

export default transactionRouter;
