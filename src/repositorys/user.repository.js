import { prisma } from "../services/prisma.js";

export const createUserRepository = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      firstName: true,
      lastName: true,
      email: true,
      password: false,
    },
  });
  return user;
};

export const getAllRepository = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      password: false,
      _count: false,
    },
  });
  return users;
};

export const getByIDRepository = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      password: false,
    },
  });
  return user;
};

export const updateUserRepository = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: false,
      firstName: true,
      lastName: true,
      email: true,
    },
  });
  console.log(user);
  return user;
};

export const deleteUserRepository = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const getUserBalanceRepository = async (userId) => {
  const {
    _sum: { amount: totalExpenses },
  } = await prisma.transaction.aggregate({
    where: {
      user_id: userId,
      type: "EXPENSE",
    },
    _sum: {
      amount: true,
    },
  });

  const {
    _sum: { amount: totalEarnings },
  } = await prisma.transaction.aggregate({
    where: {
      user_id: userId,
      type: "EARNING",
    },
    _sum: {
      amount: true,
    },
  });

  const {
    _sum: { amount: totalInvestments },
  } = await prisma.transaction.aggregate({
    where: {
      user_id: userId,
      type: "INVESTMENT",
    },
    _sum: {
      amount: true,
    },
  });

  const _totalEarning = totalEarnings || 0;
  const _totalExpenses = totalExpenses || 0;
  const _totalInvestments = totalInvestments || 0;
  const balance = totalEarnings - totalExpenses - totalInvestments;

  return {
    earnings: _totalEarning,
    expenses: _totalExpenses,
    investments: _totalInvestments,
    balance,
  };
};

export const getUserIdByEmailRepository = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return user;
};
