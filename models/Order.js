const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  imageURL: String,
  price: Number,
  quantity: Number,
  date: String,
  time: String,
});

const orderSchema = new Schema({
  orderId: String,
  name: String,
  phoneNo: Number,
  address: String,
  items: [itemSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
