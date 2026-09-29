const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

  // const msg = 'Works on my machine!!';

  console.log('Did someone say works on my machine?');

  res.send('Works on my machine!!');
});

module.exports = app;
