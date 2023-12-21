const someButtons = ["clear", "delete", "="];

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let val = e.target.value;
        if (someButtons.includes(val) == 0) screen.textContent = val;
    });
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
