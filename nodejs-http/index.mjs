import http from 'node:http';

import {
  getHTML,
  getComments,
  handleNotFound,
  postComment,
} from './handler.mjs';

// const { getHTML, getComments, handleNotFound } = require('./handler.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res);
  }

  if (req.method === 'GET' && req.url === '/json') {
    return getComments(req, res);
  }

  if (req.method === 'POST' && req.url === '/json') {
    return postComment(req, res);
  }

  handleNotFound(req, res);
});

server.listen(PORT, () => {
  console.log('server listening on port 3000');
});
