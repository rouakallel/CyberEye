const express = require('express');
const domainController = require('../controllers/domainController');

const router = express.Router();

router.post('/', domainController.checkDomain);

module.exports = router;
