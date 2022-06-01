import supertest from "supertest";
import server from "../server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
// ==============================
dotenv.config();
const client = supertest(server);
describe("testing the environment", () => {
  beforeAll(async () => {
    expect(process.env.MONGO_CONNECTION_TEST).toBeDefined();
    await mongoose.connect(process.env.MONGO_CONNECTION_TEST);
  });
  //   ======================================
  it("should test that true is true", () => {
    expect(true).toBe(true);
  });
  //   ======================================
  const production = {
    name: "nike",
    price: 100,
  };
  it("post endpoint", async () => {
    const response = await client.post("/test/product").send(production);
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
    console.log(response.body);
  });
  //   ======================================
  it("GET test", async () => {
    const response = await client.get("/test/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("test success");
  });
  //   ======================================

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
