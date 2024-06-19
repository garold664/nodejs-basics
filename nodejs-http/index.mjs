import http from 'node:http';

import { getHTML, getJSON, handleNotFound } from './handler.mjs';

// const { getHTML, getJSON, handleNotFound } = require('./handler.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res);
  }

  if (req.method === 'GET' && req.url === '/json') {
    return getJSON(req, res);
  }

  handleNotFound(req, res);
});

server.listen(PORT, () => {
  console.log('server listening on port 3000');
});
