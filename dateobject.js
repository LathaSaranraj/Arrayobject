const datetoday=Date();
console.log(datetoday);
const datetodaynew= new Date();
console.log(datetodaynew);
console.log(typeof(datetoday));
console.log(typeof(datetodaynew));


datetodaynew.getDay()   //sun=>0,mon=1
console.log(datetoday.getFullYear());  //it will not work
//TO GET DATE, MONTH AND YEAR
const date = new Date();
const [month, date, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(date);
console.log(year);
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
savedDate=new Date("July 6 1996");
console.log(savedDate.getDate());


const datetodaynow=Date.now();  //returns the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch). This value represents the current date and time.
console.log(datetodaynow);
const datetodayparse=Date.parse();
console.log(datetodayparse);
const datetodayUTC=Date.UTC();
console.log(datetodayUTC);

 //SEVERAL WAYS TO CREATE DATE OBJECT
 const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
console.log(birthday3);
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
console.log(birthday4);
const birthday5 = new Date(628021800000); // passing epoch timestamp


//FORMAT OF TOSTRING METHODS

const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT
date.toJSON(); // 2020-05-12T23:50:21.817Z
date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM

console.log(new Date().toLocaleDateString("en-IN").split("/"));
let[month,date,year]=new Date().toLocaleDateString("en-IN").split("/");  //en-INDIA  this is array destructuring
console.log(month,date,year);

let[month,date,year]=new Date().toLocaleDateString("en-US").split("/");  //en-US
 
//INTERPRETATION OF TWO DIGIT YEAR  => problem y2k

let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)


// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)


//USING DATE OBJECT
const start = Date.now();   //11:30=> miliiseconds

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();   //12:30=>milliseconds
const elapsed = end - start;
 // elapsed time in milliseconds
 console.log(elapsed);


// Using built-in methods
const start = new Date();

// The event to time goes here:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds


// To test a function and get back its return
function printElapsedTime(testFn) {   //print
  const startTime = Date.now(); //16831114545
  const result = testFn();print
  const endTime = Date.now();///13682454487

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(print);
//example
function print() {
  console.log("Hello, "+ "!");
};
console.log(yourFunctionReturn);


