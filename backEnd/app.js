require ('dotenv').config();
require('./config/connect')
const express = require('express');
const mongoose = require('mongoose')
const request = require('request');
const Domain = require('./models/domainModel')
const app = express();
const domainRoutes = require('./routes/domainRoutes')
const path = require('path');

const host = process.env.DB_HOST
const pwd = process.env.DB_PASSWORD
const login = process.env.DB_USER
mongoose.connect(`mongodb+srv://${login}:${pwd}@${host}/CyberEye?authMechanism=SCRAM-SHA-1&authSource=CyberEye`,
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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());




app.post('/nomDomain', async(req, res) => {
  const nomDomain = req.body.nomDomain;
  if (!nomDomain) {
    return res.status(400).json({ message: 'Le champ nomDomain est manquant.' });
  }
  const existingDomain = await Domain.findOne({ name: nomDomain });
    if (existingDomain) {
      return res.status(200).json(existingDomain.toJSON());
    }
  const apiKey = process.env.VIRUSTOTAL_API_KEY
  const options = {
    method: 'GET',
    url: `https://www.virustotal.com/api/v3/domains/${nomDomain}`,
    headers: {
      accept: 'application/json',
      'x-apikey': `${apiKey}`
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
      res.status(201).json(domain);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement de l\'objet.' });
    }
  });
});


module.exports = app; 