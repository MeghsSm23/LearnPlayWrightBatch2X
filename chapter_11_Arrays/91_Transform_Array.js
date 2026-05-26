//map -transform every element and return
let score = [34, 45, 71, 45, 60, 82];
let grades = score.map(s => s < 70 ? "Pass" : "Fail");
console.log(grades);



//filter

let passing = score.filter(s => s > 50);
console.log(passing);

//reduce

let total = score.reduce((a, b) => a + b, 0);
console.log(total);