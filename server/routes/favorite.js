const express = require("express");
const router = express.Router();

var favoriteController = require("../api/controllers/favorite");

router.post("/", favoriteController.create);

router.get("/", favoriteController.list);

module.exports = router;
