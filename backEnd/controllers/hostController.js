const hostModel = require('../models/hostModel');
const shodanService = require('../services/shodanService');

const checkHost = async (req, res) => {
  try {
    const { ip_str: adresseIP } = req.body;
    if (!adresseIP) {
      return res.status(400).json({ message: 'Le champ adresse IP est manquant.' });
    }

    const existingHost = await hostModel.findOne({ ip_str: adresseIP });
    if (existingHost) {
      return res.status(200).json(existingHost.toJSON());
    }  

    const scanAndProcessHost = async (adresseIP) => {
      try {
        const shodanResult = await shodanService.scanHost(adresseIP);
        console.log(shodanResult);

        const host = new hostModel({
          region_code: shodanResult.region_code,
          area_code: shodanResult.area_code,
          domains: shodanResult.domains,
          hostnames: shodanResult.hostnames,
          country_code: shodanResult.country_code,
          org: shodanResult.org,
          asn: shodanResult.asn,
          city: shodanResult.city,
          country_name: shodanResult.country_name,
          ip_str: shodanResult.ip_str,
          os: shodanResult.os,
          ports: shodanResult.ports
        });

        await host.save();
        return host;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    
    const host = await scanAndProcessHost(adresseIP);
    res.status(201).json(host);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification de l\'adresse IP.' });
  }
};

module.exports = {
  checkHost
};

