// if ("Hello") console.log("This will be printed because non-empty strings are truthy");
// if (42) console.log("This will be printed because non-zero numbers are truthy");
// if (0) console.log("This will NOT be printed because 0 is falsy");
// if ("") console.log("This will NOT be printed because empty strings are falsy");


// if ("") console.log("This will NOT be printed because the condition is falsy");
// if (null) console.log("This will NOT be printed because the condition is falsy");
// if (undefined) console.log("This will NOT be printed because the condition is falsy");
// if (NaN) console.log("This will NOT be printed because the condition is falsy");

let name = undefined;
if (name) {
    console.log("Hi " + name);
} else {
    console.log("bye ");
}   