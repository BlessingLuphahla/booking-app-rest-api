import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotels,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/:id", getHotel);

router.get("/", getAllHotels);

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
