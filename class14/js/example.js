const dataBase = [
    {id: "silla", name: "Silla", price: 1500},
    {id: "sillon", name: "Sillon", price: 2500},
    {id: "puerta", name: "Puerta", price: 3500},
    {id:"ventana", name: "Ventana", price: 4500}
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(dataBase);
        },2000);
    });
}

let products = [];
const list = document.querySelector("#productsList");

function showProducts(array){
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.name} - ${item.price}`;
        list.append(li);
    });
}
getProducts()
    .then((res) => {
        products = res;
        console.log(products);
        showProducts(products);
    })