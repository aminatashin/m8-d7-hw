import mongoose from "mongoose";

const { Schema, model } = mongoose;
const productionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
export default model("production", productionSchema);
