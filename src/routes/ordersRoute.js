const epress = require("express");
const { createOrder, getOrders, deleteOrder } = require("../controllers/OrdersController");

const router = epress.Router();

router.get("/:email", getOrders);
router.post("/:email", createOrder);
router.delete("/:email", deleteOrder);

module.exports = router;
