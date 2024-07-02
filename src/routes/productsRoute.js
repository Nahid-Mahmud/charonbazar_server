const express = require("express");
const {
  postProduct,
  getAllProducts,
  getSingleProduct,
  editProduct,
  deleteProduct,
  searchProduct,
} = require("../controllers/productsContollers");
const router = express.Router();

router.post("/", postProduct);
router.get("/", getAllProducts);
router.get("/search", searchProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
