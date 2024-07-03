const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productsRoute");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/ordersRoute");
const categoryRoutes = require("./src/routes//categoriesRoutes")

const cors = require("cors");
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Configure CORS with specific origin
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Define the port to listen on, use environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Mount userRoutes on the '/users' path
app.use("/users", userRoutes);

// Mount productRoutes on the '/products' path
app.use("/products", productRoutes);

// Mount cartRoutes on the '/cart' path
app.use("/cart", cartRoutes);

// Mount orderRoutes on the '/orders' path

app.use("/orders", orderRoutes);

// Mount categoryRoutes on the '/categories' path

app.use("/categories", categoryRoutes);

// Define a route for the root path to send a response
app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

// Start the server on the defined PORT and log the start message
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
