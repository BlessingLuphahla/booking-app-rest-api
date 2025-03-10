import express from "express";
import { createHotel, updateHotel } from "../controllers/hotels.js";


const router = express.Router();

router.post('/',createHotel)
router.put('/:id',updateHotel)

export default router
