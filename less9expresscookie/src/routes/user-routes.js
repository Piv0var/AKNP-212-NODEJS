import {Router} from "express";
import validator from "validator";
import bcrypt from "bcrypt";


const userRoutes = Router();
// userRoutes.get("/signup",(req,res)=>{
//   res.render("form_signup");
// });

// userRoutes.get("/signup",(req,res)=>{
//   res.render("form_signup");
// });


userRoutes.route('/signup')
.get((req,res)=>{
res.render("form_signup");
})
.post((req,res) => {
  console.log(bcrypt.hashSync(req.body.password, 10));
  res.cookie("user",req.body.login,{
    httpOnly: true,
    maxAge:1000*60*60,
  })
  res.redirect("/")
})

export default userRoutes;