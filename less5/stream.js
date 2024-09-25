import path from "node:path";
import fs from "node:fs";
import { log } from "node:console";
import { Transform } from "stream";

const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files3");
const pathToFile = path.join(pathToFolder, "data3.txt");
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(
  path.join(pathToFolder, "new_data.txt")
);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

readStream.pipe(uppercaseTransform).pipe(writeStream);

uppercaseTransform.on("data", (chunk) => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < chunk.length) {
      log(chunk[index]); 
      index++;
    } else {
      clearInterval(intervalId); 
    }
  }, 100); 
});

readStream.on("data", (chunk) => {
  log(`start chunk\n`);
  log(chunk);
  writeStream.write(chunk);
  log(chunk.length);
  log(`end chunk\n`);
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 5000);
});

readStream.on("close", () => {
  log("file closed");
});

readStream.on("end", () => {
  log("file success");
});

readStream.on("open", () => {
  log("file opened");
});
