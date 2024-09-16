import {log} from "node:console";
import fs from "node:fs";
import { console } from "node:inspector";
const content = fs.readFileSync("text.txt", {encoding: "utf-8"});
//log(content);
import { Buffer } from "node:buffer";
// const buff = Buffer.alloc(8);
// buff.write("hello world");
// log(buff.toString());
// const mess = "Node js programm";
// const buff = Buffer.from(mess);
// log(buff)
// log(buff.toString())
const buff1 = Buffer.from("C++");
const buff2 = Buffer.from("js");
log(buff1.compare(buff2));