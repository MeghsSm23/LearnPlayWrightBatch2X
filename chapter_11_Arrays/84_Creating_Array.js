//creating an array

let browser = new Array("chrome", "firefox", "edge", "safari");
console.log(browser);

//Array Constructor

let scores = new Array(10);
scores[0] = 1;
scores[1] = 2;
scores[2] = 3;
//creates an array of length 10 with all elements undefined
let scores2 = new Array(10, 20, 30); //creates an array with the specified elements
console.log(scores);
console.log(scores2);


let number = new Array(5); //creates an array of length 5 with all elements undefined
console.log(number);

let test = Array.of(1, 2, 3, 4, 5); //creates an array with the specified elements
console.log(test);

//Array.from
let chars = Array.from("Hello");
console.log(chars);

let numbers = Array.from("12345");
console.log(numbers);