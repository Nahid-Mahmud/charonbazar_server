const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// port
const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
