const express = require("express");
const { postProduct, getAllProducts, getSingleProduct, editProduct } = require("../controllers/productsContollers");
const router = express.Router();

router.post("/", postProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", editProduct);

module.exports = router;
