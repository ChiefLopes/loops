// let time = "time";
// for (let come = 1; come <= 10; come++) {
//   // if(come === 1){
//   //      time = "time"
//   // } else {time = 'times'}
//  come === 1 ? (time = "time") : (time = "times");
//   console.log(`I came to your house ${come} ${time}`);
// }

// !--- THE WHILE LOOP ------- 
// ! >> The while loop loops through a block of code as long as a specified condition is true
// ? SYNTAX
 //* {while (condition) {
  //* code block to be executed
//* }

let come = 1;
while (come <= 10){
    come === 1 ? time = 'time': time = "times";
    console.log(`I came to your house ${come} ${time}`);
    come++
}


let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
}