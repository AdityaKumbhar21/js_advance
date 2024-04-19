
printM();
console.log(n)

var n = 2;

function printM() {
    console.log("Hello World")
}


// Hoisting for let and const is different

console.log(a)  // Here it will give an error which says that cannot access a before initialization
// That is because a is in the temporal dead zone, and a is not attached to the global window object.
let a = 10


// Same goes to const
// Both let and const are hoisted



