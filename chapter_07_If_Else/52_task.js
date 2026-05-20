//Q1-Take a numbe and type wheter it is even or odd
let num = 7;
if (num % 2 === 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}

//Q2 -Student Grade Calculator
let marks = 85;
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80 && marks < 90) {
    grade = "B";
} else if (marks >= 70 && marks < 80) {
    grade = "C";
} else {
    grade = "D";
}

console.log(`The student's grade is ${grade}`);

//Q3- Leap Year Checker
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}