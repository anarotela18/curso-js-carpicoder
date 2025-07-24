// const content = document.getElementById("content");
// const paragraph = document.getElementsByClassName("paragraph");


const content = document.querySelector("#content");
const paragraphs = document.querySelectorAll(".paragraph");
//paragraphs.forEach(paragraph => console.log(paragraph));

// console.log(content.classList);
// content.classList.add("content2");
// content.classList.remove("content")
// console.log(content.classList);

//content.className = "content3 content4";

// console.log(content.innerHTML);
// console.log(content.innerText);

// paragraphs[0].innerHTML = "Hello world! <a href='#'>This is a link</a>";
// paragraphs[2].remove();

const products = ["Armchair", "Chair", "Table", "Window", "Door", "Bed"];

let list = document.createElement("ul");
list.classList.add("list");
// list.innerHTML =  "<li class='list-item'>" + products[0]+ "</li>";
// list.innerHTML += "<li class='list-item'>" + products[1] + "</li>";
// list.innerHTML += `<li class="list-item"> ${products[2]} </li>`;
for(product of products){
    list.innerHTML += `<li class="list-item">${product}</li>`;
}
content.append(list);
console.log(list);