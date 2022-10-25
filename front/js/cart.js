
console.log("coucou");

let productInLocalStorage = JSON.parse(localStorage.getItem('data'));
console.log(productInLocalStorage);
const numberOfItems = productInLocalStorage.length;
console.log(numberOfItems); 

console.log(typeof(productInLocalStorage));

// const cart = Object.keys(productInLocalStorage);
const cart = [];
console.log(cart);

console.log(typeof(cart));
// cart.for(let i = 0; i < numberOfItems; i++)

const items = localStorage.getItem(localStorage.key)
console.log(items)
// function displayProducts ();

const article = document.createElement("article")
article.classList.add("cart_item")

const image = document.createElement('img');
