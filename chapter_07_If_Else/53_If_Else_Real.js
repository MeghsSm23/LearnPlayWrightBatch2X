let username = "Dev";
let password = "1234";
let isAccountLocked = true;



// logical operartors: && (AND), || (OR), ! (NOT) + if else statement

if ((username === "Dev" && password === "1234") && !isAccountLocked) {
    console.log("You are Allowed to Enter.");
} else {
    console.log("You are not Allowed to Enter.  Please check your credentials.  Try again.");
}
