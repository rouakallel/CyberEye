const request = require('request');

const util = require('util');

const getDomainInfo = (nomDomain) => {
  return async (req, res, error) => {
    try {
      const apiKey = process.env.VIRUSTOTAL_API_KEY;
      const options = {
        method: 'GET',
        url: `https://www.virustotal.com/api/v3/domains/${nomDomain}`,
        headers: {
          accept: 'application/json',
          'x-apikey': `${apiKey}`
        }
      };

      const requestAsync = util.promisify(request);
      const response = await requestAsync(options);
      const data = JSON.parse(response.body);
      res.send(data);
      console.log(data)
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
};


module.exports = {
  getDomainInfo
};
