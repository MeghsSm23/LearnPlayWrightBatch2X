//1. HTTP status code Categorizer

let status_code = 404;

if (status_code >= 200 && status_code < 299) {
    console.log("Success");
} else if (status_code >= 300 && status_code < 399) {
    console.log("Redirection");
} else if (status_code >= 400 && status_code < 499) {
    console.log("Client Error");
} else if (status_code >= 500 && status_code < 599) {
    console.log("Server Error");
} else {
    console.log("Invalid Status Code");
}

// 2. Test Case Pass / Fail Checker

let actual_result = "Login Successful";
let expected_result = "Login Successful";
if (actual_result === expected_result) {
    console.log("Test Case Passed");
} else {
    console.log("Test Case Failed");
}

//"Invalid Credentials" --> "Invalid Credentials"
let actual_result2 = "Invalid Credentials";
let expected_result2 = "Invalid Credentials";
if (actual_result2 === expected_result2) {
    console.log("Test Case Passed");
} else {
    console.log("Test Case Failed");
}

//3. Bug Severity Classifier
//Given a bugs impactscore(1-10) Classify the severity of the bug as follows:
//9-10: Critical
//7-8: High
//4-6: Medium
//1-3: Low              
let bug_severity = "High";
if (bug_severity === "Critical") {
    console.log("This bug is Critical. Immediate attention required!");
} else if (bug_severity === "High") {
    console.log("This bug is High. Please prioritize fixing it soon.");
} else if (bug_severity === "Medium") {
    console.log("This bug is Medium. It should be addressed in the normal course of development.");
} else if (bug_severity === "Low") {
    console.log("This bug is Low. It can be fixed at a later time.");
} else {
    console.log("Invalid bug severity level.");
}

//4. Build Health Reporter
// given the percentage of testcases passed ina CI build,report build health as follows:
//90-100%: Stable
//75-89%: Unstable
//50-74%: broken 
//Below 50%: Poor
let test_case_pass_percentage = 95;
if (test_case_pass_percentage >= 90 && test_case_pass_percentage <= 100) {
    console.log("Build Health: Excellent");
} else if (test_case_pass_percentage >= 75 && test_case_pass_percentage < 90) {
    console.log("Build Health: Unstable");
} else if (test_case_pass_percentage >= 50 && test_case_pass_percentage < 75) {
    console.log("Build Health: Broken");
} else {
    console.log("Build Health: Poor");
}


//5. Login Lockout after 3 failed Attempts
let failed_login_attempts = 4;
if (failed_login_attempts >= 3) {
    console.log("Account Locked. Please try again later.");
} else {
    console.log("Login attempt failed. Please try again.");
}   