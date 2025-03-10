import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  profilePic: {
    type: String,
    default: "",
  },
});

export default mongoose.model("User",userSchema)


