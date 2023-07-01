const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors()); // Enable CORS for all routes

app.get('/:key', async (req, res) => {
  try {
    // Make a request to the external API
const response = await axios.get(`https://suggestqueries.google.com/complete/search?client=chrome&q=${req.params.key}&hl=en`);

    // Return the API response to the client
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// api for serach data
app.get('/search/:data', async (req, res) => {
    try {
      // Make a request to the external API
      const response = await axios.get(`https://serpapi.com/search.json?api_key=57edff37096a8349ddc8bb271ded0cc4a935fca89124fe2a23a3ec01ba354e7b&engine=google&q=${req.params.data}&location=Seattle-Tacoma,+WA,+Washington,+United+States&hl=en&gl=in&google_domain=google.com&num=10&start=10&safe=active`);
  
      // Return the API response to the client
      res.send(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
