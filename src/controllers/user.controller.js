import bcrypt from "bcrypt";
import {
  createUserRepository,
  deleteUserRepository,
  getAllRepository,
  getByIDRepository,
  getUserBalanceRepository,
  updateUserRepository,
} from "../repositorys/user.repository.js";

export const createUserController = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    console.log(hashPassword);
    const user = await createUserRepository(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllController = async (req, res) => {
  try {
    const users = await getAllRepository();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getByIdController = async (req, res) => {
  try {
    const user = await getByIDRepository(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateUserController = async (req, res) => {
  try {
    const user = await updateUserRepository(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUserRepository(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserBalanceController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const balance = await getUserBalanceRepository(userId);
    res.status(200).json(balance);
  } catch (error) {
    res.status(400).json(error);
  }
};
