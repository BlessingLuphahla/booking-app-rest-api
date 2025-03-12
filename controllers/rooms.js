import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
      res.status(201).json(savedRoom);
    } catch (error) {
      next(createError(error));
    }
  } catch (error) {
    next(createError(error));
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    const hotelId = req.params.hotelId;

    if (!room) {
      return next(
        createError({
          status: 404,
          message: "The room you are trying to delete doesnt exist",
        })
      );
    }
    await Room.findByIdAndDelete(room._id);

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: room._id },
      });

      res.status(200).json("Room deleted successfully");
    } catch (error) {
      next(createError(error));
    }

    res.status(200).json("Room Has Been Deleted");
  } catch (error) {
    next(createError(error));
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedRoom);
  } catch (error) {
    next(createError(error));
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(createError(error));
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(createError(error));
  }
};
