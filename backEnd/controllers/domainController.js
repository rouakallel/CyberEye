const domainModel = require('../models/domainModel');
const shodanService = require('../services/shodanService');
// Importez d'autres services nécessaires pour les autres APIs externes

const checkDomain = async (req, res) => {
  try {
    const { domain } = req.body;

    // Vérifiez le domaine dans la base de données JSON
    const result = domainModel.checkDomain(domain);

    if (result) {
      // Le domaine existe dans la base de données
      res.json({ message: 'Le domaine existe dans la base de données', result });
    } else {
      // Le domaine n'existe pas dans la base de données, faites appel à l'API externe
      const shodanResult = await shodanService.getDomainInfo(domain);
      // Effectuez d'autres appels à d'autres APIs externes si nécessaire

      // Renvoyez les résultats de l'API externe
      res.json({ message: 'Résultats de l\'API externe', result: shodanResult });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du domaine :', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la vérification du domaine' });
  }
};

module.exports = {
  checkDomain,
};
