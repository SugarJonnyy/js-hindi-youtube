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

// two types of memory 
 // Stack (Primitive) and Heap memory (Non-Primitive)

 // there is a differnce between reference (happens in heap) and copy (happens in stack)

 let userOne = {
    email: "saswatadas2020@gmail.com",
    name: "Saswata Das",
 }

let userTwo = userOne
userTwo.email = "saswatadas705@gmail.com" 
console.log(userOne);
console.log(userTwo); // changed bc of passing reference


let name = "Saswata Das"
let myName = name
myName = "Hitesh"

console.log(name);
console.log(myName); //not changed bc of passing copy 





