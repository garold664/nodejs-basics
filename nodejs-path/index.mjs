import path from 'path';

const p = path.join('D:\\', 'node', 'app.js');
// console.log(p);

const result = path.resolve('node', 'index.mjs');
// console.log(result);

const filePath = 'D:\\node\\app.js';
const textFilePath = 'D:\\node\\text.txt';
const relativePath = './node/movie.mov';
const directoryPath = 'D:\\node\\subfolder\\';

// console.log(path.dirname(filePath));
console.log(path.isAbsolute(textFilePath)); // true
console.log(path.isAbsolute(relativePath)); // false
console.log(path.basename(textFilePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder
console.log(path.dirname(directoryPath)); // D:\node
console.log(path.dirname(relativePath)); // ./node

//# Resolving Relative Paths to Absolute Paths
console.log(path.resolve('app.js')); // C:\React\NODEJS\app.js
console.log(path.resolve('app', 'text.txt')); // C:\React\NODEJS\app\text.txt
console.log(path.resolve('app', './text.txt')); // C:\React\NODEJS\app\text.txt

//# Extensions
console.log(path.extname('app.js')); // .js
console.log(path.extname('app.txt')); // .txt
console.log(path.extname('app')); // ""
console.log(path.extname('app.js.txt')); // .txt

//# Parsing Paths
const parsedPath = path.parse(path.resolve('app.js'));
console.log(parsedPath);
// { root: 'C:\\', dir: 'C:\\React\\NODEJS', base: 'app.js', ext: '.js', name: 'app' } }

const newPath = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);
console.log(newPath); //C:\React\NODEJS\renamed-app.mjs
