const request = require('supertest');
const app = require('./app');
describe('Test the root path', () => {
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