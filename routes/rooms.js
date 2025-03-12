import express from "express";

const router = express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/rooms.js";

router.get("/:id", getRoom);

router.get("/", getAllRooms);

router.post("/:hotelId", verifyAdmin, createRoom);

router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

export default router;
