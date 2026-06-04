let str = "Login_Test_Case_1";
//slice(start, end) method
console.log(str.slice(0, 5)); // "Login" (from index 0 to 4)
console.log(str.slice(6, 10)); // "Test" (from index 6 to 9)
console.log(str.slice(11)); // "Case_1" (from index 11 to the end)  

let testNumber = str.slice(-3);
console.log(testNumber); // "se_1" (last 3 characters of the string)

console.log(str.includes("Test")); // true
console.log(str.includes("Meghs"));  