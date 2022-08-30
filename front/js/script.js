let allProducts = [];

const fetchKanap = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        allProducts = promise;
      })};

// fetchKanap();

const displayProducts = async () => {
  await fetchKanap();

  
  allProducts.forEach(product => {
    document.getElementById('items').innerHTML += ` 
  <a href="./product.html?id=${product._id}">
          <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
          </article>
          </a> `
        });
        
      }
      
      displayProducts();
