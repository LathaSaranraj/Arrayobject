// FUNCTION
//In JavaScript, a function is a block of code that performs a specific task, and it can be defined and executed as many times as needed
var number1=10;
var number2=50;
var total=number1+number2;
console.log(total);
 var number4=889;
 var number5=900;

//Return Type
 function add(a,b){  //function declaration
return a+b;
 }
   let result=add(10,20);  //function calling
   console.log(result);
//Non return type
   let firstName="latha";
   let LastName="jeysri"
      function greetUser(firstName,LastName){
       console.log(firstName+LastName)
      }
   
      greetUser(firstName,LastName);
// Default Parameter

// Assign default value to a parameter
function sum(number1, number2 = 10) {
    return number1 + number2;
  }
  console.log(sum(1));
  

// When argument doesn't pass it will take value as a undefined.
function sum(number1, number2, number3) {
    return console.log(number1 + number2 + number3);
  }
  
  // Calling function
  sum(1, 2);
  
  // Printing function
  console.log(sum(1, 2));


  //function without name is anonymous function

  var greet = function(name) {
    console.log("Hello, " + name + "!");
  };
  //function with same name is overloading
  function greetUser();
  function greetUser(name);

  // ARROW  FUNCTION

// Arrow function

let greetUser=(firstName,LastName)=>{
  console.log(firstName+LastName)
 }
 greetUser("latha","jeysri");
 
const greet = () => {
    console.log("Hello, World!");
  };
  
  // For single parameter remove small bracket
  const greet1 = (name) => {
    return console.log(`Hello ${name}`);
  };
  
  // If function return in single line remove return keyword
  const greet2 = (studentName) => console.log(`Hello ${studentName}`);

  //function  hoisting
  //function is called before declaration  is the default behaviour of moving all the declarations at the top of scpoe before code execution

  // CALLBACK FUNCTION

// Function take other function as a parameter
function son(sonName) {
    console.log(`I am ${sonName}`);
  }
  
  function father(callback) {
    console.log(`I am father function`);
    callback("son function");
  }
  
  father(son)

  //FUNCTION EXPRESSION


// Storing function inside the variable     function hoisting will not work here
const myVariable = function (number1, number2) {
    return number1 + number2;
  };
  
  const answer = myVariable(1, 2);
  console.log(typeof answer);

  // FUNCTION HOISTING


  y=10;
  var y;
// Calling function above the function is declare
greet();

function greet() {
  return "Hello, World!";
}

// FUNCTION INSIDE FUNCTION

let name = "abc";

function father() {
  function son(number1, number2) {
    let answer = number1 + number2;
    return answer;
  }
  console.log(son(1, 2));
}

father();

// FUNCTION LEXICAL SCOPE

const name = "Human";

function grandFather() {
  //   const name = "Grand Father";
  console.log(name);

  function father() {
    // const name = "Father";
    console.log(name);

    function son() {
      //   const name = "Son";
      console.log(name);
    }
    son();
  }
  father();
}
grandFather();

// FUNCTION RETURNING FUNCTION

function father() {
    return function son(childName) {
      return console.log(`I am ${childName}`);
    };
  }
  
  const variable = father();
  variable("Child function");

  // FUNCTION SCOPE GLOBAL SCOPE

// let and const are block scope
function greet1() {
    if (true) {
      let name = "Human";
      console.log(name);
    }
    // return console.log(name);
  }
  greet1();
  
  function greet2() {
    if (true) {
      const name = "Human";
      console.log(name);
    }
    // return console.log(name);
  }
  greet2();
  
  // var is function scope
  function greet3() {
    if (true) {
      var name = "Human";
      console.log(name);
    }
    return console.log(name);
  }
  greet3();

  //function arguments opp of default parameter using for of
  function sumexp(){
    let total=0;   //default object i.e arguments which will store the value lenght
    for (let value of arguments){
      total+=value;

    }
    return total;
  }
  let result=sumexpenses(65,250,99,84,95,65)

  // PARAMETER DESrgumentsTRUCTURING

// Taking values from object and pass to function as parameters
const array1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  function father({ key1, key2, key3 }) {
    console.log(key1);
    console.log(key2);
    console.log(key3);
    return;
  }
  father(array1);

// REST PARAMETER

// Using spread operator in parameter we can store more than one argument as array.
function father(parameter1, parameter2, ...parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    return;
  }
  father("value1", "value2", "value3", "value4");
  
  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      
      total+= numbers[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3));