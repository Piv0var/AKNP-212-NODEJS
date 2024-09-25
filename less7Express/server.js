import express from "express";
import {products} from"./data/products.js";
import path from "node:path";
const PORT =process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));
app.get('/', (req, res) =>{
  res.sendFile(path.join(import.meta.dirname,"index.html"));
});

app.get('/products', (req, res) =>{
  //res.send('Hello World!');
  res.status(200).json(products);

});


app.get('/products/:id_product', (req, res) =>{
  const id=+req.params.id_product;
  const product = products.find((e1)=>e1.id === id);
  res.status(200).json(product);

});

app.post('/', (req, res) => {
  const new_id = products.length + 1;
  const new_product = {
    id: new_id,
    title: req.body.title,  
    price: req.body.price   
  };
  products.push(new_product);
  res.status(201).json({ status: "success", product: new_product });
});


app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});