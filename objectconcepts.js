//Factory functions
function createPerson(name){    //factory functions camelcase myFirstname
  let person={    // or return
    fullName:"name",
    greeting:function(){                       //or greeting()
      let msg=`My name is ${this.name}`;
      console.log(msg);
    }
  };
  }
let person1=createPerson("anbu");
anbu.greeting();
let person2=createPerson("trisha");


//construction functions
function Person(name){   //Pascal ->MyFirstName
this.name=name;
this.greeting=function(){
  console.log(`My name is ${this.name}`);
}
}
let person=new Person("anbu");  //new keyword will create empty object  and automatically it map all the variables and fuctions into this
person.greeting();
//dynamic object
const person={
  name="Anbu";
}
person.age=24;
person.greeting=function(){
  }
  delete.person.greeting;  //you can dynamically create delete 
//constructor property
let name="anbu";  //new String("anbu")
let age=25;              //numberliterals->new Number()
let isAlive=true;          //Boolean Literals->new Boolean(true);
console.log(nama,age,isAlive);
  

//using new 
let name=new String("anbu");  //new String("anbu")
let age=new Number(25);              //numberliterals->new Number()
let isAlive=new Boolean(true);          //Boolean Literals->new Boolean(true);
console.log(nama,age,isAlive); // will return the value as well as property by using new

//functions are objects

function Person(name){   //Pascal ->MyFirstName
  this.name=name;
  this.greeting=function(){
    console.log(`My name is ${this.name}`);
  }
  }
console.log(person.length);
//another way of creating the above function
let Person2=new Function('name',`
this.name=name;
  this.greeting=function(){
    console.log(hello);
  }`)

  Person.call({},"trisha");
  another way const person=new Person("trisha");


  Person.apply({},["trisha","37"]); //array


  //Enumeratipng properties of an object
  const user= {
    name:"anbu",
    getFullName(){
      console.log( `my name is ${this.name}`);
    }
  }

  //to get key and key values
for(let key in user)
console.log(key,user[key]);

for(let key of Object.keys(user))   // object.keys will the get the value of that object and tranfer in arrays
console.log(key,user[key]);

for(let entry  of Object.entries(user))   // object.keys will the get the value of that object and tranfer in arrays
console.log(user[entry]); // it will give both key and value
 
if(name in user)
console.log("yes");



//three ways of copying object
let another={}
for(let key in user){
  another[key]=user[key];
  // it will work as another['name']=user['name']
}
//second way is object.assign
//third way is spread operator


//OBJECT CREATE METHOD
/* What is Object.create(); method ? 
-> In other programming languages when you want to create an object you need to create a class and then after you can create the object of that class. But in JavaScript you can actually create object as datatype. So don't have to create class. The "Object.create()" method will create object.
NOTE:
# Why object is known as object?
-> In simple terms you can think object is key and value pair that store data. But in OOPs there is object also. This object and OOPs object are the same object. Because in OOPs object store data in heap and stack. In heap store address and in stack store the value (object). Same thing happens in object it also store data in key and value form.
-> object
key: value
-> OOPs object
heap: stack (address: value)
-> object === OOPs object
-> key: value === heap: stack 
*/
const studentDetails = {
name: "Student1",
rollNumber: 1,
division: "A",
result: true,
attendance: function () {
console.log("Present");
},
};
/* 
NOTE:
-> You are accessing values from the "studentDetails" object and creating another "student1" object. 
-> You are creating a new object using the old object. 
*/
const student1 = Object.create(studentDetails);
console.log(student1.name);
console.log(student1.rollNumber);
console.log(student1.division);
/* 
NOTE:
-> You are creating a new "student2" object and overwriting all the values.
*/
const student2 = Object.create(studentDetails);
student2.name = "Student2";
student2.rollNumber = 2;
student2.division = "B";
student2.result = false;
student2.attendance = function () {
console.log("Absence");
};
console.log(student2.name);
console.log(student2.rollNumber);
console.log(student2.division);
console.log(student2.result);
console.log(student2.attendance());






