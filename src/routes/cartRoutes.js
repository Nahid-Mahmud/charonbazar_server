const express = require("express");
const { createCart, updateCart, getCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/:email", createCart);
router.put("/:email", updateCart);
router.get("/:email", getCart);

module.exports = router;
