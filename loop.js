// Loops in arrays

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

// For in loop
for (const element in array) {
  
  console.log(element);  //here the o/p will be index
  console.log(array[element]);// here the o/p will be valueus
}

// For of loop  in for loop it will present the value 
for (const element of array) {
  console.log(element);   //o/p value1,value2,value3
}


//improvement of this is for each
const array = ["value1", "value2", "value3"];
array.forEach(function(element,elementIndex){   //element index will give u the index
  console.log(elementIndex,element)
});
//samething using arrow function
const array = ["value1", "value2", "value3"];
array.forEach((element,elementIndex)=>{   //element index will give u the index
  console.log(elementIndex,element)
});