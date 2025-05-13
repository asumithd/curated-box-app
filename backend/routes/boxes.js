const express = require("express");
const router = express.Router();
const Box = require("../models/Box");

// Get all boxes
router.get("/", async (req, res) => {
  const boxes = await Box.find();
  res.json(boxes);
});

// Add a box
router.post("/", async (req, res) => {
  const box = new Box(req.body);
  await box.save();
  res.status(201).json(box);
});

module.exports = router;
