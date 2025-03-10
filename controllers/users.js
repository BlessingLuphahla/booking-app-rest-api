import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = User(req.body);
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = (req, res) => {
  res.status(200).json("here is the user");
};
