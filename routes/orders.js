const express = require("express");
const router = express.Router();
const orderscontroller = require("../controllers/orders");

router.get("/", orderscontroller.getOrders);
router.post("/", orderscontroller.addOrder);

router.delete("/:id", orderscontroller.deleteOrder);

module.exports = router;
