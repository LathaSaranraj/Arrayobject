//
const cart=[
    {
        id:1,
        item:"smart phones",
        quantity:3
    },
    {
        id:2,
        item:"normal phones",
        quantity:8
    },
    {
        id:3,
        item:"android phones",
        quantity:1
    }
];
  //Finding an element in object  in primitice includes
let result=cart.find(function(cartsitem){
return cartsitem.item=="android phones"
})
console.log(result);


//Find index
let result=cart.findIndex(function(cartsitem){    //if it is not found it will return undefined in script
    return cartsitem.item=="phones"
    })
    console.log(result);
    
//Arrow functions

// same can be written as
// function(params){             params=>{   }
//     logic
// }
//Find index
let result=cart.findIndex( (cartsitem) => 
     cartsitem.item =="smart phones"
)
    console.log(result);



    //combinig and extracting

    let  vegetables=[{item:"maggi"}];
let  fruits=["apple","banana"];
let order=vegetables.concat(fruits);
vegetables[0].item="noodles"

//sorting in object
/*This function compares the name property of a with the name property of b. If a.name is greater than b.name, it returns 1, which tells the sort() method to place a after b. If a.name is less than b.name, it returns -1, which tells the sort() method to place a before b. If the names are equal, it returns 0, which tells the sort() method to leave a and b in their current order.

When the sort() method receives this function as an argument, it uses it to compare the elements in the students array and rearranges them accordingly. It starts by comparing the first two elements, { id: 1, name: "Senthil" } and { id: 2, name: "Dhakshin" }. Since "Senthil" comes after "Dhakshin" alphabetically, the compare function returns 1, telling the sort() method to place { id: 1, name: "Senthil" } after { id: 2, name: "Dhakshin" }.

The sort() method then moves on to compare the next two elements, { id: 2, name: "Dhakshin" } and { id: 3, name: "Anbu" }. Since "Dhakshin" comes before "Anbu" alphabetically, the compare function returns -1, telling the sort() method to place { id: 2, name: "Dhakshin" } before { id: 3, name: "Anbu" }.

Finally, the sort() method compares the last two elements, { id: 1, name: "Senthil" } and { id: 3, name: "Anbu" }. Since "Senthil" comes after "Anbu" alphabetically, the compare function returns 1, telling the sort() method to place { id: 1, name: "Senthil" } after { id: 3, name: "Anbu" }.*/
const students=[
    {id:1,name:"Senthil"},//83
    {id:2,name:"Dhakshin"},//68
    {id:3,name:"Anbu"}//65
];
students.sort(function(a,b){  //Senthil,Dhakshin  83,68  2nd time ( Dhakshin ,Anbu )68,65
    nameA=a.name.toLowerCase();
    nameB=b.name.toLowerCase();//Senthil,Dhakshin    83,68
    if(a.name<b.name)       //  return -1 a should be sorted before b
    return -1;
    if(a.name>b.name)   //83>68  //Dhakshin,Senthil,Anbu
    return 1;     //  if a function returns 1, b should be sorted before a  =>
})
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


//Some method
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
  console.log(answer1);
  

  //Filter Method

    const answer1 = cart.filter((item) => item.price < 2000);
  console.log(answer1);
  

  //Find Method
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


  //map method
 
    


// create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// use map() to multiply each number by 2
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// log the new array
console.log(doubledNumbers);

//another example
people=[
  {
    id:1,
  firstname:"latha",
  lastname:"jeysri"
},
{
  id:2,
  firstname:"saran",
lastname:"raj"
},
];

let result=people.map(function(val)
{
  let fullname=[val.firstname+val.lastname].join(" ");
  let obj={id:val.id,fullname:fullname}
  return obj;
})
console.log(result);

  // javascript chaining methods
  let products=[
    {id:1,title:"android phone",cost:7500},
    {id:2,title:"gaming computer",cost:90500},
    {id:3,title:"headphone",cost:2400},
    ];

//sort it using lowestprice
let sortlow = products.sort(function(a,b){
  return a.cost-b.cost; //ascending
});

//sort it by title ascending
let sorttitle=sortlow.sort(function(a,b){
  if(a.title<b.title) return-1;
  if(a.title>b.title) return 1;
  return 1;
});
//filter products less tha 8000
let filter=sorttitle.filter(function(value){
  value.products<=8000;
});
//map it 
filter.map(function(val){    //android phone
  return val.title+" "+ val.cost
})

//you can chain by using dot

const shoppingCart=[
  {id:1,item:"organic milk",cost:45},
  {id:2,item:"bread",cost:30},
  {id:3,item:"maggi",cost:45},
];
shoppingCart.reduce(function(accumulator,currentval){
  return accumulator + currentval.cost;
},0);



//difference between sort,find v/s filter v/s map v/s reduce
const numbers=[34,54,65,12,78];  //4 will come after 34
let result=numbers.sort();
console.log(result);

let result2=numbers.find((value)=>{
  return value>50   //it will give u only the first result o/p 54 filter will overcome this

})
console.log(result2);
let result3=numbers.filter((value)=>{
  return value>50   //o/p 65,78
})
console.log(result3);
let result4=numbers.map((value)=>{
  // return value>50; //  will evaluate false,true
  // or else 
  // return "#"+value; 
  return value*value; //or else return value*value;
})
console.log(result4);
//reduce
numbers.reduce((acc,value)=>{
  return acc+value;  //u can also multiply aprev*current  it will give u single value whereas map will multiply the each element 
})
