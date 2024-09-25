
function fetchProducts() {
  fetch('/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      productList.innerHTML = ''; 
      products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `ID: ${product.id}, Title: ${product.title}, Price: ${product.price}
        <button onclick="editProduct(${product.id})">Edit</button>`;
        productList.appendChild(li);
      });
    });
}

document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('add-title').value;
  const price = document.getElementById('add-price').value;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ title, price })
  })
  .then(response => response.json())
  .then(() => {
    fetchProducts(); 
    document.getElementById('add-form').reset(); 
  });
});

function editProduct(id) {
  fetch(`/products/${id}`)
    .then(response => response.json())
    .then(product => {
      document.getElementById('edit-id').value = product.id;
      document.getElementById('edit-title').value = product.title;
      document.getElementById('edit-price').value = product.price;

      document.getElementById('edit-form').style.display = 'block';
      document.getElementById('add-form').style.display = 'none';
    });
}

document.getElementById('edit-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const id = document.getElementById('edit-id').value;
  const title = document.getElementById('edit-title').value;
  const price = document.getElementById('edit-price').value;

  fetch(`/products/edit/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ title, price })
  })
  .then(response => response.json())
  .then(() => {
    fetchProducts(); 
    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('add-form').style.display = 'block';
  });
});

document.getElementById('cancel-edit').addEventListener('click', function() {
  document.getElementById('edit-form').style.display = 'none';
  document.getElementById('add-form').style.display = 'block';
});

fetchProducts();
