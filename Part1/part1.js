// HISTORY OF JS AND OTHER STUFFS:

// ES5, ES6 and more => ECMA script. (generallizes/standarizes the technologies)
// JS made in 1995 , first name 'Mocha' second name 'LiveScript' , later 'JavaScript'
// Java and JS are fully diffrent languages.
// Javascript introduced later in 1996 Internet Explorer
// Later JavaScript went to ECMA to stop the battle between it and Jscript and got the standarize meaning of a BROWSER providing functionallity to websites on the Web. 
// ECMA made rules for BROWSERS then.
// Later ES1,ES2...came but ES5 became popular and Javascript became famous.
// In 2015 - ES6 (came with big updates) became most popular and known as MODERN JavaScript we use no.
// From now JavaScript decided annual releaze so they called (ES7 = ES2017), (ES8 = ES2018)....
// JS is Backward Compatible = Say, 1994(old years) ka code aaj bhi kaam krega (basically old features are workable)
// JS is not Forward Compatible = New code purane Browser me nahi chalega.
// Babel: Transpiler ( Runs Modern JS on old browsers too), ES6 wala code bhi transpile krdeta to ES5..

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// COURSE START:



// (Ctrl + /) => Comment Out again do the same to Uncomment

// console.log("Hello");
// console.log("Hello World");  //can use (' , ", `) to print too.

 // 1) Variables: can store some information that can be used or changes later

// var firstName = "Suraj"; //declaring variable
// console.log(firstName); //prints the value present in the 'var' now

// firstName = "Ram"; //assigning new value to 'var' (var firstName = "Ram" bhi likh sakte the but why to write moew)
// console.log(firstName); //now prints "Ram"
// firstName and firstname are diffrent (2 variables are there so CASE-SENSITIVE) to prevent these "use strict" use hota ye var use krne pe majboor kardeta, will explain later



// 2) Naming of Variables:

// variable ke name ke START ya END me "number" nahi aaskata, 1Name or name1 invalid
// first_name ya _firstname (underscore ya $ can be used in names)
// spaces can't be used..
//usually start with small letters only..

// var _firstname ="sam";
// console.log(_firstname);

// beech me underscore lagana ( first_name) isse 'SNAKE CASE' writing kehte and firstName ko 'CAMEL CASE' writitng..



// 3) let keyword: variable define krta
// (var = let) dono use kar skte par use let must..

// let firstName = "Suraj Pratap" 
// let firstName = "Sam"  --> // this will run and update the Name if u remove 'let'.. but with 'let' if you compile it gives ERROR
// console.log(firstName);


// 4) Constants : once declared can't be changed..

// const pi = 3.14;
// pi = 3;    -->  // will give error
// console.log(pi);
//console.log(pi * 2)  --> // gives (3.14 * 2) = ans


// 5) String Indexing: 0,1,2,3,4,5..... // (last index = length - 1)  // (2nd last index = length -2)
// 'SPACES' bhi count hota length me

// let firstName = "Suraj";
// console.log(firstName[3]);  --> prints 'a' as at 4th index a is there
// console.log(firstName.length) --> prints '5' as those many alphabets

// console.log(firstName[firstName.length -1]); -->  // for finding last index of any STRING..  
//Here the code in '[firstName.length -1]' block of console.log gives the "Last Index" and then 'firstName[lastIndex]' gives the last 'character' as result..



// 6) Methods of STRINGS:

// a) trim() : removes spaces from string

// let firstName = "   fwufhw ";
// console.log(firstName.length)  --> gives 10 as spaces also there..

// let newString = firstName.trim();  --> trims both side , similarly trimEnd() and trimStart() there for specific trimming from each sides..
// Here 'firstName = firstName.trim()' can also be used just remove 'let' else ERROR..
// console.log(newString.length);  --> returns 6 as spaces character removed..

// b) toUpperCase() : 'a ko A' kardega

// let firstName = " ryan"
// console.log(firstName.toUpperCase()); --> gives 'RYAN'

// c) toLowerCase() : 'A ko a' kardega baaki similar process

// d) Slice() : Basically cuts and returns the STRING till a particular INDEX

// let firstName = "Angelina";
// let newString = firstName.slice(1,4); OR firstName = firstName.slice(1,4);
// console.log(newString) OR console.log(firstName); --> prints "nge" as it comes between INDEX 1 to 4 ..


// 7) Type of Operators - (typeof) function used: Tells ki konsa data type use k rrha user..

// (PRIMITIVE) data types: strings "sam" , number 3,4,5 , booleans, undefined, null, BigInt, Symbol..

// let age = 32;
// let firstName = "Suraj";

// console.log(typeof age); --> tells that i/p is "number"
// console.log(typeof firstName); --> tells that i/p is "String"
// console.log(typeof 3); --> "number" (can write directly also)



// 8) (STRING <---> NUMBER conversion)

// let age = 22;

// age = age + "";  --> // changes number to string
// console.log(typeof age); --> // o/p will be shown as STRING


// let myStr = + "SAM"; --> // String se pehle add (+) to chnage to number
// console.log(typeof myStr) --> // o/p shows a sNUMBER

//other way: (Important)

// let xd = "Suraj";
// xd = Number(xd); --> changes to number
// console.log(typeof xd);

// let age = 18;
// age = String(age); --> changes to string
// console.log(typeof age);



// 8) STRING CONCATENATION: 2 ya 2+ strings ko JODNA/ADD karna(+)


// let string1 = "suraj";
// let string2 = "pratap";

// let fullName = string1 + " " + string2; // suraj pratap
// console.log(fullName);

//NOTE: 

// let string1 = "34";
// let string2 = "12";

// let fullName = string1 + string2; // 3412 as both are strings defined above
// console.log(fullName);

// let string1 = "34";
// let string2 = "12";

// let fullStr = +string1 + +string2; --> // adding + ahead changes both to NUMBERS so the result is 34+12 = 46
// console.log(fullStr);




// 10) TEMPLATE STRING: use back-ticks (``) and ${} where u have to put an object rest type the text u wanna display

// let age = 22;
// let firstName = "Suraj";

// let aboutMe = "my name is " + firstName + " mu age is " + age;
// console.log(aboutMe); --> // prints my name is Suraj mu age is 22

//using Template:

// let aboutMe = `my name is ${firstName} and my age is ${age}`
// console.log(aboutMe) --> prints the same o/p as above




// 11) Undefined , Null , BigInt:

// . undefined

// let firstName;
// console.log(typeof firstName) --> returns undefined as no value assigned above..


// . null (important point isme #bug)

// let myVar = null;
// // console.log(myVar) --> gives null
// console.log(typeof null); // type is OBJECT jbaki Null hona tha ( this is a BUG , ERROR in JavaScript)


// . BigInt : stores ver big numbers, BigInt(); or other way
// number ke end me `n` lagando to BigInt say 34n, 12n etc


// let myNo = BigInt(237462984264982482923213432);
// console.log(myNo);


// 12) Booleans and Comaprison Operators:

// . booleans give either TRUE or False

// let num1 = 7;
// let num2 = 7;

// console.log(num1>num2); --> gives FALSE
// console.log(num1>=num2) --> gives TRUE as num1 = num2


// .  == or === : ( == checks only VALUE not DATA TYPE), while ( === checks both)

// let num1 = "7";
// let num2 = 7;

