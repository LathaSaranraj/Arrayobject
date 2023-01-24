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

// Using arrow function
const newArray2 = array.map((element) => {
    return element * element;
  });
  console.log(newArray2);
  
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
  const newArray3 = array1.map((object) => {
    return object.sameKey;
  });
  console.log(newArray3);

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

// Example: Find out which item in cart is less than 2000.
const cart = [
  {
    id: 1,
    name: "Phone",
    price: 1000,
  },
  {
    id: 2,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 6000,
  },
];
const answer1 = cart.some((item) => item.price < 2000);
console.log(answer1);// Topic: find(); method

/*
    # What is find method?
    - It takes call back function as parameter.
    - It takes element from the given array and find particular value according to the condition. As soon as it finds a value which satisfies the condition it will stop searching.
*/

// Syntax:
const array = ["123", "1234", "12345"];
const answer = array.find((string) => string.length === 4);
console.log(answer);

// Example: Find user which id number is 3.
const usersDetails = [
  {
    userId: 1,
    userName: "Batman",
  },
  {
    userId: 2,
    userName: "Superman",
  },
  {
    userId: 3,
    userName: "Flash",
  },
];
const answer1 = usersDetails.find((user) => user.userId === 3);
console.log(answer1.userName);

// Topic: fill(); method

/*
    # What is fill method?
    - It take custom value and replace element in array with custom value.
    - You can create empty array and fill the array with custom value.
    
    # How to use fill method?
    - It take direct custom value and fill the array with it.
    - It can take custom value and replace element with custom value for selected start and end index.
*/

// Syntax:
// Creating an array using the Array constructor and filling the array with custom value
const array = new Array(10).fill(10);
console.log(array);

// Adding custom value to select index
const array1 = [1, 2, 3, 4, 5];
const answer = array1.fill("*", 2, 4); // (custom value, start index, end index)
console.log(answer);


// Topic: every(); method

/*
    # What is every(); method?
    - It take call back function as parameter.
    - It checks condition for every single element in array. If the condition satisfy for every element then it will return true. If not then it will return false. 
*/

// Syntax:
const array = [2, 4, 6, 8, 10];
const answer = array.every((element) => element % 2 === 0);
console.log(answer);

// Example: Find out every item in cart is less than 30000.
const cart = [
  {
    id: 1,
    name: "Phone",
    price: 12000,
  },
  {
    id: 2,
    name: "Tablet",
    price: 15000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 29000,
  },
];

const answer1 = cart.every((item) => item.price < 30000);
console.log(answer1);

