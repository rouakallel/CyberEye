const HostModel = require('../models/hostModel');
const shodanService = require('../services/shodanService');

const checkHost = async (req, res) => {
  try {
    const { adresseIP } = req.body;
    if (!adresseIP) {
      return res.status(400).json({ message: 'Le champ adresse Ip est manquant.' });
    }

    const existingHost = await HostModel.findOne({ ip_str : adresseIP });
    if (existingHost) {
      return res.status(200).json(existingHost.toJSON());
    }  


    const shodanResult = await shodanService.getHostInfo(adresseIP);
    const host = new HostModel({
          
          region_code: shodanResult.data.region_code,
          tags: shodanResult.data.tags,
          ip: shodanResult.data.ip,
          area_code: shodanResult.data.area_code,
          domains: shodanResult.data.domains,
          hostnames: shodanResult.data.hostnames,
          country_code: shodanResult.data.country_code,
          org: shodanResult.data.org,
          data: shodanResult.data.data,
          asn: shodanResult.data.asn,
          city: shodanResult.data.city,
          latitude: shodanResult.data.latitude,
          isp: shodanResult.data.isp,
          longitude: shodanResult.data.longitude,
          last_update: shodanResult.data.last_update,
          country_name: shodanResult.data.country_name,
          ip_str: shodanResult.data.ip_str,
          os: shodanResult.data.os,
          ports: shodanResult.data.ports
        
        
    });
    await host.save();
    res.status(201).json(host);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification de l\'adresse ip.' });
  }
};

module.exports = {
  checkHost
};
