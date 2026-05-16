function getUserStatus() {
    console.log(status_code); // Output: undefined (due to hoisting, 'status' is declared but not initialized)
    var status_code = "Active";
    console.log(status_code); // Output: "Active"
}

getUserStatus();

//*In this code, the variable 'status_code' is declared using 'var' inside the function
// 'getUserStatus'.