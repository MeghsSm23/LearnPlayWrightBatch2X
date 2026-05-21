//Q3- Leap Year Checker

//Rules for Leap Year:
//1. A year is a leap year if it is divisible by 4 but not divisible by 100.
//2. However, if a year is divisible by 400, then it is a leap year regardless of the above rule.   



let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}