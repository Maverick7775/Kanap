const params = new URLSearchParams(window.location.search);
const id = params.get("id")
console.log(id);


const fetchKanap = async () => {
fetch(`http://localhost:3000/api/products/${id}`)
.then(res => res.json())
.then((promise) => {
    product = promise
    
    
    let img = document.querySelector(".item__img");
    img.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    document.getElementById(`title`).textContent =  product.name;
    document.getElementById('price').textContent = product.price;
    document.getElementById('description').textContent = product.description;
    let color = document.getElementById("colors");
    for (i = 0; i < product.colors.length; i++) { 
      color.innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
    }
})};

fetchKanap();

/** Ajouter des produits dans le panier*/
 
document.getElementById('addToCart').addEventListener('click', () => {
  console.log(document.getElementById('colors').value);
  
  if (document.getElementById('colors').value === '') {
    alert(`Veuillez choisir une couleur`)
  }
})

function saveBasket(basket){
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if (basket == null){
    return []
  }else{
    return JSON.parse(basket)
  }
}

function addToCart(product){
  let basket = getBasket();
  basket.push(product);
  saveBasket(basket);
}