// import EventEmitter from "node:events";
// const emitter = new EventEmitter();
// const listenner1 = () =>{
//   console.log("listenner1");
// };


// emitter.on("connection", listenner1);
// emitter.addListener("connection", () =>{
//   console.log("connection2 +");
// });
// emitter.once("connection", () => {
//   console.log("временній+");
// })
// emitter.emit("connection");
// console.log("===============");
// emitter.removeListener("connection", listenner1);
// emitter.emit("connection");




import EventEmitter from "node:events";
const emitter = new EventEmitter();
// emitter.on("click", (data) =>{
//   console.log("Clicked...", data);
// });

// emitter.emit("click", {title: "Add product", width:"100px", height:"70px"});

import { Buyer } from './buyer.js'; 


const buyers = [
  new Buyer('ivan@example.com', 'Ivan'),
  new Buyer('Danil@example.com', 'Danil'),
  new Buyer('Artem@example.com', 'Artem')
];

  emitter.on("SALE", (data) =>{
    console.log(buyers, data);
  });

emitter.emit("SALE", {SALE: `${ Math.floor(Math.random()*100)}%`});


