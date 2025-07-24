/********* Abstractions **********/
/*
function sumRange(min,max){
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

console.log(sumRange(1,10));
console.log(sumRange(3,7));
console.log(sumRange(2,4));

let sumBetweenThreeAndSeven = sumRange(3,7);
console.log(sumBetweenThreeAndSeven);
*/
/********* Retorn of functions **********/
/*
function greaterThan(x){
    return (num) => num > x;
}
const greaterThanTen = greaterThan(10);
const greaterThanTwenty = greaterThan(20);

//const greaterThanTen = num => num > 10;
console.log(greaterThanTen(9));
*/
/********* Search and transformation methods **********/
// const numbers = [50, 12, 37, 25, 6];
// const animals = ["Dog", "Cat", "Swan", "Turtle"];
// const products = [
//   { name: "Table", price: 3500 },
//   { name: "Plastic Chair", price: 2000 },
//   { name: "Wooden Chair", price: 2500 },
//   { name: "Window", price: 4500 },
//   { name: "Door", price: 3000 },
// ];

// forEach() => Loop through the array and execute what we tell it for each element
// numbers.forEach((number) => {
//     console.log(number);
// });
// products.forEach((product) => {
//   console.log(product.name);
// });

// find() => Loop through the array and return the first element that meets a condition
// const dog = animals.find((animal) => animal === 'Dog');
// console.log(dog);

// let chosenProduct = prompt("Enter the product you want to buy");
// console.log(products.find((product) => product.name === chosenProduct));

// filter() => Loop through the array and return a new one with all the elements that meet a condition.
// const cat = animals.filter((animal) => animal === "Cat");
// console.log(cat);

// const chair = products.filter((product) => product.name.includes("Chair"));
// console.log(chair);

// some() => Loop through the array and respond with true or false depending on whether or not it finds an element that meets a condition.
// const swan = animals.some((animal)=> animal === "Swan");
// console.log(swan);

// const horse = animals.some((animal) => animal === "Horse");
// console.log(horse);


// map() => Loop through the array and return a new one with the transformed elements of the original array.
// console.log(products);
// const productsName = products.map((product)=> product.name);
// console.log(productsName);

// const pricesUpdated = products.map((product) => {
//     return {
//         name: product.name,
//         price: product.price * 1.5
//     }
// });
// console.log(products);
// console.log(pricesUpdated);

// reduce() => Recorrer el Array y retornarnos un unico valor tras hacer una operacion sobre los elementos.
const numbers = [50, 12, 37, 25, 6];
const animals = ["Dog", "Cat", "Swan", "Turtle"];
const products = [
  { name: "Table", price: 3500 },
  { name: "Plastic Chair", price: 2000 },
  { name: "Wooden Chair", price: 2500 },
  { name: "Window", price: 4500 },
  { name: "Door", price: 3000 },
];

// const total = numbers.reduce( (accumulator, number) => accumulator + number, 0);
// console.log(total);

// const totalCart = products.reduce((accumulator, product) => accumulator + product.price, 0);
// console.log(totalCart);

//  sort() => Sort the array according to the criteria we indicate
// numbers.sort((a , b) => a - b );
// console.log(numbers);

// numbers.sort((a, b) => a + b);
// console.log(numbers);

// MATH
const numeroDecimal = 1.25;
const numeroDecimal2 = 1.75;

// min() => Returns the minimum number in a list
//console.log(Math.min(50, 12, 37, 25, 6));

// max() => Returns the maximum number in a list
//console.log(Math.max(50, 12, 37, 25, 6));

// ceil() => Return the number we indicate rounded up
//console.log(Math.ceil(numeroDecimal));
//console.log(Math.ceil(numeroDecimal2));

// floor() => Return the number we indicate rounded down
// console.log(Math.floor(1.25));
// console.log(Math.floor(1.75));

// // round() => Return the number we indicate rounded to the nearest
// console.log(Math.round(numeroDecimal));
// console.log(Math.round(numeroDecimal2));

// random() => Return a random number between 0 inclusive and 1 inclusive.
// console.log(Math.random());
// console.log(Math.round(Math.random()));

// console.log(Math.round(Math.random() * 50 ) );
// console.log(Math.round(Math.random() * 50 + 20 ));