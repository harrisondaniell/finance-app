import {
  createTransactionRepository,
  getTransactionByUserIdRepository,
} from "../repositorys/transaction.repository.js";

export const createTransactionController = async (req, res) => {
  try {
    const transaction = await createTransactionRepository(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getTransactionByUserIdController = async (req, res) => {
  try {
    const userId = req.query.userId;
    const transactions = await getTransactionByUserIdRepository(userId);
    console.log(transactions);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).send(error);
  }
};
