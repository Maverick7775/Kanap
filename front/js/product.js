// const product = window.location.search.split("?").join("");
// console.log(product);

// let productData = [];


// const fetchProduct = async () => {
//   await fetch("http://localhost:3000/api/products/${product}")
//     .then((res) => res.json())
//     .then((promise) => {
//   console.log(promise);
//     });
// };

//  let fetchProduct;

const params = new URLSearchParams(window.location.search);
const id = params.get("id")
console.log(id);

// const getProduct = async => {
//    await fetch(`http://localhost:3000/api/products/${id}`)
//     .then(res => res.json())
//     .then((promise) => {
//         getProduct = promise
//     })
// }

let getProduct = {};

const fetchKanap = async () => {
fetch(`http://localhost:3000/api/products/${id}`)
.then(res => res.json())
.then((promise) => {
    getProduct = promise
})};

fetchKanap();

document.getElementById('price').textContent = 400;

// function displayProduct();
//     document.getElementById('item').innerHTML += ` 
//   <a href="./product.html?id=${product._id}">
//           <article>
//             <img src="${product.imageUrl}" alt="${product.altTxt}">
//             <h3 class="productName">${product.name}</h3>
//             <p class="productDescription">${product.description}</p>
//           </article>
//         </a> `





// fetchKanap();

// const displayProduct = async => {
//     await fetchKanap();

// }
// document.getElementById(`title`).textContent =  product.name;


// function getProduct(){
//     const name = product.name;
//     const altTxt = product.altTxt;
//     const colors = product.colors;
//     const description = product.description;
//     const imageUrl = product.imageUrl;
//     const price = product.price /100;
//     const _id = product._id;
    
// }


// let img = document.createElement("img");
// img.append('product.imageUrl');
// document.getElementById('price').textContent = 200;


// document.getElementById('description').innerHTML = 'hello';
// document.getElementById('price').textContent = fetchProduct.price / 100;
// document.getElementById('description').textContent = id.description;

    
    // document.getElementsByClassName('item').innerHTML +=
