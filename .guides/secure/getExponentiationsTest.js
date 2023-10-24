const getExponentiations = require ("../../06getExponentiations");
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);
let d = parseInt(process.argv[5]);
console.log(getExponentiations(a,b,c,d));