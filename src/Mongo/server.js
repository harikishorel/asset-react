const express = require('express');
const createDealer = require('./db');

const app = express();
app.use(express.json());

// Handle POST requests to create a new dealer document
app.post('/AddDealer', async (req, res) => {
  try {
    const dealer = new AddDealer(req.body);

    const result = await dealer.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
