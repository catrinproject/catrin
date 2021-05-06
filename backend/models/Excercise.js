const mongoose = require("mongoose");

const ExcerciseSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("excercise", ExcerciseSchema);
