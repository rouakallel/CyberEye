const express = require('express')
const router = express.Router();
const domainController = require('../controllers/domainController');

// Route pour vérifier le domaine dans la base de données
router.get('/', domainController.checkDomain);

module.exports = router;