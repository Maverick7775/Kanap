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

// const fetchKanap = async => {
//    await fetch(`http://localhost:3000/api/products/${id}`)
//     .then(res => res.json())
//     .then((promise) => {
//         getProduct = promise
//     })
// }

    fetch(`http://localhost:3000/api/products/${id}`)
    .then(res => res.json())
    .then((promise) => {
        getProduct = promise
    })
// fetchKanap();

// const displayProduct = async => {
//     await fetchKanap();
// document.getElementById(`title`).textContent =  product.name;

// }


function getProduct(product){
    const name = product.name;
    const altTxt = product.altTxt;
    const colors = product.colors;
    const description = product.description;
    const imageUrl = product.imageUrl;
    const price = product.price /100;
    const _id = product._id;
   
    return getProduct(product);
}

let img = document.createElement("img");
img.append('product.imageUrl');
// document.getElementById('price').textContent = 200;
// document.getElementById('price').innerHTML = 400;


// document.getElementById('description').innerHTML = 'hello';
// document.getElementById('price').textContent = fetchProduct.price / 100;
// document.getElementById('description').textContent = id.description;

    
    // document.getElementsByClassName('item').innerHTML += 
