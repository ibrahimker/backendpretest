const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// dummy database for storing outgoing message
let database = [];

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send message API
app.get('/sendmessage', async (req, res) => {
  const message = (req.query.message) ? req.query.message : 'No Message Found';
  database.push(message);
  res.send(message);
});

// get outgoing message API
app.get('/getmessage', (req, res) => {  
  res.send(database);
});

module.exports = app;