// console.log(num1 === num2); --> FALSE as === checks both
// console.log(num1 == num2); --> TRUE as  == checks only VALUE not DATA TYPE


// . != and !==

// let num1 = "7";
// let num2 = 7;

// console.log(num1 != num2) gives False instead of true same function like == and ===
// console.log(num1 !== num2); gives TRUE



// -----------------------------------------------------------------------------------------------------------------------------------

//LOOPS:-

// 13) IF - ELSE conditionals:


// let age = 12;

// if(age>18){
//     console.log("Hello world");
// }

// else{
//     console.log("bye");
// }


// let num = 14;

// if(num%2 ==0){
//     console.log("Hola");
// }
// else{
//     console.log("lola");
// }


// * FALSY - VALUES: (false, "" , null , undefiend 0)

// basically if and else me agar aise values use kroge initially to if wala loop nai chlega seedhe else wala loop chalke value dega..

// let myName; (undefined)
// let myName = null;
// let myName = "";
// let myName = 0;

// if(myName) {
//     console.log("hello");
// }
// else{
//     console.log("BKL")   --> gives BKL
// }


// (1 - FALSY VALUES) = TRUTHY VALUES (baaki sab truthy except above mentioned falsy)..


// 14) TERNARY OPERATORS:   >= ? "" : "

// let age = 12;
// let drink;

// if(age>=5) {
//     drink = " coffee ";
// }
// else{
//     drink="milk";
// }

// console.log(drink)

//use TERNARY operator istead
// let drink = age >=5 ? "coffee" : "milk"  --> // IF true then ? ke baad wala store hoga (coffee) agar false aaya then : ke baad wala store (milk)



// 15) AND(&&) - OR(||) operators

// let firstName = "suraj";
// let age = 32;

// if(firstName === "suraj" && age>=32){
//     console.log("Hello there"); --> // we get 'Hello there' as both conditions true.
// }
// else{
//     console.log("Bye");
// } 

// NOTE:  OR me 1 condition bhi TRUE to loop run krega but AND me 2no condition must.




// 16) NETSED If-Else:

// let winningNumber = 19;
// let userGuess = +prompt("Guess a Number") // --> PROMPT dunction takes INPUT from user in the Browser
// // console.log(typeof userGuess, userGuess) // --> returns (number 19 cuz + ahead of prompt) as o/p

// if(userGuess === winningNumber){
//     console.log("Your guess was correct");
// }
// else{  
//     if(userGuess < winningNumber){   // --> NESTING
//         console.log("too LOW");
//     }
//     else{
//         console.log("too HIGH");
//     }
// }



// 17) if, else if, else:

// let userInput = +prompt("Guess the Temperature")

// if(userInput < 0){
//     console.log("Very cold");
// }
// else if(userInput <= 20){
//     console.log("Cold");
// }
// else if(userInput <=25){
//     console.log("Moderate")
// }
// else{
//     console.log("Hot");
// }




// 18) Switch-Case statements:

// let day = 2;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tueday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }

// --> We added BREAK as 2 ke baad saare din print hojayenge as check nai krta SWITCH pr if u put break it will stop after day 2 and only TUESDAY printed





//DRY: DON'T REPEAT YOURSELF ( coding principle) so use LOOPS :)



// 19) WHILE Loop:  // i++ (increments by 1 value each time)..

// let i = 0;
// while (i<=9){
//     console.log(i++); --> 0,1,2,3,......9 printed
// }

//IMPORTANT:
//sum of first 10 number by WHILE loop

// let total = 0; // 1 + 2 + 3 + 4 ........+ 10 = 55
// let i = 0;

// while(i<=10){
//     total = total + i;
//     i++;
// }
// console.log(total); // --> output 55.




// 20) For Loop:  --> for(initialize, condition, increment)

// for(let i = 0; i<=9; i++){
//     console.log(i);   //> 0,1,2,3.....9
// }

//[i] for-loop ke andar so console uska andar dena , total bahar so console bahar..
// let total = 0;
// for(let i = 0; i<=10; i++){
//     total = total + i;
// }
// console.log(total); 

// break-keyword: stops the loop at a given condition and jumps out..





// 21) do-While loop: --> First time if condition `WRONG` then also it will RUN..


// let i = 10;
// while(i<=9){               --> // WHILE will give error as i>9 = 10
//     console.log(i);
//     i++;
// }

//do while prints first value though

// let i = 10;
// do{
//     console.log(i);     //  --> Prints 10 and Loop Breaks
//     i++;
// }while(i<=9);


// -------------------------------------------------------------------------------------------------------------------


///ARRAYS:-

// 22) ARRAYS : arrays are `REFERENCE` DATA-TYPES i.e (OBJECTS).They are Mutable (can be changed unlike strings(primitive data-types)) 

//ordered(INDEX) collection of items

// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// let numbers = [1,2,3,4,5];
// console.log(fruits); --> returs  ["Apple" , "Banana", "Guava", "Grapes"];
// console.log(fruits[1]); --> Banana

//Array me koi bhi Data-Type store kar sakte hai (floating, string,null,number,undefined etc)

// let mixed = [1, 3.4, null, undefined, "Suraj"]
// console.log(mixed);


//updating array:
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// fruits[2] = "Pineapple";  // --> updates 2nd index and adds pienapple to guava in the array
// console.log(fruits);


//Type Checking:
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// console.log(typeof fruits);   

// --> console returms as `object` but ye general way as OBJECT js me bht hote isse ye nai pata chl rha ki ye array hai ya nahi so use 
// "Array.isArray method" instead

// console.log(Array.isArray(fruits)); // --> returns true that means it's array






// 23) Array push-pop and Array shift-unshift: 
//push-pop are FASTER method as ye peeche se add/remove krta jabki shift-unshift aage se so puri array ki MEMORY read and yaad krni padti use


//. Push-method : adds new elemnt to LAST of an Array, thus changing length of array.
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// fruits.push("Litchi");
// console.log(fruits);

//. Pop-method: removes LAST element of an Array, thus changing length of array.
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// fruits.pop();
// console.log(fruits);  // --> Grapes removed from new array now

// let popped = fruits.pop(); // -> here, popped elemnt stored in variable and returns only the popped item if called the variable..
// console.log(popped);


//. Unshift: adds in the START of an array.
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// fruits.unshift("Litchi");
// fruits.unshift("Mango");
// console.log(fruits); // -->  o/p is ['Mango','Litchi', 'Apple', 'Banana', 'Guava', 'Grapes']


//. Shift: removes from the START of an array.
// let fruits = ["Apple" , "Banana", "Guava", "Grapes"];
// fruits.shift("Apple");
// fruits.shift("Guava");
// console.log(fruits); // --> o/p is ['Guava', 'Grapes']





// 23) Primitve VS Reference Data-Types:

//  let array1= ["item1", "item2"];
//  let array2 = array1;
//  console.log("array1", array1);
//  console.log("array2", array2);
//  array1.push("item3"); 
//  console.log("array1", array1);
//  console.log("array2", array2); // --> item 3 will be added to both array 1 and array 2 while if it was any PRIMITIVE data type bas 1 me hi add hota dono me nai



// Explanation:

// Primitive data-types are stored in "STACK memory" , isme num1 and num2 dono ko alag jagah milegi so if num1 changed to usse num2 ko koi farq/change nahi padega.
// Reference data-types are stored in "HEAP memory" , isme dono ke POINTERS ka address same way me store hojayega as (array2 = array1 as defiend in the code above) so num1 address = num2 address so ek update hoga to dusra v hojayega.



