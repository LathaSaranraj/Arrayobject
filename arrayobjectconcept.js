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
const students=[
    {id:1,name:"Senthil"},
    {id:2,name:"Dhakshin"},
    {id:3,name:"Anbu"}
];
students.sort(function(a,b)){
    nameA=a.name.toLowercase();
    nameB=b.name.toLowercase();
    if(a.name<b.name)
    return -1;
    if(a.name>b.name)
    return 1;
}
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
cart.map(function(val){
  return val.name;                    //u can also concat firstname and lastname;
})

people.map(function(val)
{
  let fullname=[val.firstname+val.lastname].join(" ");
  let obj={id:val.id,fullname:fullname}
  return obj;


  // javascript chaining methods
  let products=[
    {id:,title:"android phone",cost:7500},
    {id:2,title:"gaming computer",cost:90500},
    {id:3,title:"headphone",cost:2400},
  ];
}

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

numbers.find((value)=>{
  return value>50   //it will give u only the first result o/p 65  filter will overcome this

})
numbers.filter((value)=>{
  return value>50   //o/p 65,78
})

numbers.map((value)=>{
  return value>50; //  will evaluate false,true
  // or else 
  return "#"+value;
})
//reduce
numbers.reduce((acc,value){
  return acc+value;  //u can also multiply aprev*current  it will give u single value whereas map will multiply the each element 
})