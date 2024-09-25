import express from "express";
import { products } from "./data/products.js";
import path from "node:path";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "public", "pages", "index.html"));
});

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = +req.params.id;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).send("Product not found");
  }
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

app.post('/products/edit/:id', (req, res) => {
  const productId = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).send("Product not found");
  }

  products[productIndex].title = req.body.title;
  products[productIndex].price = req.body.price;

  res.status(200).json({ status: "success", updatedProduct: products[productIndex] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
