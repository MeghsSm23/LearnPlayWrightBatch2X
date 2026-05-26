// //Index of returns first index or -1 if not found

// let result = ["Pass", "Fail", "Pass", "Error", "Fail"];

// console.log(result.indexOf("Error"));
// //console.log(result);


//Includes returns True or False

// console.log(result.includes("Error"));
// console.log(result.includes("Skip"));

//Find -finds first matching element
let num = [12, 20, 25, 54, 89];
console.log(num.find(x => x > 20));


console.log(num.findIndex(x => x > 20));
console.log(num.findLast(x => x > 20));
console.log(num.findLastIndex(x => x > 20));