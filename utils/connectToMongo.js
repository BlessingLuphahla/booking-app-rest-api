import mongoose from "mongoose";

export const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log("Initialising Mongo...");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
  });
};
