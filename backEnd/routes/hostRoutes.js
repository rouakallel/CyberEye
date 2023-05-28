const express = require('express');
const hostController = require('../controllers/hostController');

const router = express.Router();

router.post('/host', hostController.checkHost);

module.exports = router ;