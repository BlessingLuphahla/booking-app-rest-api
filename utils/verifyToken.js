import jwt from "jsonwebtoken";

import { createError } from "./error";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    next(createError({ message: "you are not authenticated", status: 404 }));
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error)
      return next(createError({ message: "Token Is Not Valid", status: 404 }));

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError({ message: "You are not authorised", status: 404 }));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError({ message: "You are not authorised", status: 404 }));
    }
  });
};
