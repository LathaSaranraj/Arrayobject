// Default way creating array.
const students = ["Student1", "Student2", "Student3"];
// Spread operator in array.
const classRoom = [...students];
// classRoom = [...students, "Student4"];
console.log(classRoom);


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

//How to Swap Variables with Destructuring

const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo);  //Note that this method of swapping variables doesn't mutate the original array.


//How to Mutate Arrays with Destructuring
const edibles = ["food", "fruits"];

[edibles[0], edibles[1]] = [edibles[1], edibles[0]];
console.log(edibles);

// ["fruits", "food"]

// Store element in variable and create new array using remaining elements
let [student7, ...newStudents] = students;
console.log(student7);
console.log(newStudents);

// Skip element value when store array elements inside variables.
let [student8, , student9] = students;
console.log(student8);
console.log(student9);
