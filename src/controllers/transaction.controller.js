import {
  createTransactionRepository,
  deleteTransactionRespository,
  getTransactionByUserIdRepository,
  updateTransactionRepository,
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

export const updateTransactionController = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await updateTransactionRepository(
      transactionId,
      req.body
    );
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTransactionController = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await deleteTransactionRespository(transactionId);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};
