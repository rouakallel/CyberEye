const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;

const apiKey = 'YOUR_VIRUSTOTAL_API_KEY';
const domain = 'example.com';
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'virusTotalResults';
const collectionName = 'domainAnalysis';

// Fonction pour récupérer les résultats de l'analyse de domaine depuis VirusTotal
async function getDomainAnalysis() {
  try {
    const response = await axios.get(`https://www.virustotal.com/vtapi/v2/domain/report?apikey=${apiKey}&domain=${domain}`);
    const analysisResult = response.data;
    return analysisResult;
  } catch (error) {
    console.error('Erreur lors de la récupération des résultats de l\'analyse de domaine:', error);
    throw error;
  }
}

// Fonction pour enregistrer les résultats dans la base de données MongoDB
async function saveResultsToDatabase(results) {
  try {
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(results);
    console.log('Résultats enregistrés avec succès dans la base de données.');
    client.close();
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des résultats dans la base de données:', error);
    throw error;
  }
}

// Fonction principale pour exécuter l'analyse de domaine et enregistrer les résultats
async function main() {
  try {
    const analysisResults = await getDomainAnalysis();
    await saveResultsToDatabase(analysisResults);
  } catch (error) {
    console.error('Une erreur est survenue:', error);
  }
}

// Exécution de la fonction principale
main();