// 24) Cloning an ARRAY:

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2);    // --> TRUE



// let array1 = ["item1", "item2"];
// There are 3 methods to clone: a) slice b) concat c) spread operator

//a) let array2 = array1.slice(0); // --> slice method
//b) let array2 = [].concat(array1); // --> array1 elemnts pushed in empty array []
//c) let array2 = [...array1];  // --> spread operator
// console.log(array1===array2);  // --> shows FALSE thus cloned


// Cloning and Adding 2 elements simultaneously.
// let array2 = [].concat(array1,["item3", "item4"]);




// 25) For loop in Arrays:

// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i = 0; i<=9; i++){
//     console.log(i);
// }

// console.log(fruits.length);   --> 4
// console.log(fruits[fruits.length-1])   // --> on 3rd index Banana

// let fruits2 = [];  // --> empty array defined

// for(let i = 0; i<=fruits.length; i++){
   // console.log(i)   //  ---> prints 0,1,2,3 index  
  //  console.log(fruits[i]);    //  ---> prints each elements in the array      
  //  fruits2.push(fruits[i]); // --> pushing in another Array                     
// }

// console.log(fruits2); // --> prints the fruits array





// 26) Using Const for Creating Array:

// const fruits = ["apple", "mango", "grapes", "banana"];
// fruits.push("lemon");   // --> lemon will be added in the array instead of being const present.
// console.log(fruits);

// yaha const hai fir bhi add hogya as HEAP memory me stored data so address same hi reh rha change nai ho rha that'swhy push , pop methods work with CONST
// if `fruits = [""]` ye kra hota to address bhi change hojata isliye nai chklta ye method with CONST hn pr let use krte to ye bhi chal jata



// 27) While loop in Array:


// const fruits = ["apple", "mango", "grapes", "banana"];

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);      //--> prints the array
//     i++;
// }





// 28) `for of` loop in Array:

// const fruits = ["apple", "mango", "grapes", "banana"];

// for(let fruit of fruits){
//     console.log(fruit);   // --> apple, mango, grapes, banana
// }




// 29) `for in` loop in Array:

// const fruits = ["apple", "mango", "grapes", "banana"];

// for(let index in fruits){
//     console.log(index);   // --> 0, 1 ,2 3
//     console.log(fruits[index]);  // --> apple, mango, grapes, banana
// }





// 30) ARRAY DESTRUCTURING:

// const myArray = ["value1", "value2", "value3", "value4"];

// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1 is :", myvar1);  // --> value1
// console.log("value of myvar2 is :", myvar2);  // --> value2
// console.log(myNewArray);  // --> ["value3", "value4"] prints remaining elemnts into array via spread operator.





// 31) OBJECTS: reference data-type

// arrays are good but not suffiecent for real world DATA
// objects store key-value pairs i.e { name: "Suraj" } also known as Object literal
// objects don't have INDEX
// {} braces used here instead of []
// Key,  STRING data type me hi hoti JavaScript me so jab data access krow to "" lagana na bhulna.

// How to create objects?

// const person = {name:"Suraj", age:22};
// console.log(person)    // --> {name: 'Suraj', age: 22}


// How to access data?

// (. notation method)
// const person = {name:"Suraj", age:22};
// console.log(person.name); // --> Suraj
// console.log(person.age); // --> 22

//other method: ([] notation)
// console.log(person["name"])// --> Suraj
// console.log(person["age"])// --> 22

// object ke andar arrays bhi store kar skte:

// const person = {
//     name:"Suraj",
//     age:19,
//     hobbies: ["webdev","youtube"]
// }

// console.log(person) // --> gives {name:"Suraj",age:19,hobbies: ["webdev","youtube"]}
// console.log(person.hobbies);  // -->  ['webdev', 'youtube']
// console.log(person.name);  // --> Suraj
// console.log(person.age); // --> 19


// adding key-value pair on an Obejct:

// (. notation method)
// person.gender = "male"; // --> isse person object me key-value (gender-male) add hojayega

// other method: ([] notation)
// person["gender"] = "male";
// console.log(person);





// 32) Difference between . and [] methods in Object:

// If KEY 2 words ya zada ki ho to use STRING notation there and access by only []..KEY


// const key = "email"; // --> used at last

// const person = {
//     name: "Suraj",
//     age: 19,
//     "person hobbies": ["Sleeping", "videos"]
// }

// console.log(person["person hobbies"]); // --> ['Sleeping', 'videos']

// //adding vakue from a variable as a KEY in object:

// person[key] = "suraj@gmail.com";
// console.log(person);   // --> name: 'Suraj', age: 19, person hobbies: Array(2), email: 'suraj@gmail.com'}





// 33) Iterating in Objects:

// const person = {
//     name: "Suraj",
//     age: 19,
//     "person hobbies": ["Sleeping", "videos"]
// }

// for in loop:
// for(let key in person){
//     console.log(person["key"]);   // --> name , age , person hobbies
//     console.log(person[key]);   // --> Suraj, 19, ["Sleeping", "videos"]
//     console.log(key, ":" ,person[key]);  // --> prints both key-value pairs
// }


//Object.keys method:

// console.log(Object.keys(person));  // --> name , age , person hobbies

// for(let key of Object.keys(person)){
//     console.log(person[key]);  // --> Suraj, 19, ["Sleeping", "videos"]
// }




// 34) Computed Properties:

// Q)
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // Soln:
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);  // --> Result: {objkey1: 'myvalue1', objkey2: 'myvalue2'}






// 35) Spread Operator:

// In case of ARRAYS:

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = [...array1, ...array2];
// console.log(newArray); // --> [1, 2, 3, 4, 5, 6]

// Trick: (but write as STRING only to spread as strings are ITERABLE)..

// const newArray = [..."123456789"];
// console.log(newArray); // -->  spreads as a single element ['1', '2', '3', '4', '5', '6', '7', '8', '9']




// In case of OBJECTS:

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4"
// };


//Overriding happens: jo value last me aayega wo hi print hoga if there are 2 same `keys` in an object, first time ...obj2 pehle to valueUnique printed pr next time array me ...obj1 pehle to value1 printed in the final output.

// const newObject = {...obj1, ...obj2} // --> {key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4'}
// const newObject = {...obj2, ...obj1} // --> {key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2'}
// console.log(newObject);

// adding a new key: 
// const newObject = {...obj1, ...obj2, key69: "value69"} 

//spreading,  here it gives index position too..
// const newArray = {..."abcdefghijklmnop"}
// console.log(newArray);        // --> {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p'}
// const newArray = {...["item1", "item2", "item3"] }; 
// console.log(newArray);  // --> {0: 'item1', 1: 'item2', 2: 'item3'}





// 36) OBJECT DESTRUCTURING:


// const  band = {
//     bandName:"SANAM",
//     famousSong: "Main Hoon",
//     year: 2001,
//     anotherSong: "Sanam Mennu"
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);  // -- SANAM Main Hoon

//shortcut way to write this:

// const {bandName, famousSong, ...restProps} = band;
// console.log(bandName, famousSong);  // --> SANAM Main Hoon

// console.log(restProps); // --> {year: 2001, anotherSong: 'Sanam Mennu'}

