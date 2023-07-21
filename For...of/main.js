//!  The for...of loop is a type of loop in JavaScript that helps you iterate over elements of an iterable object, such as arrays, strings, maps, sets, and more.

//! SYNTAX of for ....of loop
//? for (variable of iterable) {
// code to be executed for each element
//? }

// variable: This is a variable that represents each element of the iterable object on each iteration. The loop assigns the value of each element to this variable. just as in line 18 of this file, the (num) variable is created and used to loop through the numbers array

// iterable: This is the iterable object that you want to loop through. It can be an array, string, map, set, and more.

// Code block: The code block contains the statements that will be executed for each element in the iterable. It is enclosed within curly braces {}.

// The for...of loop is commonly used with arrays when you need to perform an action for each element in the array, or when you want to process the characters of a string individually. It simplifies the process of iteration by automatically handling the iteration logic for you, and it's particularly useful when you don't need to work with array indices explicitly.

//! THE FOR...OF LOOP IS USED TO LOOP OVER VALUES OF AN ITEARBLE DATA STRUCTURELIKE ARRAYS, STRINGS
//! THE FOR ...IN LOOP IS USED TO LOOP OVER PROPERTIES OF AN OBJECT

const numbers = [1, 2, 3, 4, 5]

for (let num of numbers) {
       console.log(`${num}  from the numbers array`);
}

let characters = ["sonic", "tails", "Luigi", "Link", "mario"];

for (let items of characters) {
    if (items === "Link") {
        continue;
    } else console.log(items);
}


//! The for...of loop can as well be used to iterate over a string 
// ? Example

const name = 'Louis';

for (let letters of name) {
   console.log(letters);
}
 
// CHALLENGE 
//  1. Create a list of colours red, orange, yellow, green, blue and iterate over them using the for...of loop. Log the result to the console

const colours = ['red', 'orange', 'yellow', 'green', 'blue']

console.log("FIRST CHALLENGE");

for (let each of colours) {
   console.log(each);
}

console.log("SECOND CHALLENGE");

// 2. Use a break statement to only show red, orange and yellow and break out of the loop once it gets to green 

for (let each of colours) {
    if (each === "green") {
        break;
    } else console.log(each);
}
