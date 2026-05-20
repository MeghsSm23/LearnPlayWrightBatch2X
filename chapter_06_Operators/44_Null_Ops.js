//??    
//??    Nullish Coalescing Operator (??)
//??    The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. This operator is particularly useful for handling cases where you want to assign a default value to a variable if it is null or undefined, without treating other falsy values (like 0, "", or false) as nullish.

let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"


let amul = null;
let milk_required = amul ?? "warna is available";
console.log(milk_required);
