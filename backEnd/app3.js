
const express = require('express');
const domainRoutes=require('./routes/domainRoutes')
const hostRoutes = require('./routes/hostRoutes');
 
const app3 = express();

const mongoose = require('./config/connect');

app3.use(express.urlencoded({ extended: true }));

require('dotenv').config();

app3.use(express.json());

//app3.use('/nomDomain', domainRoutes); 

app3.use('/host', hostRoutes);

// app3.set('view engine', 'ejs');
// app3.set('views', './views');
// app3.get('/results', (req,res) => { 
  
//  res.render('resultats')

// })





module.exports = app3;
