import swaggerAutogen = require("swagger-autogen");
import fs from "fs";
import { mkdir } from "node:fs";

const outputFile = "docs/swagger_output.json";

const createFolder = () => {
  if (!fs.existsSync(outputFile)) {
    mkdir("./docs", { recursive: false }, (err) => {
      if (err) throw err;
    });
  }
};

createFolder();

const endpointsFiles = ["./src/routes/routes.ts"];

swaggerAutogen(outputFile, endpointsFiles);
