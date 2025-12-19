const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: String,
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  fulfillmentType: {
    type: String,
    enum: ["DELIVERY", "TAKEAWAY"],
    default: "TAKEAWAY"
  },
  deliveryAddress: {
    name: String,
    mobile: String,
    city: String,
    street: String,
  },
  paymentMethod: {
    type: String,
    default: "MOCK_PAYMENT"
  },
  status: {
    type: String,
    enum: ["PENDING", "PAID"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
