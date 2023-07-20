// In simple terms, the for...in loop in JavaScript is used to loop over the properties (also called keys) of an object. It allows you to access each property of the object one by one and perform some action on it. //

//! Here's the basic syntax of the for...in loop

// ? for (variable in object) {
//! code to be executed
// ?}

// Example
let person = {
  name: "Louis",
  age: 23,
  occupation: "coder",
};

// for (keys in person) {
//   console.log(`${keys} : ${person[keys]}`);
// }

let groceries = {
  food: 'garri',
  support: 'groundnut',
  taste: 'sugar',
  addition: 'milk'
}

for (let stuffs in groceries) {
   console.log(`The ${stuffs} here is ${groceries[stuffs]}`);
}




const salary = {
  John: "4000",
  Peter: "3000",
  Mary: "2500",
  Mark: "5000"
}

Object.defineProperty(salary, "John", {
  value: "4000",
  enumerable: false, // This property is enumerable
});

for (earns in salary) {
  let salaries = `$${salary[earns]}`
  console.log(`${earns} earns ${salaries} in a month`);
}





