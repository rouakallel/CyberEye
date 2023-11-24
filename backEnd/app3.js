
const express = require('express');
const domainRoutes=require('./routes/domainRoutes')
const hostRoutes = require('./routes/hostRoutes');
const emailRoutes = require('./routes/emailRoutes')
const sensitiveDataRoutes = require('./routes/sensitiveDataRoutes')
const contactRoute = require('./routes/contactRoute')


const app3 = express();

const mongoose = require('./config/connect');

app3.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app3.use(express.urlencoded({ extended: true }));

require('dotenv').config();

app3.use(express.json());

app3.use('/nomDomain', domainRoutes); 
app3.use('/host', hostRoutes);
app3.use('/adresseEmail',emailRoutes)
app3.use('/submit',sensitiveDataRoutes)
app3.use('/sendEmail',contactRoute)









module.exports = app3;
