const axios = require('axios');
const mongoose = require('mongoose');

// Se connecter à la base de données MongoDB
mongoose.connect('mongodb+srv://rouakallel93:szYYir2F0Chlw8zm@cybereye.u1uem7h.mongodb.net/test?authMechanism=SCRAM-SHA-1&authSource=CyberEye', { useNewUrlParser: true });

// Créer un modèle de données pour stocker les informations sur les données compromises
const donneesCompromisesSchema = new mongoose.Schema({
  email: String,
  breaches: [{
    name: String,
    date: Date,
    description: String
  }]
});

const DonneesCompromises = mongoose.model('DonneesCompromises', donneesCompromisesSchema);

// Adresse e-mail pour laquelle on veut récupérer les informations sur les données compromises
const email = 'contact@securas-tech.fr';

// Appeler l'API Have I Been Pwned avec Axios pour récupérer les informations sur les données compromises associées à l'adresse e-mail
axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`)
  .then(response => {
    // Récupérer les données de la réponse de l'API
    const donneesCompromises = response.data;

    // Créer un nouvel objet de données compromises pour enregistrer dans la base de données
    const nouvellesDonneesCompromises = new DonneesCompromises({
      email: email,
      breaches: donneesCompromises.map(breach => ({
        name: breach.Name,
        date: breach.BreachDate,
        description: breach.Description
      }))
    });

    // Sauvegarder les nouvelles données compromises dans la base de données
    nouvellesDonneesCompromises.save()
      .then(() => console.log('Données compromises enregistrées avec succès dans la base de données'))
      .catch(error => console.error(`Erreur lors de l'enregistrement des données compromises : ${error}`));
  })
  .catch(error => console.error(`Erreur lors de l'appel à l'API Have I Been Pwned : ${error}`));
