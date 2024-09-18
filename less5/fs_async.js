import path from "node:path";
import fs from "node:fs";
import { Buffer } from "node:buffer";
const buff = Buffer.from("NodeJs Programm");
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname,"files2");
const pathToFile = path.join(pathToFolder, "data2.txt");
fs.access(pathToFile,(err)=>{
  if(err){
    if(err.code ==='ENOENT'){
      fs.mkdir(pathToFolder, (err)=>{
        if(err){
          console.log(err);
          process.exit();
        }
      });
    }else{
      console.log(err);
      process.exit();
    }
  }
  fs.writeFile(pathToFile, buff, (err) =>{
    if(err){
      console.log(err);
      process.exit();
  }
  fs.readFile(pathToFile,(err,data)=>{
    if(err === null){
      console.log(data.toString());
    }
  })
});
});