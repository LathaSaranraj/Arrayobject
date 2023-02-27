const datetoday=Date();
console.log(datetoday);
const datetodaynew= new Date();
console.log(datetodaynew);
console.log(typeof(datetoday));
console.log(typeof(datetodaynew));


const datetodaynow=Date.now();
console.log(datetodaynow);
const datetodayparse=Date.parse();
console.log(datetodayparse);
const datetodayUTC=Date.UTC();
console.log(datetodayUTC);
//TO GET DATE, MONTH AND YEAR
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(day);
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
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
 
//INTERPRETATION OF TWO DIGIT YEAR

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
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
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
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
Copy to Clipboard


