
const mongoose = require('mongoose')
require ('dotenv').config();

const host = process.env.DB_HOST
const pwd = process.env.DB_PASSWORD
const login = process.env.DB_USER

mongoose.connect(`mongodb+srv://${login}:${pwd}@${host}/CyberEye?authMechanism=SCRAM-SHA-1&authSource=CyberEye`,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


module.exports = mongoose