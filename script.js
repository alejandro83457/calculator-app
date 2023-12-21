const altButtons = ["clear", "delete", "="];
const actionButtons = ["/", "x", "-", "+"];
let total = 0,
    current = 0,
    decimalSet = false;

const numericButtons = document.querySelectorAll(".numeric-button");
const screen = document.querySelector("#screen");
const deleteButton = document.querySelector("#delete");

numericButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        current = current * 10 + Number(e.target.value);
        screen.textContent = current;
    });
});

deleteButton.addEventListener("click", () => {
    current = Math.floor(current / 10);
    screen.textContent = current;
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
