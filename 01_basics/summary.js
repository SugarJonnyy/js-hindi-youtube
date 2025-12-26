//Primitive 

// String, Number, Boolean, BigInt, null, undefined, symbol total 7 

// Reference (non- primitive)
// Array, Objects, Functions 

const num = 123
const numIn = 123.6

const nullValue = null

let email = "saswatadas705@gmai.com"

const aSymbol = Symbol('999')
const anotherSymbol = Symbol('999')
console.log(aSymbol === anotherSymbol); // symbol declaretion


const bigNumber = 1247827598257765n

// objects:

let myObj = {
    name: "Suzuki",
    year: 2006,
    color: "red",
}

console.log(myObj);

// Array:

const nums = [1, 2, 3, 4, 5, 6]
console.log(nums);

//Functions

const myFunction = function(){
    console.log("Hello World");
    
}

myFunction()


// few things in typeof 

console.log(typeof(nullValue));
console.log(typeof (bigNumber));
console.log(typeof(myFunction));
console.log(typeof(anotherSymbol));
console.log(typeof(numIn));




