import {log} from "node:console";
import http from "node:http";
import url from "node:url";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
const PORT = 3000;
const mimeTypes = {
  '.css':"text/css",
  '.js':"text/javascript",
  '.png':"image/png",
  '.jpeg':"image/jpeg",
  '.jpg':"image/jpg",
};

const getStaticFile =(res,filePath,ext) => {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(path.join(".","public", filePath), (err, data)=>{
    if(err){
      res.statusCode=404;
      res.end();
    } else{
      res.end(data);
    }
  });

};


const server = http.createServer((req,res)=>{
  const queryParams = url
  switch(url){
    case '/':
      res.write(
        fs.readFileSync(
      path.join(import.meta.dirname,
        "public", "pages", "index.html")
      ));
      res.end();

      break;
    case "/contacts":
      res.write(
        fs.readFileSync(
      path.join(import.meta.dirname,
        "public", "pages", "contacts.html")
      ));
      res.end();

      break;
      
      case "/products":
        res.write(
          fs.readFileSync(
        path.join(import.meta.dirname,
          "public", "pages", "form.html")
        ));
        res.end();
  
        break;
        
    default:
      const ext = path.extname(url);
      if(ext in mimeTypes){
        getStaticFile(res,url,ext);
      }
      else{
        res.statusCode = 404;
        res.end();
      }
      break;
  }
  //res.end();
  // res.write("<div><h1>dsfsffff</h1></div>");

});
server.listen(3000,() =>{
  log(`server start`)
})
