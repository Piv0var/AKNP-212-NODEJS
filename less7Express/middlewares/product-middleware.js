import { products } from "../data/products.js"
const createProduct = (req,res,next) =>{
  if(req.body && req.body.title && req.body.price){
    const new_id = products.length+1;
    const new_product = {id: new_id, ...req.body};
    req.new_product=new_product;
    next();
    return;
  }
};
export default createProduct;