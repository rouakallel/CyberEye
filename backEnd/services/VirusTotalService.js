
const axios = require('axios').default;

const VIRUSTOTAL_API_KEY = process.env.VIRUSTOTAL_API_KEY; 

const getDomainInfo = async (domain) => {
  try {
    const response = await axios.get(`https://www.virustotal.com/vtapi/v2/domain/report`, {
      params: {
        domain: domain,
        apikey: VIRUSTOTAL_API_KEY,
      },
    });

    return response.data; // Vous pouvez traiter et formater les données de la réponse selon vos besoins
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de domaine depuis VirusTotal:', error);
    throw new Error('Une erreur est survenue lors de la récupération des informations de domaine depuis VirusTotal');
  }
};

module.exports = {
  getDomainInfo,
};
