const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a product description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a product price"],
  },
  images: {
    type: Array,
    required: [true, "Please provide product images"],
  },
  category: {
    type: String,
    required: [true, "Please provide a product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please provide a product stock"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
