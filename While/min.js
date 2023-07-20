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

//? It has an initializer which is first declared as a variable as seen at line 19.
//? Then the while keyword followed by a parenthesis which would contain the condition and then a curly braces which would contain the code to be executed.

 //* while (condition) {
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

let n = 0, x = 0;

while (n < 3) {
  n++;
    x += n;
    console.log(x);
}

let d = 0;
for (let n = 1; n < 4; n++) {
    d += n;
    console.log(d);
}

let beans = 7;
while (beans > 7) {
    console.log("beans is sweet");
    beans++;
}


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}