//OBJECT CLONING SPREAD  OPERATOR AND OBJECT ASSIGN

// Topic: Object.assign()

/*
    # What is Object.assign()?
    - It is use to copying object and assign to another object.
    # Note
    - When we clone the object and assign it to another object after that if we made any changes to original object it doesn't effect to the cloned object.
*/

const object1 = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};
let another=Object.assign({age:24},object1); // if you want to include another variable
// Clone object using spread operator
const object2 = { ...object1 };
console.log(object2);

const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  sameKey: "sameValue1",
};

const object2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6",
  sameKey: "sameValue2",
};

/* 
    !NOTE:
    - When both objects has same key but values are different and you combine them together to make one object.
    - At that time even if the keys are same but value will be consider(taken) from the only last object.
    - Because even though both have same key but latest update value will be considered from the last object.    
*/

// Add both objects into the one new object
const object3 = { ...object1, ...object2 };
console.log(object3);

// Add both objects into the one new object and key value pair
const object4 = { ...object1, ...object2, key7: "value7" };

// When array is added into the object at that time array index will be key and element will be value
const array = [1, 2, 3];
const object5 = {
  ...array,
};
console.log(object5);   //end of spread operator

// Clone object using Object.assign()
const object3 = Object.assign({}, object1);
console.log(object3);

object1.name4 = "value4";
console.log(object1);


//OBJECT DESTRUCTURE

//SingleObjectDestructure
// Object Destructure

// Manually object destructure
const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const key1 = object1.key1;
const key2 = object1.key2;
const key3 = object1.key3;
console.log(key1);
console.log(key2);
console.log(key3);

// Easily object destructure
const object2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6",
};
const { key4, key5, key6 } = object2;
console.log(key4);
console.log(key5);
console.log(key6);

// Create new object from the existing object use spread operator
const { ...object3 } = object2;
console.log(object3);


// Nested Destructure

// Objects inside the array.
const array = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
];

// Taking objects from the array and storing in variables and each variable has one object
const [variable1, variable2] = array;
console.log(variable1);
console.log(variable2);

// Accessing specific key & value from the different objects.
const [{ key1 }, { key4 }] = array;
console.log(key1);
console.log(key4);

// Accessing specific key & value from the objects and assigning different variable name
const [{ key1: myVariable1 }, { key4: variable4 }] = array;
console.log(myVariable1);
console.log(variable4);

/* 
  NOTE:
  - When objects are inside the array and you are accessing different key and values from the different object.
  - It will give you the key and value according the index which are object stored.
  - Because all those object inside the array work as a element of the array.*/



  //OBJECT COMPUTED PROPERTIES
  // Object Computed Properties

const key1 = "key1";
const key2 = "key2";
const key3 = "key3";
const value1 = "Value1";
const value2 = "Value2";
const value3 = "Value3";

// Directly put variable name inside the object
const object = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};
console.log(object);

// Manually assignee key to object and then assign value
const object1 = {};
object1[key1] = value1;
object1[key2] = value2;
object1[key3] = value3;
console.log(object1);

//OBJECT ITERATION
// Object Iteration

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// For in loop in objects
for (const key in object) {
  console.log(key);
  console.log(object[key]);
  console.log(key, ":", object[key]);
}

// For of loop in objects
for (const key of Object.keys(object)) {
  console.log(key);
  console.log(object[key]);
  console.log(key, ":", object[key]);
}

// Object.keys() method will return object keys in array format
console.log(Object.keys(object));


//OPTIONAL CHAINING
// Topic: Optional chaining

/*
    # What is optional chaining?
    - We use dot operator for accessing value from object.
    - Sometime we need value from object which is does not exist yet but in future it will be there.
    - At that time you use dot operator to access the value it will give the error.
    - You need to use optional chaining "?." it will work same as dot operator but it return undefine if there is not object rather than giving the error.
*/

const object1 = {
  name1: "value1",
  name2: "value2",
};

console.log(object1.name1);
console.log(object1?.name3);