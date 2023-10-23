const VirusTotalService = require('../services/VirusTotalService');
const mongoose = require('mongoose');
const collection = mongoose.connection.collection('domaindatas');


const checkDomain = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      console.log(name)
      return res.status(400).json({ message: 'Le champ name est manquant.' });
    }

    // Vérifiez si le domaine existe déjà dans la collection MongoDB
   const existingDomain = await collection.findOne({ name });

    if (existingDomain) {
      return res.status(200).json(existingDomain);
    }

    const virusTotalResult = await VirusTotalService.getDomainInfo(name);
    
    if (!virusTotalResult.data) {
      return res.status(404).json({ message: 'Aucune donnée trouvée pour ce domaine.' });
    }

    // Stockez les données dans la collection MongoDB
    const documentToInsert = {
      name: name, 
      data: virusTotalResult.data,
    };
    
    // Insérez le document dans la collection
    await collection.insertOne(documentToInsert);

    res.status(201).json(documentToInsert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification du domaine.' });
  }
};

module.exports = {
  checkDomain
};
