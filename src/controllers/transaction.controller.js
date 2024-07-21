import { createTransactionRepository } from "../repositorys/transaction.repository.js";

export const createTransactionController = async (req, res) => {
  try {
    const transaction = await createTransactionRepository(req.body);
    console.log(transaction);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};
