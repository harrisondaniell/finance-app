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
