const favoriteModel = require("../models/favorite");

module.exports = {
  create: function (req, res, next) {
    console.log("req.body", req.body);
    const userId = req.body.userId;
    //checking if the user already has a favorite list
    favoriteModel.findOne({ user: userId }, function (err, items) {
      if (err) {
        return res.json({
          statusCode: 200,
          error: err,
          response: null,
        });
      } else {
        if (items) {
          //if the user has a favorite list, update it
          favoriteModel.updateOne(
            { user: userId },
            {
              items: req.body.items,
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
          //if the user doesn't have a favorite list, create one
          favoriteModel.create(
            {
              items: req.body.items,
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
    favoriteModel.findOne(
      { user: req.query.userId },
      {},
      function (err, favorite) {
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
            response: favorite,
          });
        }
      }
    );
  },
};
