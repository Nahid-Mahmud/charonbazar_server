const express = require("express");
const { genarateToken } = require("../controllers/authController");

const router = express.Router();

router.post("/", genarateToken);

module.exports = router;
