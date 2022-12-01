const orderModel = require("../models/order");
const userModel = require("../models/user");

module.exports = {
  create: function (req, res, next) {
    console.log("req.body", req.body);
    const userId = req.body.userId;
    orderModel.create(
      {
        products: req.body.products,
        order_total: req.body.order_total,
        user: userId,
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
};
