const getEvenNumbers = require ("../../01getEvenNumbers");
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
console.log(getEvenNumbers(a,b));