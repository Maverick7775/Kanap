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

