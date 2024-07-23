import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import transactionRouter from "./routes/transaction.route.js";
import swaggerRouter from "./routes/swagger.route.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

server.use(userRouter);
server.use(transactionRouter);
server.use(swaggerRouter);

const port = 3000;
server.listen(port, () => {
  console.log("Servidor no ar");
});
