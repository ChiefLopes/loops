//!  The for...of loop is a type of loop in JavaScript that helps you iterate over elements of an iterable object, such as arrays, strings, maps, sets, and more.

//! SYNTAX of for ....of loop
//? for (variable of iterable) {
// code to be executed for each element
//? }

// variable: This is a variable that represents each element of the iterable object on each iteration. The loop assigns the value of each element to this variable.

// iterable: This is the iterable object that you want to loop through. It can be an array, string, map, set, and more.

// Code block: The code block contains the statements that will be executed for each element in the iterable. It is enclosed within curly braces {}.

// The for...of loop is commonly used with arrays when you need to perform an action for each element in the array, or when you want to process the characters of a string individually. It simplifies the process of iteration by automatically handling the iteration logic for you, and it's particularly useful when you don't need to work with array indices explicitly.

const numbers = [1, 2, 3, 4, 5]

for (let num of numbers) {
       console.log(`${num}  from the numbers array`);
}

let characters = ["sonic", "tails", "Luigi", "Link", "mario"];

for (let items of characters) {
    console.log(items);
}
