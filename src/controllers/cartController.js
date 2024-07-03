const Cart = require("../models/cartModel");

// create cart
const createCart = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const { products } = req.body;

    const newCart = new Cart({
      userEmail,
      products,
    });

    const savedCart = await newCart.save();

    res.status(201).send({
      savedCart,
      message: "Cart was created",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update cart

const updateCart = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const { products } = req.body;
    const updatedCart = await Cart.findOneAndUpdate({ userEmail }, { products }, { new: true });
    res.status(200).send({
      updatedCart,
      message: "Cart was updated",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get cart by email

const getCart = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const cart = await Cart.findOne({ userEmail });
    res.status(200).send({
      cart,
      message: "Cart retrieved successfully",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { createCart, updateCart, getCart };
