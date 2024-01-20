import express, { Request } from "express";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../docs/swagger_output.json");
import routes from "./routes/routes";
import cors from "cors";

const createServer = () => {
  const server = express();
  server.use(express.json());
  server.use(cors<Request>());
  server.use("/api/v1", routes);
  server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  server.use(ErrorHandler);

  return server;
};

export { createServer };
