const MqttHandler = require('../mqtt_handler');

describe('API should be able to send message', () => {
  const mqttClient = new MqttHandler();
  mqttClient.connect();
  it('It should call init mqtt object', () => {
    expect(mqttClient.host).toBe('mqtt://test.mosquitto.org');
  });

  it('It should able to send message through mqtt protocol', () => {
    mqttClient.sendMessage('Hai');
    expect(mqttClient.host).toBe('mqtt://test.mosquitto.org');
  });
});