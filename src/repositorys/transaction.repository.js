import { prisma } from "../services/prisma.js";

export const createTransaction = async (transactionBody) => {
  const transaction = await prisma.transaction.create({
    transactionBody,
    select: {
      user_id: true,
      id: true,
      amount: true,
      date: true,
      type: true,
      name: true,
    },
  });
  return transaction;
};
