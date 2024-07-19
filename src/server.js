import express, { urlencoded } from "express";
import "dotenv/config";
import cors from "cors";
//
const server = express();
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

const port = 3000;
server.listen(port, () => {
  console.log("Servidor no ar");
});
