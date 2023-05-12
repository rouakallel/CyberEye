const express = require('express');
const mongoose = require('mongoose')
const request = require('request');
const Domain = require('./models/domain')
const app = express();



mongoose.connect('mongodb+srv://rouakallel93:szYYir2F0Chlw8zm@cybereye.u1uem7h.mongodb.net/CyberEye?authMechanism=SCRAM-SHA-1&authSource=CyberEye',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));




app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(express.json());

//const nomDomain = "yahoo.fr"

let nomDomain ;




app.post('/nomDomain', (req, res) => {
  const nomDomain = req.body.nomDomain;
  if (!nomDomain) {
    return res.status(400).json({ message: 'Le champ nomDomain est manquant.' });
  }

  const options = {
    method: 'GET',
    url: `https://www.virustotal.com/api/v3/domains/${nomDomain}`,
    headers: {
      accept: 'application/json',
      'x-apikey': '82380981680cb20ae28904612eecebfc18f837af88969f86ca101060a0fd5c81'
    }
  };

  request(options, async function (error, response, body) {
    if (error) {
      return res.status(500).json({ message: 'Une erreur s\'est produite lors de la requête à VirusTotal.' });
    }

    try {
      const data = JSON.parse(body);
      const domain = new Domain({
        name: data.data.id,
        attributes: data.data.attributes,
        type: data.data.type,
        id: data.data.id,
        links: data.data.links
      });
      await domain.save();
      res.status(201).json({ message: 'Objet enregistré' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement de l\'objet.' });
    }
  });
});

module.exports = app; 