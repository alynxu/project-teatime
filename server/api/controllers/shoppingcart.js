const shoppingcartModel = require("../models/shoppingcart");

module.exports = {
    create: function (req, res, next) {
        console.log("req.body", req.body);
        const userId = req.body.userId;
        //checking if the user has a shopping cart
        shoppingcartModel.findOne({ user: userId }, function (err, cart) {
            if (err) {
                return res.json({
                    statusCode: 200,
                    error: err,
                    response: null,
                });
            } else {
                if (cart) {
                    //if the user has a shopping cart, we update it
                    shoppingcartModel.updateOne(
                        { user: userId },
                        {
                            cartItems: req.body.cartItems,
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
                } else {
                    //if the user doesn't have a shopping cart, we create it
                    shoppingcartModel.create(
                        {
                            cartItems: req.body.cartItems,
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
                }
            }
        });
    },

    list: function (req, res, next) {
        console.log("req.body", req.query.userId);
        shoppingcartModel.findOne(
            { user: req.query.userId },
            {},
            function (err, shoppingcart) {
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
                        response: shoppingcart,
                    });
                }
            }
        );
    },
};
