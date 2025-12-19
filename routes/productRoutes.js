const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ category: "Gyros" });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new product (admin)
router.post("/", async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const product = new Product({ name, price, description, category });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
