const mongoose = require('mongoose');
const shodanService = require('../services/shodanService');

const checkHost = async (req, res) => {
  try {
    const { domain } = req.body;
    if (!domain) {
      return res.status(400).json({ message: 'Le champ domaine est manquant.' });
    }

    // Vérifiez si le domaine existe dans la base de données
    const existingDomainData = await mongoose.connection.collection('ShodanData').findOne({ "shodanResult.data.domains": { $in: [domain] } });

    if (existingDomainData) {

      const data = existingDomainData.shodanResult
      const cpedata = data.data
      const extractedCPE = new Set();

      if (Array.isArray(cpedata)) {
        for (const item of cpedata) {
          if (item && item.cpe) {
            extractedCPE.add(item.cpe);
          }
          if (item && item.cpe23) {
            extractedCPE.add(item.cpe23);
          }
        }
      }
      
      // Ajoutez le code pour aplatir et obtenir les éléments uniques
      const uniqueCPEArray = Array.from(extractedCPE);
      const flatArray = uniqueCPEArray.flat();
    
      const responseData = {
        ip_str: data.ip_str,
        region_code: data.region_code,
        domains: data.domains,
        hostnames: data.hostnames,
        country_code: data.country_code,
        org: data.org,
        ports: data.ports,
        uniqueCPEArray: [...new Set(flatArray)],
      };
      
      return res.json(responseData);
    }

    // Si le domaine n'existe pas, utilisez l'API Shodan pour scanner le domaine
    const shodanResult = await shodanService.scanHost(domain);

    // Enregistrez les données dans la base de données MongoDB
    await saveShodanData(shodanResult);

    const data = shodanResult?.data;
    console.log('Data from shodan API ', data);

    const extractedCPE = new Set();

    if (Array.isArray(data)) {
      for (const item of data) {
        if (item && item.cpe) {
          extractedCPE.add(item.cpe);
        }
        if (item && item.cpe23) {
          extractedCPE.add(item.cpe23);
        }
      }
    }

    // Ajoutez le code pour aplatir et obtenir les éléments uniques
    const uniqueCPEArray = Array.from(extractedCPE);
    const flatArray = uniqueCPEArray.flat();

    // Combine all necessary data
    const responseData = {
      ip_str: shodanResult?.ip_str,
      domains: shodanResult.domains,
      hostnames: shodanResult.hostnames,
      ports: shodanResult.ports,
      org: shodanResult.org,
      country_code: shodanResult.country_code,
      region_code: shodanResult.region_code,
      uniqueCPEArray: [...new Set(flatArray)],
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification de l\'adresse IP.' });
  }
};

// Fonction pour enregistrer les données Shodan dans la base de données
const saveShodanData = async (shodanResult) => {
  try {
    // Enregistrez les données dans la base de données MongoDB
    await mongoose.connection.collection('ShodanData').insertOne({
      shodanResult,
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des données Shodan dans la base de données:', error);
  }
};

module.exports = {
  checkHost,
};
