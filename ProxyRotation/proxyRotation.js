const request = require('request');
// Pool d'adresses IP
const ips = ['197.3.241.96', '197.3.241.97', '197.3.241.98'];
// Temps entre chaque changement d'adresse IP (en secondes)
const interval = 300;
// Boucle infinie pour faire la rotation des adresses IP
setInterval(() => {
  // Sélection aléatoire d'une adresse IP dans le pool
  const ip = ips[Math.floor(Math.random() * ips.length)];
  // Configuration du proxy avec l'adresse IP sélectionnée
  const proxy = `http://${ip}`;
  // Options de la requête HTTP avec le proxy configuré
  const options = {
    url: 'http://www.google.com//search?q=inurl%3A"password"',
    proxy: proxy
  };
  // Requête HTTP avec le proxy configuré
  request(options, function(error, response, body) {
    if (error) {
      console.error(error);
    } else {
      // Affichage de la réponse
      console.log(body);
    }
  });
}, interval * 1000);
