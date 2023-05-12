
const shodanAPIKey = 'um0MmqV6tgHXp1zHWn3OW7oK4oSyOP4p';

async function scanDomain(domain) {
  const response = await fetch(`https://api.shodan.io/shodan/host/search?key=${shodanAPIKey}&query=${domain}`);
  const data = await response.json();
  console.log(`Ports ouverts pour le domaine ${domain} :`);
  data.matches.forEach(match => {
    console.log(`- IP: ${match.ip_str}, ports: ${match.ports.join(', ')}`);
  });
}

scanDomain('google.com');