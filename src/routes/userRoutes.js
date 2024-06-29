const express = require("express");
const { postUser, updateUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/", postUser);
router.put("/:email", updateUser);

module.exports = router;
