// // import "dotenv/config";
// // console.log(process.env.APP_TITLE);
// // console.log(process.env.PORT);
// // const interval = setInterval(()=>{
// //   console.log("sI");
// // }, 1000);

// // setTimeout(()=> {
// //   clearInterval(interval);
// // }, 4000)

// // queueMicrotask(()=>{
// //   console.log("Microtask");

// // })
// // Promise.resolve().then(()=>{
// //   console.log("Promise");
// // });



// const product = {
//   id: 1,
//   title: "tv",
//   price: 30000,
// };
// //const product2 = product; поверхностное копирование
// const product2 = { ...product };
// product.id =2;
// console.table(product2);

// const user = {
//   id:1,
//   name: "John",
//   address:{
//     street: "street1",
//     ap: 5,
//   },
// }
// const user2 = structuredClone(user);
// user.address.ap = 100;
// console.log(user2);
// console.log(user);



// fetch("http://localhost:3000/users")
//   .then(data=>data.json())
//   .then((res) => console.log(res))
//   .catch();

// fetch ("http://localhost:3000/users",{
//   method: "POST",
//   body: JSON.stringify({
//     name: "John",
//   }),
// })
// .then((data)=>data.json())
// .catch();


class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getProducts(id = null) {
    const url = id ? `${this.baseUrl}/product/${id}` : `${this.baseUrl}/product`;
    return fetch(url).then(response => response.json());
  }

  addProduct(product) {
    return fetch(`${this.baseUrl}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(response => response.json());
  }

  updateProduct(id, updatedProduct) {
    return fetch(`${this.baseUrl}/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    }).then(response => response.json());
  }

  deleteProduct(id) {
    return fetch(`${this.baseUrl}/product/${id}`, {
      method: 'DELETE',
    }).then(response => response.ok);
  }
}

const apiService = new ApiService('http://localhost:3000');

apiService.getProducts().then(data => console.log(data)); 
apiService.getProducts(1).then(data => console.log(data)); 
apiService.addProduct({ name: 'product4', param: 'param4' }).then(data => console.log(data)); 
apiService.updateProduct(1, { name: 'updatedProduct', param: 'updatedParam' }).then(data => console.log(data)); 
apiService.deleteProduct(3).then(data => console.log(data));
apiService.addProduct({ name: 'product4', param: 'param4' }).then(data => console.log(data)); 
