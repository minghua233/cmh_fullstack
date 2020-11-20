const {
  rejects
} = require('assert');
const fs = require('fs');
const {
  resolve
} = require('path');

// fs.readFile('./index.html', 'utf-8', (err, file) => {
//   console.log(file);
// })

let p = (url) => new Promise((resolve, reject) => {
  fs.readFile(url, 'utf8', (err, file) => {
    if (err) {
      reject()
    } else {
      resolve(file)
    }
  })
})

p('./index.html').then((file) => {
  console.log(file);
})