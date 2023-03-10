  
// Q1. Create an array of numbers and take input from the user to add numbers to this array


// let array=[1,2,3,4,5];
// let a= prompt("Enter a number");
// a=Number.parseInt(a);
// array.push(a);
// console.log(array);

// Q2. Keep adding numbers to the array in Q1 until 0 is added to the array


// let array=[1,2,3,4,5];
// let a;
// do{
//     a= prompt("Enter a number");
// a=Number.parseInt(a);
// array.push(a);
// console.log(array);

// }
// while(a!=0);



// Q3. filter for numbers divisible by 10 from a given array

// let num=[2,5,4,10,15];
// let num1=num.filter((values)=>{
//     return values%10 ==0;
// })
// console.log(num1)

// Q4. Create an array of square of  a given number

// let a=[2,3,4];
// let a1=a.map((s)=>{
//     return s*s
// })
// console.log(a1);


// Q5. Use reduce to  calculate factorial of a given number from an array of first n natural numbers[n being the number whose factrial needs to be calcualted]

let n=[1,2,3,4,5]
let n1=n.reduce((a1,a2)=>{
    return a1*a2

})
console.log(n1);