//restProps me jo bachi hui key-value pairs wo store hojaynegi




// 37) Objects inside Array:

// const users = [
//     {uderId: 1,firstName: 'Suraj', gender: 'male'},
//     {uderId: 2,firstName: 'Shraddha', gender: 'female'},
//     {uderId: 2,firstName: 'Mohit', gender: 'male'},
// ]

// for(let user of users){
//     console.log(user); 
// }




// 38) Nested Destructuring:

// const users = [
//     {userId: 1,firstName: 'Suraj', gender: 'male'},
//     {userId: 2,firstName: 'Shraddha', gender: 'female'},
//     {userId: 2,firstName: 'Mohit', gender: 'male'},
// ]

// const [user1, user2, user3] = users;
// console.log(user1);   // --> {uderId: 1, firstName: 'Suraj', gender: 'male'}

// if user1,user3 object ke andar se destruct krna and user 2 chor dena (use , for that):
// const [{firstName}, , {gender}] = users;
// console.log(firstName);  --> Suraj
// console.log(gender);     --> male

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//FUNCTIONS:  JS Function = [Function + Object]


// 39) Function Declaration:

// function sayHi(){
//     console.log("Hello World.....");
// }
// sayHi();        // function call method  //  --> It will print Hello World


// function addItem(){
//     console.log(3+5);
// }

// addItem();  // --> 8


//via return method:

// function addItem(){
//     return 3+4;
// }

// console.log(addItem());  // --> 7


// Generallized/Reusable FUNCTIONS:

// function sumOf(num1, num2){
//     return num1+num2;
// }

// console.log(sumOf(5,6));  // --> returns 5+6 = 11
// console.log(sumOf(1,8));  // --> returns 1+8 = 9
// console.log(sumOf(4));  // --> NAN as 1 no missing..



// odd or even function:

// function isEven(number){
//     if(number % 2 ==0){
//         return true;
//     }
//     else{
//         return false;
//     }

//    tip: bina else ke bhi seedhe return false likh skte....
// }

// console.log(isEven(3));  // --> false as 3 is odd.  
// console.log(isEven(2)); // --> true as 2 is even.


// returns character on given index
// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("abc"));   // --> "a"

//Qn
// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray = [32,4,5,54,2]
// console.log(findTarget(myArray, 2)); // --> gives 4




// 40) Function Expression:

// basically ek VARIABLE me `store/assign` kardena function ko aur function likhte time fir function name nai likhna as wo already variable me decided..

// const sing = function(){
//     console.log("Hello there.....");
//  }
// sing();





// 41) Arrow Functions:

//normal function declaration method:

// const singHbd = function(){
//     console.log("Happy Birthday...");
// }


//using `arrow function` for the same:

// const singHappy = () => {
//     console.log("Happy Birthday..");
// }

// singHappy();


// const sumOfThree = (num1, num2, num3) => {
//     return num1 + num2 + num3;
// }

// console.log(sumOfThree(3, 4, 5)); // --> 12


// const isEven = (num) => {
//     if(num % 2 === 0){
//         return true;
//     }

//     return false;
// }

// console.log(isEven(7));  // --> 7 odd so ans = `false`





// 42) Hoisting: 

// Javascript me `function declaration` se pehle bhi agar call krdiya function to response aajata. only in JS thsi happend, par ye sirf function declaration me hoga function expression me nahi.

// hello();

// function hello(){
//   console.log("Hello World");  // --> Hello World printed
// }


// hello();
// const hello = function(){
//   console.log("Hello World");   // error as it's function expression so HOISTING invalid here..
// }






// 43) Function inside Functions: jo function andar hai uska call andar hi krna hota hai tb run krega..

// const app = () => {

//   const myFunc = () => {
//     console.log("Hello from myFunc")
//   }
  
//   const addTwo = (num1, num2) => {
//     return num1 + num2;
//   }

//     console.log("inside app")
//     myFunc();    // --> Hello from myFunc
//     console.log(addTwo(4,5));  // --> 9
// }

// app();   //  --> inside app





// 44) Lexical Scoping:


// function myApp(){
//   const myVar = "value1";

//   function myFunc(){

//     const myVar = "value23";
//     console.log("inside myFunc", myVar);
//   }

//   const myFunc2 = () => {

//   }

//   const myFunc3 = function(){

//   }
//   console.log(myVar); // --> value1
//   myFunc();  // --> inside myFunc value23

// //  NOTE: if myFunc wala (myVar) nahi defined hota to upar wala (myVar = value1) le leta JS as it follows `lexical environment` (region jaha pe defined ho value jo ki `myApp function` hai is case me) so uske andar se myVar ka value jaha milega wo le lega JS.
// // If maan lo const myVar = value 1, myApp function ke bhi andar nai pr global scope (codebase me pehle defined ya kahi present, or say jaha pe myApp defined is case me ) tb bhi if call kroge to wo value print krdega uska if myFunc me already defiend nai myVar

// }

// myApp();




// 45) `Block Scoping` and `Function Scoping`: // JS  me block aise hote { ..... } , jo bhi 'curly braces' ke andar ho wo BLOCK..

//LET AND CONST --> BLOCK SCOPE // VAR --> FUNCTION SCOPE (pure function me kahi bhi access kar skte isko)

// {
//   let firstName = "Suraj Pratap";
//   console.log(firstName); // --> Suraj Pratap
// }

// console.log(firstName);  // --> uncaught ref error , as agar kisi bhi Block ke andar LET/CONST usa krke variable banaya to usko aap usi block ke andar use kar skte ho bahar nai use kr skte..


// {
//   var firstName = "Sam";
// }
// console.log(firstName); // --> VAR is function scope to ye Block ke bahar bhi call kardeta..


//example:

// if(true){
//   var firstName = "Suraj";
//   let myName = "Suraj";
// }

// console.log(firstName); // --> Suraj, true as VAR is function scope
// console.log(myName); // --> error as LET is Block scope


// function myApp(){
//   if(true){
//     var firstName = "Suraj";
//     console.log(firstName);  // --> Suraj
//   }
//   if(true){
//     consolelog(firstName);  // --> Suraj
//   }
//   console.log(firstName);  //  --> Suraj
// }

// myApp(); --> VAR ko function me har jgh access kar skte as it is FUNCTION SCOPE..



// 46) Default Parameters:

// function addTwo(a, b){
//   if(typeof b === "undefined"){   //--> earliner ES5 method
//     b = 1;
//   }
//   return a + b;
// }


//ES6 method , define b value with function itself:

// function addTwo(a, b=0){
//   return a+b;
// }

// const ans = addTwo(4, ); // --> returns 4
// console.log(ans);






// 47) Rest parameters:   (...c)

// function myFunc(a,b,...c){

//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);

// }

// myFunc(3,4,7);  // --> prints a is 3, b is 4, c is 7
// myFunc(3,4,7,5,9,3,1); // a is 3, b is 4, and baaki jo bach gaye wo ARRAY banke c me chle jayenge, c is 7,5,9,3,1



// function addAll(...numbers){
//   let total = 0;

//   for(let number of numbers){
//     total = total + number;
//   }
//   return total;

// }
// console.log(addAll(1,2,3,4,5));  // --> returns sum = 15





// 48) Parameter Destructuring: It's used in React.js very much

// const person = {
//   firstName: "Suraj",
//   gender: "Male"
// };

// function printDetials(obj){
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }

