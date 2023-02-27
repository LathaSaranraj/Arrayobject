
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



