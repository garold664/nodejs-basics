// const fs = require('node:fs');
// const fs = require('fs');

//# Callback API
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//# Promise API
const fs = require('fs/promises');

let dataToWrite, numberOfWords;

fs.readFile('./file.txt', 'utf-8')
  .then((data) => {
    console.log(data);

    //# Writing Files
    numberOfWords = data.includes(' ')
      ? data.split(' ').filter((word) => word === 'lorem').length
      : 1;
    console.log(data.split(' '));
    console.log(data.split(' ').filter((word) => word === 'lorem'));
    dataToWrite = data + ' ' + data.split(' ')[0];
    console.log(typeof dataToWrite);
    return fs.writeFile('./file.txt', dataToWrite, 'utf-8');
  })
  .then(() => {
    console.log('new content of the file: ', dataToWrite);

    //# appending files
    return fs.appendFile('./file.txt', ' ' + numberOfWords.toString(), 'utf-8');
  })
  .then(() => {
    return fs.readFile('./file.txt', 'utf-8');
  })
  .then((newData) => {
    console.log('new content of the file: ', newData);
    //# Renaming Files
    return fs.rename('./file.txt', `./file-${numberOfWords}.txt`);
  })
  .then(() => {
    console.log('file renamed');
    //# Copying Files
    return fs.copyFile(`./file-${numberOfWords}.txt`, './file.txt');
  })
  .catch((err) => {
    console.log(err);
  });

//# Deleting Files

// fs.unlink('./file2.txt')
//   .then(() => {
//     console.log('file deleted');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
