const hostModel = require('../models/hostModel');
const shodanService = require('../services/shodanService');

const checkHost = async (req, res) => {
  try {
    const { domain: domain } = req.body;
    if (!domain) {
      return res.status(400).json({ message: 'Le champ domaine est manquant.' });
    }

    const existingHost = await hostModel.findOne({ 'domains.0' : domain });
    if (existingHost) {
      return res.status(200).json(existingHost.toJSON());
    }  

    const shodanResult = await shodanService.scanHost(domain);
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

    const data = shodanResult?.data;
    console.log('rer', data.ports);

    if (data?.ports && data?.ports.length > 0) {
      const results = [];

      for (const portData of data.data) {
        console.log('rt', portData);
        const { port, transport, product, version,ip_str ,cpe } = portData;
        results.push({
          port,
          transport, 
          product, 
          version,
          ip_str,
          cpe
        });
      }

      host.results = results; // Ajoutez les résultats à l'objet host
    }

    const fr = { ...data.data };
    console.log('errr', fr.vulns);
    host.vulns = fr[4]?.vulns; // Ajoutez les vulnérabilités à l'objet host

    await host.save();
    console.log('Host saved:', host);

    res.status(201).json(host);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la vérification de l\'adresse IP.' });
  }
};

module.exports = {
  checkHost
};
