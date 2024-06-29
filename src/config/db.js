const mongoose = require("mongoose");
require("dotenv").config();

// Get the connection string from the env file

const connectDB = async () => {
  const connectionUri = process.env.CONNECTION_URI;

  try {
    await mongoose.connect(connectionUri);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
