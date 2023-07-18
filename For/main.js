// ! LOOPS
// ! loops are used to run a code multiple times with changing values.
// ! Loops are handy, if you want to run the same code over and over again, each time with a different value.
//! There are many different kinds of loops,
//! but they all essentially do the same thing: they repeat an action some number of times.
//! (Note that it's possible that number could be zero!)

// * The FOR statement creates a loop with 3 optional expressions:

// !for ([initialExpression]; [conditionExpression]; [incrementExpression]){
//?!   statement or command to be executed //!}

for (let i = 0; i < 7; i++ ) {
  console.log(i);
}
//* From the example above, you can read:
//* Expression 1 sets a variable before the loop starts (let i = 0) >>> This is the value or number the loop starts from to count.
//* Expression 2 defines the condition for the loop to run (i must be less than 5) >>> This is the extent or to what number the loop should stop.
//? If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
//? Breaks are required where expresion 2 is omitted to avoid loop infinity and crashing of the system...
//* Expression 3 increases a value (i++) or decreases value (i--) each time the code block in the loop has been executed. >>> point of increment or decrement depending on the loop condition.

//* The FOR LOOP continues running while the condition is TRUE and stops when it becomes FALSE.

  let time = "time";
  for (let come = 1; come <= 10; come++) {
    // if(come === 1){
    //      time = "time"
    // } else {time = 'times'}
  come === 1 ? (time = "time") : (time = "times");
    console.log(`I came to your house ${come} ${time}`);
  }

// !---- LOOPING THROUGH AN ARRAY ----
const lopesArray = [
  "Louis",
  "Peace",
  2022 - 2001,
  "student",
  ["Joseph", "Hero", "Mecky"],
  "choirmaster",
  " Akwa Ibom",
  true 
];
console.log(lopesArray);

// for (i = 0; i < lopesArray.length; i++){
//   console.log(lopesArray[i]);
// }
const types = [];
// let's now loop thru this array

for (i = 0; i < lopesArray.length; i++) {
  // reading or mapping thru lopesArray
  console.log(lopesArray[i], typeof lopesArray[i]);

  // filling in the types of lopesArray
  types[i] = typeof lopesArray[i];

  console.log(types.push(typeof lopesArray[i]));

  
}
console.log(types);

// ! If we say, i < (length of array): we will be limiting the loop to stop at a certain point in the array.

// ! But if we say, i < (array.length): This will keep updating as long as we add details to the array. It is not limited to any in the the array

for (let count = 1; count <= 11; count++){
  console.log(`choir ${count} did well`);
}

const years = [2000, 2001, 2002, 2003, 2004, 2005];
const ages = [];

for (let i = 0; i < years.length; i++){
 ages.push(2023 - years[i])
}

console.log(ages);

//! CONTINUE AND BREAK IN LOOPS...
// ! CONTINUE: This exits the current iteration of a loop and moves over or continue to the next one depending on the condition it is working with.
// ! BREAK: Used to completely terminate a whole loop thereby stopping it from continuing...

const myArr = [
  "Louis",
  "Peace",
  2022 - 2001,
  "student",
  ["Joseph", "Hero", "Mecky"],
  "choirmaster",
  " Akwa Ibom",
  true
];

for (let i = 0; i < myArr.length; i++){
  //! Continue
   if (typeof myArr[i] !==  "string" ) continue; // here, the loop will move over types that are not strings and continue from types that are strings

   console.log(myArr[i]);

  //! Break
  if (typeof myArr[i] !==  "string" ) break; // here, the loop will stop immediately it encounters a non-string type. It wont jump and continue...

}

//! LOOPING BACKWARDS AND LOOPS IN LOOPS...
//* LOOPING BACKWARDS
// * We can loop over an array from the last child or elemnet of the array to the first one.


const myArr1 = [
  "Louis",
  "Peace",
  2022 - 2001,
  "student",
  ["Joseph", "Hero", "Mecky"],
  "choirmaster",
  " Akwa Ibom",
];

for (let i = myArr.length-1; i >= 0; i--){
  console.log(myArr[i]); // this logs the contents of the myArr1 variable into the array, beginning from the end off the array, (i.e from Akwa Ibom upwards)
}

//! LOOPS IN LOOPS
for(let exercise = 1; exercise <= 3; exercise++){
  console.log(`~~~~~~~ starting exercise ${exercise}`);

  for(let rept = 1;rept < 6;rept++ ){
    console.log(`lifting weights repetition ${rept}`);
  }
} 

const and = 'rice and beans'

const iam = ['louis','Peace', and, 2, 3, true, 'student', 4, 5, 'single',9,  'black']
// console.log(iam);

for(let i = 0; i < iam.length; i++){
  console.log(iam[i]);


}

const myNames = ['Louis', 'Peace', 'Silas', 'Ndidi', 'Ekede', 2, true]
// console.log(myNames);

for (let i = 0; i <= myNames.length; i++){
  console.log(typeof myNames[i]);
}

for (i = myNames.length-1; i >= 0; i--){
  console.log(myNames[i]);
}


for (let chorus = 1; chorus <= 3; chorus++){
  console.log(`My number ${chorus} attendace`);

  for(let attend = 1; attend <= 5; attend++){
    console.log(`I attended number ${attend} time`);
  }
}

