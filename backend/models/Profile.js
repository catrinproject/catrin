const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  gender: {
    type: String,
    enum: ["female", "male"],
    required: true,
  },
  birthday: {
    type: Date,
  },
  height: {
    type: Number,
  },
  sports: {
    type: Array,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
