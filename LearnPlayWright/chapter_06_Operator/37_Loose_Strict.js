console.log(0 == ' '); // true
console.log(0 == '0'); // true
console.log("" == "0"); // true  // Loose equality (==) performs type coercion, so it converts the operands to a common type before comparing them. In this case, both operands are converted to numbers, and since 0 is equal to 0, the result is true.


console.log(0 == false); // true
console.log(null == 0); // true
console.log(undefined == 0); // true    
console.log(0 === ' '); // false
console.log(0 === '0'); // false
