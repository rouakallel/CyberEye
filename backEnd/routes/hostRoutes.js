const express = require('express');
const hostController = require('../controllers/hostController');

const router = express.Router();

router.post('/', hostController.checkHost);

module.exports = router ;