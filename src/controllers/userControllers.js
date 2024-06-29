const User = require("../models/userModels");

// post user

const postUser = async (req, res) => {
  console.log(req.body);
  try {
    // check if name and email are provided
    if (!req.body.name || !req.body.email) {
      res.status(400).send({ message: "Name and email are required" });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      address: "",
      phone: "",
    });

    const savedUser = await newUser.save();
    res.status(201).send({
      savedUser,
      message: "User was created",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update user by email
const updateUser = async (req, res) => {
  try {
    const email = req.params.email;

    const { name, address, phone } = req.body;

    const user = await User.findOneAndUpdate({ email }, { name, address, phone }, { new: true });

    const updatedUser = await user.save();

    res.status(200).send({
      updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { postUser, updateUser };
