import { Router } from "express";
import { createTransactionController } from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.post("/transaction", createTransactionController);
//

export default transactionRouter;
