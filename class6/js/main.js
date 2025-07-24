// Declaring our first array
const products = ["Armchair", "Chair", "Table", "Wardrobe"];

const numbers = [1,2,3,4,5];
const booleans = [true, true, false];
const mix = ["Armchair", 1,2, true];
const users = [
    {
        name: "Maria",
        age: 27,
    },
    {
        name: "Maria",
        age: 25,
    }
];

// Looping through our array
for(let i = 0; i< products.length; i++){
console.log(products[i]);
}

// push: Add an element to the end of the array
products.push("Bed");
console.log(products);

// unshift: Add an element to the beginning of the array
products.unshift("Door");
console.log(products);

// shift: Delete an element at the beginning of the array
products.shift();
console.log(products);

// pop: Delete an element at the end of the array
products.pop();
console.log(products);

// splice: Delete one or more elements in our array
products.splice(1,2);
console.log(products);

// join: Generate a string with the elements of the array
console.log(products.join("/"));
console.log(products.join(","));

// concat: join two arrays into one
const products2 = ["Door","Window","Bed"];
const finalProduct = products. concat(products2);
console. log(finalProduct);

//slice: Generate a copy of a portion of our array
const productsDiningRoom = products. slice(1, 4);
console. log(productsDiningRoom);

//indexOf: Find the index number of our element
console. log(products. indexOf("Wardrobe"));

//includes: Find out whether an element exists or not in our array
console. log(products. includes("Chair"));

if(products. includes("Table")){
    console. log(products. indexOf("Table"));
}else{
    console.log("Chair not found in array");
}
//reverse: reverse the order of our array
console.log(products.reverse());