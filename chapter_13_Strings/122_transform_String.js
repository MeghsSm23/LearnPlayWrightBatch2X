let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

let str2 = "   Hello, World!   ";
console.log(str2.trim()); // "Hello, World!"    

let str3 = "Hello, World!";
console.log(str3.replace("World", "JavaScript"));

let str4 = "Hello, World!";
console.log(str4.trimStart()); // "Hello, World!   "
console.log(str4.trimEnd()); // "   Hello, World!"  

let msg = "Test:Fail. Retry:Fail.";
console.log(msg.replace("Passed", "Fail")); // "Test:Fail. Retry:Fail."
console.log(msg.replaceAll("Passed", "Fail"));


let r = "Pass, Pass, Fail, Pass".split(",");
console.log(r); // ["Pass", " Pass", " Fail", " Pass"]

let rr = "test_login_pass";
console.log(rr.split("_").join(" ")); // "test login pass"\
