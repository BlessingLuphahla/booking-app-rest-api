import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotels,
} from "../controllers/hotels.js";

const router = express.Router();

router.get("/:id", getHotel);
router.get("/", getAllHotels);
router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
