//------------------------------------------------------------------------------
// SCOPE
//------------------------------------------------------------------------------


function example() {
    var y; // hoisting
    var x = 10; // Variable x is declared with var within the function scope

    if (true) {
        y = 20; // Variable y is declared with var within the block scope (but still accessible outside the block)
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }

    console.log(x); // Output: 10
    console.log(y); // Output: 20 (y is accessible here due to the function scope)
}

example();
console.log(x);
console.log(y);

function example() {
    let x = 10; 

    if (true) {
        let y = 20; 
        console.log(x);
        console.log(y);
    }

    console.log(x);
    console.log(y);
}

example();
console.log(x);
console.log(y);

var a = "Francisco";
// 1000 lineas de codigo después....
var a = "Pancho";
console.log(a);