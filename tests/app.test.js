const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { once } = require('node:events');

const app = require('../src/app');

let server;

test.before(async () => {
  server = http.createServer(app);
  server.listen(3456);
  await once(server, 'listening');
});

test.after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
});

test('GET /health returns status 200', async () => {
  const response = await fetch('http://localhost:3456/health');
  assert.equal(response.status, 200);

  const body = await response.json();
  assert.equal(body.status, 'ok');
});
