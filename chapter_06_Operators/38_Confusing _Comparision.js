// 38_Confusing _Comparision.js
// Examples showing why == can be confusing and how === works differently.

console.log(0 == '0');    // true: '0' becomes number 0
console.log(0 === '0');   // false: different types (number vs string)

console.log(0 == false);  // true: false becomes 0
console.log(0 === false); // false: different types

console.log('' == false);  // true: '' becomes 0, false becomes 0
console.log('' === false); // false: different types

console.log(null == undefined);  // true: special loose-equality rule
console.log(null === undefined); // false: different types

console.log([] == false);   // true: [] becomes '' then 0
console.log([] === false);  // false: array is not boolean

console.log([0] == 0);     // true: [0] becomes '0', then number 0
console.log([0] === 0);    // false: array vs number

console.log(' ' == 0); // true: whitespace string converts to 0
console.log(' ' === 0); // false: string vs number

// Transitivity can break with loose equality:
console.log(0 == '');      // true
console.log('' == '0');    // false
console.log(0 == '0');     // true

// Takeaway:
// - Use === whenever possible for predictable comparisons.
// - Use == only when you intentionally want type coercion.
