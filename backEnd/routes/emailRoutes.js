const express = require('express');
const emailController = require('../controllers/emailController');

const router = express.Router();

router.post('/', emailController.checkEmail);

module.exports = router ;