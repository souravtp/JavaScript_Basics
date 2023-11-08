 // Js Bigint are used to store big integer values that cannot be stored using normal JavaScript number
 
//Normal integer
const integer = 99999999999999

//Bigint
const bigInt = 99999999999999999999999999n;
const bigInt2 = BigInt("999999999999999999999");

console.log(bigInt);
console.log(bigInt2);
console.log(typeof bigInt2);

// document.getElementById("demo").innerHTML = bigInt2;


/*
Arithmetic between number and BigInt is not available.
unsigned right shift is not available for BigInt(it does not have a fixed width)
BigInt cannot be a decimal
*/

const bigInt3 = 5n;
const num = 2;

// let result = bigInt3/num;
let result = Number(bigInt3)/num;

console.log(result);