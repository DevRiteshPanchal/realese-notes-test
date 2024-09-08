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

// function to filter odd numbers
function filterOddNumbers(arr1) {
  return arr1.filter((item) => item % 2 !== 0);
}

// function to filter even numbers
function filterEvenNumbers(arr1) {
  return arr1.filter((item) => item % 2 === 0);
}

// function to find the maximum number in an array
function findMax(arr1) {
  return Math.max(...arr1);
}