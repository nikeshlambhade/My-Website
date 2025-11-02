const products = [
  { id: 1, name: "Smartphone", price: 15000, category: "electronics", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/v/a/b/-original-imahggexextjawug.jpeg?q=90" },
  { id: 2, name: "Laptop", price: 55000, category: "electronics", image: "https://via.placeholder.com/200" },
  { id: 3, name: "T-Shirt", price: 800, category: "clothing", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Watch", price: 2500, category: "accessories", image: "https://via.placeholder.com/200" },
  { id: 5, name: "Headphones", price: 2000, category: "electronics", image: "https://via.placeholder.com/200" },
  { id: 6, name: "Jacket", price: 3000, category: "clothing", image: "https://via.placeholder.com/200" }
];

const productList = document.getElementById('product-list');

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;
    productList.appendChild(div);
  });
}

function filterCategory(category) {
  if (category === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

displayProducts(products);