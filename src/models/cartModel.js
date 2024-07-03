const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: String,
      quantity: Number,
    },
  ],
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
