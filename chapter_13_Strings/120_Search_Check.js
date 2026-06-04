//Searching & Checking

//1. Search for a character in a string
let url = "https://www.google.com";

console.log(url.includes("google")); // true
console.log(url.indexOf("google")); //  12 (index of the first occurrence of "google")

console.log(url.includes("bing")); // false
console.log(url.indexOf("bing")); // -1 (not found) 

//startswith() and endswith()
console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true

console.log(url.startsWith("http")); // true
console.log(url.endsWith(".org")); // false

//Indexof() lastIndexOf() methods
let str = "Hello World, Hello JavaScript";
console.log(str.indexOf("Hello")); // 0 (first occurrence)
console.log(str.lastIndexOf("a")); // 13 (last occurrence)

//Search
console.log(url.search("google")); // 12 (index of the first occurrence of "google")
console.log(url.search("bing")); // -1 (not found)