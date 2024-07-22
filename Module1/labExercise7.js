// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// FAILED TEST FUCTIONS //

// Tests for add function
if (add(10, 5) != 15) { Error}
("Test failed: add(10, 5) should be 15");


// Tests for subtract function
if (subtract(5, 3) != 2) {Error}
("Test failed: subtract(5, 3) should be 2");


// Tests for multiply function
if (multiply(-6, 4) != 24) {Error}
("Test failed: multiply(6, 4) should be 24");


// Tests for divide function
if (divide(18, 0) != 9) {Error}
("Test failed: divide(18, 2) should be 9");

if (divide(14, 7) != 2) {Error}
("Test failed: divide(14, 7) should be 2");


console.log("All tests passed!");

// PASSING TEST BELOW //

// Tests for add function
if (add(10, 5) != 15) { Error}
("Test failed: add(10, 5) should be 15");


// Tests for subtract function
if (subtract(5, 3) != 2) {Error}
("Test failed: subtract(5, 3) should be 2");


// Tests for multiply function
if (multiply(6, 4) != 24) {Error}
("Test failed: multiply(6, 4) should be 24");


// Tests for divide function
if (divide(18, 2) != 9) {Error}
("Test failed: divide(18, 2) should be 9");

if (divide(14, 7) != 2) {Error}
("Test failed: divide(14, 7) should be 2");


console.log("All tests passed!");