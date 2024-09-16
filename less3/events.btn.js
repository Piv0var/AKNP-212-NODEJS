import EventEmitter from "node:events";
const emitter = new EventEmitter();
emitter.on("click", (data) =>{
  console.log("Clicked...", data);
});

emitter.emit("click", {title: "Add product", width:"100px", height:"70px"});
