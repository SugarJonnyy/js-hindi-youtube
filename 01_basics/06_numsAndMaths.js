const num = 400 // declaring manually

let numDef = new Number(700) // declaring with new keyword 
console.log(num)
console.log(numDef);
console.log(num.toString().length);
console.log(numDef.toFixed(1));

// toPrecision method examples

const num2 = 356.8900
console.log(num2.toPrecision(4)); 
console.log(num2.toPrecision(2));

// toLocaleString method 

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++Maths+++++++++++++++++++++++++

console.log(Math.abs(-99)); //using Matrh library
console.log(Math.ceil(39.1111));
console.log(Math.round(39.1111));
console.log(Math.floor(39.9999));

console.log(Math.max(67, 57, 89));

console.log(Math.random());
console.log(Math.floor((Math.random()* 10) + 1));

let max = 10
let min = 20

console.log(Math.floor((Math.random()* 10) + (max - min + 1) + min));



