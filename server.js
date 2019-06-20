const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./store/database');
const store = new Database();

const app = express();
const mqttHandler = require('./mqtt_handler');

const mqttClient = new mqttHandler();
mqttClient.connect();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send message API (integrate with mqtt)
app.get('/sendmessage', async (req, res) => {
  const message = (req.query.message) ? req.query.message : 'No Message Found';
  store.storeMessage(message,'non mqtt');
  mqttClient.sendMessage(req.query.message);
  res.send(message);
});

// get outgoing message API
app.get('/getmessage', (req, res) => {  
  const message = store.getMessage();
  res.send(message);
});

module.exports = app;