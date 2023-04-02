//Put your code in this file
const express = require('express');
const axios = require('axios');
const app = express();
app.get('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const page = req.query.page;
    // do something with userId and/or page
    res.send(`User ${userId}, page ${page}`);
  });
app.put('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const page = req.query.page;
    // do something with userId and/or page
    res.send(`Updated user ${userId}, page ${page}`);
  });
app.get('/trending-anime', async (req, res) => {
    try {
      const response = await axios.get('https://kitsu.io/api/edge/trending/anime');
      const data = response.data.data;
      const animeTitles = data.map(anime => anime.attributes.canonicalTitle);
      res.send(animeTitles);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching trending anime');
    }
  });

  app.listen(8080, () => {
    console.log('Server is listening on port 8080');
  });