const listOfProducts = document.querySelector("#listOfProducts");

fetch("js/products.json")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(products){
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerText = product.nombre + " - " + product.precio;
    listOfProducts.append(li);
  });
}
