import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const hotel = new Hotel(req.body);
  try {
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    next(createError(error));
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedHotel);
  } catch (error) {
    next(createError(error));
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!hotel) {
      next(
        createError({
          status: 404,
          message: "The hotel you are trying to delete doesnt exist",
        })
      );
      return;
    }

    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has Been Deleted");
  } catch (error) {
    next(createError(error));
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(createError(error));
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const { max, min, ...others } = req.query;

    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: {
        $gt: min || 1,
        $lt: max || 999,
      },
    });

    res.status(200).json(hotels);
  } catch (error) {
    next(createError(error));
  }
};

export const getAllHotelsCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(createError(error));
  }
};

export const getAllHotelsCountByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(createError(error));
  }
};
