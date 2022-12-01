const express = require("express");
const router = express.Router();

var orderController = require("../api/controllers/order");

router.post("/", orderController.create);

router.post("/all", orderController.list);

module.exports = router;