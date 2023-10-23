const mongoose = require('mongoose');
const hibpService = require('../services/hibpService');

const checkEmail = async (req, res) => {
  try {
    const { adresseEmail } = req.body;
    if (!adresseEmail) {
      return res.status(400).json({ message: 'Le champ adresse e-mail est manquant.' });
    }

    const collection = mongoose.connection.collection('Emails');
    const existingMail = await collection.findOne({ adresseEmail });

    if (existingMail) {
      return res.status(200).json(existingMail); 
    }

    // Utilisez une fonction pour scanner et traiter l'e-mail
    const scanAndProcessEmail = async (adresseEmail) => {
      try {
        const hibpResult = await hibpService.scanEmail(adresseEmail);
        console.log("le resultat du test Hibp ", hibpResult);
        return hibpResult;
      } catch (error) {
        console.error(error);
        if (error.isAxiosError && error.response && error.response.status === 404) {
          // Gérer l'erreur de correspondance non trouvée (e-mail non trouvé dans les fuites)
          const isLeaked = false;
          return { isLeaked };
        } else {
          // Gérer d'autres erreurs
          throw error; // Lancez l'erreur pour la gérer plus tard dans le code
        }
      }
    };

    const hibpResult = await scanAndProcessEmail(adresseEmail);
    const isLeaked = hibpResult && hibpResult.length > 0; // Vérifiez la longueur de hibpResult

    // Créez l'objet de réponse à enregistrer dans la collection
    const responseToSave = {
      adresseEmail,
      isLeaked,
      hibpResult,
    };

    await collection.insertOne(responseToSave);

    return res.json({ isLeaked });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification de l\'adresse e-mail.' });
  }
};

module.exports = {
  checkEmail
};

