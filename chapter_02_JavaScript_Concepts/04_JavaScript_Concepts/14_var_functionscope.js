var a = 10;
console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    var a = 20; // This 'a' is different from the global 'a'
    console.log(a); // Output: 20
    if (true) {
        var a = 30; // This 'a' is also different from the global 'a' and the 'a' inside the function
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 30 (because 'var' is function-scoped, not block-scoped)
}

console.log("F ->", a)


printHello();