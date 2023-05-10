// // Default way creating array.
// const students = ["Student1", "Student2", "Student3"];
// // Spread operator in array.
// const classRoom = [...students];
// // classRoom = [...students, "Student4"];
// console.log(classRoom);


// students destructure

const students = ["Student1", "Student2", "Student3"];

// Dry syntax
let student1 = students[0];
let student2 = students[1];
let student3 = students[2];
console.log(student1);
console.log(student2);
console.log(student3);

// Better syntax
let [student4, student5, student6] = students;
console.log(student4);
console.log(student5);
console.log(student6);


const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);

// red, yellow

// //How to Swap Variables with Destructuring

// const edibles = ["food", "fruits"];

// let [positionOne, positionTwo] = edibles;
// [positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);  //Note that this method of swapping variables doesn't mutate the original array.


// //How to Mutate Arrays with Destructuring
// const edibles = ["food", "fruits"];

// [edibles[0], edibles[1]] = [edibles[1], edibles[0]];
// console.log(edibles);

// ["fruits", "food"]

// Store element in variable and create new array using remaining elements
let [student7, ...newStudents] = students;
console.log(student7);
console.log(newStudents);

// Skip element value when store array elements inside variables.
let [student8, , student9] = students;
console.log(student8);
console.log(student9);


//Usage
const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 3, name: 'Mike', age: 32 },
    { id: 4, name: 'Sarah', age: 20 }
  ];

  const [ { name: firstName } ] = users;

console.log(firstName); // Output: John
//Returning multiple values from a function: If a function needs to return multiple values, array destructuring can be
// used to return those values as an array and then extract them as separate variables when calling the function.

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers)); // Output: 6


  function getMinMax(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
  }
  
  const [min, max] = getMinMax([1, 2, 3, 4, 5]);
  
  console.log(min); // Output: 1
  console.log(max); // Output: 5