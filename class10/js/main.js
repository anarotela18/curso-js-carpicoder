// localStorage
// sessionStorage

/************    OBJETOS  ********************/
localStorage.setItem("iva",21);
localStorage.setItem("name","carpi");

let user = "Matias";
localStorage.setItem("user",user);

//let userInLocalStorage = localStorage.getItem("user");
//console.log(userInLocalStorage);

//let userLoggedIn = prompt("Enter your name");
//localStorage.setItem("user-logged", userLoggedIn);
//console.log(userLoggedIn);

const userObject = {
    name: "Carpi",
    age: 27
}
const userJSON = JSON.stringify(userObject);
localStorage.setItem("user-object", userJSON);
//console.log(userJSON);

const userInLocalStorage = localStorage.getItem("user-object");
const userObjectConvertStringToObject = JSON.parse(userInLocalStorage);
//console.log(userObjectConvertStringToObject);

/************   ARRAYS OF OBJECTS  **********************/
const products = [
    { name: "Chair", price: 1500 }, 
    { name: "Big Chair", price: 2500 },
    { name: "Table", price: 3000}
];
localStorage.setItem("products-storage", JSON.stringify(products));
//console.log(JSON.parse(localStorage.getItem("products-storage")));

/************   EXAMPLE OF DARK MODE  **********************/
const btnColorMode = document.querySelector("#colorMode");
const body = document.body;
function updateButtonText(){
    if(body.classList.contains("dark-mode")){
        btnColorMode.textContent = "Change to light mode";
    }else{
        btnColorMode.textContent = "Change to dark mode";
    }
}
function activeDarkMode(){
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode","active");
    updateButtonText();
}
function disableDarkMode(){
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode","disable");
    updateButtonText();
}
if(localStorage.getItem("dark-mode") === "active"){
    activeDarkMode();
}else{
    disableDarkMode();
}
btnColorMode.addEventListener("click", ()=>{
    if(body.classList.contains("dark-mode")){
        disableDarkMode();
    }else{
        activeDarkMode();
    }
});