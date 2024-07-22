import { prisma } from "../services/prisma.js";

export const createTransactionRepository = async (transactionBody) => {
  const transaction = await prisma.transaction.create({
    data: transactionBody,
  });
  return transaction;
};

export const getTransactionByUserIdRepository = async (userId) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      user_id: userId,
    },
  });
  return transactions;
};

export const updateTransactionRepository = async (transactionId, data) => {
  const transaction = await prisma.transaction.update({
    where: {
      id: transactionId,
    },
    data,
  });
  return transaction;
};

export const deleteTransactionRespository = async (transactionId) => {
  const transaction = await prisma.transaction.delete({
    where: {
      id: transactionId,
    },
  });

  return transaction;
};
