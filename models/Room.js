import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    maxPeople: {
      type: Number,
      required: true,
    },

    roomNumbers: {
      type: [Number],
      unAvailableDates: [Date],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
