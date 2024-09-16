import fs from "node:fs";
import path from "node:path";

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const __dirname = path.resolve();
const my_dir = path.join(__dirname, "files");
if (!fs.existsSync(my_dir)) {
  fs.mkdirSync(my_dir);
}
const buff = Buffer.from("Hello from node js\n");
fs.writeFileSync(path.join(my_dir, "data.txt"), buff);
const randomString = generateRandomString(20); 
const randomBuffer = Buffer.from(randomString, 'utf-8');
const filePath = path.join(my_dir, "randomData.txt");
fs.writeFileSync(filePath, randomBuffer);
const dataFromFile = fs.readFileSync(filePath);
console.log("Данные с файла:", dataFromFile.toString());



const originalString = "String";
const buffer = Buffer.from(originalString, 'utf-8');
console.log("Буфер:", buffer);
const stringFromBuffer = buffer.toString('utf-8');
console.log("с буфера:", stringFromBuffer);



const buffer1 = Buffer.from("Hello, ", 'utf-8');
const buffer2 = Buffer.from("world!", 'utf-8');
const combinedBuffer = Buffer.concat([buffer1, buffer2]);
fs.writeFileSync("combinedBuffers.txt", combinedBuffer);
