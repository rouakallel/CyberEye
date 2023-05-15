
const util  = require('util');
const client = require('shodan-client');
const shodanAPIKey = process.env.SHODAN_API_KEY;
const searchOpts = {
  facets: 'port:100,country:100',
  // minify: false,
};
client
  .search('asterisk port:5060', `${shodanAPIKey}`, searchOpts)
  .then(res => {
    console.log('Result:');
    console.log(util.inspect(res, { depth: 6 }));
  })
  .catch(err => {
    console.log('Error:');
    console.log(err);
  });

  /////SHODAN  Payant 