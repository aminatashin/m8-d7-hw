import mongoose from "mongoose";
import server from "./server.js";
import listEndpoints from "express-list-endpoints";
// =============================
const port = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`Server listening on port ${port}`);
  });
});
