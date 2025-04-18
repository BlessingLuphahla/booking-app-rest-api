import mongoose from "mongoose";

const hotelSchema = mongoose.Schema(
  {
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

    distance: {
      type: Number,
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

    title: {
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

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
