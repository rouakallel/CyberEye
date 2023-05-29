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
          regionCode: shodanResult.region_code,
          areaCode: shodanResult.area_code,
          domains: shodanResult.domains,
          hostnames: shodanResult.hostnames,
          countryCode: shodanResult.country_code,
          org: shodanResult.org,
          data: shodanResult.data,
          asn: shodanResult.asn,
          city: shodanResult.city,
          latitude: shodanResult.latitude,
          isp: shodanResult.isp,
          longitude: shodanResult.longitude,
          lastUpdate: shodanResult.last_update,
          countryName: shodanResult.country_name,
          ip_str: shodanResult.ip_str,
          os: shodanResult.os,
          ports: shodanResult.ports
        });
         
        
        host.save()
        .then(savedHost => {
          console.log('Host saved:', savedHost);
        })
        .catch(error => {
          console.error('Error saving host:', error);
        });
        return host 
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

