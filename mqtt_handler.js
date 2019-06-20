const mqtt = require('mqtt');
const Database = require('./store/database');
const store = new Database();

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://test.mosquitto.org';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('mytopic', {qos: 0});

    // When a message arrives, put it in our database
    this.mqttClient.on('message', function (topic, message) {
      store.storeMessage(message.toString(),'mqtt');
      console.log('Received Message in mytopic: ' + message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('mytopic', message);
  }
}

module.exports = MqttHandler;