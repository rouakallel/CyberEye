const axios = require('axios');
const util = require('util');

const scanHost = async (adresseIP) => {
  try {
    const apiKey = process.env.SHODAN_API_KEY;
    const response = await axios.get(`https://api.shodan.io/shodan/host/${adresseIP}?key=${apiKey}`);
    const data = response.data;
    console.log("Les données du scan sont", data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête à l\'API Shodan:', error.message);
    throw error;
  }
};

module.exports = {
  scanHost
};
