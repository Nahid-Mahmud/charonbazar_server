const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide an image"],
  },
});

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
