// MATTHEMATICAL OPERATIONS

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// 2. GREET FUNCTION
function greet(name) {
    console.log(`Hello ${name}`);
}

// Testing the functions
console.log("10+5:", add(10, 5));
console.log("5-3:", subtract(5, 3));
console.log("6x4:", multiply(6, 4));
console.log("18/2:", divide(18, 2));
console.log("14*7:", divide(14, 7));

greet("Gai");
