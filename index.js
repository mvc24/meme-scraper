import { mkdir } from 'node:fs';
import url from 'node:url';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

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
console.log(getTenLinks);
