const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const imgElt = document.querySelector(".item__img");
const titleElt = document.getElementById('title');
const priceElt = document.getElementById('price');
const descriptionElt = document.getElementById('description')
const colorElt = document.getElementById("colors");
const quantityElt = document.getElementById('quantity');

function displayProduct() {

  imgElt.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
  titleElt.textContent = product.name;
  priceElt.textContent = product.price;
  descriptionElt.textContent = product.description;
  for (j = 0; j < product.colors.length; j++) {
    colorElt.innerHTML += `<option value="${product.colors[j]}">${product.colors[j]}</option>`;
  }
}

const fetchKanap = async () => {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then(res => res.json())
    .then((promise) => {
      product = promise

      displayProduct(product)

    })
}

fetchKanap();





/**Sélection du bouton dans le DOM */
const button = document.getElementById('addToCart');



function addToCart() {

}


var color = colorElt.value;

button.addEventListener('click', () => {
  
var color = colorElt.value;
let quantity = Number(quantityElt.value);

  console.log(color);
  console.log(quantity);

  if (color === "" || color == null ) {
    alert(`Veuillez choisir une couleur`)
    return
  }
  if (quantity === 0 || quantity > 100) {
    alert(`Veuillez choisir une quantité entre 0 et 100.`)
    return
  }

// localStorage.setItem(data.id + "-" + data.color, JSON.stringify(data))




const data = {
  id: id,
  color: color,
  quantity: quantity
  
}

console.log(data);

let productInLocalStorage = JSON.parse(localStorage.getItem('data'));
console.log(productInLocalStorage);


 const popupConfirmation = () => {
  if(window.confirm(`${id} option: ${color} a bien été rajouté au panier
  Consulter le panier OK ou revenir à l'accueil ANNULER`)){
window.location.href = "cart.html"
  }else{
    window.location.href = "index.html"
  }
}

if(productInLocalStorage){
  productInLocalStorage.push(data)
  localStorage.setItem("data", JSON.stringify(productInLocalStorage))
  console.log(productInLocalStorage);
popupConfirmation();
}
else{
  productInLocalStorage = [];
  productInLocalStorage.push(data)
  
  localStorage.setItem("data", JSON.stringify(productInLocalStorage))
  console.log(productInLocalStorage);
  popupConfirmation();
}


})

