//let a = 1;

//let Retrycount = 0;
//Retrycount = Retrycount + 1;
//Retrycount = Retrycount + 1;
//Retrycount = Retrycount + 1;
//console.log("Retry Count:", Retrycount); // Output: Retry Count: 1

//let Retrycount = 10; // This will throw an error due to redeclaration of 'Retrycount' with 'let'

let a = 10;
console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    let a = 20; // This 'a' is different from the global 'a'
    console.log(a); // Output: 20
    if (true) {
        let a = 30; // This 'a' is also different from the global 'a' and the 'a' inside the function
        console.log(a); // Output: 30
    }
    console.log("F ->", a)//  Output: 20 (because 'let' is  block-scoped)
}
console.log("G ->", a);

printHello();