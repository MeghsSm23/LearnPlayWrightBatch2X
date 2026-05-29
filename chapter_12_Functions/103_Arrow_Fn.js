//Arrow Function

const greet = function (name1) {
    return name1
}

let result = greet("Megha");
console.log(result);

// above function can be replaced with arrow function
const greet2 = (name1) => name1;
let result2 = greet2("meghana");
console.log(result2);


const doubleIt = n => n * 2;
console.log(doubleIt(10));