var v = 10;
let l = 13;

const c = 3.14;


var browser = "chrome";
var browser = "firefox";    //redeclaration of 'browser' is allowed with 'var'
console.log(browser); // Output: firefox
browser = "edge";      //reassignment of 'browser' is allowed
console.log(browser); // Output: edge


var testcases = ["login", "signup", "checkout"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test case:", testcases[i]);
}

console.log("Loop Counter Leaked Ouside Loop:", i); // Output: 3 (i is accessible outside the loop due to 'var' scoping)