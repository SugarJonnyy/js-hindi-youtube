const accId = 12345
let accEmail = "saswatadas705@gmail.com"
var accPassword = "999555"
let accState
// accId = 2 not allowed bc of const keyword
/*
prefer not to use var bc of block scope problem and functional scope 
*/

accEmail = "saswatadas2020@gmail.com"
accPassword = "191919"
console.table([accEmail, accId, accPassword, accState]);

console.log(accId);
