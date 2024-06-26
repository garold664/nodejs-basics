import fs from 'node:fs';
import qs from 'node:querystring';

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
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const comment = qs.parse(body);
        comment.id = +comment.id;
        comments.push(comment);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Comment added</h1>');
        comments.forEach((comment) => {
          res.write(
            `<p><q>${comment.text}</q> by <b>${comment.author}</b></p>`
          );
        });

        res.write('<a href="/">Go back to form</a >');
        res.end();
      } catch (error) {
        res.statusCode = 400;
        res.end('Invalid form data');
      }
    });
  } else if (req.headers['content-type'] === 'application/json') {
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

export function getHome(req, res) {
  fs.readFile('./files/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error while loading HTML file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
}

// module.exports = {
//   getHTML,
//   getComments,
//   handleNotFound,
// };
