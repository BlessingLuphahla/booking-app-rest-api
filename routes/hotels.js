import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotels,
  getAllHotelsCountByCity,
  getAllHotelsCountByType
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/find/:id", getHotel);

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/", getAllHotels);
router.get("/countByCity", getAllHotelsCountByCity);
router.get("/countByType", getAllHotelsCountByType);


export default router;
