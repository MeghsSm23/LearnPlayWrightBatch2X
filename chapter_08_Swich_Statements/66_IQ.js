//duplicate case labels are not allowed in switch statements. 
// In the above code, there are two case labels with the value 10, 
// which will cause a syntax error. Each case label must be unique within a
//  switch statement. To fix this issue, you can change one of the case labels
//  to a different value or remove one of the duplicate cases.
let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("Default case");
}
