// Example of null in JavaScript

// null represents the intentional absence of any object value.
// It's a primitive value that you assign explicitly to indicate "nothing".

// Example 1: Assigning null to a variable
let user = null;  // No user is logged in
console.log(user);  // Output: null

// Example 2: Checking for null
if (user === null) {
    console.log("No user found.");
}

// Example 3: Setting an object property to null
let person = {
    name: "John",
    age: 30,
    address: null  // Address not provided
};
console.log(person.address);  // Output: null

// Example 4: Function returning null
function findItem(id) {
    // Simulate not finding the item
    return null;
}
let item = findItem(123);
console.log(item);  // Output: null

// Note: typeof null is "object" (a JavaScript quirk)
console.log(typeof null);  // Output: object