//using Destructuring:

// function printDetials({firstName, gender}){
//   console.log(firstName);
//   console.log(gender);
// }

// printDetials(person);   // --> Suraj, Male




// HIGHER - ORDER FUNCTIONS:

// 49) CallBack Function: 1 function me dusra function as a INPUT accept kar ke call kar skte hai isko keht ehai callback function..


// function myFunc2(name){
//  console.log("inside my func 2");
//  console.log(`your name is ${name}`);
// };

// function myFunc(callback){
// console.log("Hello there....");
//   callback("Suraj");
// };

// myFunc(myFunc2);   // --> myFunc me myFunc2 as a Input accept karke call krdiya

// outpput:  Hello there...., inside my func 2, your name is Suraj.





// 50) Function returning Function:


// function myFunc(){

//   function hello(){
//     return "Hello World"
//   }
//   return hello;
// }

// const ans = myFunc();
// console.log(ans());



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// IMPORTANT METHODS OF ARRAY:

//forEach
//map
//filter
//reduce


// 51) forEach method:


// const numbers = [1,3,7,9];

// function solve(number, index){
//     console.log(index);
//     console.log(number * 2);
// }

// numbers.forEach(solve);   // --> 0,2,  1,6,  2,14,   3,18

//forEach is kind of `loop` and does job like `callback function` at times, takes input as a function itself
// --> ye khud hi (number , index) sb elemnts n array keliye define kardega..

// const numbers = [1,3,7,9];
// numbers.forEach(function(number){
//   console.log(number * 4);   // --> 4 , 12, 28, 36
// })


//forEach() example:
// const users = [

//     {firstName: "SURAJ" , age: 19},
//     {firstName: "JIYA" , age: 21},
//     {firstName: "JOY" , age: 25},
//     {firstName: "RAM" , age: 32}

// ]

// forEach ke andar hi ek Func banake call krwado

// users.forEach(function(user){
//     console.log(user.firstName); // --> prints all 4 names
// });

//forEach by Arrow functions use
// users.forEach((user, index)=> {
//   console.log(user.firstName, index);  // --> SURAJ 0, ...
// })





// 52) map() method: (Very Important)

//MAP will always make a `New Array`.. so store it in a  `variable` before calling..
//ye bhi input as a Callback function hi lega..
//MAP me function ke andar use return not console.log

// const numbers = [3,4,2,1,9];

// const square = function(number){
//   return number * number;
// }

// const squareNumber = numbers.map(square); //storing in a new array
// console.log(squareNumber);  // --> [ 9, 16, 4, 1, 81]



// const users = [

//     {firstName: "SURAJ" , age: 19},
//     {firstName: "JIYA" , age: 21},
//     {firstName: "JOY" , age: 25},
//     {firstName: "RAM" , age: 32}

// ]

// const userNames = users.map((user) => {
//       return user.firstName;
// });

// console.log(userNames); // --> ['SURAJ', 'JIYA', 'JOY', 'RAM']





// 53) filter() method:  alwasy returns in Boolean (true or false)..

// const numbers = [1,4,5,6,3];

// const isEven = (number) => {
//       return number % 2 === 0;
// } 

// const even = numbers.filter(isEven);
// console.log(even);   // --> [4, 6]




// 54) reduce() method:

// const numbers = [1,3,9,4,7];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);    // --> gives 24

//explanation:

//accumulator ,    currentValue ,        return

//   1                  3                   4
//   4                  9                   13
//   13                 4                   17
//   17                 7                   21    --> final o/p



// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)         --> // yaha pe inital value define kar skte jaise yaha pe initally 0 value stored totalPrice ka...

// console.log(totalAmount);

// total price      currentValue         return 
// 0                {obj}                12000
// 12000            22000                34000
// 34000            15000                49000





// 54) sort() method:


// This method changes the Initial Array
// sorting: arranging given data in either ascending or descending orders

// const numbers = [5,9,1200,410,3000];
// numbers.sort();
// console.log(numbers);  // --> will give wierd array result

// This happens because JS isko as a STRING smjh ke sort kar rha, and un string ke corresponding jo ASCII values hai wo find karke ek new array bana rha then us array ko SORT kar de rha finally, so o/p real descending/ascending se alag mil rha as sorting ASCII ke according..

// const numbers = [5,9,1200,410,3000];
// ["5", "9", "1200", "410", "3000"]; // --> sorted as a STRING
// [53, 57, 49, 52, 51]; // --> new array oncorresponding ASCII values. NOTE: 1400 number to iska ASCII bas first number ko dekh hi lena jaise 1 ka ASCII = 49 then 1400 ka ASCII = 49 too.

// [1200,3000,410,5,9] // --> Ascending sort o/p based on ASCII values


// const userNames = ["Suraj", "Riya", "Shreya", "Anuj"];
// userNames.sort();
// console.log(userNames);  // -->  ['Anuj', 'Riya', 'Shreya', 'Suraj'] based on alphabets , yaha pe sai sorting hui.. 

// const userNames = ["Suraj", "Riya", "Shreya", "anuj"];
// console.log(userNames.sort()); // -->  ['Riya', 'Shreya', 'Suraj', 'anuj'] yaha "anuj" last me as CAPITAL LETTERS are sorted first as ASCII (65 -) se start while SMALL LETTERS ka ASCII starts from(97 -)



// Reaching expected O/P: method smjhna zarrori nai bas yaad rkho (a-b , b-a)

// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b) => {     // --> Ascending Sort Method (a-b):- say 1200, 410 // a-b = 790 // `a-b --> + (>0)` // then put 410,1200 OR (b, a) .. order and if // `(a-b) --> - (<0)` then follow (a, b) order... 1200, 410
//   return a-b;              // --> Descending Sort Method (b-a)..
// })

// console.log(numbers);  // --> [5, 9, 410, 1200, 3000] gives correct O/P..

// price lowToHigh HighToLow 
// const products = [
//   {productId: 1, produceName: "p1",price: 300 },
//   {productId: 2, produceName: "p2",price: 3000 },
//   {productId: 3, produceName: "p3",price: 200 },
//   {productId: 4, produceName: "p4",price: 8000 },
//   {productId: 5, produceName: "p5",price: 500 },
// ]

//  lowToHigh

// const lowToHigh = products.slice(0).sort((a,b)=>{
//   return a.price-b.price
// });

//  highToLow

// const highToLow = products.slice(0).sort((a,b)=>{
//   return b.price-a.price;
// });

// console.log(products);





// 55) find() method:


// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//   return string.length === 3;
// };

// console.log(myArray.find(isLength3));  // --> `cat` as it's length is 3 and sabse pehle aata ye l = 3 me as a string so dog print nai hua.. 


// const users = [

//   {userId: 1, userName: "Suraj"},
//   {userId: 2, userName: "Harshit"},
//   {userId: 3, userName: "Neha"},
//   {userId: 4, userName: "Shruti"},
//   {userId: 5, userName: "Sanya"}

// ];


// console.log(users.find((user)=> user.userId === 3)); // --> {userId: 3, userName: 'Neha'}






// 56) every() method: ye `TRUE` tb hi hota jab array me saare number condition satisfy karte ek bhi nai kiya to `FALSE`

// const numbers = [2,4,6,8,10];

// numbers.every((number) => number % 2 === 0);
// console.log(numbers);  // --> [2, 4, 6, 8, 10] all leave reaminder 0 when / by 2 thus even


