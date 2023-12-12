const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { keyword1,keyword2 } = req.body;
   console.log(
    keyword1)
  let cwd = 'C:\\Users\\Rouak\\Desktop\\BootCamp\\CyberEye\\googledorks';
  const scrapyProcess = spawn('scrapy',['crawl','FileSpider','-a', `keyword1=${keyword1}`, '-a', `keyword2=${keyword2}`],{cwd} );

  scrapyProcess.stdout.on('data', (data) => {
    console.log(`Scrapy output: ${data}`);
  });

  scrapyProcess.stderr.on('data', (data) => {
    console.error(`Scrapy error: ${data}`);
  });

  scrapyProcess.on('close', (code) => {
    console.log(`Scrapy process exited with code ${code}`);
    res.json({ message: 'Le Spider Scrapy a été lancé avec succès.' });
  });
});

module.exports = router;
/* const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios'); // Add this line for making HTTP requests

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { keyword1, keyword2 } = req.body;
  
  try {
    // Send a POST request to your Flask API
    const flaskApiUrl = 'http://127.0.0.1:5000/submit';
    const flaskApiResponse = await axios.post(flaskApiUrl, { keyword1, keyword2 });
    
    // Log the response from the Flask API
    console.log('Flask API Response:', flaskApiResponse.data);

    res.json( flaskApiResponse.data);
  } catch (error) {
    console.error('Error communicating with Flask API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
 */