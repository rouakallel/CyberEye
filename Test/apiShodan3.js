const axios = require('axios');
const dns = require('dns');


const extractIPAddress = (hostname) => {
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, (err, address) => {
      if (err) {
        reject(err);
      } else {
        resolve(address);
      }
    });
  });
};

exports.networkScanner = async (req, res) => {
  const ipdomain = req.query.ipdomain || req.hostname; 
   const API_KEY = 'ocrAry0fReCWtLdybuwPXOnzrmBB3lJe'; // Remplacez par votre clé API Shodan
   
  let results = [];
  // const ipAddress = '51.159.223.107';
  const ipAddress = await extractIPAddress(ipdomain);
console.log(ipAddress)
  try {
    const response = await axios.get(`https://api.shodan.io/shodan/host/${ipAddress}?key=${API_KEY}`);
    const data = response?.data;
    // console.log(data.ports)
    if (data?.ports && data?.ports.length > 0) {

      for (const portData of data.data) { 
            //  console.log(portData)
        const { port, transport, product, version, cpe } = portData;
        results.push({
         port,
          transport,
          product,
          version,
          cpe
        });
      }
    }
  res.json(results);

  
  } catch (error) {
    console.error('Erreur lors de la numérisation du réseau:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la numérisation du réseau.' });
  }
};
exports.vulnerabilityScanner = async (req, res) => {
  const ipdomain = req.query.ipdomain || req.hostname; 
   const API_KEY = 'ocrAry0fReCWtLdybuwPXOnzrmBB3lJe'; // Remplacez par votre clé API Shodan

  let results = [];
  // const ipAddress = '51.159.223.107';
  const ipAddress = await extractIPAddress(ipdomain);
console.log(ipAddress)
  try {
    const response = await axios.get(`https://api.shodan.io/shodan/host/${ipAddress}?key=${API_KEY}`);
    const data = response?.data;
    // console.log(data.ports)
    if (data?.ports && data?.ports.length > 0) {

      for (const portData of data.data) { 
            //  console.log(portData)
        const { port, transport, product, version, cpe } = portData;
        results.push({
         port,
          transport,
          product,
          version,
          cpe
        });
      }
    }
    const fr={...data.data}
  res.json(fr[3].vulns);

  
  } catch (error) {
    console.error('Erreur lors de la numérisation du réseau:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la numérisation du réseau.' });
  }
};