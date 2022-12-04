const userModel = require("../models/user");

module.exports = {
    create: function (req, res, next) {
        console.log("req.body", req.body);
        userModel.create(
            {
                email: req.body.email,
                phone_number: req.body.phone_number,
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
        userModel.find({}, {}, function (err, ads) {
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
                    response: ads,
                });
            }
        });
    },

    search: function (req, res) {
        const search = req.query.term;

        let condition = { description: { $regex: `${search}`, $options: "i" } };

        userModel
            .find(condition)
            .limit(50)
            .sort({ createdAt: 1 })
            .exec(function (err, data) {
                if (err) {
                    return res.json({
                        statusCode: 200,
                        error: err,
                        data: null,
                    });
                } else {
                    return res.json({
                        statusCode: 200,
                        error: null,
                        data: data,
                    });
                }
            });
    },

    getById: function (req, res, next) {
        const id = req.params.id;

        userModel.findById({ _id: id }, (err, data) => {
            if (err) {
                res.status(err.statusCode).jsonp(err.message);
                next();
            } else {
                if (data !== null) res.status(200).jsonp(data);
                else res.status(404).jsonp("No user found");
            }
        });
    },

    getByEmail: function (req, res, next) {
        const email = req.query.email;
        userModel.findOne({ email: email }, (err, data) => {
            if (err) {
                return res.status(err.statusCode).jsonp(err.message);
            } else {
                if (data !== null) res.status(200).jsonp(data);
                else res.status(404).jsonp("No user found");
            }
        });
    },

    updateByEmail: function (req, res, next) {
        const email = req.query.email;
        const updateData = {};
        if (req.body.firstName) {
            updateData["firstName"] = req.body.firstName;
        }
        if (req.body.lastName) {
            updateData["lastName"] = req.body.lastName;
        }
        if (req.body.phone_number) {
            updateData["phone_number"] = req.body.phone_number;
        }
        if (req.body.location) {
            updateData["location"] = req.body.location;
        }
        if (req.body.deliveryFirstName) {
            updateData["deliveryFirstName"] = req.body.deliveryFirstName;
        }
        if (req.body.deliveryLastName) {
            updateData["deliveryLastName"] = req.body.deliveryLastName;
        }
        if (req.body.deliveryPhoneNumber) {
            updateData["deliveryPhoneNumber"] = req.body.deliveryPhoneNumber;
        }
        if (req.body.street) {
            updateData["street"] = req.body.street;
        }
        if (req.body.city) {
            updateData["city"] = req.body.city;
        }
        if (req.body.state) {
            updateData["state"] = req.body.state;
        }
        if (req.body.zip) {
            updateData["zip"] = req.body.zip;
        }
        console.log("email", email);
        console.log("updateData", updateData);
        userModel.updateOne(
            { email: email },
            {
                $set: updateData,
            },
            (err, data) => {
                console.log(err, data);
                if (err) {
                    return res.status(500).jsonp(err.message || err);
                } else {
                    return res.status(200).jsonp("Record updated successfully");
                }
            }
        );
    },

    delete: function (req, res, next) {
        const id = req.params.id;

        userModel.deleteOne({ _id: id }, (err, data) => {
            if (err) {
                return res.status(err.statusCode).jsonp(err.message);
            } else {
                if (data !== null) {
                    return res.status(200).jsonp(data);
                } else {
                    res.status(404).jsonp("No user found");
                }
            }
        });
    },
};
