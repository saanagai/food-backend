import express from "express";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";

configDotenv();
connectMongoDb();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
app.use("/food-category", categoryRoute);

app.get("/", (req, res) => {
  res.send("hello foodDelivery");
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