// const userCart = [
//   {productId: 1, produceName: "p1",price: 300 },
//   {productId: 2, produceName: "p2",price: 3000 },
//   {productId: 3, produceName: "p3",price: 200 },
//   {productId: 4, produceName: "p4",price: 8000 },
//   {productId: 5, produceName: "p5",price: 500 },
// ]

// const ans = userCart.every((cartItem) => cartItem.price < 30000);
// console.log(ans);  // --> true, as condition met by all products in the array





// 57) some() method:   // --> basically ~ of every() method or say OR operator // ek bhi number array ke andar ka satisfy kra condition to gives `TRUE`. 

// const  numbers = [3,5,8,9];

// const ans = numbers.some((number) => number%2 === 0);
// console.log(ans);   // --> gives `TRUE` as one number i.e 8 is even




// 58) fill() method:   // structure:  (value, start, end)

// const myArray = [1,2,3,4,5,6,7,8,];
// myArray.fill(0, 2, 5);  // --> here 0(value jo fill karna), 2(index jaha se satrt krna), 5(ending index). number of zeroes = (end - start) = (5-2) = 3 zeroes formed
// console.log(myArray);   // --> [1, 2, 0, 0, 0, 6, 7, 8]


//normal fill: 
// const myArray = new Array(10).fill(-1);
// console.log(myArray);  // -->  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]





// 59) splice() method:  // --> used when , Array ke mid me se kuch Delete/Insert karna ho.

// structure:  (start, delete, insert)
// NOTE: agar koi item `delete` nai krna to 0 daldena waha pe aur koi item `insert` nai krna to blank chordena

// const myArray = ['item1', 'item2', 'item3'];

// myArray.splice(1, 2, "inserted item1", "inserted item2")  // --> means 1st item se `start` kro and 2 item `delete` (ietm2 and item 3 here) and later `insert` the given items.
// console.log(myArray);   // --> ['item1', 'inserted item1', 'inserted item2']




// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// 60) Iterables and Array like objects:

// iterables: jispe hum `for of loop` laga sakte wo.(eg: string , array)

// const firstName = "Suraj";
//   for(let char of firstName){
//     console.log(char);   // --> S , u , r , a , j
//   };


//   const items = ['item1', 'item2', 'item3'];
  // for(let item of items){
  //     console.log(item);
  // }
  
  // array like object: jinke pas length property hoti hai aur jiko hum index se access kar sakte hai (example :- string)


// const firstName = "Sam";
// console.log(firstName.length);  // --> 3
// console.log(firstName[2]);   // --> m
// both conditions met so it's array like obj






// 61) SETS:    `ITERABLE` , stores data, sets also have their own methods, no index based access, Order not guranteed, unique items only(duplicate not allowed)

// Main difference between SETS and ARRAY : 1) sets me duplicated elemnets allowed nai like Ste([3,4,3]) etc jabki arrays me hote
                                        // 2) Index based access bhi nai so order guranteed nai


// const numbers = new Set([1,2,3]);
// console.log(numbers);  // --> Set(3) {1, 2, 3}



// const numbers = new Set();
// numbers.add(1);
// numbers.add(5);
// //now add array too..
// const items = [9,3,6,7];
// numbers.add(items);  //--> ise 2 baar call krke add nai kr skte as same address iska, but 2 baar abanke proper array [] me add kr skte chahe wo same hi kyu na ho like.. 
//ab add hojayega dono same fir v as 2 baar define kra so alag addresss so memory me1 hi baar store goyega..

// numbers.add([34,35]);
// numbers.add([34,35]);
// console.log(numbers);  // --> Set(5) {1, 5, Array(4), Array(2), Array(2)}

//if-else:
// if(numbers.has(1)){
//   console.log("1 is present");
// }else{
//   console.log("1 is not present");  // --> 1 is present in the array
// }


// applying for-of loop:
// for(let number of numbers){
//   console.log(number);
// }


// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray); // --> Set{5} [1,2,4,5,6]

// let length = 0;
// for(let element of uniqueElements){
//   length++;
// }
// console.log(length);  // --> 5





// 62) MAP data structures:

// map is an iterable, stores data in ordered fashion, store key value pair (like object), duplicate keys are not allowed like objects


// Different between maps and objects:

// Objects can only have 'string or symbol' as key.
// Maps can use 'anything as key' like array, number, string 


// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);


// const person = new Map(); // --> Map declaration

// person.set('firstName', "suraj");
// person.set('age', 19);
// person.set(1, 'one');
// person.set([1,2,3], 'onetwothree');
// person.get({1 :'one'}, 'onetwothree');
// console.log(person); // --> Map(4) {'firstName' => 'suraj', 'age' => 19, 1 => 'one', Array(3) => 'onetwothree'}

//use GET method in Maps:

// console.log(person.get(1));  // --> one
// console.log(person.keys()); // --> MapIterator {'firstName', 'age', 1}

// for(let [key, value] of person){
//   console.log(key, value);  // --> firstName suraj,age 19. 1 'one'
// }


// const person = new Map([['firstName', 'Suraj'],['age', 19]]);
// console.log(person);  // --> Map(2) {'firstName' => 'Suraj', 'age' => 19}


//Practice:

// const person1 = {
//   id: 1,
//   firstName: "Suraj"
// }
// const person2 = {
//   id: 2,
//   firstName: "Riya"
// }

// const userInfo = new Map();
// userInfo.set(person1, {age: 20, gender: "male"});
// userInfo.set(person2, {age: 19, gender: "female"});
// // console.log(userInfo); // --> Map(1) {{…} => {…}}  ==> {Object => Object} ==> key: {id: 1, firstName: 'Suraj'} and value: {age: 20, gender: 'male'}


// console.log(person1.id);  // --> 1
// console.log(userInfo.get(person1).gender); // --> male
// console.log(userInfo.get(person2).gender); // --> female





// 63) Clone using Object.assign

// const obj = {
//   key1: "value1",
//   key2: "value2"
// }

// const obj2 = {...obj};

// obj.key3 = "value3";  // --> ye kroge bina {...} spread operator lagaye to obj and obj2 dono me key3: value3 add hojayega, lagadoge spread op. to sirf obj me hi add hoga..
// console.log(obj);   // --> {key1: 'value1', key2: 'value2', key3: 'value2'}
// console.log(obj2); // --> {key1: 'value1', key2: 'value2'}




// 64) Optional Chaining:  (?.) ye mostly React me use hota ki jab koi cheez present nai pr baad me agar aagya to ERROR na de so ?. lagate. ye ERROR nai dene deta uske jgh undefined deta jo ki chlega as usse website break nai hoga..

// const user = {
//   firstName: "suraj",
//   // address: {houseNumber: '1232'}
// }

// console.log(user?.firstName); // --> suraj
// console.log(user?.address?.houseNumber); // --> undefined as address is commited so it doesn't exist so ?. undefined dedega





// 65) Creating Own Methods:

// Methods: 'Functions inside Objects'
// this: is a 'object'. function ko jonsa bhi obj call kr rha ho wo 'this' hojata. `example: person.about()`; me ==> this = person

