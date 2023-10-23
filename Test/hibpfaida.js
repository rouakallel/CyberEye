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