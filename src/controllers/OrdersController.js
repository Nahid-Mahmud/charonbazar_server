const Order = require("../models/ordersModel");
const User = require("../models/userModels");

// create order
const createOrder = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const { products, total } = req.body;

    // check if the user is valid

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      res.status(404).send({ message: "unothorized access" });
    } else {
      const newOrder = new Order({
        userEmail,
        products,
        total,
      });

      const savedOrder = await newOrder.save();

      res.status(201).send({
        data: savedOrder,
        message: "Order was created",
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete Order and get imail form params and order id from body

const deleteOrder = async (req, res) => {
  const { email } = req.params;
  const { orderId } = req.body;
  try {
    const delerOrderConfirmation = await Order.findOneAndDelete({ userEmail: email, _id: orderId });

    if (!delerOrderConfirmation) {
      res.status(404).send({ message: "Order not found" });
    } else {
      res.status(200).send({ message: "Order deleted successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get orders by email
const getOrders = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const orders = await Order.find({ userEmail });

    if (!orders) {
      res.status(404).send({ message: "No orders found" });
    } else {
      res.status(200).send({
        data: orders,
        message: "Orders retrieved successfully",
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { createOrder, deleteOrder, getOrders };
