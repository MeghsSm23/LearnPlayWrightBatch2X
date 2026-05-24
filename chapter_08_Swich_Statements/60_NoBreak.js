//without break statement, all the cases after the matched case will 
// be executed until a break is encountered or the switch statement ends. 
// This is known as "fall-through" behavior.

let dayOfWeek = 3;
switch (dayOfWeek) {
    case 1: console.log("Monday");

    case 2: console.log("Tuesday");

    case 3: console.log("Wednesday");

    case 4: console.log("Thursday");

    case 5: console.log("Friday");

    case 6: console.log("Saturday");

    case 7: console.log("Sunday");

    default: console.log("Invalid day of the week");

}





