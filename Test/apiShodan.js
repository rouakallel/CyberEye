require('dotenv').config()
const shodanAPIKey = process.env.SHODAN_API_KEY;
console.log(shodanAPIKey)
async function scanDomain(domain) {
  const response = await fetch(`https://api.shodan.io/shodan/host/search?key=${shodanAPIKey}&query=${domain}`);
  const data = await response.json();
  console.log(`Ports ouverts pour le domaine ${domain} :`);
  data.matches.forEach(match => { if (match.ports && match.ports.length > 0) {
    console.log(`- IP: ${match.ip_str}, ports: ${match.ports.join(', ')}`);
  } else {
    console.log(`- IP: ${match.ip_str}, pas de port disponible`);
  }
  });
}

scanDomain('defense.tn');