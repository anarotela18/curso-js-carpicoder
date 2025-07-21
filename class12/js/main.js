/*
VALORES FALSY
0, null, undefined, NaN, false, string vacío

VALORES NULLISH
null, undefined
*/

/******* Operator +- y ++ ******/ 
let number = 10;
number = number + 1;
number += 2;
number ++;
console.log(number);


/******* Ternary operator : ******/ 
let edad = 32;

if(edad >= 18){
    console.log('Success');
}else{
    console.log("Access denied");
}

edad >= 18 ? console.log("Success") : console.log("Access denied");

console.log(edad >= 18 ? "Success" : "Access denied");


/******* Operator && ******/ 
const carrito = ["Silla"];

if(carrito.length === 0 ){
    console.log("The cart is campy");
}

carrito.length === 0 && console.log("The cart is campy");

/******* Operator || ******/ 
let usuario1 = "Carpi";
let usuario2 = null;

if(usuario1){
    console.log(usuario1);
}else{
    console.log("The user does not exist");
}

console.log(usuario1 || "The user does not exist");

/******* Operator ?? ******/ 
// NULLISH: null, undefined

let numero = 0;
let numero2 = null;

console.log(numero ?? "Number not valid");
console.log(numero2 ?? "Number not valid");

// Object destructuring
const user = {
    name: "Carpi",
    age: 27,
    courses: {
        dw: "Approved",
        js: "Approved"
    }
}
let {name, age} = user;

let {name: nameOfUser, age: ageOfUser, nacionalityOfUser} = user;

console.log(nameOfUser);


// Arrays destructuring
const names = ["Carpi","Maria","Julian","Carlos"];

const [, b, c] = names;

console.log(b);

// Spread of arrays
const namesList = ["Carpi", "Maria", "Julian", "Carlos"];

const namesList2 = [...namesList];
namesList2[0] = "Matias";
console.log(namesList);
console.log(namesList2);