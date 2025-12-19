const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

function generateOrderId() {
  return "TG-ORD-2025-" + Math.floor(1000 + Math.random() * 9000);
}

router.post("/", async (req, res) => {
  const order = new Order({
    ...req.body,
    orderId: generateOrderId(),
    totalAmount: req.body.items.reduce((a, i) => a + i.price * i.quantity, 0)
  });
  await order.save();
  res.json(order);
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
