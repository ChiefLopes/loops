// In simple terms, the for...in loop in JavaScript is used to loop over the properties (also called keys) of an object. It allows you to access each property of the object one by one and perform some action on it. //

//! Here's the basic syntax of the for...in loop

// ? for (variable in object) {
// code to be executed
// ?}

// Example
let person = {
  name: "Louis",
  age: 23,
  occupation: "coder",
};

for (keys in person) {
  console.log(`${keys} : ${person[keys]}`);
}
for (keys in person) {
  console.log(`${keys} : ${person.keys}`);
}

for (prop of person) {
  console.log(prop);
}
