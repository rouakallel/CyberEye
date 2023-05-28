const express = require('express');
const domainController = require('../controllers/domainController');

const router = express.Router();

router.post('/nomDomain', domainController.checkDomain);

module.exports = router;
