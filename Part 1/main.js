//  Q1. Create a variable of type string and try to add a number to it

let a="Puja Sharma"
let b= a + 6;
console.log(b);

// // Q2. Use type of operator to find the datatype of string in last question

console.log(typeof(b));

// // Q3 Create a const object in javascript. Can you change it to hold a number later?

const pi={
    pin:3.14,
    name: "Puja" 
}
// pi=9.2;[No we cannnot]
// console.log(pi)

// // Q4 Try to add a new key to the const object in Problem 3 were you able to do it?

pi['name']='AG'

console.log(pi)

// Q5 Write a JS program to create a word meaning dictionary of 5 words.

const dictionary={
    appreciate:"ackknowledge",
    Famous:"nown",
    Faous:"Knon",
    Fams:"Knn",
    Famo:"K"
}
console.log(dictionary["Faous"])

