import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectToMongo } from "./utils/connectToMongo.js";
import userRouter from "./routes/users.js";
import hotelRouter from "./routes/hotels.js";

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

// setting up API (middlewares)
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);


// setting up connections
app.listen(PORT, () => {
  connectToMongo();
  console.log("server running on ", PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to the BOOKING APP RESFUL API");
});
