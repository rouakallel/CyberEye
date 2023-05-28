const axios = require('axios');

const SHODAN_API_KEY = process.env.SHODAN_API_KEY; 

const scanHost = async (adresseIP) => {
  try {
    const response = await axios.get(`https://api.shodan.io/shodan/host/${adresseIP}`, {
      params: {
        key: SHODAN_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de domaine depuis Shodan:', error);
    throw new Error('Une erreur est survenue lors de la récupération des informations de domaine depuis Shodan');
  }
};


module.exports = {
  scanHost
};
