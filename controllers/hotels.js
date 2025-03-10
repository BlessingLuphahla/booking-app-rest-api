import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  const hotel = Hotel(req.body);
  try {
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
} catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
