const Category = require("../models/categoryModel");

// Create a new category
const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send({ data: category, message: "Category created successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send({ data: categories, message: "Categories retrieved successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// delete category by id

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.status(200).send({
      message: "Category deleted successfully",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { createCategory, getCategories, deleteCategory };
