import { mkdir } from 'node:fs';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

mkdir('./memes', { recursive: true }, (err) => {
  if (err) throw err;
});

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const root = parse(body);

const getImages = root.querySelectorAll('img').toString();

const cleanLinks = getImages.match(/https.*?00/g);

const linkArray = cleanLinks.slice(0,11);

let fileName = '';

const fileNameArray = [];

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    fileName = `0${i}.jpg`;
    fileNameArray.push(fileName);
  } else {
    fileName = `${i}.jpg`;
    fileNameArray.push(fileName);
  }
}

for (let i = 0; i<=10; i++) {
  fetch(linkArray[i])
  .then(res => {
    const dest = fs.createWriteStream(`./memes/${fileNameArray[i]}`);
    res.body.pipe(dest);
    console.log('done');
  })
}



/* 

 */



/* 
for (let i = 0; i <= 10; i++) {
  fetch(linkArray[i])
    .then((res) => res.buffer())
    .then((buffer) => {
      // Write the buffer to a file;
      fs.writeFile(path.join('./memes', fileNameArray[i]), buffer, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Image downloaded successfully');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 */

// let a = fileNameArray;
// let b = linkArray;

/* const nameLinkObject = (a, b) => {
  let obj = {};
  a.forEach((k, i) => {
    obj[k] = b[i];
  });
  return obj;
};
console.log(nameLinkObject(a, b)); */

// let link = linkArray[0];

// for (let links = )

/* for (let i = 0; i <= 10; i++) {
  let

  fs.writeFile(fileNameArray[i], linkArray[i], (err) => {
    if (err) {
      throw err;
    }
    console.log('file saved');
  });
} */

// fs.writeFile(dirPath);

// console.log(getImages);

// const tagOpen = /<img *src=/g;
// const tagClose = / *>,/g;

// function cleanHtml() {
//   const minusFrontTag = getImages.replaceAll(tagOpen, '');
//   const minusEndTag = getImages.replaceAll(tagClose, '|');
//   console.log(toString(minusFrontTag + minusEndTag));
// }

/* const getTenLinks = getLinks.slice(0, 11);

const linkArray = [];

for (let link of getTenLinks) {
  linkArray.push(link);
} */
// console.log(cleanHtml());

// const imageLinks = getImages.replaceAll(/ *>,<img *src=/g, '|');

// console.log(imageLinks.split('|', 10));

// console.log(getImages.replaceAll(/ *>,<img *src=/g, '|'));

// console.log(getImages.replaceAll(tagOpen, ''));
// getImages.replaceAll(tagClose, '|'));

// console.log(getImages.split(tagClose, 10));
