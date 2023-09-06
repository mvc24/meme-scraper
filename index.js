import { mkdir } from 'node:fs';
import url from 'node:url';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

mkdir('./Memes', { recursive: true }, (err) => {
  if (err) throw err;
});

const myUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

// this gets me the entire html from the website, it's a bit too much
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const root = parse(body);

const getImages = root.querySelectorAll('img').toString();

console.log(getImages);
