async function getProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    return await response.json();
}

(async () => {
    const data = await getProducts();
   
data.forEach(product => {
    document.getElementById('items').innerHTML += ` 
    <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a> `
});

})();