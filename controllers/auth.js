import { createError } from "../utils/error.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);
    const newUser = User({
      username: req.body.username,
      email: req.body.email,
      password,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(createError(error));
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return next(
        createError({
          message: `The user with the username "${req.params.username}" doesnt exist`,
          status: 401,
        })
      );
    }

    if (!req.body.password) {
      return next(
        createError({
          message: `Password is required to Login`,
          status: 404,
        })
      );
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(
        createError({
          message: `Incorrect password!!`,
          status: 400,
        })
      );
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      {}
    );

    const { password, isAdmin, ...userWithoutPass } = user._doc;

    res.status(200).json(userWithoutPass);
  } catch (error) {
    next(createError(error));
  }
};
