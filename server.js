const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send message API
app.get('/sendmessage', async (req, res) => {
  const message = (req.query.message) ? req.query.message : 'No Message Found';
  res.send(message);
});

module.exports = app;