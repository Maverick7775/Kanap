const params = new URLSearchParams(window.location.search);
const id = params.get("id")
console.log(id);


const fetchKanap = async () => {
fetch(`http://localhost:3000/api/products/${id}`)
.then(res => res.json())
.then((promise) => {
    product = promise
    console.log("hello" + product);
    
    let img = document.querySelector(".item__img");
    let title = document.getElementById(`title`);
    let price = document.getElementById('price');
    let description = document.getElementById('description')
    let color = document.getElementById("colors");

    img.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    title.textContent =  product.name;
    price.textContent = product.price;
    description.textContent = product.description;
    
    // for (i = 0; i < product.colors.length; i++) { 
    //   color.innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`;

    // }

for ( j = 0; j < product.colors.length; j++){
  color.innerHTML += `<option value="${product.colors[j]}">${product.colors[j]}</option>`;
}

  console.log(product);

})};

fetchKanap();






/**Sélection du bouton dans le DOM */
const button = document.getElementById('addToCart');

button.addEventListener('click', () => {

let color = document.getElementById('colors').value;
let quantity = document.getElementById('quantity').value;
let price = product.price;
console.log(price);
console.log(color);
console.log(quantity);

if (color === '') {
  alert(`Veuillez choisir une couleur`)
return
}
  if (quantity === "0") {
    alert(`Veuillez choisir une quantité`)
  return
}
    

const data = {
  id: id,
  color: color,
  quantity: Number(quantity),
  price: price
  
}
console.log(data);
let productInLocalStorage = JSON.parse(localStorage.getItem("data"))
console.log(productInLocalStorage);

/**Pop-up confirmation */
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