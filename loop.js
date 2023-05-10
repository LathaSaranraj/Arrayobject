// Loops in arrays
for(let i=1;i<100;i++){
  console.log(i);
}

//even numbers
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//reverse  order

for(let i=10;i>=1;i--)

//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <0);

const array = ["value1", "value2", "value3"];

// For loop
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

// While loop
let i = 0;
while (i < array.length) {
  const element = array[i];
  console.log(element);
  i++;
}

//do while loop 
let i = 1;
do {
  console.log(i);
  i++;
} while (i <0);


//even numbers
let num = 1;

do {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
} while (num <= 20);

let num = 1;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

//to get the values of array using loop
var fruits=["apple","mango","grapes","strawberry"];
//using for loop
for(let i=0;i<fruits.length;i++){
  //0;0<4;
  console.log(fruits[i]);
}
// For in loop  

for (const element in fruits) {
  
  console.log(element);  //here the o/p will be index
  console.log(fruits[element]);// here the o/p will be valueus
}

//forEach
fruits.forEach((element)=>{   //element index will give u the index
  console.log(element);
});

  //for in loop array
for (const element in array) {
  
  console.log(element);  //here the o/p will be index
  console.log(array[element]);// here the o/p will be valueus
}

// For of loop  in for loop it will present the value 

var colors=["blue","green","yellow"];

for (const color of colors) {
  console.log(color);   //o/p value1,value2,value3
}

for (const element of array) {
  console.log(element);   //o/p value1,value2,value3
}


//improvement of this is for each
const array = ["value1", "value2", "value3"];
array.forEach(function(element,elementIndex){   //element index will give u the index
  console.log(elementIndex,element)
});

// For in loop  object
const student={
  name:"Dhakshin",
  rollNumber:17,
  std:2,
  rank:1,
  subjects:["Maths","English"],

  }
  console.log(student['std']);
 for (const key in student ){
  
    console.log(key);
   // console.log(student[key]);
  }

  
//samething using arrow function
const array = ["value1", "value2", "value3"];
array.forEach((element,elementIndex)=>{   //element index will give u the index
  console.log(elementIndex,element)
});