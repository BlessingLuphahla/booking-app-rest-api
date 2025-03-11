import User from "../models/User.js";

export const getUser = (req, res) => {
  res.status(200).json("here is the user");
};
