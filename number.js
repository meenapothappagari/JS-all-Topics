// Number Methods.
//1. toFixed(2) => It is used to fix the number of decimal places.
//2. toPrecision() => It is used to fix the number of digits.
//3. toString() => It is used to convert a number to a string.
//4. toExponential() => It is used to convert a number to exponential notation.
//5. valueOf() => It is used to return the primitive value of a number.

let a = 12345; // last number is being rounded off into 6
// console.log(a.toFixed(2), "This is the exponential notation");
// console.log(a.toFixed(2), "This is the fixed number of decimal places");
console.log(a.toPrecision(2), "This is the fixed number of decimal places");
//Round OFF = > Nearest 10s place

console.log(a.toExponential(2), "This is the exponential notation");

// console.log(a.valueOf(), "This is the primitive value of a number");
 