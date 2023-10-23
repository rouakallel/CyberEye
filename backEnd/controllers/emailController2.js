const axios = require('axios');
const Setting = require('../models/Setting');
const CryptoJS = require('crypto-js');

exports.emailLeakCheck = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const hibpKey = await Setting.findOne({ name: 'hibp_key' }).select('value');
    if (!hibpKey) {
      return res.status(500).json({ error: 'HIBP API key not found' });
    }

    const response = await axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
      headers: {
        'hibp-api-key': hibpKey.value
      }
    });

    const isLeaked = response.data.length > 0;
   
    
    return res.json({ isLeaked });
  } catch (error) {
    if (error.isAxiosError && error.response && error.response.status === 404) {
      // Gérer l'erreur de correspondance non trouvée (email non trouvé dans les fuites)
      return res.json({ isLeaked: false });
    } else {
      // Gérer d'autres erreurs
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};
const MAX_RETRIES = 5;

async function checkEmail(email, hibpKey, retryCount = 0) {
  try {
    const response = await axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
      headers: {
        'hibp-api-key': hibpKey.value
      }
    });

    return response.data.length > 0;
  } catch (error) {
    if (error.isAxiosError && error.response && error.response.status === 429) {
      if (retryCount < MAX_RETRIES) {
        // If we receive a 429 error, wait for a bit longer before next request
        const delay = (retryCount + 1) * 2000; // Increase delay by 2 seconds for each retry
        await new Promise(res => setTimeout(res, delay));

        // Retry the request
        return checkEmail(email, hibpKey, retryCount + 1);
      }

      // If we have retried for MAX_RETRIES times and still get a 429 error, throw an error
      throw new Error('Too many requests to HIBP API');
    } else {
      throw error;
    }
  }
}


exports.emailLeakCheckList = async (req, res) => {
  try {
    const { emails } = req.query; // emails is now an array

    if (!emails || emails.length === 0) {
      return res.status(400).json({ error: 'Emails are required' });
    }

    const hibpKey = await Setting.findOne({ name: 'hibp_key' }).select('value');
    if (!hibpKey) {
      return res.status(500).json({ error: 'HIBP API key not found' });
    }

    
    let results = [];
    for (let email of emails) {
      try {
        const isLeaked = await checkEmail(email, hibpKey);
    
        results.push({ email, isLeaked });
      } catch (error) {
        console.error(`Error checking email: ${email}`, error);
        results.push({ email, error: 'Error checking this email' });
      }
    }
    return res.json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};






exports.domainLeakCheck = async (req, res) => {
  try {
    const { domain } = req.query;

    if (!domain) {
      return res.status(400).json({ error: 'Domain is required' });
    }

    const hibpKey = await Setting.findOne({ name: 'hibp_key' }).select('value');
    if (!hibpKey) {
      return res.status(500).json({ error: 'HIBP API key not found' });
    }

    const response = await axios.get(`https://haveibeenpwned.com/api/v3/breaches?domain=${domain}`, {
      headers: {
        'hibp-api-key': hibpKey.value
      }
    });

    const isLeaked = response.data.length > 0;
   
    return res.json({ isLeaked });
  } catch (error) {
    if (error.isAxiosError && error.response && error.response.status === 404) {
      // Gérer l'erreur de correspondance non trouvée (domaine non trouvé dans les fuites)
      return res.json({ isLeaked: false });
    } else {
      // Gérer d'autres erreurs
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};


  exports.passwordLeakCheck = async (req, res) => {
    try {
      const { password } = req.query;
  
      if (!password) {
        return res.status(400).json({ error: 'Password is required' });
      }
  
      const hashedPassword = CryptoJS.SHA1(password).toString();
      const prefix = hashedPassword.substring(0, 5);
      const hibpKey = await Setting.findOne({ name: 'hibp_key' }).select('value');
      if (!hibpKey) {
        return res.status(500).json({ error: 'HIBP API key not found' });
      }
  
      const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`, {
        headers: {
          'hibp-api-key': hibpKey.value
        }
      });
 
      const leakedPasswords = response.data.split('\n').map((line) => line.split(':')[0]);
     const isLeaked = leakedPasswords.includes(hashedPassword.substring(5).toUpperCase());
    // console.log(isLeaked)  

      return res.json({ isLeaked });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  

