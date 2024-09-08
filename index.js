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
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}