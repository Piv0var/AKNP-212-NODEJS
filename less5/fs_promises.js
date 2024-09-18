// const simple = (value)=>{
//   return new Promise((resolve, reject)=>{
//     if(value>0)
//       resolve("value>0");
//     else reject("value<=0");
//   })
// };

// simple(100)
// .then((data) =>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// });

// import path from "node:path";
// import fs from "node:fs";
// import { Buffer } from "node:buffer";
// const buff = Buffer.from("NodeJs Programm");
// const __dirname = import.meta.dirname;
// const pathToFolder = path.join(__dirname,"files2");
// const pathToFile = path.join(pathToFolder, "data2.txt");
// fs.writeFile(pathToFile, buff)
// .then(()=>{
//   console.log("file uspishno stvoreni");
//   fs.readFile(pathToFile)
//   .then((data)=> console.log(data.toString()))
//   .catch((err) => console.log(err));
// })
import path from "node:path";
import fs from "node:fs";
import { Buffer } from "node:buffer";


const buff = Buffer.from("NodeJs Programm");
const __dirname = path.resolve();
const pathToFolder = path.join(__dirname, "files2");
const pathToFile = path.join(pathToFolder, "data2.txt");
async function checkFileAccess(filePath) {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    } else {
      throw err;
    }
  }
}

async function createFolder(folderPath) {
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });
    console.log(`${folderPath}`);
  } catch (err) {
    console.error(`${err.message}`);
    throw err;
  }
}
async function writeFile(filePath, data) {
  try {
    await fs.promises.writeFile(filePath, data);
    console.log(`${filePath}`);
  } catch (err) {
    console.error(`${err.message}`);
    throw err;
  }
}
async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath);
    console.log(`Содержимое: ${data.toString()}`);
  } catch (err) {
    console.error(`${err.message}`);
    throw err;
  }
}
const fileExists = await checkFileAccess(pathToFile);

if (!fileExists) {
  await createFolder(pathToFolder);
}

await writeFile(pathToFile, buff);
await readFile(pathToFile);
