import {Router} from "express";
const siteRouters = Router();
siteRouters.get("/",(req,res)=>{
  res.render("home");
});
siteRouters.get("/contacts", (req,res)=>{
  res.render("contacts", {contacts: ["vsfdd@gmail.com", "+3432546344234"]});

});
siteRouters.get("/photo", (req,res)=>{
  res.render("photo",{title: "My photo"});

});
export default siteRouters;