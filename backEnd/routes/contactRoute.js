const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

// Define the route for sending contact emails
router.post('/', contactController.sendContactEmail);

module.exports = router;
