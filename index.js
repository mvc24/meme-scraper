import { mkdir } from 'node:fs';
import * as fs from 'fs';

mkdir('./Memes', { recursive: true }, (err) => {
  if (err) throw err;
});
