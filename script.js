const altButtons = ["clear", "delete", "="];
const actionButtons = ["/", "x", "-", "+"];
let total = 0,
    current = 0,
    operation = "";

const numericButtons = document.querySelectorAll(".numeric-button");
const screen = document.querySelector("#screen");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const executeButton = document.querySelector("#execute");

numericButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (operation.length == 0) {
            current = current * 10 + Number(e.target.value);
            screen.textContent = current;
        } else {
            total = current;
            current = 0;
            current = current * 10 + Number(e.target.value);
            screen.textContent = current;
        }
    });
});

clearButton.addEventListener("click", () => {
    total = 0;
    current = 0;
    operation = "";
    screen.textContent = 0;
});

deleteButton.addEventListener("click", () => {
    current = Math.floor(current / 10);
    screen.textContent = current;
});

addButton.addEventListener("click", () => {
    operation = "+";
    total = current;
    console.log("Operation + set.");
});

subtractButton.addEventListener("click", () => {
    operation = "-";
    total = current;
    console.log("Operation - set");
});

divideButton.addEventListener("click", () => {
    operation = "/";
    total = current;
    console.log("Operation / set");
});

multiplyButton.addEventListener("click", () => {
    operation = "x";
    total = current;
    console.log("Operation x set");
});

executeButton.addEventListener("click", () => {
    if (operation == "+") total = current = add(total, current);
    else if (operation == "-") total = current = subtract(total, current);
    else if (operation == "/") total = current = divide(total, current);
    else if (operation == "x") total = current = multiply(total, current);
    else console.log("Operation is not set.");
    screen.textContent = total;
    operation = "";
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
