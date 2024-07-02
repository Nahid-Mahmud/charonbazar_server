const Product = require("../models/productModel");

// post product
const postProduct = async (req, res) => {
  try {
    const { name, description, price, images, category, stock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      images,
      category,
      stock,
    });

    const savedProduct = await newProduct.save();

    res.status(201).send({
      savedProduct,
      message: "Product was created",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get all products with or without query
const getAllProducts = async (req, res) => {
  try {
    const category = req.query.category;

    // check if category is provided
    if (category) {
      // get products by category
      const products = await Product.find({ category });
      res.status(200).send({
        products,
        message: "Products retrieved successfully by category",
      });
    }

    // if no category is provided, get all products

    if (!category) {
      const products = await Product.find({});
      res.status(200).send({
        products,
        message: "Products retrieved successfully",
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get single product

const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    res.send({
      product,
      message: "Product retrieved successfully",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// edit product

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

    res.status(200).send({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// delete proudct

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);

    res.status(200).send({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// product search by name and price range

const searchProduct = async (req, res) => {
  try {
    const { name, minPrice, maxPrice } = req.query;

    // check if name, minPrice, and maxPrice are provided
    if (!name && minPrice && maxPrice) {
      const products = await Product.find({
        price: { $gte: minPrice, $lte: maxPrice },
      });

      res.status(200).send({
        products,
        message: "Products retrieved successfully",
      });
    } else if (name && !minPrice && !maxPrice) {
      const products = await Product.find({
        name: { $regex: name, $options: "i" },
        price: { $gte: minPrice },
      });

      res.status(200).send({
        products,
        message: "Products retrieved successfully",
      });
    }
  } catch (err) {}
};

module.exports = { searchProduct, postProduct, getAllProducts, getSingleProduct, editProduct, deleteProduct };
