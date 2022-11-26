const express = require('express');
const router = express.Router();

var userController = require('../api/controllers/user');

router.post('/', userController.create);

router.get('/', userController.list);

router.get('/search', userController.search);

router.get('/get-by-email', userController.getByEmail);

router.get('/:id', userController.getById);

router.put('/update-by-email', userController.updateByEmail);

router.delete('/:id', userController.delete);

module.exports = router;