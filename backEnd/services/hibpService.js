const axios = require('axios');

const scanEmail = async (adresseEmail) => {
  try {
    const apiKey = process.env.HIBP_API_KEY;
    const response = await axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${adresseEmail}`, {
      headers: {
        'hibp-api-key': apiKey
      }
    })
    const data = response.data;
    console.log("Les données de la vérification sont", data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête à l\'API Have I Been Pwned:', error.message);
    throw error;
  }
};

module.exports = {
  scanEmail
};
