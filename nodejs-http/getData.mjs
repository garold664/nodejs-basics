import http from 'node:http';

const url = 'http://jsonplaceholder.typicode.com/users/1';

http.get(url, (res) => {
  let data = '';
  // res is an instance of EventEmitter
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});
