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
  res.end();
}

export function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
}

export function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Page not found');
}

export function postComment(req, res) {
  if (req.headers['content-type'] === 'application/json') {
    let commentJSON = '';

    req.on('data', (chunk) => {
      commentJSON += chunk;
    });
    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJSON));
        res.statusCode = 200;
        res.end('Comment added');
      } catch (error) {
        res.statusCode = 400;
        res.end('Invalid JSON format');
      }
    });
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Must be in the JSON format');
  }
}

// module.exports = {
//   getHTML,
//   getComments,
//   handleNotFound,
// };
