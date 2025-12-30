// Arrays

let myArr = ["hello", 1, 2, 3, 4, true]
console.log(myArr);

// Methods

console.log(myArr.push(100));
console.log(myArr.pop());
console.log(myArr.join());
console.log(myArr.slice(0,4));
console.log(myArr);
console.log(myArr.splice(0, 4));
console.log(myArr);


// concat

let anotherArrys = ["hello", "hi", "bye"]
let anotherArrys1 = ["dont", "bro"]

// let concattedArray = [...anotherArrys, ...anotherArrys1] // preferable method 
let concattedArray = anotherArrys.concat(anotherArrys1) 
console.log(concattedArray); 

// flat method 

let testArray = [1,2,3,[9,10,[7,8]],100]
console.log(testArray.flat(3)); //depth number is 3 


// Array conversion from any data type 
console.log(Array.from("Saswata"));

// method for making array for bunch of variables

let Array1 = 200
let Array2= 300
let Array3 = 400

console.log(Array.of(Array1,Array2,Array3));







