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

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = Hotel.findByIdAndUpdate(req.params.id);
    res.status(201).json(updatedHotel);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
