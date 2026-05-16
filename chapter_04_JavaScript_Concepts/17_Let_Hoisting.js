//console.log(score);
//let score = 100; //let will never allow this to happen, it will throw a ReferenceError


{

    //TDZ (Temporal Dead Zone) is the time between the start of the block and 
    // the point where the variable is declared. During this time, the 
    // variable cannot be accessed, and any attempt to do so will result in a
    //  ReferenceError.
    let score = 100; // declaration reached TDZ ends here
    console.log(score); // Output: 100 (score is now accessible after declaration)  
}