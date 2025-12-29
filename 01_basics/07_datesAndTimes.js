let myDate = new Date()
let myExactDate = new Date("12,29,2025")
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myExactDate);
console.log(Math.floor(Date.now()/1000));


console.log(myDate.getFullYear());
console.log(myDate.getDay());

console.log(myDate.toLocaleDateString('default', {
    weekday: 'long',
}))



