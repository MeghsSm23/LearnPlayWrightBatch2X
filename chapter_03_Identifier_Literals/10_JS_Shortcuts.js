/*
  10_JS_Shortcuts.js
  Common JavaScript shorthand patterns and shortcuts.
*/

/*
  Visual Studio default window shortcuts:
  Solution Explorer  - Ctrl+Alt+L
  Properties Window  - F4
  Toolbox            - Ctrl+Alt+X
  Output Window      - Ctrl+Alt+O
  Error List         - Ctrl+\\, Ctrl+E
  Immediate Window   - Ctrl+Alt+I
  Call Stack Window  - Ctrl+Alt+C
  Watch Window 1     - Ctrl+Alt+W, 1
  Find Results 1     - Ctrl+Alt+F
  Object Browser     - Ctrl+Alt+J
*/

// 1. Ternary operator instead of if/else
var score = 85;
var result = score >= 60 ? "Pass" : "Fail";
console.log(result); // Pass

// 2. Arrow function shorthand
var multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// 3. Object property shorthand
var name = "Meghana";
var age = 20;
var person = { name, age }; // same as { name: name, age: age }
console.log(person);

// 4. Template literals instead of string concatenation
var greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting);

// 5. Short-circuit evaluation with && and ||
var isLoggedIn = true;
isLoggedIn && console.log("User is logged in.");

var userInput = "";
var defaultText = userInput || "Default value";
console.log(defaultText);

// 6. Nullish coalescing operator
var value = null;
var fallback = value ?? "Fallback value";
console.log(fallback);

// 7. Optional chaining
var user = { profile: { email: "test@example.com" } };
console.log(user?.profile?.email);
console.log(user?.settings?.theme); // undefined

// 8. Destructuring assignment
var point = { x: 10, y: 20 };
var { x, y } = point;
console.log(x, y);

// 9. Default parameters in functions
function greet(userName = "Guest") {
    console.log(`Hello, ${userName}`);
}
greet(); // Hello, Guest

// 10. Exponentiation and assignment shortcuts
var count = 2;
count **= 3; // same as count = count ** 3
console.log(count); // 8
console.log(count); // 8
console.log(count); // 8
console.log(count); // 8
console.log(count); // 8
console.log(count); // 8
// alt+ shift+ down key to duplicate line in VS Code    