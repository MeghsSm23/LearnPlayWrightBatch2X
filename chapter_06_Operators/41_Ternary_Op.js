let rajkumar_age = 18;
let rajkumar_will_goto_goa = rajkumar_age >= 18 ? "Yes, he will go to Goa" : "No, he will not go to Goa"
console.log(rajkumar_will_goto_goa);




let actualStatusCODE = "200";
let expectedStatusCODE = "200";
let status = actualStatusCODE === expectedStatusCODE ? "Test case passed" : "Test case failed";
console.log(status)


let environment = "staging";
let url = environment === "production"
    ? "https://www.production.com" : "https://www.staging.com";
console.log(url)






let responseTime = 2200;
let sla = 1500
let slastatus = responseTime <= sla ? "Within SLA" : "Outside SLA";
console.log(slastatus)

let age = 26;
let megha_will_goto_party = age < 18 ? "No, he will not go to the party" : age >= 18 && age <= 30 ? "Yes, he will go to the party" : "No, he will not go to the party";
console.log(megha_will_goto_party);


//nested ternary operator
//Multiple Conditions

let age_megha = 44;
let megha_will_go_GOA = age_megha > 18 ? (age_megha > 26 ? "Drinks allowed" : "Drinks not allowed") : "Not allowed to go to Goa";
console.log(megha_will_go_GOA);



let status_code = 404;
let status_message = status_code === 200 ? "OK" : status_code === 404 ? "Not Found" : status_code === 500 ? "Internal Server Error" : "Unknown Status Code";
console.log(`Status ${status_code}: ${status_message}`);
//Ternary operator can be used to assign values based on conditions, making code more concise and readable. It is a powerful tool for handling simple conditional logic in a single line of code.

let num1 = 12;
let num2 = 25;
let maximum = num1 > num2 ? num1 : num2;
console.log(`Maximum between ${num1} and ${num2} is ${maximum}`);

let a = 12;
let b = 25;
let c = 18;
let maxOfThree = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(`Maximum among ${a}, ${b}, and ${c} is ${maxOfThree}`);



let temperature = 30;
let feel = (temperature >= 30) ? "Hot" : (temperature >= 20 && temperature <= 30) ? "Warm" : "Cold";
console.log(`The weather is ${feel}`);