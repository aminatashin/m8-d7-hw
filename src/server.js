import express from "express";
import cors from "cors";
import productionRouter from "./production/production.js";

// ================================
const server = express();

// =================================
server.use(cors());
server.use(express.json());

// =================================
server.get("/test/test", async (req, res, next) => {
  res.json({
    message: "test success",
  });
});
server.use("/test/product", productionRouter);
export default server;
