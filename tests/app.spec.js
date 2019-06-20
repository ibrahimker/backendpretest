const request = require('supertest');
const app = require('../app');
describe('API should be able to send message', () => {
    it('It should call sendmessage API', (done) => {
        request(app).get('/sendmessage').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it('It should send and received HAI', (done) => {
      request(app).get('/sendmessage?message=HAI').then((response) => {
          expect(response.text).toBe('HAI');
          done();
      });
    });

    it('It should get message not found response', (done) => {
      request(app).get('/sendmessage').then((response) => {
          expect(response.text).toBe('No Message Found');
          done();
      });
    });
});

describe('API should be able to get outgoing message', () => {
  it('It should call getmessage API', (done) => {
      request(app).get('/sendmessage').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });

  it('It should send and received HAI', (done) => {
    request(app).get('/sendmessage?message=HAI').then((response) => {
        expect(response.text).toBe('HAI');
        done();
    });
  });

  it('It should get all outgoing response', (done) => {
    request(app).get('/getmessage').then((response) => {
        expect(response.text).toBe("[{\"message\":\"No Message Found\",\"source\":\"non mqtt\"},{\"message\":\"HAI\",\"source\":\"non mqtt\"},{\"message\":\"No Message Found\",\"source\":\"non mqtt\"},{\"message\":\"No Message Found\",\"source\":\"non mqtt\"},{\"message\":\"HAI\",\"source\":\"non mqtt\"}]");
        done();
    });
  });
});