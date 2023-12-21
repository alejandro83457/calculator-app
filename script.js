const altButtons = ["clear", "delete", "="];
const actionButtons = ["/", "x", "-", "+"];
let total = 0,
    current = 0,
    operation = "",
    decimalFlag = false;

// Objects
const numericButtons = document.querySelectorAll(".numeric-button");
const screen = document.querySelector("#screen");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const operationButtons = document.querySelectorAll(".operation");
const executeButton = document.querySelector("#execute");
const decimalButton = document.querySelector("#decimal");

// Numeric event handler
numericButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!decimalFlag) {
            if (operation.length == 0) {
                current = current * 10 + Number(e.target.value);
                screen.textContent = current;
            } else {
                current = current * 10 + Number(e.target.value);
                screen.textContent = current;
            }
        } else {
            if (operation.length == 0) {
                current += e.target.value;
                screen.textContent = current;
            } else {
                current += e.target.value;
                screen.textContent = current;
            }
        }
    });
});

// Clear event handler
clearButton.addEventListener("click", () => {
    total = 0;
    current = 0;
    operation = "";
    decimalFlag = false;
    screen.textContent = 0;
});

// Delete event handler
deleteButton.addEventListener("click", () => {
    if (!decimalFlag) {
        current = Math.floor(current / 10);
        screen.textContent = current;
    } else {
        current = current.split("");
        if (current.pop() == ".") decimalFlag = false;
        current = current.join("");
        screen.textContent = current;
    }
});

// Operations event handler
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        decimalFlag = false;
        operation = e.target.value;
        total = current;
        current = 0;
        console.log(`Operation: ${e.target.value} Total ${total}`);
    });
});

// Decimal event handler
decimalButton.addEventListener("click", () => {
    if (!decimalFlag) {
        decimalFlag = true;
        current = current + ".";
        screen.textContent = current;
    }
});

// Execute event handler
executeButton.addEventListener("click", () => {
    console.log(total, operation, current);
    decimalFlag = false;
    if (operation == "+") total = current = add(total, current);
    else if (operation == "-") total = current = subtract(total, current);
    else if (operation == "/") total = current = divide(total, current);
    else if (operation == "x") total = current = multiply(total, current);
    else console.log("Operation is not set.");
    screen.textContent = total;
    operation = "";
});

// Operations
const add = (a, b) => (Number(a) * 100 + Number(b) * 100) / 100;
const subtract = (a, b) => (Number(a) * 100 - Number(b) * 100) / 100;
const divide = (a, b) => (Number(a) / Number(b)).toFixed(3);
const multiply = (a, b) => Number(a) * Number(b);

/*
3.7 - 2 FIXED
2.1 + 2.2 
*/
