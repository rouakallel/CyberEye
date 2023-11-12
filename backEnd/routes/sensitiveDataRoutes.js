const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const { cwd } = require('process');

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
