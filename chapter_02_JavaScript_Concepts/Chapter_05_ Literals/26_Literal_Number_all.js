// JavaScript number literal examples

// 1. Decimal integer
let decimal = 42;
console.log("decimal:", decimal);  // 42

// 2. Floating point
let floatNum = 3.14;
console.log("float:", floatNum);  // 3.14

// 3. Scientific notation (exponential)
let exponential = 1.2e3;  // 1.2 × 10^3 = 1200
console.log("exponential:", exponential);  // 1200

// 4. Binary literal (base 2)
let binary = 0b1010;  // 10 in decimal
console.log("binary:", binary);  // 10

// 5. Octal literal (base 8)
let octal = 0o52;  // 42 in decimal
console.log("octal:", octal);  // 42

// 6. Hexadecimal literal (base 16)
let hex = 0x2A;  // 42 in decimal
console.log("hexadecimal:", hex);  // 42

// 7. BigInt literal (for integers too large for Number safely)
let bigInt = 9007199254740991n;  // suffix n indicates BigInt
console.log("bigInt:", bigInt);  // 9007199254740991n

// 8. Special numeric values
console.log("Infinity:", Infinity);  // Infinity
console.log("-Infinity:", -Infinity);  // -Infinity
console.log("NaN:", NaN);  // Not a Number

// 9. Number type check
console.log("typeof decimal:", typeof decimal);  // "number"
console.log("typeof bigInt:", typeof bigInt);  // "bigint"

// Notes:
// - JavaScript has one main numeric type called Number, which handles both integers and floats.
// - BigInt is a separate type for very large integer values.
// - Use binary, octal, and hexadecimal literals when working with low-level values, bit masks, or colors.


//*What is a base?
//*In number systems, the base (or radix) is the number of unique digits used to represent numbers.

//*Base 10 means decimal: digits 0–9
//*Base 2 means binary: digits 0–1
//*Base 8 means octal: digits 0–7
//*Base 16 means hexadecimal: digits 0–F
//*So the base tells you how many symbols are available per digit position.

