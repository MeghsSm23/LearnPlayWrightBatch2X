var a = 10;

console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    var a = 20; // This 'a' is different from the global 'a'
    console.log(a); // Output: 20       
}
printHello();
