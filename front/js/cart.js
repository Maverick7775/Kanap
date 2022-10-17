// const data = {
//     id: id,
//     color: color,
//     quantity: Number(quantity),
//     price: price
    
//   }
// console.log("coucou");
// let productInLocalStorage = JSON.parse(localStorage.getItem("data"));
// console.log(productInLocalStorage);

function getCart(){
    let items = [];
items = JSON.parse(localStorage.getItem("data"));
return items
}