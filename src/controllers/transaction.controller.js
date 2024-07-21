import { createTransaction } from "../repositorys/transaction.repository.js";

export const createTransactionController = async (req, res) => {
  try {
    const transaction = await createTransaction(req.body);
    console.log(transaction);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
