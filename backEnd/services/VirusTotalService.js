const request = require('request');

const getDomainInfo = (domain) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.VIRUSTOTAL_API_KEY;
    const options = {
      method: 'GET',
      url: `https://www.virustotal.com/api/v3/domains/${domain}`,
      headers: {
        accept: 'application/json',
        'x-apikey': `${apiKey}`
      }
    };

    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
};

module.exports = {
  getDomainInfo
};
