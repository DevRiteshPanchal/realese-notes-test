console.log('Hello, world!');

const add =(a,b)=>{
  return a+b
}
const multiply =(a,b)=>{
  return a*b
}
const subtract =(a,b)=>{
  return a-b
}
const divide =(a,b)=>{
  return a/b
}
const square =(a,b)=>{
  return a**b
}

// hello world
// test
// test
// test

// function to reverse a string
function reverseString(str1) {
  return str1.split("").reverse().join("");
}
// function to filter out numbers from an array
function filterNumbers(arr1) {
  return arr1.filter((item) => typeof item === "number");
}

// fucntion to filter out string from an array
function filterStrings(arr2) {
  return arr2.filter((item) => typeof item === "string");
}
// fuction to reverse a number
function reverseNumber(num) {
  return parseFloat(num.toString().split("").reverse().join(""));
}

// function to filter out even numbers from an array
function filterEvenNumbers(arr3) {
  return arr3.filter((item) => item % 2 === 0);
}