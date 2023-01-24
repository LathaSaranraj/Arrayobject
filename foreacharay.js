// For each method in array

const array = ["value1", "value2", "value3"];

// Create function which returns array's elements and index
function myFunction(element, index) {
  console.log(element);
  console.log(index);
}

for (let index = 0; index < array.length; index++) {
  myFunction(array[index], index);
}

// Using forEach() method will do same as above code
array.forEach(myFunction);

// forEach() take function as parameter
array.forEach(function (element,index) {
  console.log(element,index);
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

//Map Method