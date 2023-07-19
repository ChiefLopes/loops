//  The do-while loop is similar to the while loop, but with one key difference: it guarantees that the loop's code block is executed at least once, regardless of whether the loop condition is true or false. //

// Here is an example:
// ?do {
//!  code to be executed
// ?} while (condition);

// In simple terms, the do-while loop works like this:

// 1. First, the code block inside the loop is executed.
// 2. Then, after executing the code block, the loop checks the condition specified in the while statement.
// 3. If the condition is true, the loop goes back to step 1 and repeats the process, executing the code block again.
// 4. If the condition is false, the loop ends, and the program continues with the next statement after the loop.

let count = 0;

do {
    console.log(`this is do-while loop ${count}`);
    count++;
} while (count < 5);

for (let count = 0; count < 5; count++){
    console.log(`this is for loop ${count}`);
}

while (count < 5) {
    count++
    console.log(count);
}