// const person = {
//   firstName: "Suraj",
//   age: 20,
//   about: function (){
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`)   // --> bina (this.) ke ERROR dega.
//   }
// }

// person.about();  // --> Person name is Suraj and age is 20

//Now defining 3 objects and using this...

// function personInfo(){
//   console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//   firstName : "harsh",
//   age: 8,
//   about: personInfo
// }
// const person2 = {
//   firstName : "mohit",
//   age: 18,
//   about: personInfo
// }
// const person3 = {
//   firstName : "nitish",
//   age: 17,
//   about: personInfo
// }

// person1.about(); // --> person name is harsh and age is 8
// person2.about(); // --> person name is mohit and age is 18
// person3.about(); // --> person name is nitish and age is 17


// "use strict";
// function myFunc(){
//   console.log(this);
// }

// myFunc();  // --> if "use strict" not used ye aayega --> Window {window: Window, self: Window, document: document, name: '', location: Location, …} use krliya to 'undefined' aayega




// 66) call , apply, bind:

//Call:

// const user1 = {
//   firstName : "samyukta",
//   age: 8,   
//   about: function(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
//   }
// }

// const user2 = {
//   firstName : "manoj",
//   age: 9,
  
// }

// `user2` me -about- method nai hai pr use kaise kre fir (user1 call kr skta ig):

// user1.about.call(user2); // --> manoj 9 undefined undefined (as hobby and favMusician is undefined in both objects)
// user1.about.call();  // --> undefined undefined

// user1.about.call(user2, "singing" , "Arijit Singh"); // --> extra parameters bhi yaha direct daal skte so o/p ke saath add hoke aayega undefiend nai aayega khaali to. --> manoj 9 singing Arijit Singh

//Apply:

// 'Apply' bhi Call jaisa hi just jab isme extra 'Paramteres' pass karte to  'Array' banake dalna padta ['','']

// user1.about.apply(user1, ["guitar", "bach"]);  // --> samyukta 8 guitar bach


//Bind : basically ye ek Function me store kr deta parameters ko , baad me call korge to returns..

// const func = about.bind(user2, "guitar", "bach");
// func();  // --> manoj 9 guitar bach





// 67) Arrow Functions: :(is function me khduka 'this' method nai hota , apne surroudning se leta ye:(

// arrow function ka "this" -- user1 nai hoga balki -- window obj (1 level up) hoga.
// iske "this" ko change nai kr skte

// const user1 = {
//   firstName : "samyukta",
//   age: 8,   
//   about: () => {
//     console.log(this.firstName, this.age);
//   }
// } 

// user1.about(); // --> undefined undefined


// //shortcut:

// const user1 = {
//   firstName : "samyukta",
//   age: 8,   
//   about(){     // --> aise bhi likh skte (function likhna zaroori nai)
//     console.log(this.firstName, this.age);
//   }
// } 


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// OOPS concepts:

// 68) Function that generates an obj


// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// function createUser(firstName, lastName, email, age, address){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function(){
//       return `${this.firstName} is ${this.age} years old.`;
//   };
//   user.is18 =  function(){
//       return this.age >= 18;
//   }
//   return user;
// }

// const user1 = createUser("Suraj", "Pratap", "suraj@gmail.com", 19, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);   // --> Suraj is 19 years old.




// 69) OPTIMIZATION of previous method for very huge DATA:


// const userMethods = {

//   about : function(){
//   return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18 :  function(){
//   return this.age >= 18;
//   }
// }

// function createUser(firstName, lastName, email, age, address){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;

//   // ab call kroge to ye already stored as a 'Reference type' so bas iska address call ho rha yaha so OPTIMIZED now
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
 
//   return user;
// }

// const user1 = createUser("Suraj", "Pratap", "suraj@gmail.com", 19, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}
// const user2 = createUser("Riya", "Singh", "riya@gmail.com", 18, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}
// const user3 = createUser("Divakar", "yadav", "div@gmail.com", 49, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}

// console.log(user1.about()); // --> Suraj is 19 years old.
// console.log(user2.about()); // --> Riya is 18 years old.




// 70) Furthermore OPTIMAZTION in the previous method:



// const userMethods = {

//   about : function(){
//   return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18 :  function(){
//   return this.age >= 18;
//   },
//   sing : function(){
//     return "toona toona la la la la la";
//   }
// }

// function createUser(firstName, lastName, email, age, address){
//   // const user = {};
//   const user = Object.create();
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;

//   // ab call kroge to ye already stored as a 'Reference type' so bas iska address call ho rha yaha so OPTIMIZED now
//   // user.about = userMethods.about;
//   // user.is18 = userMethods.is18;
//   // user.sing = userMethods.sing;
 
//   return user;
// }

// const user1 = createUser("Suraj", "Pratap", "suraj@gmail.com", 19, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}
// const user2 = createUser("Riya", "Singh", "riya@gmail.com", 18, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}
// const user3 = createUser("Divakar", "yadav", "div@gmail.com", 49, "my address");   // --> {firstName: 'Suraj', lastName: 'Pratap', email: 'suraj@gmail.com', age: 19, address: 'my address', …}

// console.log(user1.about()); // --> Suraj is 19 years old.
// console.log(user2.about()); // --> Riya is 18 years old.
// console.log(user2.sing()); // --> toona toona la la la la la





// 71) Solution via 'Object.create' method


// const obj1 = {
//   key1 : "value1",
//   key2 : "value2"
// }

// // new way of creating an 'empty object'
// const obj2 = Object.create(obj1); // --> is method se agar obj2 me koi key nai bhi ho to wo 'undefined' nai dega balki obj1 me jayega and wo key dhundke uska value return kareag..
// obj2.key3 = "value3";
// console.log(obj2.key2); // --> returns value2

// //Declaration of `Object.create()` sets this property..
// // __proto__ and [[prototype]] are both SAME and returns OBJECT
// console.log(obj2.__proto__); // --> __proto__ obj return krta {key1: 'value1', key2: 'value2'}





// 72) Rveision on Function:

// JS me function = function + object ko khte...

// you can add your own properties too.

// hello.myOwn = "Unique idea";
// console.log(hello.myOwn); // --> Unique idea.

// name property --> tells function name.. ex: hello.name() --> hello is o/p here

// function provides more useful properties.





// 72) PROTOTYPE (basically ek obj hai and __proto__ se alag bilkul):  // --> Only Functions provide `Prototype` property


// function gives "Free Space" ==> {} , empty obj(like a khali obj) --> 'PROTOTYPE' khte use


// function hello(){
//   console.log("Hello world");
// }

// console.log(hello.prototype);   // --> {constructor: ƒ}  


// Empty Obj {} so kuch bhi add kr skte apan usme

// hello.prototype.abc = "abc";
// console.log(hello.prototype);  // --> abc: 'abc', constructor: ƒ}

// adding Func() in prototype:

// hello.prototype.sing = function(){
//   return "lalala";
// }
// console.log(hello.prototype);  // --> {sing: ƒ, constructor: ƒ}






// 73) USE PROTOTYPE:

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }


// function createUser(firstName, lastName, email, age, address){
//   const user = Object.create(createUser.prototype);// {}
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }

// //Adding Prototypes:

// createUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//   return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//   return "la la la la ";
// }


// const user1 = createUser('harshit', 'vaidya', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'singh', 'harsh@gmail.com', 19, "my address");
// const user3 = createUser('mohan', 'vashsitha', 'mohan@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());


// __proto__ is a "reference", Prototype is an "Object"..





// 74)  New Keyword: (important)
// 'new' use krow to function name ke first letters "UPPERCASE me likhna" --> function CreateUser(){}

// function createUser(firstName, age){
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function(){
//   console.log(this.firstName, this.age);
// }

// const user1 = new createUser("Suraj", 19); 
// console.log(user1); // --> createUser {firstName: 'Suraj', age: 19}
// console.log(user1.about()); // --> Suraj 19

// // Yaha 'new' keyword is doing 3 jobs:
// // 1) creates empty object --> this = {}
// // 2) return this
// // 3) Object.create(createUser.prototype) --> wala kaam khud krdega


//Note:
// __proto__ 
// In official ecmascript document aisa likha hua --> [[prototype]]


// constructor function: constructs an Obj for us....

// function CreateUser(firstName, lastName, email, age, address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }

// CreateUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//   return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//   return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vaidya', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'singh', 'harsh@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohan', 'vashsitha', 'mohan@gmail.com', 17, "my address");
// console.log(user1);  // --> createUser {firstName: 'harshit', lastName: 'vaidya', email: 'harshit@gmail.com', age: 18, address: 'my address'}
// console.log(user1.is18());  // --> true





// 75) hasOwnProperty:


// function CreateUser(firstName, lastName, email, age, address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }

// CreateUser.prototype.about = function(){
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//   return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//   return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vaidya', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'singh', 'harsh@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohan', 'vashsitha', 'mohan@gmail.com', 17, "my address");

// for(let key in user1){
//  // console.log(key);  // --> prints all keys including prototype keys too

//   if(user1.hasOwnProperty(key)){
//     console.log(key);  // --> ab ye sirf normal keys dega, prototype ki nai as in tat case else loop me jayega and afalse.
//   }
// }






// 76) more on PROTOTYPE:

// let numbers = [1,2,4,5];

//other way to write: Array


// isme `prototype` lag rha as now Array() is a function

// let numbers = new Array(1,2,3);
// console.log(Object.getPrototypeOf(numbers)); // --> [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]


// changing prototype:

// function hello(){
//   console.log("hello");
// }

// console.log(hello.prototype);
// hello.prototype = []; // --> set to EMPTY array

// console.log(hello.prototype);
// hello.prototype.push('1');



// Class constructor can't be invoked without 'new' keyword....


// 77) CLASS keyword: jo upar kiye usko easily kardega

// In JS classes are `FAKE`

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//          // yaha mehtods define hote
//     about(){
//       return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//       return this.age >= 18;
//     }
//     sing(){
//       return "la la la la ";
//     }

// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

//  console.log(user1.sing) // --> ƒ sing(){return "la la la la ";}

// console.log(Object.getPrototypeOf(user1)); // --> {constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}





// 78) CLASS practice:

// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   // yaha mehtods define hote

//   eat(){
//     return `${this.name} is eating`;
//   }
//   isSuperCute(){
//     return this.age <=1;
//   }
//   isCute(){
//     return true;
//   }

// }

// const animal1 = new Animal("tom", 5);   
// console.log(animal1);  // --> Animal {name: 'tom', age: 5}

// console.log(animal1.eat());  // --> tom is eating



// ANIMAL --> Parent class / Base class
// dog --> Sub-class


// 79) INHERITANCE: ( firse naye class me same method define krne se accha extend krlo from PARENT CLASS)

// class dog extends Animal{     // --> here JS will use 'constructor' of Animal class to add properties and methods to Dog class
// }

// const tyson = new dog("Jimmy", 2);
// console.log(tyson); // --> dog {name: 'Jimmy', age: 2}
// console.log(tyson.eat()); // --> Jimmy is eating





// 80) Super Keyword:  // super() means PARENT CLASS

// class Animal {
//   constructor(name, age){
//       this.name = name;
//       this.age = age;
//   }

//   eat(){
//       return `${this.name} is eating`;
//   }

//   isSuperCute(){
//       return this.age <= 1;
//   }

//   isCute(){
//       return true;
//   }
// }

// Object is same as Instance

// class Dog extends Animal{
//   constructor(name,age,speed){
//     super(name, age);   // --> iska constructor khud hi add hojayeaga PARENT CLASS se via super()
//     this.speed = speed;

//   }

//   run(){
//     return `${this.name} is running at a speed of ${this.speed}`
//   }
// }

// const tommy = new Dog("tommy", 3, 60);
// console.log(tommy);  // --> Dog {name: 'tommy', age: 3, speed: 60}
// console.log(tommy.run()); // --> tommy is running at a speed of 60


// // same method in subclass
// class Animal {
//   constructor(name, age){
//       this.name = name;
//       this.age = age;
//   }

//   eat(){
//       return `${this.name} is eating`;
//   }

//   isSuperCute(){
//       return this.age <= 1;
//   }

//   isCute(){
//       return true;
//   }
// }

// class Dog extends Animal{
//   constructor(name, age, speed){
//       super(name,age);
//       this.speed = speed;
//   }

//   eat(){
//       return `Modified Eat : ${this.name} is eating`
//   }

//   run(){
//       return `${this.name} is running at ${this.speed}kmph`
//   }
// } 


// const animal1 = new Animal('sheru', 2);
// console.log(animal1.eat()); // --> sheru is eating // ye o/p aaya as JS pehle sub-class me eat() check kra nai milta tb jata parent class me..




// 81) Getters and Setters:

// class Person{
//   constructor(firstName, lastName, age){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//   }
//   get fullName(){   // --> 'get' lagane se ab ye as a Property treat hoga.....
//     return `${this.firstName} ${this.lastName}`
//   }
//   // setName(firstName, lastName){
//   //   this.firstName = firstName;
//   //   this.lastName = lastName;
//   // }

//   //Now, jab fullName badlu to automatic first and last name badal jaye
//   set fullName(fullName){
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// }

// const person1 = new Person("Suraj", "Pratap", 19);
// // console.log(person1);  // --> Person {firstName: 'Suraj', lastName: 'Pratap', age: 19}
// // console.log(person1.fullName);  // --> Suraj Pratap

// // console.log(person1.firstName); // --> Suraj
// // console.log(person1.lastName);  // --> Pratap
// // //using setName() to change name:
// // person1.setName("suraj","pratap");
// // console.log(person1.fullName); // --> suraj pratap, now


// person1.fullName = "Sam Valor";
// console.log(person1); // --> Person {firstName: 'Sam', lastName: 'Valor', age: 19}






// 82) Static methods and properties:


// class Person{
//   constructor(firstName, lastName, age){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//   }

//   // class banake uske andar method banado jo ki Class se directly related
//   static classInfo(){
//       return 'this is person class';
//   }

//   static desc = "static property";
//   get fullName(){
//       return `${this.firstName} ${this.lastName}`
//   }

//   set fullName(fullName){
//       const [firstName, lastName] = fullName.split(" ");
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }

//   // ye method jo object banega usse related
//   eat(){
//       return `${this.firstName} is eating`;
//   }

//   isSuperCute(){
//       return this.age <= 1;
//   }

//   isCute(){
//       return true;
//   }
// }


// const person1 = new Person("suraj", "pratap", 19);
// // console.log(person1.eat());
// const info = Person.classInfo(); //obj banane ki zaroorat nai direct class se call krna// -->'this is person class'
// console.log(person1.desc);
// console.log(info);









// ------------------------------------------------------ THE END -------------------------------------------------------------------------------






