import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  distances: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
    default: [],
  },

  desc: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
  },

  rooms: {
    type: [String],
  },

  cheapestPrice: {
    type: Number,
    required: true,
  },

  feautured: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Hotel", hotelSchema);
