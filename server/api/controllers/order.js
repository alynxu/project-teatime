const orderModel = require("../models/order");

module.exports = {
  create: function (req, res, next) {
    console.log("req.body", req.body);
    const userId = req.body.userId;
    orderModel.create(
      {
        products: req.body.products,
        order_total: req.body.order_total,
        user: userId,
        deliveryFirstName: req.body.deliveryFirstName,
        deliveryLastName: req.body.deliveryLastName,
        deliveryPhoneNumber: req.body.deliveryPhoneNumber,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      },
      (err, result) => {
        if (err) {
          console.error("error", err);
          res.status(500).json({ err: err });
          return;
        }
        res.status(200).json({ ok: true });
      }
    );
  },

  list: function (req, res, next) {
    console.log("req.body", req.body);
    orderModel.find({ user: req.body.userId }, {}, function (err, orders) {
      if (err) {
        return res.json({
          statusCode: 200,
          error: err,
          response: null,
        });
      } else {
        return res.send({
          statusCode: 200,
          error: null,
          response: orders,
        });
      }
    });
  },

  getOrderById: function (req, res, next) {
    orderModel.findById(req.params.orderId, function (err, orderInfo) {
      if (err) {
        return res.json({
          statusCode: 200,
          error: err,
          response: null,
        });
      } else {
        return res.send({
          statusCode: 200,
          error: null,
          response: orderInfo,
        });
      }
    });
  },
};
