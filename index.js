import { Buffer } from 'node:buffer';
import { mkdir, writeFile } from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

/* const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); */

mkdir('./Memes', { recursive: true }, (err) => {
  if (err) throw err;
});

// const myUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

// this gets me the entire html from the website, it's a bit too much
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const root = parse(body);

const getImages = root.querySelectorAll('img').toString();

// console.log(getImages);

// const tagOpen = /<img *src=/g;
// const tagClose = / *>,/g;

// function cleanHtml() {
//   const minusFrontTag = getImages.replaceAll(tagOpen, '');
//   const minusEndTag = getImages.replaceAll(tagClose, '|');
//   console.log(toString(minusFrontTag + minusEndTag));
// }

// console.log(cleanHtml());

// const imageLinks = getImages.replaceAll(/ *>,<img *src=/g, '|');

// console.log(imageLinks.split('|', 10));

// console.log(getImages.replaceAll(/ *>,<img *src=/g, '|'));

// console.log(getImages.replaceAll(tagOpen, ''));
// getImages.replaceAll(tagClose, '|'));

// console.log(getImages.split(tagClose, 10));

const getLinks = getImages.match(/https.*?00/g);
const getTenLinks = getLinks.slice(0, 11);
// console.log(getTenLinks);

// getTenLinks.forEach((link) => console.log(link));
// it doesn't like the link

const linkArray = [];

for (let link of getTenLinks) {
  linkArray.push(link);
}

// console.log(linkArray);

let fileName = '';

const fileNameArray = [];

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    fileName = `0${i}.jpg`;
    // console.log(fileName);
    fileNameArray.push(fileName);
  } else {
    fileName = `${i}.jpg`;
    // console.log(fileName);
    fileNameArray.push(fileName);
  }
}

let a = fileNameArray;
let b = linkArray;

const nameLinkObject = (a, b) => {
  let obj = {};
  a.forEach((k, i) => {
    obj[k] = b[i];
  });
  return obj;
};
console.log(nameLinkObject(a, b));

const dirPath = './Memes';

// fs.writeFile(dirPath);

/* let imageUrl = fetch(linkArray)
  .then((res) => {
    // res.arrayBuffer();
    console.log('value of response', res.url);
  })
  .then((buffer) => {
    // Write the buffer to a file
    fs.writeFile(path.join(dirPath, fileNameArray[0]), buffer, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Image downloaded successfully');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  }); */
