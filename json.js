/*JSON stands for JavaScript Object Notation, which is a lightweight data format that is easy to read and write. JSON is often used for exchanging data between a server and a web application.

In JavaScript, JSON is represented as a string that can be parsed into a JavaScript object using the JSON.parse() method, or a JavaScript object that can be serialized into a JSON string using the JSON.stringify() method.

JSON syntax is similar to JavaScript object syntax, with a few key differences:

JSON property names must be enclosed in double quotes
JSON does not support functions or undefined values
JSON does not allow trailing commas in arrays or objects
*/


//json
{
    "name": "John",
    "age": 30,
    "city": "New York"
  }

  let json = '{"name": "John", "age": 30, "city": "New York"}';
let obj = JSON.parse(json);
console.log(obj.name);


let obj = 
{name: "John",
 age: 30,
  city: "New York"}; //obj into json

let json = JSON.stringify(obj);
console.log(json); // Output: {"name":"John","age":30,"city":"New York"}