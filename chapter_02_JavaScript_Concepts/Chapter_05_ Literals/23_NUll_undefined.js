// Difference Between `null` and `undefined` in JavaScript

// In JavaScript, both `null` and `undefined` represent the absence of a value, but they are used in different situations.

// - `undefined`: This means a variable has been declared but hasn't been given a value yet.
//   It's also what you get when a function doesn't return anything, or when you try to access a property that doesn't exist on an object.
//   JavaScript automatically assigns `undefined` in these cases.

// - `null`: This is a value you set intentionally to say "there is no value here." It's like saying "empty on purpose."
//   You have to explicitly assign `null` to a variable.

// Key Differences:
// - Type: Both are primitive types, but `undefined` is of type "undefined", while `null` is of type "object" (this is a quirk in JavaScript).
// - Assignment: `undefined` happens automatically; `null` is set by you.
// - Use Case: Use `null` when you want to clear a variable or indicate no object. Use `undefined` to check if something hasn't been set.

// Simple Examples:

// undefined example
let name;  // Declared but not assigned → undefined
console.log(name);  // Output: undefined

function doNothing() { }
console.log(doNothing());  // Output: undefined (no return value)

// null example
let age = null;  // Intentionally set to nothing
console.log(age);  // Output: null

// Checking types
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (weird, but true)