// Objects

const sym = Symbol('yeah')

// Object.create(jsUser) //creation method for object creating

const jsUser = {
    name: "Saswata",
    age: 20,
    location: "Kashipur",
    country: "India",
    [sym]: "myKeyone"
}

// this is object literal

//  Object.freeze(jsUser) // to freeze the value and not make changes 


console.log(jsUser);
console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser[sym]);

// this  keyword

jsUser.greeting = function(){
    console.log(`Hello jsUser, ${this.name}`);
    
}

jsUser.greeting()
 

// object de-structuring 

const aussie = {
    name: "Alex volk",
    age: 37,
    mmaOrganization: "UFC"
}
const {mmaOrganization: company} = aussie
const {name} = aussie

console.log(name);
console.log(company);
