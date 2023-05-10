//String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);
//String slice()

let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);


let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12,-6)
let part = text.slice(-12);

//String substr()
let str = "Apple, Banana, Kiwi";
let part=str.substr(7,6);
//Replace()
let text=”Please visit Microsoft”;
letNewtext=text.replace(“Microsoft”,”W3 schools”);


//To replace all matches, use a regular expression with a /g flag       
let text=”Please visit Microsoft and Microsoft”;   
            let newText = text.replace(/Microsoft/g,”Windows”)

            //ReplaceAll()
            let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

//toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
//toLowercase()
//concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
//trim()
let text1 = "     Hello World!     ";
let text2 = text1.trim();
//trimStart()
trimEnd()
padStart()
let text = "5";
= text.padStart(4,"x");
//charAt()
var text = "HELLO WORLD";
let newText = text.charAt(0);
//charCodeAt()
let text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charCodeAt(0);
//split()
let text = "a,b,c,d,e,f";
const myArray = text.split(",")
                          //strings are immutable

//Template litrals
var friend1="latha";
var friend2="soundarya";
sentence=`${friend1} is a friend of ${friend2}`;//string interpolation
sentencene=`the hello 
               world`;  //in string we need to use /n

console.log('"hello" world');
console.log(`"hello" world`);
console.log(`5'o clock`); // to print the same in string we need to use escape characters \'
// var sentence='   "Hello" "world"   ';
// var sentencenew="  5'oclock  ";
// console.log(sentence);
// console.log(sentencenew);

// var sentenceTemplate=` 'hello' "world" `;
// console.log(sentenceTemplate);     //use of backtick template literal


// var friend1="latha";
// var friend2="soundarya";
// sentence=`${friend1} is a friend of ${friend2}`;   // string interpolation //latha is friend of soundarya
// console.log(sentence);


var sentence= `Hello  
                     world`;
                      console.log(sentence);