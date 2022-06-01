import express from "express";
import proModel from "./model.js";

const productionRouter = express.Router();
productionRouter.post("/", async (req, res, next) => {
  const production = new proModel(req.body);
  await production.save();
  res.status(201).send(production);
});
export default productionRouter;
