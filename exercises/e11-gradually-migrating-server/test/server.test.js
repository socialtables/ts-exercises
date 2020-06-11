const axios = require('axios');
const Logger = require('@socialtables/logger');
const createServer = require('../server/server');
const config = require('../config');

const baseUrl = `http://localhost:${config.port}`;
const rootLogger = Logger.init({
  name: config.name,
});
describe('test the server', () => {
  let server;
  beforeEach((done) => {
    server = createServer(config, rootLogger);
    server.listen(config.port, done);
  });
  afterEach((done) => {
    if (server) {
      server.close(done);
    }
  });
  test('health check should work', async () => {
    const res = await axios.get(`${baseUrl}/health-check`);
    expect(res.status).toEqual(200);
  });
  test('adding should work', async () => {
    const res = await axios.get(`${baseUrl}/add?a=1&b=1`);
    expect(res.status).toEqual(200);
    expect(res.data).toEqual('2');
  });
  test('expressions should work', async () => {
    const expression = encodeURIComponent('12.7 cm to inch');
    const res = await axios.get(`${baseUrl}/calc?expr=${expression}`);
    expect(res.status).toEqual(200);
    expect(res.data).toEqual('5 inch');
  });
});
