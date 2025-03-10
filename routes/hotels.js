import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
} from "../controllers/hotels.js";

const router = express.Router();

router.get("/:id", getHotel);
router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
