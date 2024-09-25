import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";
import {log} from "node:console";
const __dirname = import.meta.dirname;
import { Transform } from "node:stream";
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const pathToNewFile = path.join(pathToFolder, "data_new.txt");
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(pathToNewFile);
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

readStream.pipe(upperCaseTr).pipe(writeStream);

// const pathToNewFile = path.join(pathToFolder, "new_data.txt");
// const readStream = fs.createReadStream(pathToFile);
// const writeStream = fs.createWriteStream(
//   path.join(pathToFolder, "new_data.gzip")
// );
// const transformStream = zlib.createGzip("data.txt");
// readStream.pipe(transformStream).pipe(writeStream);