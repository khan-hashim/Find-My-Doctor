const Order = require("../models/Order");

exports.getOrders = async function (req, res) {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (error) {
    return res.json("server error");
  }
};

exports.addOrder = async function (req, res, next) {
  try {
    const order = await Order.create(req.body);
    return res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: "server error",
    });
  }
};

exports.deleteOrder = async function (req, res) {
  try {
    const orderDeleted = await Order.findByIdAndDelete(req.params.id);
    return res.json(orderDeleted);
  } catch (error) {
    return res.send("server error");
  }
};
