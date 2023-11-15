const axios = require('axios');
const util = require('util');
const dns = require('dns');

const resolveDomainToIP = util.promisify(dns.resolve4);

const scanHost = async (domain) => {
  try {
    const apiKey = process.env.SHODAN_API_KEY;

    const resolvedIPs = await resolveDomainToIP(domain);
    if (resolvedIPs.length === 0) {
      throw new Error('Impossible de résoudre le domaine en une adresse IP.');
    }

    const ipAddress = resolvedIPs[0];
    const response = await axios.get(`https://api.shodan.io/shodan/host/${ipAddress}?key=${apiKey}&history=true`);
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


