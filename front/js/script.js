
let getProducts = [];

const fetchKanap = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        getProducts = data;
        console.log(getProducts);
    });
};

const displayProducts = async() => {
    await fetchKanap();

array.forEach(product of  => {
    
});
    document.getElementById("items").innerHTML += `
    <a href="./product.html?id=${product._id}">
    <article>
      <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
      <h3 class="productName">Kanap name1</h3>
      <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
  </a>`
}

fetchKanap();
