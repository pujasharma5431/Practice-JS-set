//  Q1. Write a program to print the marks of a student in an object using for loop

let marks={
    Puja: 73,
    Arjun: 74,
    Prince: 62
}
for (i=0; i<Object.keys(marks).length; i++){
console.log(Object.keys(marks)[i]+ marks[Object.keys(marks)[i]])}