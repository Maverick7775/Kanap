const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const img_Elt = document.querySelector(".item__img");
const title_Elt = document.getElementById('title');
const price_Elt = document.getElementById('price');
const description_Elt = document.getElementById('description')
const color_Elt = document.getElementById("colors");
const quantity_Elt = document.getElementById('quantity');

function displayProduct() {

  img_Elt.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
  title_Elt.textContent = product.name;
  price_Elt.textContent = product.price;
  description_Elt.textContent = product.description;
  for (j = 0; j < product.colors.length; j++) {
    color_Elt.innerHTML += `<option value="${product.colors[j]}">${product.colors[j]}</option>`;
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


var color = color_Elt.value;

button.addEventListener('click', () => {
  
  var color = color_Elt.value;
let quantity = quantity_Elt.value;
let price = product.price;

  console.log(color);
  console.log(quantity);
  console.log(price);

  if (color === "") {
    alert(`Veuillez choisir une couleur`)
    return
  }
  if (quantity === "0") {
    alert(`Veuillez choisir une quantité`)
    return
  }
})

const data = {
  id: id,
  color: color,
  quantity: Number(quantity),
  price: price
  
}
console.log(data);
let productInLocalStorage = localStorage.getItem(data);
console.log(productInLocalStorage);

/**Pop-up confirmation */
// const popupConfirmation = () => {
//   if(window.confirm(`${id} option: ${color} a bien été rajouté au panier
//   Consulter le panier OK ou revenir à l'accueil ANNULER`)){
// window.location.href = "cart.html"
//   }else{
//     window.location.href = "index.html"
//   }
// }

// if(productInLocalStorage){
//   productInLocalStorage.push(data)
//   localStorage.setItem("data", JSON.stringify(productInLocalStorage))
//   console.log(productInLocalStorage);
// popupConfirmation();
// }
// else{
//   productInLocalStorage = [];
//   productInLocalStorage.push(data)
  
//   localStorage.setItem("data", JSON.stringify(productInLocalStorage))
//   console.log(productInLocalStorage);
//   popupConfirmation();
// }

