import { prisma } from "../services/prisma.js";

export const createTransaction = async (transactionBody) => {
  const transaction = await prisma.transaction.create({
    data: transactionBody,
  });
  return transaction;
};
