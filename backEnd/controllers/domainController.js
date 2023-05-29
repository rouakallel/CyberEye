const Domain = require('../models/domainModel');
const VirusTotalService = require('../services/VirusTotalService');

const checkDomain = async (req, res) => {
  try {
    const {name: nomDomain } = req.body;
    if (!nomDomain) {
      return res.status(400).json({ message: 'Le champ nomDomain est manquant.' });
    }

    const existingDomain = await Domain.findOne({ name: nomDomain });
    if (existingDomain) {
      return res.status(200).json(existingDomain.toJSON());
    } 

    const virusTotalResult = await VirusTotalService.getDomainInfo(nomDomain);
    const domain = new Domain({
      name: virusTotalResult.data.name,
      attributes: virusTotalResult.data.attributes,
      type: virusTotalResult.data.type,
      id: virusTotalResult.data.id,
      links: virusTotalResult.data.links
    });
    await domain.save();
    res.status(201).json(domain);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification du domaine.' });
  }
};

module.exports = {
  checkDomain
};
