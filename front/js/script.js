let getProducts = [];

const fetchKanap = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        getProducts = promise;
      })};

fetchKanap();

const displayProdutcs = async () => {
  await fetchKanap();

getProducts.forEach(product => {
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

displayProdutcs();

