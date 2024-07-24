// if , if else , else-if 
// condition if or else
const prompt = require('prompt-sync')();

if(12>10)
{
    console.log("yes");
}
let age = prompt("Enter your age: ");
if(age>=18)
{
    console.log("Eligible for vote");
}
else{
    console.log("Not elgible");
}

let marks = prompt("Enter the marks: ");
if(marks>=90)
{
    console.log("A Grade");
}
else if(marks>=80 && marks<90)
{
    console.log("B Grade");
}
else if(marks>=70 && marks<80)
{
    console.log("C Grade");
}
else 
{
    console.log("Fail");
}