// let value = "5";
// console.log(typeof value); // Output: string    

// switch (value) {
//     case 5: console.log("Number 5 matched");
//         break;
//     case "5":
//         console.log("String 5 matched");
//         break;
//     default: console.log("No match found");
// }


let status = 0;
switch (status) {
    case false:
        console.log("False matched");
        break;
    case 0:
        console.log("Zero matched");
        break;
    case null:
        console.log("Null matched");
        break;
    case undefined:
        console.log("Undefined matched");
        break;
    default:
        console.log("No match found");
}   
