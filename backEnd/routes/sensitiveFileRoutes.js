const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios'); // Add this line for making HTTP requests

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { keyword} = req.body;
  
  try {
    // Send a POST request to your Flask API
    const flaskApiUrl = 'http://127.0.0.1:5000/submit';
    const flaskApiResponse = await axios.post(flaskApiUrl, { keyword });
    
    // Log the response from the Flask API
    console.log('Flask API Response:', flaskApiResponse.data);

    res.json( flaskApiResponse.data);
  } catch (error) {
    console.error('Error communicating with Flask API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
