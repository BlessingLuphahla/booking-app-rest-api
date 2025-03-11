import { createError } from "../utils/error";
import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
  try {
    const newUser = User();
  } catch (error) {
    next(createError(error));
  }
};

export const loginUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(createError(error));
  }
};
