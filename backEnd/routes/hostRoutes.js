const express = require('express');
const shodanController = require('../controllers/shodanController');

const router = express.Router();

router.post('/', shodanController.checkHost);

module.exports = router ;