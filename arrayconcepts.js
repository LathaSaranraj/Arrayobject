//ARRAY
/*An array in JavaScript is a data structure that holds an ordered list of elements, which can be of any type (e.g. numbers, strings, objects, etc.).
Arrays are defined using square brackets [], with elements separated by commas.*/

let marks=[400,500,300];
let fruits= ["apple", "banana", "cherry"];

console.log("The first fruit in the array is: " + fruits[0]);
console.log("The second fruit in the array is: " + fruits[1]);
console.log("The third fruit in the array is: " + fruits[2]);

fruits[3] = "mango";


fruits.push(mango); //it an end
fruits.pop(); // it will remove the last one
fruits.unshift(grapes); first
fruits.shift(grapes); //removes first
fruits[3]="mango"; //adding or updating

fruits.slice()


//SPLICE METHOD
const arraysp = [1, 2, 3, 4, 5];
const deletedElement = arraysp.splice(1, 3); // (starting index, delete)
console.log(arraysp);
console.log(deletedElement);
arraysp.splice(1, 0, "Inserted element"); // (starting index, delete, insert custom value)
console.log(arraysp);
const arraynew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arraynew.splice(1, 5, "Inserted element");
console.log(arraynew);

//Finding element in array
let fruits= ["apple", "banana", "cherry","apple"];
console.log(fruits.indexOf("apple")); //if it is not found it will return -1
console.log(fruits.lastIndexOf("apple")); 

if(fruits.indexOf("red")!==-1)

if(fruits.includes("banana"))



//EMPTYING AN JVASCRIPT ARRAY

let numbers=[1,2,3,4,5];
numbers=[];  //solutin 1


numbers.length=0; //solution 2
 splice(0,numbers.length)  //solution 3


 while(numbers.length){   //solution 4
  numbers.pop();
 }
// For each method in array   displaying the elements of array
//1st method
let getList=[1,2,3];
for(let i=0;i<getList.length;i++){      
    console.log(getList[i]);   
     }
//2nd method
     let getList=[1,2,3];

     getList.forEach(element=>{
        console.log(element);
     });
//3rd method
getList.forEach((element,index)=> {
    console.log(element,index);
  });
// const array = ["value1", "value2", "value3"];

// // Create function which returns array's elements and index
// function myFunction(element, index) {
//   console.log(element);
//   console.log(index);
// }

// for (let index = 0; index < array.length; index++) {
//   myFunction(array[index], index);
// }

// // Using forEach() method will do same as above code
// array.forEach(myFunction);

// // forEach() take function as parameter
// array.forEach(function (element,index) {
//   console.log(element,index);
// });
   

//COMBINING ARRAYS

let  vegetables=["onion","tomato ","beans"];
let  fruits=["apple","banana"];
let order=vegetables.concat(fruits);

// updated version  spread operator

let order=[...vegetables,45,{studentName:"anbu",id:1},...fruits];
//extract
let recipe=vegetables.slice[0,3];


//joining and combining
vegetables.join()  //it will join all the variables in array
vegetables.join(" -");

//sorting 
const students=[3,8,1];
students.sort();  //ascending order


students.sort(function(a,b){
  return b-a;
})

students.reverse();



//Every method
let allAges=[24,32,45];
allAges.every(function(value,index,array){
console.log(value);
console.log(index);
console.log(array);
})

isAllowed=allAges.every(function(value){
  return value>18;
})

//Some Method

// Topic: some(); method

/*
    # What is some(); method?
    - It will take call back function as parameter.
    - It checks all the element in the array if one single element meet the condition it will return true. If not it will return false.
*/

// Syntax:
const array = [2, 3, 4, 5, 6];
const answer = array.some((element) => element % 2 === 0);
console.log(answer);
//another example
allAges.some(function(value,index,array){
  console.log(value);

  })
  
//FILTER METHOD

//function that filters out negative numbers

var negativenumbers=numbers.filter(checkNegative);    //Here numbers is an array and checknegative is function
function checkNegative(number){
    return number<0;
}

/*
    # What is find method?
    - It takes call back function as parameter.
    - It takes element from the given array and find particular value according to the condition. As soon as it finds a value which satisfies the condition it will stop searching.
*/

// Syntax:
const array = ["123", "1234", "12345"];
const answer = array.find((string) => string.length === 4);
console.log(answer);  //o/p will give u only the first occurence

// Syntax:  Find Index
const array = ["123", "1234", "12345"];
const answer = array.findIndex((string) => string.length === 4);
console.log(answer);  //o/p will give u only the first occurence



//map method
const array = [1, 2, 3];
const variable = function (element) {
    return element * element;
  };
const newArray = array.map(variable);
console.log(newArray);
/* 
    NOTE:
    - map() method return new array
    - map() method take callback function as a parameter 
    - When you pass a callback function as a parameter in map() method make sure it has return value.
*/
// reduce method
const donations=[10000,20000,30000,40000];
let totalDonations =donations.reduce(function(prevval,currentval){
  console.log("previous value",prevval);
  console.log("current value",currentval);
  return prevval+currentval;
});
// Using arrow function
array.forEach((element) => {
  console.log(element);
});

// Example
const array1 = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    sameKey: "same value",
  },
  {
    key4: "value4",
    key5: "value5",
    key6: "value6",
    sameKey: "same value",
  },
];

array1.forEach((object) => {
  console.log(object.sameKey);
});



/* What is iterable?
    - Object that can be iterate by for of loop.
    - Array and string are iterable.
    
    # What is Array like object?
    - Those object which has .length property.
    - We can access them using the index.
    - String is array like object.
    
    # Note
    - Object is not iterable.
*/

// Syntax
// String
const studentName = "Batman";
for(character of studentName){
    console.log(character);
}

// Array
const rollNumbers = [1,2,3,4,5];
for (number of rollNumbers){
    console.log(number);
}
