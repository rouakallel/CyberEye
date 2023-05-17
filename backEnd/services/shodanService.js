const axios = require('axios');

const SHODAN_API_KEY = process.env.SHODAN_API_KEY; // Remplacez par votre clé d'API Shodan

const getDomainInfos = async (domain) => {
  try {
    const response = await axios.get(`https://api.shodan.io/shodan/host/${domain}`, {
      params: {
        key: SHODAN_API_KEY,
      },
    });

    return response.data; // Vous pouvez traiter et formater les données de la réponse selon vos besoins
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de domaine depuis Shodan:', error);
    throw new Error('Une erreur est survenue lors de la récupération des informations de domaine depuis Shodan');
  }
};

module.exports = {
  getDomainInfos,
};
