require ('dotenv').config();
const express = require('express');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const app2 = express()

const apiKey = process.env.VIRUSTOTAL_API_KEY


const domain = 'microsoft.com';
const mongoURL = `mongodb://localhost:27017`;
const dbName = 'CyberEye';
const collectionName = 'domaindatas';



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
  const host = process.env.DB_HOST
const pwd = process.env.DB_PASSWORD
const login = process.env.DB_USER
  // Fonction pour enregistrer les résultats dans la base de données MongoDB
  async function saveResultsToDatabase(results) {
    try {
      const client = await MongoClient.connect(`mongodb+srv://${login}:${pwd}@${host}/CyberEye?authMechanism=SCRAM-SHA-1&authSource=CyberEye`);
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
 app2.get('/domain' , async(req,res) => 
   
  {
    try {
      const analysisResults = await getDomainAnalysis();
      await saveResultsToDatabase(analysisResults);
      console.log(analysisResults)
    } catch (error) {
      console.error('Une erreur est survenue:', error);
    }
  })
  
module.exports = app2 ;
  