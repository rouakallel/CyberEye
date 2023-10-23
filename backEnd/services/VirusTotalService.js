const axios = require('axios');

const getDomainInfo = async (name) => {
  try {
    const apiKey = process.env.VIRUSTOTAL_API_KEY;
    const url = `https://www.virustotal.com/api/v3/domains/${name}`;
    const headers = {
      'x-apikey': apiKey
    };

    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      throw new Error(`VirusTotal API returned status code: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = {
  getDomainInfo
};
