let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);


let numbers = [5, 7, 1, 3, 8.2];
numbers.sort();
console.log(numbers);

//Natural or Lexical Sorting

let nums = [23, 76, 12, 2, 37, 90, 51];
nums.sort();
console.log(nums);
//explanation from AI
nums.sort((a, b) => a - b);//ascending order
console.log(nums);//this gives correct sorting
nums.sort((a, b) => b - a);//descending order
console.log(nums);