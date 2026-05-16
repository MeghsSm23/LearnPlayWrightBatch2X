/*
  07_JS_All_Examples.js
  Combined examples for JavaScript basics and identifier rules.
  Run with: node 07_JS_All_Examples.js
*/

// 1. Basic variable declarations and output
var v = 10;
let age = 22;
const name = "John Doe";
console.log("v:", v);
console.log("age:", age);
console.log("name:", name);

// 2. Valid identifier examples
var _A = 15;
var $B = 20;
var C1 = 25;
var D_2 = 30;
var Name = "John";
var name123 = "Jane";
var meghs_name = "Meghs";
var meghs$name = "Meghs";
console.log(_A, $B, C1, D_2, Name, name123, meghs_name, meghs$name);

// 3. Invalid identifier examples (uncomment one line at a time to see errors)
// var 1A = 5;            // invalid: cannot start with a digit
// var first-name = "A"; // invalid: hyphen is not allowed
// var my name = "A";    // invalid: spaces are not allowed
// var var = 10;          // invalid: reserved keyword cannot be used as an identifier
// var new = 5;           // invalid: reserved keyword cannot be used as an identifier

// 4. Keyword usage examples
var isActive = true;
if (isActive) {
  console.log("This is an if statement example.");
}

function greet(userName) {
  return "Hello, " + userName;
}
console.log(greet("Meghs"));

for (let i = 1; i <= 3; i++) {
  console.log("Loop", i);
}

try {
  throw new Error("Example error");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("Finally runs");
}

// 5. Async/await keyword example
async function fetchData() {
  return "data";
}

fetchData().then(result => console.log("Async result:", result));
