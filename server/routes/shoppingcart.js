const express = require("express");
const router = express.Router();

var shoppingcartController = require("../api/controllers/shoppingcart");

router.post("/", shoppingcartController.create);

router.get("/", shoppingcartController.list);

module.exports = router;
