//An operator in JavaScript is a symbol that performs an operation on one or more values (or variables), 
//and returns a result. There are several types of operators in JavaScript.


//ASSIGNMENT OPERATORS

let a = 5;
let b = 2;
//a=a+5;
a+=5;
console.log(a);



//ARITHMETIC OPERATORS
  //expression operator and operand
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);
console.log(++a);
console.log(a);
console.log(a++);
console.log(a);
console.log(a--);
console.log(a);


//COMPARISON OPERATOR
//- It's used in logical statements to determine equality or difference between variables or values.

// # Comparison Operators:
// == Equal to
// === Equal value and equal type
// != Not equal
// !== Not equal value and not equal type
// > Greater than
// < Less than
// >= Greater than equal to
// <= Less than equal to
  
var x=35;
var y=10;
console.log(x>40);
console.log(y>x);   

                    //example of  if else statement eligible for vote
console.log(x==35);
console.log(x!==35);

//TERNARY OPERATOR
var age=35;
var vote = age >18 ? "You are eligible" : "Not eligible for voting";
console.log(vote);


//LOGICAL OPERATOR
// && , ||
// AND Works
// True&&true=true
// True&&false=false
// False&&true=false
// False&&false=false
  
// OR works
// True||false=true
// False||true=true
// True||true=true
// False||false=false


var income=50000;
var creditRemark=10;
if(income>25000 && creditRemark==10){
console.log("you are eligible for loan")
}else{
    console.log("you are not eligible for loan");
}


if(income>25000 || creditRemark==10){
    console.log("you are eligible for loan")
    }else{
        console.log("you are not eligible for loan");
    }


    var income=50000;
var creditRemark=9;
if(income>25000 || creditRemark==10){
console.log("you are eligible for loan")
}else{
    console.log("you are not eligible for loan");
}

// Operator Precendence
// 1. First Priority to * and / Later + and –
// 2. In some case you have to do some certain operation first 
// Use() to cover the operands
(5+5)*10
//3.Same level of operator like + and – it will calculate from left to right
let c=5+5-10;
Console.log(c);
//4.Number+Number+string
let f=1
let g=2
let h="abc";
Console.log(f+g+h);  //it will sum the two value in last it will conver t from left to right
// 5.String+number+number 


//CONDITIONAL STATEMENTS  you can use conditional statements to execute different pieces of code based on certain conditions.
//Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.
// if else ,else if and switch   exapmle gmail or facebook
var age=35;
if(age>21){
    console.log("you are eligible for votion"); //single code of line statements no need of curly braces

}else{
    console.log("you are not eligible");
}

//else if 
let age = 25;

if (age < 18) {
  console.log("You are a minor.");
}
 else if (age >= 18 && age <= 60)
  {
  console.log("You are an adult.");
}
else {
  console.log("You are a senior citizen.");
}

//switch


let age=13;
switch (age) {
  case 13:
    console.log("You are in 7th std");
    break;
  case 14:
    console.log("You are in 8th std");
    break;
  case 15:
    console.log("You are in t9h std");
    break;
  case 16:
    console.log("You are in 10th std");
    break;
 
  default:
    console.log("Invalid ");
}


let grade = "A";

switch (grade) {
  case "A":
    console.log("Excellent job! You got an A.");
    break;
  case "B":
    console.log("Good job! You got a B.");
    break;
  case "C":
    console.log("You passed! You got a C.");
    break;
  case "D":
    console.log("You barely passed. You got a D.");
    break;
  case "F":
    console.log("Unfortunately, you failed. You got an F.");
    break;
  default:
    console.log("Invalid grade");
}



let paymentMethod = "credit card";

switch (paymentMethod) {
  case "credit card":
    console.log("Processing payment with credit card...");
    break;
  case "paypal":
    console.log("Redirecting to Paypal for payment...");
    break;
  case "bank transfer":
    console.log("Processing payment via bank transfer...");
    break;
  default:
    console.log("Invalid payment method");
}


