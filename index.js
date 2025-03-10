import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import { connectToMongo } from "./utils/connectToMongo.js";
import userRouter from "./routes/users.js";

dotenv.config();

// constants
const PORT = Number(process.env.PORT) || 3000;

// create app instance
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

// setting up APIs
app.use("/api/users", userRouter);

// setting up connections
connectToMongo();
app.listen(PORT, () => {
  console.log("server running on ", PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to the BOOKING APP RESFUL API");
});
