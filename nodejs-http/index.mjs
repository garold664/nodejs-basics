import http from 'node:http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.url === '/http') {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    return res.end('Hello World');
  }
});

server.listen(PORT, () => {
  console.log('server listening on port 3000');
});
