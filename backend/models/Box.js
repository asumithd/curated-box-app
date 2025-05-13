const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
  title: String,
  description: String,
  hobby: String,
  price: Number,
  imageUrl: String,
  contents: [String],
});

module.exports = mongoose.model("Box", boxSchema);
