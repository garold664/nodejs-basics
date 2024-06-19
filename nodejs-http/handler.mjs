export function getHTML(req, res) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.write('<p style="color: red">Hello World</p>');
  return res.end();
}

export function getJSON(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({ name: 'John', age: 30 }));
}

export function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Page not found');
}

// module.exports = {
//   getHTML,
//   getJSON,
//   handleNotFound,
// };
