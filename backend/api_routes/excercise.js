const express = require("express");
const router = express.Router();
const Excercise = require("../models/Excercise");

// @route    GET api/exercises
// @desc     Get exercises
// @access   Public
router.get("/", async (_, res) => {
  try {
    const excercises = await Excercise.find();
    res.json(excercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/exercises
// @desc     Post exercises
// @access   Public
router.post("/", async (req, res) => {
  try {
    const { displayName, unit } = req.body;
    const excercise = new Excercise({
      displayName,
      unit,
    });
    const newExcercise = await excercise.save();
    res.json(newExcercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
