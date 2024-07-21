import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

server.use(userRouter);

const port = 3000;
server.listen(port, () => {
  console.log("Servidor no ar");
});
