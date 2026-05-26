//Q2 -Student Grade Calculator
let marks = 85;

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
