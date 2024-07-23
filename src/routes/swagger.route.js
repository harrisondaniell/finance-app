import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../../swagger.json" assert { type: "json" };

const swaggerRouter = Router();
swaggerRouter.use("/docs", swaggerUI.serve);
swaggerRouter.get("/docs", swaggerUI.setup(swaggerDocument));

export default swaggerRouter;
