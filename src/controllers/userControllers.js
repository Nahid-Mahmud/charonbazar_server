const User = require("../models/userModels");

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

module.exports = { postUser };
