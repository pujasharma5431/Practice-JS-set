
// Write a JS program to generate a random numbers and store it in a variable. The program the takes an input from the user to tell them whether the guess was correct, greater or lesser than the orginal number 

let num =Math.random()
let num2 = prompt("Enter the number between 1-100")
num2=Number.parseInt()
console.log(num)
if(num==num2){
    
    console.log(Winner)
}
if (num<num2) {
    console.log("It is less")
    
} else {
    console.log("Greater")
    
}