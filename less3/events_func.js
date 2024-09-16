import {log} from "node:console";
import { Buyer } from './buyer.js'; 
import EventEmitter from "node:events";
const emitter = new EventEmitter();

const f1 = () =>{
  log("fi1 start...");
};
const f2 = () =>{
  log("fi2 start...");
}
emitter.on("start", f1);
emitter.on("start", f2);
//log(emitter.listeners("start"));
//log(emitter.listenerCount("start"));
log(emitter.getMaxListeners());
