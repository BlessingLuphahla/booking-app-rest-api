import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from "../controllers/users.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/:id", verifyUser, getUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/", verifyAdmin, getAllUsers);

export default router;
