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

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});





const options = {
  method: 'GET',
  url: 'https://www.virustotal.com/api/v3/domains/securas.tn',
  headers: {
    accept: 'application/json',
    'x-apikey': '82380981680cb20ae28904612eecebfc18f837af88969f86ca101060a0fd5c81'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  app.post('/api/domain',(req,res, next) => {
    const data = JSON.parse(body);
    delete req.body._id ;
    const domain = new Domain({
      name: data.data.id,
      attributes: data.data.attributes,
      type: data.data.type,
      id: data.data.id,
      links: data.data.links
    });
     domain.save()
     .then(() => res.status(201).json({ message: 'Objet enregistré' }))
     .catch( error => res.status(400).json({error}))
   })
  console.log(body);
}) ;






module.exports = app; 