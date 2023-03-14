// <!-- Practice Set -->
// <!-- Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive -->


let age=prompt("Enter your age");
age=Number.parseInt(age)
if(age>=18){
    alert("You can drive")
}
else{
    alert("You cannot drive")
}

let age=prompt("Enter your age")
age=Number.parseInt(age);
const canDrive=(age)=>{
    age>=18;
}
if(canDrive(age)){
    alert("You can drive")
}
else{
    alert("You cannot drive")
}


// Q2. If Q1 use confirm to ask the user if he wants to see the prompt again


let age1=prompt("Enter your age");
age1=Number.parseInt(age1);
let runAgain=true;

while(runAgain){



const canDrive=(age1)=>{
return (age1>=18)
}


if(canDrive(age1)){
    alert("You can drive")
}
else{
    alert("You cannot drive")
}

runAgain=confirm("You want to run again")
}

// // Q3. Display error message if you enter age less than 18
// // Q2. If Q1 use confirm to ask the user if he wants to see the prompt again


let age2=prompt("Enter your age");
age2=Number.parseInt(age2);
let runAgain1=true;

while(runAgain1){



const canDrive1=(age1)=>{
return (age2>=18)
}


if(canDrive(age2)){
    alert("You can drive")
}
else{
    error("You cannot drive")
}

runAgain=confirm("You want to run again")
}


// Write a program to change the url to google.com if user enters a number greater thAN 4

let eage=prompt("Enter your age");
eage=Number.parseInt(eage);

if(eage>=18){
    alert("You can drive")
}
else{
    location.href="https://www.google.com/"
}

