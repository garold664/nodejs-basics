const comments = [
  { id: 1, text: 'Comment 1', author: 'John' },
  { id: 2, text: 'Comment 2', author: 'Marrie' },
  { id: 3, text: 'Comment 3', author: 'Tom' },
];

export function getHTML(req, res) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.write('<p style="color: red">Hello World</p>');
  return res.end();
}

export function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(comments));
}

export function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Page not found');
}

export function postComment(req, res) {
  let commentJSON = '';

  req.on('data', (chunk) => {
    commentJSON += chunk;
  });
  req.on('end', () => {
    comments.push(JSON.parse(commentJSON));
    res.statusCode = 200;
    res.end('Comment added');
  });
}

// module.exports = {
//   getHTML,
//   getComments,
//   handleNotFound,
// };
