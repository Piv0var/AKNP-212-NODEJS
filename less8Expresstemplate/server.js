import express from "express";
import exphbs from "express-handlebars";
import "dotenv/config";
import siteRouters from "./routes/site-routes.js";

const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
  defaultLayout:"main",
  extname:"hbs"
})
const app = express();
app.engine("hbs",hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(siteRouters);

app.listen(PORT, ()=>{
  console.log("Serv start")
});