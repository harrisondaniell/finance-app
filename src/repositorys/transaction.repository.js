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
  console.log(transactions);
  return transactions;
};
